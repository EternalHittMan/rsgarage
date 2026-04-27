"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#hesaplayici", label: "Güç Artışı Hesaplayıcı" },
  { href: "/projeler", label: "Son İşlerimiz" },
  { href: "/#hizmetler", label: "Hizmetlerimiz" },
  { href: "/biz-kimiz", label: "Biz Kimiz?" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 lg:px-[121px] h-[80px] lg:h-[95px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/rs-logo.svg"
            alt="RS Garage Logo"
            width={96}
            height={26}
            className="w-16 lg:w-24"
          />
          <span className="font-[var(--font-body)] font-extrabold text-white text-sm lg:text-[22px] tracking-[0.08em]">
            GARAGE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[var(--font-body)] font-semibold text-white text-lg hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* İletişim Button */}
        <Link
          href="/#iletisim"
          className="hidden lg:flex items-center justify-center bg-gold-light text-black font-[var(--font-body)] font-semibold text-lg rounded-full px-8 py-3 hover:bg-gold hover:shadow-[0_0_20px_rgba(255,217,0,0.4)] transition-all duration-300"
        >
          İletişim
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menü"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[var(--font-body)] font-semibold text-white text-lg py-2 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#iletisim"
                onClick={() => setMobileOpen(false)}
                className="bg-gold-light text-black font-[var(--font-body)] font-semibold text-lg rounded-full px-8 py-3 text-center mt-2 hover:bg-gold transition-all"
              >
                İletişim
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
