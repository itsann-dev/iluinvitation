"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import InvitationCover from "../components/InvitationCover";
import InvitationContent from "../components/InvitationContent";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UndanganPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [opened, setOpened] = useState(false);
  const searchParams = useSearchParams();
  const namaTamu = searchParams.get("kpd") || "Tamu Undangan";

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center overflow-hidden relative">
      <div className="w-[440px] max-w-full h-screen overflow-hidden shadow-lg bg-white">
        {!opened ? (
          <InvitationCover nama={namaTamu} onOpen={() => setOpened(true)} />
        ) : (
          <InvitationContent nama={namaTamu} />
        )}
      </div>
    </div>
  );
}
