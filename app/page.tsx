// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-4 text-center">GTBetting</h1>
      <p className="text-lg md:text-xl text-center mb-8 max-w-xl">
        Bilhetes prontos, com alta assertividade e estratégia validada no mercado.
      </p>

      <Link
        href="/login"
        className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition-all"
      >
        Entrar com Google
      </Link>

      <p className="text-sm text-center mt-6 max-w-xs text-gray-400">
        Teste o plano degustação ou venha direto pro nosso Premium exclusivo.
      </p>
    </main>
  );
}
