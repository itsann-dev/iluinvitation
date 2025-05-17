"use client";

import { Home, Heart, Calendar, Image as ImageIcon, Mail } from "lucide-react";

const links = [
  { id: "home", icon: <Home size={20} /> },
  { id: "couple", icon: <Heart size={20} /> },
  { id: "event", icon: <Calendar size={20} /> },
  { id: "gallery", icon: <ImageIcon size={20} /> },
  { id: "rsvp", icon: <Mail size={20} /> },
];

export default function NavLinks() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[440px] max-w-full flex justify-center">
      <div className="bg-grey/70 backdrop-blur-md rounded-full shadow-lg px-4 py-2 flex gap-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-gray-700 hover:text-brown transition"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
