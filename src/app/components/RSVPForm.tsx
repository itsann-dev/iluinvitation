"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";

export default function RSVPSection() {
  const [nama, setNama] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [kehadiran, setKehadiran] = useState("Hadir");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rsvpList, setRsvpList] = useState<any[]>([]);

  // Ambil data awal
  const fetchRSVP = async () => {
    const { data, error } = await supabase
      .from("rsvp")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Gagal mengambil data RSVP!");
    } else {
      setRsvpList(data);
    }
  };

  useEffect(() => {
    fetchRSVP();

    const subscription = supabase
      .channel("rsvp-updates")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "rsvp" },
        (payload) => {
          // Tambahkan data baru dari realtime ke list
          setRsvpList((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !ucapan.trim()) {
      toast.error("Nama dan ucapan harus diisi.");
      return;
    }

    const { data, error } = await supabase
      .from("rsvp")
      .insert([{ nama, ucapan, kehadiran }])
      .select()
      .single();

    if (error) {
      toast.error("Gagal mengirim ucapan.");
    } else {
      toast.success("Ucapan berhasil dikirim!");
      setNama("");
      setUcapan("");
      setKehadiran("Hadir");
      // Tambahkan langsung ke list jika belum tertangkap realtime
      if (data) {
        setRsvpList((prev) => [data, ...prev]);
      }
    }
  };

  return (
    <div className="max-w-80 mx-auto py-8 text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full px-4 py-2 rounded text-gray-500 bg-white/90"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <textarea
          placeholder="Ucapan"
          className="w-full px-4 py-2 rounded text-gray-500 bg-white/90"
          rows={3}
          value={ucapan}
          onChange={(e) => setUcapan(e.target.value)}
          required
        ></textarea>
        <select
          className="w-full px-4 py-2 rounded text-gray-500 bg-white/90"
          value={kehadiran}
          onChange={(e) => setKehadiran(e.target.value)}
        >
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <button
          type="submit"
          className="bg-brown hover:bg-brown-hover text-white px-4 py-2 rounded"
        >
          Kirim
        </button>
      </form>

      <div className="mt-10 bg-white bg-opacity-70 text-black rounded-lg p-4 max-h-60 overflow-y-auto">
        <h4 className="mb-3 font-great-vibes text-2xl text-brown">
          Ucapan & Kehadiran
        </h4>

        {rsvpList.length === 0 && (
          <p className="text-sm italic">Belum ada ucapan</p>
        )}
        {rsvpList.map((rsvp) => (
          <div key={rsvp.id} className="mb-3 border-b border-gray-300 pb-2">
            <p className="text-sm text-left font-bold">
              {rsvp.nama} - {rsvp.kehadiran}
            </p>
            <p className="text-sm text-left text-gray-800">{rsvp.ucapan}</p>
            <p className="text-xs text-left text-gray-500 ">
              {new Date(rsvp.created_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
