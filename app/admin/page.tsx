"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

interface Ticket {
  name: string;
  url: string;
}

export default function DashboardPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      const { data, error } = await supabase.storage
        .from("bilhetes")
        .list("", { limit: 100, sortBy: { column: "created_at", order: "desc" } });

      if (data) {
        const urls = await Promise.all(
          data.map(async (item) => {
            const { data: file } = supabase.storage.from("bilhetes").getPublicUrl(item.name);
            return { name: item.name, url: file.publicUrl };
          })
        );
        setTickets(urls);
      }

      setLoading(false);
    };

    fetchTickets();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Bilhetes do Dia</h1>

      {loading ? (
        <p>Carregando bilhetes...</p>
      ) : tickets.length === 0 ? (
        <p>Nenhum bilhete encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <div key={ticket.name} className="bg-white rounded-lg overflow-hidden shadow">
              <img src={ticket.url} alt={ticket.name} className="w-full h-auto" />
              <div className="p-2 text-black text-sm text-center">{ticket.name}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
