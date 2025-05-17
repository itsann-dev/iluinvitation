"use client";

import Image from "next/image";

type InvitationCoverProps = {
  // guestName: string;
  onOpen: () => void;
};

export default function InvitationCover({ onOpen }: InvitationCoverProps) {
  return (
    <div
      onClick={onOpen}
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative cursor-pointer"
      style={{
        backgroundImage: "url(/assets/images/bg.jpg)",
      }}
    >
      {/* Daun-daun dekorasi */}

      <Image
        src="/assets/images/dp.png"
        alt="daun kiri atas"
        width={100}
        height={100}
        className="absolute top-0 left-0 w-40 scale-x-[-1] animate-float"
        data-aos="fade-down-right"
      />
      <Image
        src="/assets/images/dp.png"
        alt="daun kanan atas"
        width={100}
        height={100}
        className="absolute top-0 right-0 w-40 animate-float"
        data-aos="fade-down-left"
      />
      <Image
        src="/assets/images/dp.png"
        alt="daun kiri bawah"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 w-40 rotate-180 animate-float"
        data-aos="fade-up-right"
      />
      <Image
        src="/assets/images/dp.png"
        alt="daun kanan bawah"
        width={100}
        height={100}
        className="absolute bottom-0 right-0 w-40 scale-y-[-1] animate-float"
        data-aos="fade-up-left"
      />

      {/* Konten undangan */}
      <div className="relative z-10 text-white place-items-center text-center px-6">
        <h2 className="text-gray-900 font-quicksand" data-aos="fade-up">
          WE INVITE YOU
        </h2>
        <Image
          className="my-3 w-1/2 mx-auto"
          src="/assets/images/fd.png"
          width={300}
          height={300}
          alt="Foto uus dan calon"
          data-aos="zoom-in"
        />
        <p
          className="my-1 text-brown text-4xl font-great-vibes"
          data-aos="fade-up"
        >
          Firdaus & Ani
        </p>
        <p
          className="mb-5 text-xs text-black font-quicksand"
          data-aos="fade-up"
        >
          Tanpa mengurangi rasa hormat, Kami mengundang Bapak/Ibu/Saudara/i
          untuk hadir di acara kami.
        </p>
        <p className="text-sm mb-2 text-gray-900 font-quicksand font-semibold">
          Kepada Yth.
        </p>
        <h1 className="text-2xl font-bold mb-4">Annas</h1>

        {/* Tombol tidak perlu onClick lagi, tapi tetap bisa ada */}
        <button className="bg-brown text-xs px-2 py-2 rounded shadow-lg hover:bg-brown-hover transition">
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
