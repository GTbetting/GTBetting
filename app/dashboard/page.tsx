// src/app/dashboard/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState(null);
  const [ticketUrl, setTicketUrl] = useState<string | null>(null);
  const router = useRouter();

  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return router.push('/login');
      setUser(user);

      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_plan, plan_start_date')
        .eq('id', user.id)
        .single();

      setPlan(profile?.subscription_plan || 'degustacao');
    };

    const fetchTicket = async () => {
      const { data } = await supabase
        .from('bilhetes')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      setTicketUrl(data?.image_url || null);
    };

    fetchUser();
    fetchTicket();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Seu Bilhete do Dia</h1>

      {plan ? (
        <div>
          <p className="mb-4 text-gray-300">Plano: {plan === 'premium' ? 'Premium' : 'Degustação'}</p>

          {ticketUrl ? (
            <div className="border border-zinc-700 rounded-lg overflow-hidden max-w-md">
              <Image src={ticketUrl} alt="Bilhete do dia" width={500} height={500} className="w-full" />
            </div>
          ) : (
            <p className="text-gray-500">Nenhum bilhete disponível ainda.</p>
          )}
        </div>
      ) : (
        <p className="text-sm text-gray-500">Carregando informações do usuário...</p>
      )}
    </main>
  );
}
