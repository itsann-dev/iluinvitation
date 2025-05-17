// app/layout.tsx
// import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iluinvitation - Undangan Pernikahan Digital",
  description: "Buat undangan pernikahan digital elegan dan mudah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${poppins.className} bg-white text-gray-800 relative overflow-x-hidden`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
