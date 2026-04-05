"use client";

import Image from "next/image";
import Link from "next/link";
import DotGrid from "./DotGrid";

const footerLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/biz-kimiz", label: "Hakkımızda" },
  { href: "/#projeler", label: "Referans" },
  { href: "/#projeler", label: "İlanlar" },
  { href: "/#projeler", label: "Projeler" },
];

export default function Footer() {
  return (
    <footer id="iletisim" className="relative bg-[#0D0B12] overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 pointer-events-auto">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-[121px] py-16 lg:py-20">
        {/* Main Grid — 4 kolonlu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Kolon 1: Logo + Sosyal İkonlar */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/rs-logo-footer.svg"
                alt="RS Garage"
                width={90}
                height={28}
              />
              <span className="font-body font-extrabold text-white text-2xl tracking-[0.08em]">
                GARAGE
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <SocialIcon href="https://wa.me/905433288793" icon="/images/whatsapp-icon.svg" label="WhatsApp" />
              <SocialIcon href="https://facebook.com/rsgarage" icon="/images/facebook-icon.svg" label="Facebook" />
              <SocialIcon href="https://instagram.com/rsgarage" icon="/images/instagram-icon.svg" label="Instagram" />
              <SocialIcon href="https://tiktok.com/@rsgarage" icon="/images/tiktok-icon.svg" label="TikTok" />
            </div>
          </div>

          {/* Kolon 2: Sayfa Linkleri */}
          <div className="flex flex-col gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 font-body font-black text-white text-base hover:text-gold transition-colors"
              >
                <span className="text-gold text-xs">●</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Kolon 3: İletişim Bilgileri */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <p className="font-body font-bold text-white text-sm">
              Edirne Merkez
            </p>
            <p className="font-body font-bold text-white text-sm mt-2">
              sergen@rsgarage.com
            </p>
            <p className="font-body font-semibold text-white text-sm">
              +90 543 328 8793
            </p>
            <div className="font-body font-semibold text-white text-sm leading-[1.8] mt-4">
              <p className="font-bold text-gold">ÇALIŞMA SAATLERİ:</p>
              <p>Haftaiçi: 09:00 – 20:00</p>
              <p>Cumartesi: 09:00 – 19:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>

          {/* Kolon 4: Google Maps */}
          <div className="rounded-2xl overflow-hidden bg-white/10 h-[280px] lg:h-full min-h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.5!2d26.5557!3d41.6771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQwJzM3LjYiTiAyNsKwMzMnMjAuNSJF!5e0!3m2!1str!2str!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RS Garage Konum"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8 text-sm font-body">
            <span className="font-bold text-white/60 hover:text-white transition-colors cursor-pointer">
              Cookies &amp; Privacy
            </span>
            <span className="font-bold text-white/60 hover:text-white transition-colors cursor-pointer">
              Terms &amp; Conditions
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/polygen-logo.png"
              alt="Polygen"
              width={84}
              height={18}
              className="h-4 w-auto object-contain"
            />
            <span className="font-body font-extrabold text-gold text-sm">Media</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full border border-gold/30 hover:bg-gold/20 transition-all duration-300"
    >
      <Image src={icon} alt={label} width={20} height={20} />
    </a>
  );
}
