"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="RS Garage Hero"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-[121px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[900px]"
        >
          {/* Subtitle */}
          <p className="font-[var(--font-heading)] font-bold text-gold text-lg lg:text-[25px] uppercase tracking-wide mb-4">
            Edİrne&apos;nİn Performans Merkezİ
          </p>

          {/* Main Heading */}
          <h1 className="font-[var(--font-heading)] font-bold text-light-muted text-4xl sm:text-5xl md:text-7xl lg:text-[110px] leading-[1.15] tracking-[-0.04em] mb-6">
            ARACIN SINIRINI BİZ BELİRLERİZ
          </h1>

          {/* Description */}
          <p className="font-[var(--font-body)] font-medium text-gray-light text-base lg:text-[25px] leading-[2.08] max-w-[819px] mb-10">
            Fabrika çıkışı değerler, aracınızın gerçek potansiyelinin bir
            kısmıdır. RS Garage&apos;da her müdahale, mühendislik verisiyle
            desteklenir, tahminle değil.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#hizmetler"
              className="inline-flex items-center justify-center bg-gold text-black font-[var(--font-body)] font-extrabold text-base lg:text-xl rounded-[18px] px-8 py-4 hover:shadow-[0_0_9px_rgba(255,249,191,1)] transition-all duration-300 border border-gold-muted"
            >
              Hizmetlerimizi İncele
            </Link>
            <Link
              href="/biz-kimiz"
              className="inline-flex items-center justify-center bg-black text-gold-muted font-[var(--font-body)] font-extrabold text-base lg:text-xl rounded-[18px] px-8 py-4 border border-gold-muted hover:bg-gold/10 transition-all duration-300"
            >
              Biz Kimiz
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
