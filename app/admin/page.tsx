"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setMessage("");

    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("bilhetes")
      .upload(fileName, file);

    if (error) {
      setMessage("❌ Erro ao enviar bilhete");
      setUploading(false);
      return;
    }

    setMessage("✅ Bilhete enviado com sucesso!");
    setFile(null);
    setUploading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Painel Admin - Upload de Bilhetes</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-black font-semibold"
      >
        {uploading ? "Enviando..." : "Enviar Bilhete"}
      </button>

      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </main>
  );
}
