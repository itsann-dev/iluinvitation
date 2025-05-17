"use client";

import { useState, useEffect } from "react";
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
  // const searchParams = useSearchParams();
  // const namaTamu = searchParams.get("kpd") || "Tamu Undangan";

  return (
    <div className="bg-white flex justify-center items-center relative">
      {!opened ? (
        <div className="w-[440px] max-w-full min-h-screen overflow-hidden shadow-lg">
          <InvitationCover onOpen={() => setOpened(true)} />
        </div>
      ) : (
        <div className="w-[440px] max-w-full min-h-screen shadow-lg">
          <InvitationContent />
        </div>
      )}
    </div>
  );
}
