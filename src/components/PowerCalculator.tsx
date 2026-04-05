"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import RippleGrid from "./RippleGrid";

const carData: Record<string, Record<string, Record<string, Record<string, { hp: number; torque: number; tunedHp: number; tunedTorque: number; fuelSaving: string }>>>> = {
  Mazda: {
    "MX-5": {
      "2015+": {
        "2.0 SkyActiv G": { hp: 160, torque: 200, tunedHp: 185, tunedTorque: 230, fuelSaving: "%15" },
      },
    },
    "3": {
      "2019+": {
        "2.0 SkyActiv G": { hp: 150, torque: 213, tunedHp: 175, tunedTorque: 240, fuelSaving: "%12" },
      },
    },
  },
  Volkswagen: {
    Polo: {
      "2018+": {
        "1.0 TSI": { hp: 95, torque: 175, tunedHp: 130, tunedTorque: 225, fuelSaving: "%10" },
      },
    },
    Golf: {
      "2020+": {
        "1.5 TSI": { hp: 150, torque: 250, tunedHp: 180, tunedTorque: 300, fuelSaving: "%12" },
      },
    },
  },
  Audi: {
    A3: {
      "2020+": {
        "1.5 TFSI": { hp: 150, torque: 250, tunedHp: 185, tunedTorque: 310, fuelSaving: "%10" },
      },
    },
  },
  Peugeot: {
    RCZ: {
      "2013+": {
        "1.6 THP": { hp: 200, torque: 275, tunedHp: 240, tunedTorque: 330, fuelSaving: "%8" },
      },
    },
  },
  Dacia: {
    Duster: {
      "2018+": {
        "1.3 TCe": { hp: 150, torque: 250, tunedHp: 175, tunedTorque: 290, fuelSaving: "%10" },
      },
    },
  },
};

export default function PowerCalculator() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [result, setResult] = useState<{
    hp: number; torque: number; tunedHp: number; tunedTorque: number; fuelSaving: string;
  } | null>(null);

  const brands = Object.keys(carData);
  const models = brand ? Object.keys(carData[brand]) : [];
  const years = brand && model ? Object.keys(carData[brand][model]) : [];
  const engines = brand && model && year ? Object.keys(carData[brand][model][year]) : [];

  const handleDiscover = () => {
    if (brand && model && year && engine) {
      setResult(carData[brand][model][year][engine]);
    }
  };

  return (
    <section
      id="hesaplayici"
      className="relative w-full overflow-hidden bg-black"
    >
      {/* RippleGrid — arka plan katmanı (doğası gereği absolute) */}
      <div className="absolute inset-0 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#FFD900"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>

      {/* İçerik Katmanı */}
      <div className="relative z-10 max-w-[1920px] mx-auto flex flex-col items-center justify-center min-h-[600px] lg:min-h-[700px] px-6 lg:px-[121px] py-16 lg:py-24">

        {/* Başlık — ortalanmış */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white text-center text-3xl sm:text-5xl lg:text-[80px] xl:text-[100px] leading-[1.06] mb-8 lg:mb-12"
        >
          ARABANIZ NE KADAR
          <br />
          <span className="text-gold">GÜÇLENEBİLİR?</span>
        </motion.h2>

        {/* Dropdown Bar — ortalanmış */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-[950px] bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-[20px] p-5 lg:p-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <Dropdown
              label="Marka Seçin"
              value={brand}
              options={brands}
              onChange={(v) => { setBrand(v); setModel(""); setYear(""); setEngine(""); setResult(null); }}
            />
            <Dropdown
              label="Model Seçin"
              value={model}
              options={models}
              onChange={(v) => { setModel(v); setYear(""); setEngine(""); setResult(null); }}
              disabled={!brand}
            />
            <Dropdown
              label="Yıl Seçin"
              value={year}
              options={years}
              onChange={(v) => { setYear(v); setEngine(""); setResult(null); }}
              disabled={!model}
            />
            <Dropdown
              label="Motor Seçin"
              value={engine}
              options={engines}
              onChange={(v) => { setEngine(v); setResult(null); }}
              disabled={!year}
            />
            <div className="flex flex-col justify-end">
              <button
                onClick={handleDiscover}
                disabled={!engine}
                className="bg-gold text-black font-body font-bold text-sm lg:text-base rounded-[15px] py-[14px] px-4 hover:shadow-[0_0_15px_rgba(255,217,0,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-dark-border whitespace-nowrap w-full"
              >
                POTANSİYELİ KEŞFET
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sonuçlar — ortalanmış */}
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 w-full max-w-[900px]"
          >
            <p className="font-heading font-bold text-white text-xl lg:text-2xl mb-6 text-center">
              {brand}{" "}
              <span className="text-gold">{model} {year} {engine}</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-subtle/80 backdrop-blur-sm border-2 border-dark-border rounded-[22px] p-6 shadow-[0_0_10.6px_rgba(255,217,0,0.3)]">
                <h3 className="font-body font-bold text-gray text-base mb-6 text-center">Orijinal Veriler</h3>
                <div className="grid grid-cols-2 gap-4">
                  <InfoCard label="Araba" value={brand} />
                  <InfoCard label="Model" value={model} />
                  <InfoCard label="Orijinal Beygir" value={`${result.hp}hp`} highlight />
                  <InfoCard label="Orijinal Tork" value={`${result.torque}Nm`} highlight />
                </div>
              </div>
              <div className="bg-dark-subtle/80 backdrop-blur-sm border-2 border-gold/30 rounded-[22px] p-6 shadow-[0_0_10.6px_rgba(255,217,0,0.5)]">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Image src="/images/rs-logo.svg" alt="RS" width={49} height={14} className="h-3.5 w-auto" />
                  <span className="font-body font-extrabold text-white text-xs tracking-[0.08em]">GARAGE</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InfoCard label="Araba" value={brand} />
                  <InfoCard label="Yakıt Tasarrufu" value={result.fuelSaving} highlight />
                  <InfoCard label="Tuned Beygir" value={`${result.tunedHp}hp`} highlight />
                  <InfoCard label="Tuned Tork" value={`${result.tunedTorque}Nm`} highlight />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Kişi görseli — sağ taraftan overlap (tek absolute gerekli eleman) */}
      <div className="absolute right-[5%] xl:right-[10%] bottom-0 z-20 hidden lg:block pointer-events-none">
        <Image
          src="/images/foto.png"
          alt="RS Garage Uzmanı"
          width={320}
          height={550}
          className="object-contain h-[450px] xl:h-[550px] w-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          priority
        />
      </div>
    </section>
  );
}

function Dropdown({
  label,
  value,
  options,
  onChange,
  disabled = false,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-body font-medium text-gray text-xs lg:text-sm pl-1">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full appearance-none bg-dark-subtle border border-dark-border rounded-[12px] px-4 py-3 text-white font-body font-medium text-sm cursor-pointer disabled:opacity-40 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
        >
          <option value="">{value || label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none" size={16} />
      </div>
    </div>
  );
}

function InfoCard({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-dark-card/60 rounded-[18px] p-4 text-center">
      <p className="font-body text-gold/50 text-xs mb-1">{label}</p>
      <p className={`font-body font-bold ${highlight ? "text-white text-xl" : "text-white text-base"}`}>{value}</p>
    </div>
  );
}
