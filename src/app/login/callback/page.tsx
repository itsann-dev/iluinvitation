"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient"; // pastikan ini sudah diexport
import toast from "react-hot-toast";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        toast.error("Terjadi kesalahan saat mengambil sesi login.");
        console.error("Session error:", error.message);
        return;
      }
      if (data?.session) {
        toast.success("Berhasil login!");
        router.push("/dashboard");
      } else {
        toast.error("Gagal login. Coba lagi.");
        router.push("/login");
      }
    };

    handleAuth();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Memverifikasi login kamu...</p>
    </div>
  );
}
