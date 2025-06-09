// src/app/planos/page.tsx

export default function PlanosPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-10">Nossos Planos</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        {/* Plano Degustação */}
        <div className="bg-zinc-900 rounded-2xl p-6 w-full max-w-md shadow-md border border-zinc-700">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">Plano Degustação</h2>
          <p className="text-gray-300 mb-4">Grátis por 3 dias</p>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>✅ 1 bilhete por dia</li>
            <li>✅ Odds até 1.8</li>
            <li>✅ Validação automática no login</li>
          </ul>
        </div>

        {/* Plano Premium */}
        <div className="bg-green-500 text-black rounded-2xl p-6 w-full max-w-md shadow-md border border-green-600">
          <h2 className="text-2xl font-bold mb-2">Plano Premium</h2>
          <p className="text-black mb-4">R$99/mês</p>
          <ul className="text-sm space-y-2">
            <li>🔥 1 a 5 bilhetes por dia</li>
            <li>🔥 Odds acima de 1.8</li>
            <li>🔥 Bilhetes em imagem</li>
            <li>🔥 Acesso ao grupo fechado</li>
            <li>🔥 Histórico e suporte</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_STRIPE_LINK}
            target="_blank"
            className="block mt-6 bg-black text-white text-center py-2 rounded-lg font-semibold hover:bg-zinc-900 transition-all"
          >
            Assinar Premium
          </a>
        </div>
      </div>
    </main>
  );
}
