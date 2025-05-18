"use client";

import { useEffect, useState } from "react";
import { Home, Heart, Calendar, UserCheck, Gift, Music } from "lucide-react";

const links = [
  { id: "home", icon: <Home size={20} /> },
  { id: "couple", icon: <Heart size={20} /> },
  { id: "event", icon: <Calendar size={20} /> },
  { id: "rsvp", icon: <UserCheck size={20} /> },
  { id: "gift", icon: <Gift size={20} /> },
  { id: "music", icon: <Music size={20} /> },
];

type NavLinksProps = {
  isPlaying: boolean;
  toggleAudio: () => void;
};

export default function NavLinks({ isPlaying, toggleAudio }: NavLinksProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const visibleSections = links
        .filter((link) => link.id !== "music")
        .map((link) => document.getElementById(link.id))
        .filter(Boolean) as HTMLElement[];

      for (const section of visibleSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[440px] max-w-full flex justify-center">
      <div className="bg-grey/70 backdrop-blur-md rounded-full shadow-lg px-4 py-2 flex gap-4">
        {links.map((link) => {
          const isActive =
            link.id === "music" ? isPlaying : link.id === activeSection;

          const baseClass = "transition";
          const colorClass = isActive ? "text-brown" : "text-gray-700";

          return link.id === "music" ? (
            <button
              key={link.id}
              onClick={toggleAudio}
              className={`${baseClass} ${colorClass}`}
            >
              {link.icon}
            </button>
          ) : (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${baseClass} ${colorClass}`}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
