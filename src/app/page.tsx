"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Palette, Smartphone, Smile, BookOpenCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <main className="bg-white text-gray-800 relative overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">iluinvitation</h1>
          <nav className="space-x-4 text-sm">
            <a href="#template" className="hover:text-purple-500">
              Template
            </a>
            <a
              href="#buat"
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-full shadow hover:from-purple-600 hover:to-purple-800 transition"
            >
              Masuk
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-100 to-white py-20 text-center relative">
        <div className="max-w-2xl mx-auto z-10 relative" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
            Buat Undangan Pernikahan Online dengan Mudah
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Satu link untuk momen istimewa.
          </p>
          <a
            href="#template"
            className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-full shadow hover:from-purple-600 hover:to-purple-800 transition"
          >
            Coba Sekarang
          </a>
        </div>
      </section>

      {/* Template Preview */}
      <section id="template" className="py-16 bg-[#ede9fe] text-center">
        <h3
          className="text-2xl font-semibold mb-6 text-purple-700"
          data-aos="fade-down"
        >
          Pilih Template
        </h3>
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <Image
            src="/assets/images/cover.png"
            alt="Template classic"
            width={288} // Sesuaikan dengan ukuran gambar
            height={180} // Sesuaikan dengan ukuran gambar
            className="w-72 mb-3 rounded-xl shadow-lg"
          />
          <div className="flex space-x-4" data-aos="fade-up">
            <a
              href="/templates/wedding-uus/index.html?kpd=Preview"
              target="_blank"
              className="px-5 py-2 rounded-full bg-white border border-purple-500 text-purple-600 hover:bg-purple-100 transition shadow"
            >
              Preview
            </a>
            <a
              href="#buat"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 transition shadow"
            >
              Gunakan
            </a>
          </div>
        </div>
      </section>

      {/* Fitur */}
      <section id="fitur" className="py-16 text-center bg-white relative">
        <h3
          className="text-2xl font-semibold mb-6 text-purple-700"
          data-aos="fade-down"
        >
          Kenapa iluinvitation?
        </h3>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto px-4">
          {[
            {
              icon: <Palette className="w-6 h-6 text-purple-500" />,
              text: "Desain elegan dan personal",
            },
            {
              icon: <Smartphone className="w-6 h-6 text-purple-500" />,
              text: "Tampil cantik di semua perangkat",
            },
            {
              icon: <Smile className="w-6 h-6 text-purple-500" />,
              text: "Menyebut nama tamu secara personal",
            },
            {
              icon: <BookOpenCheck className="w-6 h-6 text-purple-500" />,
              text: "RSVP & buku tamu interaktif",
            },
          ].map(({ icon, text }, i) => (
            <div
              key={i}
              className="bg-purple-50 p-6 rounded-lg shadow-md flex items-center space-x-3 justify-center hover:shadow-lg transition"
              data-aos="fade-up"
            >
              {icon}
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="buat" className="py-16 bg-purple-50 text-center">
        <h3
          className="text-2xl font-semibold mb-4 text-purple-700"
          data-aos="fade-up"
        >
          Mulai Buat Undanganmu Sekarang
        </h3>
        <a
          href="#template"
          className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-full shadow hover:from-purple-600 hover:to-purple-800 transition"
          data-aos="zoom-in"
        >
          Pilih Template
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-sm text-gray-500">
        &copy; 2025 iluinvitation. Dibuat dengan ❤️ oleh ilumedia.
      </footer>
    </main>
  );
}
