'use client'

import { createClient } from '@/lib/supabase'
import { useEffect } from 'react'

export default function LoginPage() {
  const supabase = createClient()

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <button
        onClick={handleLogin}
        className="bg-white text-black font-bold px-6 py-3 rounded"
      >
        Entrar com Google
      </button>
    </div>
  )
}
