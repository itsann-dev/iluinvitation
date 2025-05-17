"use client";

type InvitationCoverProps = {
  guestName: string;
  onOpen: () => void;
};

export default function InvitationCover({
  guestName,
  onOpen,
}: InvitationCoverProps) {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url(/assets/images/bg.jpg)",
      }}
    >
      {/* Daun pojok (hanya daun yang bergerak) */}
      <img
        src="/assets/images/dp.png"
        alt="daun kiri atas"
        className="absolute top-0 left-0 w-40 scale-x-[-1] animate-float"
        data-aos="fade-down-right"
      />
      <img
        src="/assets/images/dp.png"
        alt="daun kanan atas"
        className="absolute top-0 right-0 w-40 animate-float"
        data-aos="fade-down-left"
      />
      <img
        src="/assets/images/dp.png"
        alt="daun kiri bawah"
        className="absolute bottom-0 left-0 w-40 rotate-180 animate-float"
        data-aos="fade-up-right"
      />
      <img
        src="/assets/images/dp.png"
        alt="daun kanan bawah"
        className="absolute bottom-0 right-0 w-40 scale-y-[-1] animate-float"
        data-aos="fade-up-left"
      />

      {/* Konten utama (tidak bergerak) */}
      <div className="relative z-10 text-white place-items-center text-center px-6">
        <h2 className="text-gray-900 font-quicksand" data-aos="fade-down">
          WE INVITE YOU
        </h2>
        <img
          className="my-3 w-1/2 mx-auto"
          src="/assets/images/fd.png"
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
        <p
          className="text-sm mb-2 text-gray-900 font-quicksand font-semibold"
          data-aos="fade-up"
        >
          Kepada Yth.
        </p>
        <h1 className="text-2xl font-bold mb-4">{guestName}</h1>
        <button
          onClick={onOpen}
          className="bg-brown text-xs px-2 py-2 rounded shadow-lg hover:bg-brown-hover transition"
          data-aos="fade-up"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
