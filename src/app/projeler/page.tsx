"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Gauge, Zap, Wrench, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "peugeot-rcz-thp",
    title: "Peugeot RCZ THP",
    image: "/images/project-1.png",
    date: "Aralık 2024",
    category: "ECU Remap",
    originalPower: "156 HP",
    newPower: "195 HP",
    powerGain: "+39 HP",
    description:
      "Peugeot RCZ THP 156 aracına uygulanan Stage 1 ECU Remap ile performans değerleri önemli ölçüde artırıldı. Araç sahibinin talebi doğrultusunda güç ve tork değerleri optimize edildi.",
    services: ["ECU Remap", "Diagnostik Kontrol", "Yol Testi"],
  },
  {
    id: 2,
    slug: "audi-a3",
    title: "Audi A3",
    image: "/images/project-2.png",
    date: "Kasım 2024",
    category: "Stage 2 Tuning",
    originalPower: "150 HP",
    newPower: "210 HP",
    powerGain: "+60 HP",
    description:
      "Audi A3 2.0 TDI aracına Stage 2 yazılım uygulaması yapıldı. Downpipe ve intercooler yükseltmesiyle birlikte maksimum verim elde edildi.",
    services: ["ECU Remap", "Downpipe Montaj", "Intercooler Upgrade", "DPF Çözümü"],
  },
  {
    id: 3,
    slug: "volkswagen-polo",
    title: "Volkswagen Polo",
    image: "/images/project-3.png",
    date: "Ekim 2024",
    category: "ECU Remap",
    originalPower: "95 HP",
    newPower: "125 HP",
    powerGain: "+30 HP",
    description:
      "Volkswagen Polo 1.4 TDI aracına ekonomi odaklı ECU Remap uygulandı. Yakıt tasarrufu ve performans dengesi sağlandı.",
    services: ["ECU Remap", "EGR Çözümü", "Diagnostik Kontrol"],
  },
  {
    id: 4,
    slug: "dacia-duster",
    title: "Dacia Duster",
    image: "/images/project-4.png",
    date: "Eylül 2024",
    category: "ECU Remap",
    originalPower: "115 HP",
    newPower: "145 HP",
    powerGain: "+30 HP",
    description:
      "Dacia Duster 1.5 dCi aracına Stage 1 ECU Remap uygulandı. Şehir içi ve şehir dışı sürüş için optimize edilmiş güç eğrisi sağlandı.",
    services: ["ECU Remap", "Diagnostik Kontrol", "Yol Testi"],
  },
  {
    id: 5,
    slug: "bmw-320d",
    title: "BMW 320d",
    image: "/images/project-1.png",
    date: "Ağustos 2024",
    category: "Stage 2 Tuning",
    originalPower: "184 HP",
    newPower: "245 HP",
    powerGain: "+61 HP",
    description:
      "BMW 320d F30 aracına Stage 2 yazılım ve mekanik modifikasyonlar uygulandı. Performans ve yakıt ekonomisi arasında mükemmel denge kuruldu.",
    services: ["ECU Remap", "DPF Delete", "EGR Çözümü", "Turbo Upgrade"],
  },
  {
    id: 6,
    slug: "mercedes-c220d",
    title: "Mercedes C220d",
    image: "/images/project-2.png",
    date: "Temmuz 2024",
    category: "ECU Remap",
    originalPower: "170 HP",
    newPower: "215 HP",
    powerGain: "+45 HP",
    description:
      "Mercedes C220d W205 aracına premium ECU Remap uygulandı. Lüks sürüş deneyimi korunarak performans artırıldı.",
    services: ["ECU Remap", "TCU Tuning", "Diagnostik Kontrol"],
  },
];

const categories = ["Tümü", "ECU Remap", "Stage 2 Tuning", "DPF/EGR Çözüm"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black pt-[95px]">
      {/* Hero Section */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #FFD900 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-[1920px] mx-auto px-6 lg:px-[121px]">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} />
              <span className="font-body font-medium">Ana Sayfaya Dön</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-heading font-bold text-light-muted text-4xl lg:text-[64px] leading-tight mb-4">
              SON <span className="text-gold">PROJELER</span>
            </h1>
            <p className="font-body text-gray text-lg lg:text-xl max-w-2xl mb-8">
              RS Garage&apos;dan çıkan en güncel projeler. Her bir araç, titizlikle
              analiz edilip, en uygun çözümlerle performansına kavuşuyor.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-8 lg:gap-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Gauge className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-2xl">2500+</p>
                <p className="font-body text-gray text-sm">Tamamlanan Proje</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Zap className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-2xl">%100</p>
                <p className="font-body text-gray text-sm">Müşteri Memnuniyeti</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Wrench className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-2xl">60+</p>
                <p className="font-body text-gray text-sm">Desteklenen Marka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-6 border-y border-white/5">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                  index === 0
                    ? "bg-gold text-black"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-gold/90 text-black font-body font-semibold text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Power Gain Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-green/90 text-white font-body font-bold text-xs rounded-full">
                      {project.powerGain}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray mb-3">
                    <Calendar size={14} />
                    <span className="font-body text-sm">{project.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-heading font-bold text-white text-xl lg:text-2xl mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="font-body text-gray text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Power Stats */}
                  <div className="flex items-center gap-4 mb-4 p-3 bg-black/50 rounded-lg">
                    <div className="flex-1 text-center">
                      <p className="font-body text-gray text-xs mb-1">Orijinal</p>
                      <p className="font-heading font-bold text-white text-lg">
                        {project.originalPower}
                      </p>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="flex-1 text-center">
                      <p className="font-body text-gray text-xs mb-1">Sonuç</p>
                      <p className="font-heading font-bold text-gold text-lg">
                        {project.newPower}
                      </p>
                    </div>
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="px-2.5 py-1 bg-white/5 text-gray font-body text-xs rounded-md"
                      >
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="px-2.5 py-1 bg-white/5 text-gray font-body text-xs rounded-md">
                        +{project.services.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/projeler/${project.slug}`}
                    className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Detayları Gör
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-transparent to-dark-card/50">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-4">
              Projenizi <span className="text-gold">Başlatalım</span>
            </h2>
            <p className="font-body text-gray text-lg max-w-xl mx-auto mb-8">
              Aracınızın potansiyelini keşfetmek için bizimle iletişime geçin.
              Uzman ekibimiz size en uygun çözümü sunacak.
            </p>
            <Link
              href="/#iletisim"
              className="inline-flex items-center justify-center bg-gold text-black font-body font-semibold text-lg rounded-full px-10 py-4 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(255,217,0,0.4)] transition-all duration-300"
            >
              Ücretsiz Analiz İsteyin
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
