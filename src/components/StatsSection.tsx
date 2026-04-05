"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { number: "2500+", label: "Araba" },
  { number: "12+", label: "Yıl Deneyim" },
  { number: "350+", label: "Arabaya Özel Yazılım" },
  { number: "60+", label: "Marka Desteği" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-dark-card overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body font-medium text-gold text-xl lg:text-[30px] text-center mb-8 tracking-tight"
        >
          Doğru Ekipman ve Test
        </motion.h3>

        {/* Brand logos row */}
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 mb-14">
          <span className="font-body font-extrabold text-white text-lg lg:text-[27px] tracking-tight">
            LAUNCH
          </span>
          <span className="font-body font-extrabold text-white text-lg lg:text-[27px] tracking-tight">
            ALIENTECH
          </span>
          <Image
            src="/images/ecunation-brand.svg"
            alt="Preditech / Ecunation"
            width={200}
            height={21}
            className="h-5 lg:h-6 w-auto opacity-90"
          />
          <span className="font-body font-extrabold text-white text-lg lg:text-[27px] tracking-tight">
            THINKTOOL
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#A8A8A4]/30 mb-14" />

        {/* Stats with vertical dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center ${
                i > 0 ? "lg:border-l lg:border-[#A8A8A4]/30" : ""
              }`}
            >
              <p className="font-body text-gold text-4xl lg:text-5xl font-normal opacity-80 leading-tight">
                {stat.number}
              </p>
              <p className="font-body text-gold text-base lg:text-lg font-normal opacity-80 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
