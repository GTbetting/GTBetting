export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">
        GTBetting
      </h1>

      <p className="text-lg md:text-2xl text-center mb-6 max-w-xl">
        Bilhetes prontos, com alta assertividade e estratégia validada no mercado.
      </p>

      <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl text-lg transition">
        Entrar com Google
      </button>

      <p className="mt-8 text-sm text-zinc-400">
        Teste o plano degustação ou venha direto pro nosso Premium exclusivo.
      </p>
    </main>
  );
}
