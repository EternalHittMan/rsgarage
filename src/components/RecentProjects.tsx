"use client";

import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";

const projects = [
  { image: "/images/project-1.png", text: "Peugeot RCZ THP" },
  { image: "/images/project-2.png", text: "Audi A3" },
  { image: "/images/project-3.png", text: "Volkswagen Polo" },
  { image: "/images/project-4.png", text: "Dacia Duster" },
];

export default function RecentProjects() {
  return (
    <section id="projeler" className="relative w-full py-20 lg:py-28 bg-black">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 lg:px-[121px]"
        >
          <h2 className="font-heading font-bold text-light-muted text-3xl lg:text-[50px] leading-tight mb-2">
            SON <span className="text-gold">PROJELER</span>
          </h2>
          <p className="font-heading font-bold text-gray text-base lg:text-[20px] mb-8">
            RS Garajdan çıkan en güncel projeler
          </p>
        </motion.div>

        {/* CircularGallery */}
        <CircularGallery
          items={projects}
          bend={0}
          borderRadius={0.14}
          textColor="#fff"
          fontSize="1.25rem"
        />
      </div>
    </section>
  );
}
