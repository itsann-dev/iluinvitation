"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LayoutDashboard, Mail, LogOut } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";
import { User } from "@supabase/supabase-js";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 500 });

    const getUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/login");
      } else {
        setUser(data.session.user);
      }

      setLoading(false);
    };

    getUser();
  }, [router]);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/undangan", label: "Undangan", icon: Mail },
  ];

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Gagal logout.");
    } else {
      toast.success("Berhasil logout!");
      router.push("/");
    }
  };

  if (loading) {
    return <div className="p-4">Memuat...</div>;
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative z-0">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md px-4 py-3 flex items-center justify-between md:justify-end">
        {/* Hamburger menu */}
        <button
          className="md:hidden text-purple-700"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="text-lg font-semibold text-purple-700">
          iluinvitation
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <span className="text-sm font-medium text-gray-700 hidden sm:inline">
            {user?.user_metadata?.name || user.email}
          </span>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 bg-white shadow-md p-6 space-y-4">
          <nav className="space-y-2">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl font-medium transition 
                  ${
                    pathname === href
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-700 hover:bg-purple-100"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
            <hr />
            <button
              onClick={handleLogout}
              className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-red-100 text-gray-700 font-medium"
            >
              <LogOut className="w-5 h-5" />
              Keluar
            </button>
          </nav>
        </aside>

        {/* Sidebar - Mobile */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />

            <div
              className="fixed top-0 left-0 z-50 w-64 h-full bg-white rounded-r-xl p-6 shadow-lg md:hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              data-aos="fade-right"
            >
              <button
                className="mb-4 text-purple-700"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="space-y-2">
                {navLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl font-medium transition 
                      ${
                        pathname === href
                          ? "bg-purple-100 text-purple-700"
                          : "text-gray-700 hover:bg-purple-100"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                ))}
                <hr />
                <Link
                  href="/logout"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-red-100 text-gray-700 font-medium"
                >
                  <LogOut className="w-5 h-5" />
                  Keluar
                </Link>
              </nav>
            </div>
          </>
        )}

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 z-10">{children}</main>
      </div>
    </div>
  );
}
