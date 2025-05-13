"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/login/callback`,
      },
    });

    setLoading(false);

    if (error) {
      toast.error("Gagal mengirim link. Periksa email dan coba lagi.");
    } else {
      toast.success(
        "Link login dikirim! Cek email kamu (termasuk folder spam) dan klik link untuk masuk."
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">
          Masuk ke iluinvitation
        </h1>
        <p className="text-gray-600 mb-6">
          Masukkan email kamu untuk menerima link login. Kamu akan diarahkan
          setelah klik link di email.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full px-4 py-3 rounded-lg border text-gray-800 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition"
          >
            {loading ? "Mengirim..." : "Kirim Link Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
