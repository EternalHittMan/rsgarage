"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StatsSection from "@/components/StatsSection";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function BizKimiz() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/about-hero-bg-57c2ac.png"
          alt="RS Garage"
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
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-[121px] w-full pt-32 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Subtitle */}
            <p className="font-[var(--font-heading)] font-bold text-gold text-lg lg:text-[25px] uppercase tracking-wide mb-4">
              Edİrne&apos;nİn Performans Merkezİ
            </p>

            {/* Main Heading */}
            <h1 className="font-[var(--font-heading)] font-bold text-light-muted text-4xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[1.15] tracking-[-0.04em] mb-6">
              BİZ KİMİZ?
            </h1>

            {/* Subtitle */}
            <p className="font-[var(--font-body)] font-medium text-gray-light text-lg lg:text-[25px] leading-[2.08] max-w-[819px]">
              RS Garage ile Optimum Güç, Maksimum Dayanıklılık.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative w-full py-20 lg:py-32 bg-black">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <Image
                src="/images/about-image.png"
                alt="RS Garage Atölye"
                width={576}
                height={678}
                className="w-full max-w-[576px] rounded-[32px] object-cover"
              />
            </motion.div>

            {/* Big Logo + Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/rs-logo.svg"
                  alt="RS Garage"
                  width={258}
                  height={70}
                  className="h-12 lg:h-[70px] w-auto"
                />
                <span className="font-[var(--font-body)] font-extrabold text-white text-3xl lg:text-[60px] tracking-[0.08em]">
                  GARAGE
                </span>
              </div>

              <p className="font-[var(--font-body)] font-semibold text-white text-base lg:text-[30px] leading-[1.73]">
                Edirne&apos;de 10 yılı aşkın süredir otomotiv tutkunlarına ve
                araç sahiplerine hizmet veren, teknik yetkinliği ön planda tutan
                bir otomotiv servis ve performans merkezidir.
              </p>

              <p className="font-[var(--font-body)] font-semibold text-white text-base lg:text-[30px] leading-[1.73]">
                Ecunation yetkili bayisi olarak motor beyni yazılım
                optimizasyonu ve chip tuning alanında bölgenin en donanımlı
                adreslerinden biriyiz. Hafif mekanik servis hizmetlerimizle
                aracınızın bakımından performans geliştirmesine kadar geniş bir
                yelpazede çözüm sunuyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Chatbot */}
      <ChatbotWidget />
    </>
  );
}
