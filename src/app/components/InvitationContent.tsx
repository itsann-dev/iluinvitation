"use client";

import CountdownTimer from "../components/CountdownTimer";
import WaveDivider from "../components/WaveDivider";
import WaveDivider2 from "../components/WaveDivider2";
import RSVPForm from "../components/RSVPForm";
import toast from "react-hot-toast";

import Image from "next/image";

// type InvitationContentProps = {
//   guestName: string;
// };

export default function InvitationContent() {
  return (
    <div className="w-full">
      {/* Section 1 */}
      <section
        id="home"
        className="min-h-screen pt-15 relative w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
      >
        <LeafDecoration />
        <div className="max-w-80 mx-auto py-16 text-center items-center text-white">
          <Image
            className="my-3 w-50 mx-auto"
            src="/assets/images/fd.png"
            width={300}
            height={300}
            alt="Foto uus dan calon"
            data-aos="fade-down"
          />
          <h2
            className="text-3xl m-3 font-great-vibes text-brown"
            data-aos="fade-up"
          >
            The Wedding of Firdaus & Ani
          </h2>
          <p
            className="mt-7 font-quicksand text-xs text-gray-700"
            data-aos="fade-up"
          >
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>

          <p
            className="my-3 font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>

          <p
            className="my-3 font-quicksand text-xs font-bold text-gray-800"
            data-aos="zoom-in"
          >
            - Ar-Rum · Ayat 21 -
          </p>
          <div
            className="max-w-md mx-auto text-center text-brown mt-7"
            data-aos="zoom-in"
          >
            <h2 className="text-sm font-bold font-quicksand">
              Menuju Hari Bahagia
            </h2>
            <CountdownTimer targetDate="2025-06-15T08:00:00" />
          </div>

          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <svg
              className="w-6 h-6 text-white animate-scroll-down"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="couple"
        className="relative w-full pt-10 bg-cover bg-center pb-5"
        style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
      >
        <div className="max-w-80 mx-auto py-16 text-center items-center text-white">
          <LeafDecorationUp />
          <p
            className="font-quicksand text-md text-gray-700"
            data-aos="fade-down"
          >
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </p>
          <p
            className="my-10 font-quicksand text-xs text-gray-500"
            data-aos="zoom-in"
          >
            Atas Berkah dan Rahmat Allah Subhanallahu Wa Ta&apos;ala. Tanpa
            mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta
            kerabat sekalian untuk menghadiri acara pernikahan kami :
          </p>
          {/* Calon Pria */}
          <Image
            className=" w-50 mx-auto"
            src="/assets/images/fd.png"
            width={300}
            height={300}
            alt="Foto uu"
            data-aos="zoom-in"
          />
          <p
            className="my-1 text-brown text-3xl font-great-vibes"
            data-aos="fade-up"
          >
            Muntaha Mahfud firdaus
          </p>
          <p
            className="font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Putra dari
          </p>
          <p
            className="font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Bapak Suparyadi &
          </p>
          <p
            className="font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Siti Wahyuni
          </p>

          <p
            className="font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Dusun Grewing RT001/RW006, Desa Kedungwinangin, Kec. Klirong
          </p>
          <p
            className="my-10 text-brown text-4xl font-great-vibes"
            data-aos="fade-up"
          >
            &
          </p>
          {/* Calon Wanita */}
          <Image
            className=" w-50 mx-auto"
            src="/assets/images/fd.png"
            width={300}
            height={300}
            alt="Foto uu"
            data-aos="zoom-in"
          />
          <p
            className="my-1 text-brown text-3xl font-great-vibes"
            data-aos="fade-up"
          >
            Ani Riskiana
          </p>
          <p
            className="font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Putri dari
          </p>
          <p
            className="font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Bapak Masirin &
          </p>
          <p
            className="font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Ibu Sukasih
          </p>

          <p
            className="font-quicksand text-xs text-gray-500"
            data-aos="fade-up"
          >
            Desa Wonokromo, Tinatah RT004/RW003, Kec. Alian
          </p>
        </div>
        <div className="absolute -bottom-5 left-0 w-full">
          <WaveDivider />
        </div>
        <div className="absolute bottom-1 left-0 w-full">
          <WaveDivider2 />
        </div>
      </section>

      <section
        id="event"
        className="relative w-full bg-cover bg-center pt-40 pb-30 place-items-center "
        style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
      >
        <LeafDecorationBottom />
        <div className="absolute top-0 left-0 w-full rotate-180">
          <WaveDivider />
        </div>
        <div className="absolute top-5 left-0 w-full rotate-180">
          <WaveDivider2 />
        </div>
        {/* Box resepsi: ditengah, naik ke atas */}
        <div
          className="mx-auto w-80 -mt-32 z-10 relative bg-white place-items-center text-center items-center  rounded-lg py-5 shadow-xl px-6"
          style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
          data-aos="fade-up"
        >
          <h3
            data-aos="zoom-in"
            className="text-center font-great-vibes text-brown text-2xl"
          >
            Akad
          </h3>
          <p
            data-aos="zoom-in"
            className="mt-3 text-center text-quicksand text-gray-700 text-sm font-bold"
          >
            Sabtu, 25 Mei 2025
          </p>
          <p
            data-aos="zoom-in"
            className="-mt-1 text-center text-quicksand text-gray-500 text-xs"
          >
            Pukul 10.00 WIB - Selesai
          </p>
          <p
            data-aos="zoom-in"
            className="my-3 text-center text-quicksand text-gray-500 text-xs"
          >
            Di Rumah Mempelai Wanita
          </p>
          <a
            href="#"
            className="bg-brown text-xs px-1 py-1 rounded shadow-lg hover:bg-brown-hover transition"
            data-aos="zoom-in"
          >
            Lihat Lokasi
          </a>
        </div>

        <div
          className="mx-auto w-80 my-5 relative bg-white place-items-center text-center rounded-lg py-3 shadow-xl px-6"
          style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
          data-aos="fade-up"
        >
          <h3
            data-aos="zoom-in"
            className="text-center font-great-vibes text-brown text-2xl"
          >
            Resepsi Pernikahan
          </h3>
          <p
            data-aos="zoom-in"
            className="mt-3 text-center text-quicksand text-gray-700 text-sm font-bold"
          >
            Sabtu, 25 Mei 2025
          </p>
          <p
            data-aos="zoom-in"
            className="-mt-1 text-center text-quicksand text-gray-500 text-xs"
          >
            Pukul 10.00 WIB - Selesai
          </p>
          <p
            data-aos="zoom-in"
            className="my-3 text-center text-quicksand text-gray-500 text-xs"
          >
            Di Rumah Mempelai Wanita
          </p>
          <a
            href="#"
            className="bg-brown text-xs px-1 py-1 rounded shadow-lg hover:bg-brown-hover transition"
            data-aos="zoom-in"
          >
            Lihat Lokasi
          </a>
        </div>

        <div className="text-center">
          {" "}
          <p
            data-aos="zoom-in"
            className="my-10 w-75 text-center font-quicksand text-gray-500 text-xs text-center"
          >
            Merupakan suat kehormatan dan kebahagiaan bagi kami sekeluarga,
            apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
          </p>
        </div>
      </section>

      <section
        id="rsvp"
        className="relative w-full bg-cover bg-center pt-20 pb-30"
        style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
      >
        <div className="max-w-80 mx-auto text-center items-center text-white">
          <LeafDecoration />
          <h3
            className="text-center text-brown text-3xl font-great-vibes mb-6"
            data-aos="fade-down"
          >
            Kehadiran
          </h3>
          <RSVPForm />
        </div>
      </section>
      <section
        id="gift"
        className="relative w-full bg-cover bg-center pt-20 pb-30 place-items-center"
        style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
      >
        <LeafDecoration />

        <div className="max-w-80 mx-auto py-10 text-center items-center text-white">
          <h2
            data-aos="fade-down"
            className="text-center text-2xl text-brown font-great-vibes mb-4"
          >
            Kado Digital
          </h2>
          <p
            data-aos="zoom-in"
            className="text-gray-600 font-quicksand text-center text-xs"
          >
            Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti
            bagi kami. Dan jika memberi merupakan ungkapan tanda kasih,
            Bapak/Ibu dapat memberi kado secara cashless. Terima kasih.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="mb-10 relative w-80 mx-auto rounded-2xl shadow p-7 border border-gray-200"
          style={{
            backgroundImage: "url(/assets/images/silv.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Logo bank di pojok kanan atas */}
          <div className="absolute top-4 right-4">
            <Image
              src="/assets/images/bri.png"
              width={40}
              height={40}
              alt="Logo BRI"
              className="w-10 h-10 object-contain"
              data-aos="fade-left"
            />
          </div>

          {/* Konten chip + nomor + nama di kiri-tengah */}
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/assets/images/chip.png"
              width={40}
              height={40}
              alt="Chip"
              className="w-10"
              data-aos="fade-right"
            />
            <p
              data-aos="fade-up"
              id="account-number"
              className="text-xl font-bold font-quicksand tracking-widest text-gray-900"
            >
              322101008316505
            </p>
            <p
              data-aos="fade-up"
              className="text-sm font-quicksand text-gray-600 -mt-1"
            >
              Muntaha Mahfud Firdaus
            </p>
          </div>

          {/* Tombol salin di pojok kanan bawah */}
          <button
            data-aos="fade-up"
            onClick={() => {
              const accountNumber = "33949848";
              navigator.clipboard.writeText(accountNumber);
              toast.success("Nomor rekening disalin!");
            }}
            className="absolute bottom-4 right-4 text-xs bg-black/20 text-black p-2 rounded"
          >
            Salin
          </button>
        </div>

        {/* Rekening Kedua */}
        <div
          data-aos="fade-up"
          className="relative w-80 mx-auto rounded-2xl shadow p-7 border border-gray-200"
          style={{
            backgroundImage: "url(/assets/images/silv.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Logo bank di pojok kanan atas */}
          <div className="absolute top-4 right-4">
            <Image
              src="/assets/images/bri.png"
              width={40}
              height={40}
              alt="Logo BRI"
              className="w-10 h-10 object-contain"
              data-aos="fade-left"
            />
          </div>

          {/* Konten chip + nomor + nama di kiri-tengah */}
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/assets/images/chip.png"
              width={40}
              height={40}
              alt="Chip"
              className="w-10"
              data-aos="fade-right"
            />
            <p
              data-aos="fade-up"
              id="account-number"
              className="text-xl font-bold font-quicksand tracking-widest text-gray-900"
            >
              079701034719539
            </p>
            <p
              data-aos="fade-up"
              className="text-sm font-quicksand text-gray-600 -mt-1"
            >
              Ani riskiana
            </p>
          </div>

          {/* Tombol salin di pojok kanan bawah */}
          <button
            data-aos="fade-up"
            onClick={() => {
              const accountNumber = "33949848";
              navigator.clipboard.writeText(accountNumber);
              toast.success("Nomor rekening disalin!");
            }}
            className="absolute bottom-4 right-4 text-xs bg-black/20 text-black p-2 rounded"
          >
            Salin
          </button>
        </div>
        <div className="text-center items-center">
          <p
            data-aos="fade-up"
            className="text-gray-500 w-80 text-center text-xs font-quicksand mt-10"
          >
            Suatu Kebahagiaan dan Kehormatan bagi Kami, Apabila
            Bapak/Ibu/Saudara/i, Berkenan Hadir di Acara kami
          </p>
          <p
            data-aos="fade-up"
            className="font-great-vibes text-brown text-2xl text-center mt-10"
          >
            Firdaus & Ani
          </p>
        </div>
      </section>
    </div>
  );
}

// Komponen daun hiasan
function LeafDecoration() {
  return (
    <>
      <Image
        src="/assets/images/dp.png"
        alt="daun kiri atas"
        width={100}
        height={100}
        className="absolute top-0 left-0 w-40 scale-x-[-1] animate-float"
      />
      <Image
        src="/assets/images/dp.png"
        alt="daun kanan atas"
        width={100}
        height={100}
        className="absolute top-0 right-0 w-40 animate-float"
      />
      <Image
        src="/assets/images/dp.png"
        alt="daun kiri bawah"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 w-40 rotate-180 animate-float"
      />
      <Image
        src="/assets/images/dp.png"
        alt="daun kanan bawah"
        width={100}
        height={100}
        className="absolute bottom-0 right-0 w-40 scale-y-[-1] animate-float"
      />
    </>
  );
}

function LeafDecorationUp() {
  return (
    <>
      <Image
        src="/assets/images/dp.png"
        alt="daun kiri atas"
        width={100}
        height={100}
        className="absolute top-0 left-0 w-40 scale-x-[-1] animate-float"
      />
      <Image
        src="/assets/images/dp.png"
        alt="daun kanan atas"
        width={100}
        height={100}
        className="absolute top-0 right-0 w-40 animate-float"
      />
    </>
  );
}

function LeafDecorationBottom() {
  return (
    <>
      <Image
        src="/assets/images/dp.png"
        alt="daun kiri bawah"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 w-40 rotate-180 animate-float"
      />
      <Image
        src="/assets/images/dp.png"
        alt="daun kanan bawah"
        width={100}
        height={100}
        className="absolute bottom-0 right-0 w-40 scale-y-[-1] animate-float"
      />
    </>
  );
}
