"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import InvitationCover from "../components/InvitationCover";
import InvitationContent from "../components/InvitationContent";
import NavLinks from "../components/Navlinks";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UndanganPage() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const searchParams = useSearchParams();
  const namaTamu = decodeURIComponent(
    searchParams.get("kpd") || "Tamu Undangan"
  );

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  // Inisialisasi audio setelah page load
  useEffect(() => {
    audioRef.current = new Audio("/assets/music/lagu.mp3");
    audioRef.current.loop = true;
  }, []);

  // Play musik saat buka undangan
  useEffect(() => {
    if (opened && audioRef.current) {
      audioRef.current.play();
      setPlaying(true);
    }
  }, [opened]);

  // Toggle audio
  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-white flex justify-center items-center relative">
      <div className="w-[440px] max-w-full min-h-screen shadow-lg">
        {!opened ? (
          <InvitationCover
            guestName={namaTamu}
            onOpen={() => setOpened(true)}
          />
        ) : (
          <>
            <InvitationContent />
            <NavLinks isPlaying={playing} toggleAudio={toggleAudio} />
          </>
        )}
      </div>
    </div>
  );
}
