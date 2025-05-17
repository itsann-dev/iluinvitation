"use client";

import CountdownTimer from "../components/CountdownTimer";
import NavLinks from "../components/Navlinks";
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
        className="min-h-screen relative w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
      >
        <LeafDecoration />
        <div className="max-w-80 mx-auto py-16 text-center items-center text-white">
          <Image
            className="my-3 w-1/2 mx-auto"
            src="/assets/images/fd.png"
            width={300}
            height={300}
            alt="Foto uus dan calon"
            data-aos="zoom-in"
          />
          <h2 className="text-3xl mb-2 font-great-vibes text-brown">
            The Wedding of Firdaus & Ani
          </h2>
          <p className="my-3 font-quicksand text-xs text-gray-500">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>

          <p className="my-3 font-quicksand text-xs text-gray-500">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>

          <p className="my-3 font-quicksand text-xs font-bold text-gray-800">
            - Ar-Rum · Ayat 21 -
          </p>
          <div className="max-w-md mx-auto py-10 text-center text-brown">
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
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
      >
        <LeafDecoration />
        <div className="max-w-md mx-auto py-16 text-center text-white">
          <h2 className="text-2xl font-bold font-quicksand">Firdaus & Ani</h2>
          <p className="mt-2">Akan melangsungkan pernikahan...</p>
        </div>
        <p className="my-3 font-quicksand text-xs text-gray-500">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ
          اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </p>
      </section>

      <NavLinks />
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
