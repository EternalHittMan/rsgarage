"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface GalleryItem {
  image: string;
  text: string;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  bend?: number;
  borderRadius?: number;
  textColor?: string;
  fontSize?: string;
}

export default function CircularGallery({
  items,
  bend = 0,
  borderRadius = 0.14,
  textColor = "#fff",
  fontSize = "1rem",
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragData = useRef({ startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Initial animation
    gsap.fromTo(
      track.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

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
      scale: enter ? 1.05 : 1,
      rotateY: enter ? bend * 2 : 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
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
        {items.map((item, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] aspect-square overflow-hidden group"
            style={{
              borderRadius: `${borderRadius * 100}%`,
              perspective: "800px",
            }}
            onMouseEnter={(e) =>
              handleItemHover(e.currentTarget as HTMLDivElement, true)
            }
            onMouseLeave={(e) =>
              handleItemHover(e.currentTarget as HTMLDivElement, false)
            }
          >
            <Image
              src={item.image}
              alt={item.text}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              draggable={false}
            />
            {/* Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex items-end">
              <h3
                className="font-body font-bold text-lg lg:text-xl"
                style={{ color: textColor, fontSize }}
              >
                {item.text}
              </h3>
            </div>
            {/* Hover border glow */}
            <div
              className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-colors duration-300"
              style={{ borderRadius: `${borderRadius * 100}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
