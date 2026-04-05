"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "ECU REMAP",
    description:
      "Donanımına dokunmadan, sadece motor yazılımını yeniden kalibre ediyoruz. Fabrika kısıtlamaları kalkar; güç, tork optimize edilir.",
  },
  {
    number: "02",
    title: "MEKANİK SERVİS",
    description:
      "Motor, fren, süspansiyon ve şanzıman müdahalelerinde teşhis önce gelir.",
  },
  {
    number: "03",
    title: "TCU TUNİNG",
    description:
      "Üreticinin fabrikada kilitli bıraktığı özellikler launch control, agresif harita modları yazılım müdahalesiyle aktif hale getirilir.",
  },
  {
    number: "04",
    title: "DPF / EGR",
    description:
      "Tıkanan veya arıza veren DPF, EGR ve AdBlue sistemleri için kalıcı yazılım ve mekanik çözümler. Motor sağlığı uzun vadede korunur.",
  },
];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="relative w-full py-20 lg:py-28 bg-black">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-gold text-3xl lg:text-[50px] mb-12 lg:mb-16"
        >
          HİZMETLERİMİZ
        </motion.h2>

        {/* 4-Column Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative border-l border-gray/20 first:border-l-0 p-6 lg:p-8 hover:bg-dark-card/20 transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Title */}
              <h3 className="font-heading font-bold text-white text-lg lg:text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body font-normal text-gray text-sm leading-relaxed mb-auto pb-12">
                {service.description}
              </p>

              {/* Large Number at bottom */}
              <span className="font-heading font-bold text-gold/10 text-[120px] lg:text-[160px] leading-none absolute bottom-0 left-4 lg:left-8 group-hover:text-gold/20 transition-colors duration-500 select-none pointer-events-none">
                {service.number}
              </span>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gold transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
