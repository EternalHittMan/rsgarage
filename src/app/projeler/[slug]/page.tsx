"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Gauge,
  Zap,
  Wrench,
  Fuel,
  Car,
  Settings,
  CheckCircle,
  Quote,
  ChevronRight,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black pt-[95px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-white text-4xl mb-4">
            Proje Bulunamadi
          </h1>
          <p className="font-body text-gray mb-8">
            Aradiginiz proje mevcut degil veya kaldirilmis olabilir.
          </p>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 bg-gold text-black font-body font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
          >
            <ArrowLeft size={20} />
            Projelere Don
          </Link>
        </div>
      </div>
    );
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black pt-[95px]">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Hero Image */}
        <div className="relative w-full h-[50vh] lg:h-[60vh]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 lg:pb-16">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 text-gray hover:text-gold transition-colors duration-300 mb-6"
              >
                <ArrowLeft size={20} />
                <span className="font-body font-medium">Tum Projeler</span>
              </Link>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-4"
            >
              <span className="px-4 py-2 bg-gold text-black font-body font-semibold text-sm rounded-full">
                {project.category}
              </span>
              <span className="px-4 py-2 bg-green/90 text-white font-body font-bold text-sm rounded-full">
                {project.powerGain}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-bold text-white text-4xl lg:text-6xl mb-4"
            >
              {project.title}
            </motion.h1>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 text-gray"
            >
              <Calendar size={18} />
              <span className="font-body">{project.date}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 lg:py-20">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl mb-4">
                  Proje <span className="text-gold">Hakkinda</span>
                </h2>
                <p className="font-body text-gray text-lg leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Power Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-8"
              >
                <h3 className="font-heading font-bold text-white text-xl mb-6 flex items-center gap-3">
                  <Gauge className="text-gold" size={24} />
                  Performans Degerleri
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-black/50 rounded-xl">
                    <p className="font-body text-gray text-sm mb-2">Orijinal Guc</p>
                    <p className="font-heading font-bold text-white text-2xl">
                      {project.originalPower}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-xl">
                    <p className="font-body text-gray text-sm mb-2">Yeni Guc</p>
                    <p className="font-heading font-bold text-gold text-2xl">
                      {project.newPower}
                    </p>
                  </div>
                  {project.details?.originalTorque && (
                    <div className="text-center p-4 bg-black/50 rounded-xl">
                      <p className="font-body text-gray text-sm mb-2">Orijinal Tork</p>
                      <p className="font-heading font-bold text-white text-2xl">
                        {project.details.originalTorque}
                      </p>
                    </div>
                  )}
                  {project.details?.newTorque && (
                    <div className="text-center p-4 bg-black/50 rounded-xl">
                      <p className="font-body text-gray text-sm mb-2">Yeni Tork</p>
                      <p className="font-heading font-bold text-gold text-2xl">
                        {project.details.newTorque}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Work Done */}
              {project.details?.workDone && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl mb-6 flex items-center gap-3">
                    <Wrench className="text-gold" size={24} />
                    Yapilan <span className="text-gold">Islemler</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.details.workDone.map((work, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-dark-card border border-dark-border rounded-xl"
                      >
                        <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={20} />
                        <span className="font-body text-white">{work}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Customer Review */}
              {project.details?.customerReview && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-8"
                >
                  <Quote className="text-gold mb-4" size={40} />
                  <p className="font-body text-white text-lg lg:text-xl leading-relaxed italic mb-6">
                    &quot;{project.details.customerReview}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="font-heading font-bold text-gold text-lg">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-white">
                        {project.title} Sahibi
                      </p>
                      <p className="font-body text-gray text-sm">Dogrulanmis Musteri</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Vehicle Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 sticky top-[120px]"
              >
                <h3 className="font-heading font-bold text-white text-xl mb-6">
                  Arac <span className="text-gold">Bilgileri</span>
                </h3>
                <div className="space-y-4">
                  {project.details?.engine && (
                    <div className="flex items-center gap-4 pb-4 border-b border-dark-border">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Settings className="text-gold" size={20} />
                      </div>
                      <div>
                        <p className="font-body text-gray text-sm">Motor</p>
                        <p className="font-body font-semibold text-white">
                          {project.details.engine}
                        </p>
                      </div>
                    </div>
                  )}
                  {project.details?.year && (
                    <div className="flex items-center gap-4 pb-4 border-b border-dark-border">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Calendar className="text-gold" size={20} />
                      </div>
                      <div>
                        <p className="font-body text-gray text-sm">Model Yili</p>
                        <p className="font-body font-semibold text-white">
                          {project.details.year}
                        </p>
                      </div>
                    </div>
                  )}
                  {project.details?.fuelType && (
                    <div className="flex items-center gap-4 pb-4 border-b border-dark-border">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Fuel className="text-gold" size={20} />
                      </div>
                      <div>
                        <p className="font-body text-gray text-sm">Yakit Tipi</p>
                        <p className="font-body font-semibold text-white">
                          {project.details.fuelType}
                        </p>
                      </div>
                    </div>
                  )}
                  {project.details?.transmission && (
                    <div className="flex items-center gap-4 pb-4 border-b border-dark-border">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Car className="text-gold" size={20} />
                      </div>
                      <div>
                        <p className="font-body text-gray text-sm">Sanziman</p>
                        <p className="font-body font-semibold text-white">
                          {project.details.transmission}
                        </p>
                      </div>
                    </div>
                  )}
                  {project.details?.tuningType && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Zap className="text-gold" size={20} />
                      </div>
                      <div>
                        <p className="font-body text-gray text-sm">Tuning Tipi</p>
                        <p className="font-body font-semibold text-white">
                          {project.details.tuningType}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Services Tags */}
                <div className="mt-6 pt-6 border-t border-dark-border">
                  <p className="font-body text-gray text-sm mb-3">Uygulanan Hizmetler</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1.5 bg-white/5 text-white font-body text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-dark-border">
                  <Link
                    href="/#iletisim"
                    className="w-full inline-flex items-center justify-center bg-gold text-black font-body font-semibold rounded-full px-6 py-4 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(255,217,0,0.4)] transition-all duration-300"
                  >
                    Benzer Proje Icin Teklif Al
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="w-full py-16 lg:py-24 border-t border-dark-border">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-10"
            >
              <div>
                <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-2">
                  Benzer <span className="text-gold">Projeler</span>
                </h2>
                <p className="font-body text-gray">
                  {project.category} kategorisindeki diger projelerimiz
                </p>
              </div>
              <Link
                href="/projeler"
                className="hidden lg:inline-flex items-center gap-2 text-gold font-body font-semibold hover:gap-3 transition-all duration-300"
              >
                Tum Projeleri Gor
                <ChevronRight size={20} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.article
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
                >
                  <Link href={`/projeler/${relatedProject.slug}`}>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Power Gain Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 bg-green/90 text-white font-body font-bold text-xs rounded-full">
                          {relatedProject.powerGain}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-white text-xl mb-2 group-hover:text-gold transition-colors duration-300">
                        {relatedProject.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-body text-gray text-sm">
                          {relatedProject.originalPower}
                        </span>
                        <span className="text-gold">→</span>
                        <span className="font-body font-bold text-gold text-sm">
                          {relatedProject.newPower}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm">
                        Detaylari Gor
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
