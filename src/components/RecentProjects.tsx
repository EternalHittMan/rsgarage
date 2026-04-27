"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronRight, Database } from "lucide-react";
import { 
  getPosts, 
  wpPostToProject, 
  isMockMode,
  type WP_Post 
} from "@/lib/blog-api";

export default function RecentProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragData = useRef({ startX: 0, scrollLeft: 0 });
  
  const [posts, setPosts] = useState<WP_Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [mockMode, setMockMode] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    setLoading(true);
    try {
      const response = await getPosts({
        per_page: 4,
        orderby: "date",
        order: "desc",
      });
      setPosts(response.data);
      setMockMode(isMockMode());
    } catch (error) {
      console.error("Error loading projects:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragData.current.startX = e.pageX - (containerRef.current?.offsetLeft || 0);
    dragData.current.scrollLeft = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - dragData.current.startX) * 2;
    containerRef.current.scrollLeft = dragData.current.scrollLeft - walk;
  };

  const handleItemHover = (el: HTMLDivElement, enter: boolean) => {
    gsap.to(el, {
      scale: enter ? 1.03 : 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section id="projeler" className="relative w-full py-20 lg:py-28 bg-black">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 lg:px-[121px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-heading font-bold text-light-muted text-3xl lg:text-[50px] leading-tight">
                SON <span className="text-gold">PROJELER</span>
              </h2>
              {mockMode && (
                <span className="px-3 py-1 bg-gold/20 text-gold font-body text-xs rounded-full flex items-center gap-1.5">
                  <Database size={12} />
                  Mock
                </span>
              )}
            </div>
            <p className="font-heading font-bold text-gray text-base lg:text-[20px]">
              RS Garajdan cikan en guncel projeler
            </p>
          </div>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:gap-3 transition-all duration-300"
          >
            Tum Projeleri Gor
            <ChevronRight size={20} />
          </Link>
        </motion.div>

        {/* Projects Gallery */}
        <div
          ref={containerRef}
          className="w-full overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div
            ref={trackRef}
            className="flex gap-6 px-6 lg:px-[121px] py-8"
            style={{ minWidth: "max-content" }}
          >
            {loading ? (
              // Loading skeleton
              [...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] aspect-square bg-dark-card rounded-2xl animate-pulse"
                />
              ))
            ) : (
              posts.map((post) => {
                const project = wpPostToProject(post);
                
                return (
                  <Link
                    key={post.id}
                    href={`/projeler/${post.slug}`}
                    className="block"
                  >
                    <div
                      className="relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] aspect-square overflow-hidden group rounded-2xl"
                      style={{ perspective: "800px" }}
                      onMouseEnter={(e) =>
                        handleItemHover(e.currentTarget as HTMLDivElement, true)
                      }
                      onMouseLeave={(e) =>
                        handleItemHover(e.currentTarget as HTMLDivElement, false)
                      }
                    >
                      <Image
                        src={post.featured_media}
                        alt={post.title.rendered}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        draggable={false}
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-gold/90 text-black font-body font-semibold text-xs rounded-full">
                          {project.category}
                        </span>
                      </div>

                      {/* Power Gain Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1.5 bg-green/90 text-white font-body font-bold text-xs rounded-full">
                          {project.powerGain}
                        </span>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                        <h3 className="font-heading font-bold text-white text-lg lg:text-xl mb-2">
                          {post.title.rendered}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="font-body text-gray text-sm">
                            {project.originalPower}
                          </span>
                          <span className="text-gold">→</span>
                          <span className="font-body font-bold text-gold text-sm">
                            {project.newPower}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-gold/80 font-body text-sm mt-3 group-hover:text-gold transition-colors">
                          Detaylari Gor
                          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>

                      {/* Hover border glow */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-colors duration-300 rounded-2xl" />
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
