"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Gauge, Zap, Wrench, ChevronRight, ChevronLeft, Database, Wifi, WifiOff } from "lucide-react";
import { 
  getPosts, 
  getCategories, 
  isMockMode, 
  configureBlogAPI,
  wpPostToProject,
  formatPostDate,
  getPostCategoryNames,
  type WP_Post,
  type WP_Category,
} from "@/lib/blog-api";

export default function ProjectsPage() {
  const [posts, setPosts] = useState<WP_Post[]>([]);
  const [categories, setCategories] = useState<WP_Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [mockMode, setMockMode] = useState(true);

  useEffect(() => {
    loadData();
  }, [selectedCategory, currentPage]);

  async function loadData() {
    setLoading(true);
    try {
      const [postsResponse, categoriesData] = await Promise.all([
        getPosts({
          page: currentPage,
          per_page: 6,
          categories: selectedCategory ? [selectedCategory] : undefined,
          orderby: "date",
          order: "desc",
        }),
        getCategories(),
      ]);

      setPosts(postsResponse.data);
      setTotalPages(postsResponse.total_pages);
      setTotal(postsResponse.total);
      setCategories(categoriesData);
      setMockMode(isMockMode());
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleCategoryChange(categoryId: number | null) {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  }

  function toggleMockMode() {
    const newMockMode = !mockMode;
    configureBlogAPI({ mockMode: newMockMode });
    setMockMode(newMockMode);
    loadData();
  }

  return (
    <div className="min-h-screen bg-black pt-[95px]">
      {/* Hero Section */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.png"
          alt="RS Garage Projeler"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
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
              <span className="font-body font-medium">Ana Sayfaya Don</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div>
              <h1 className="font-heading font-bold text-light-muted text-4xl lg:text-[64px] leading-tight mb-4">
                SON <span className="text-gold">PROJELER</span>
              </h1>
              <p className="font-body text-gray text-lg lg:text-xl max-w-2xl">
                RS Garage&apos;dan cikan en guncel projeler. Her bir arac, titizlikle
                analiz edilip, en uygun cozumlerle performansina kavusuyor.
              </p>
            </div>

            {/* Mock Mode Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleMockMode}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  mockMode
                    ? "bg-gold/20 text-gold border border-gold/30"
                    : "bg-green/20 text-green border border-green/30"
                }`}
              >
                {mockMode ? (
                  <>
                    <Database size={16} />
                    Mock Mode
                  </>
                ) : (
                  <>
                    <Wifi size={16} />
                    Live API
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-8 lg:gap-16 mt-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Gauge className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-2xl">{total}+</p>
                <p className="font-body text-gray text-sm">Toplam Proje</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Zap className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-2xl">%100</p>
                <p className="font-body text-gray text-sm">Musteri Memnuniyeti</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Wrench className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-2xl">{categories.length}+</p>
                <p className="font-body text-gray text-sm">Hizmet Kategorisi</p>
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
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-5 py-2.5 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-gold text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Tumu
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-5 py-2.5 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gold text-black"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="aspect-[16/10] bg-white/5" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-white/5 rounded w-1/3" />
                    <div className="h-6 bg-white/5 rounded w-2/3" />
                    <div className="h-4 bg-white/5 rounded w-full" />
                    <div className="h-4 bg-white/5 rounded w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <WifiOff className="text-gray mx-auto mb-4" size={48} />
              <h3 className="font-heading font-bold text-white text-2xl mb-2">
                Proje Bulunamadi
              </h3>
              <p className="font-body text-gray">
                Secili kategoride henuz proje bulunmuyor.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => {
                const project = wpPostToProject(post);
                const categoryNames = getPostCategoryNames(post);

                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.featured_media}
                        alt={post.title.rendered}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-gold/90 text-black font-body font-semibold text-xs rounded-full">
                          {categoryNames[0]}
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
                        <span className="font-body text-sm">{formatPostDate(post.date)}</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading font-bold text-white text-xl lg:text-2xl mb-3 group-hover:text-gold transition-colors duration-300">
                        {post.title.rendered}
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
                          <p className="font-body text-gray text-xs mb-1">Sonuc</p>
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
                        href={`/projeler/${post.slug}`}
                        className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-300"
                      >
                        Detaylari Gor
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-full font-body font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={20} />
                Onceki
              </button>

              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full font-body font-medium transition-all duration-300 ${
                      currentPage === i + 1
                        ? "bg-gold text-black"
                        : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-full font-body font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                Sonraki
                <ChevronRight size={20} />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* API Info Section */}
      <section className="w-full py-12 border-t border-white/5">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[121px]">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Database className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-xl mb-2">
                  WordPress Tarzi Blog API
                </h3>
                <p className="font-body text-gray text-sm leading-relaxed mb-4">
                  Bu sayfa WordPress REST API benzeri bir sistem kullaniyor. Suanda{" "}
                  <span className={mockMode ? "text-gold font-semibold" : "text-green font-semibold"}>
                    {mockMode ? "Mock Mode" : "Live API"}
                  </span>{" "}
                  aktif. Mock mode, gercek bir WordPress backend olmadan gelistirme yapmaniza olanak tanir.
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-body text-gray">
                  <span className="px-3 py-1 bg-white/5 rounded-full">REST API</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full">Options API</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full">Metadata API</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full">Taxonomy Support</span>
                </div>
              </div>
            </div>
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
              Projenizi <span className="text-gold">Baslatalim</span>
            </h2>
            <p className="font-body text-gray text-lg max-w-xl mx-auto mb-8">
              Aracinizin potansiyelini kesfetmek icin bizimle iletisime gecin.
              Uzman ekibimiz size en uygun cozumu sunacak.
            </p>
            <Link
              href="/#iletisim"
              className="inline-flex items-center justify-center bg-gold text-black font-body font-semibold text-lg rounded-full px-10 py-4 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(255,217,0,0.4)] transition-all duration-300"
            >
              Ucretsiz Analiz Isteyin
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
