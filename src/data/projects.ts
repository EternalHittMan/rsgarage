export interface Project {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  category: string;
  originalPower: string;
  newPower: string;
  powerGain: string;
  description: string;
  services: string[];
  details?: {
    engine?: string;
    year?: string;
    fuelType?: string;
    transmission?: string;
    originalTorque?: string;
    newTorque?: string;
    torqueGain?: string;
    tuningType?: string;
    workDone?: string[];
    customerReview?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "peugeot-rcz-thp",
    title: "Peugeot RCZ THP",
    image: "/images/project-1.png",
    date: "Aralik 2024",
    category: "ECU Remap",
    originalPower: "156 HP",
    newPower: "195 HP",
    powerGain: "+39 HP",
    description:
      "Peugeot RCZ THP 156 aracina uygulanan Stage 1 ECU Remap ile performans degerleri onemli olcude artirildi. Arac sahibinin talebi dogrultusunda guc ve tork degerleri optimize edildi.",
    services: ["ECU Remap", "Diagnostik Kontrol", "Yol Testi"],
    details: {
      engine: "1.6L THP Turbo",
      year: "2012",
      fuelType: "Benzin",
      transmission: "Manuel 6 Ileri",
      originalTorque: "240 Nm",
      newTorque: "300 Nm",
      torqueGain: "+60 Nm",
      tuningType: "Stage 1 ECU Remap",
      workDone: [
        "Motor ECU yazilimi guncellendi",
        "Turbo basinci optimize edildi",
        "Yakit haritasi ayarlandi",
        "Atesleme zamanlama optimizasyonu",
        "Hava/yakit orani ince ayari",
        "Tam diagnostik kontrol",
        "Dyno testi ve yol testi",
      ],
      customerReview:
        "Aracimin performansi inanilmaz artti. Ozellikle orta devirlerde hissedilen guc artisi muhtesem. RS Garage ekibine cok tesekkurler!",
    },
  },
  {
    id: 2,
    slug: "audi-a3",
    title: "Audi A3",
    image: "/images/project-2.png",
    date: "Kasim 2024",
    category: "Stage 2 Tuning",
    originalPower: "150 HP",
    newPower: "210 HP",
    powerGain: "+60 HP",
    description:
      "Audi A3 2.0 TDI aracina Stage 2 yazilim uygulamasi yapildi. Downpipe ve intercooler yukseltmesiyle birlikte maksimum verim elde edildi.",
    services: ["ECU Remap", "Downpipe Montaj", "Intercooler Upgrade", "DPF Cozumu"],
    details: {
      engine: "2.0 TDI CR",
      year: "2019",
      fuelType: "Dizel",
      transmission: "DSG 7 Ileri",
      originalTorque: "340 Nm",
      newTorque: "430 Nm",
      torqueGain: "+90 Nm",
      tuningType: "Stage 2 Tuning",
      workDone: [
        "Stage 2 ECU yazilimi yuklendi",
        "Yuksek akisli downpipe montaji",
        "Upgrade intercooler montaji",
        "DPF yazilim cozumu",
        "EGR optimizasyonu",
        "DSG yazilimi guncellendi",
        "Kapsamli yol testi",
      ],
      customerReview:
        "Stage 2 sonrasi arac adeta bambaška oldu. Guc artisi muazzam ve yakit tuketimi bile iyilesti. Profesyonel is!",
    },
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
      "Volkswagen Polo 1.4 TDI aracina ekonomi odakli ECU Remap uygulandi. Yakit tasarrufu ve performans dengesi saglandi.",
    services: ["ECU Remap", "EGR Cozumu", "Diagnostik Kontrol"],
    details: {
      engine: "1.4 TDI",
      year: "2018",
      fuelType: "Dizel",
      transmission: "Manuel 5 Ileri",
      originalTorque: "230 Nm",
      newTorque: "280 Nm",
      torqueGain: "+50 Nm",
      tuningType: "Stage 1 ECU Remap",
      workDone: [
        "Ekonomi odakli ECU yazilimi",
        "EGR yazilim cozumu",
        "Turbo basinci optimizasyonu",
        "Yakit haritasi ince ayari",
        "Diagnostik kontrol",
        "Yol testi",
      ],
      customerReview:
        "Sehir ici kullanim icin mukemmel bir ayar yaptilar. Hem guclu hem de tasarruflu oldu aracim.",
    },
  },
  {
    id: 4,
    slug: "dacia-duster",
    title: "Dacia Duster",
    image: "/images/project-4.png",
    date: "Eylul 2024",
    category: "ECU Remap",
    originalPower: "115 HP",
    newPower: "145 HP",
    powerGain: "+30 HP",
    description:
      "Dacia Duster 1.5 dCi aracina Stage 1 ECU Remap uygulandi. Sehir ici ve sehir disi surus icin optimize edilmis guc egrisi saglandi.",
    services: ["ECU Remap", "Diagnostik Kontrol", "Yol Testi"],
    details: {
      engine: "1.5 dCi",
      year: "2020",
      fuelType: "Dizel",
      transmission: "Manuel 6 Ileri",
      originalTorque: "260 Nm",
      newTorque: "320 Nm",
      torqueGain: "+60 Nm",
      tuningType: "Stage 1 ECU Remap",
      workDone: [
        "ECU yazilimi guncellendi",
        "Turbo basinci optimize edildi",
        "Tork limitleyici kaldirildi",
        "Hiz sinirlayici ayarlandi",
        "Kapsamli diagnostik",
        "Yol testi tamamlandi",
      ],
      customerReview:
        "Duster artik cok daha guclu. Ozellikle rampalarda ve sollama manevralarinda fark cok belirgin.",
    },
  },
  {
    id: 5,
    slug: "bmw-320d",
    title: "BMW 320d",
    image: "/images/project-1.png",
    date: "Agustos 2024",
    category: "Stage 2 Tuning",
    originalPower: "184 HP",
    newPower: "245 HP",
    powerGain: "+61 HP",
    description:
      "BMW 320d F30 aracina Stage 2 yazilim ve mekanik modifikasyonlar uygulandi. Performans ve yakit ekonomisi arasinda mukemmel denge kuruldu.",
    services: ["ECU Remap", "DPF Delete", "EGR Cozumu", "Turbo Upgrade"],
    details: {
      engine: "2.0L N47 Diesel",
      year: "2015",
      fuelType: "Dizel",
      transmission: "Otomatik 8 Ileri",
      originalTorque: "380 Nm",
      newTorque: "480 Nm",
      torqueGain: "+100 Nm",
      tuningType: "Stage 2 Tuning",
      workDone: [
        "Stage 2 ECU yazilimi",
        "DPF yazilim cozumu",
        "EGR yazilim cozumu",
        "Turbo basinci arttirildi",
        "Atesleme haritasi optimize edildi",
        "Sanzinan yazilimi guncellendi",
        "Dyno ve yol testi",
      ],
      customerReview:
        "BMW performans deneyimi tamamen degisti. Sessiz ama cok guclu bir arac oldu. Kesinlikle tavsiye ederim!",
    },
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
      "Mercedes C220d W205 aracina premium ECU Remap uygulandi. Luks surus deneyimi korunarak performans artirildi.",
    services: ["ECU Remap", "TCU Tuning", "Diagnostik Kontrol"],
    details: {
      engine: "2.2L OM651",
      year: "2017",
      fuelType: "Dizel",
      transmission: "9G-Tronic Otomatik",
      originalTorque: "400 Nm",
      newTorque: "470 Nm",
      torqueGain: "+70 Nm",
      tuningType: "Stage 1 ECU Remap",
      workDone: [
        "Premium ECU yazilimi yuklendi",
        "TCU sanzinan yazilimi guncellendi",
        "Vites gecisleri optimize edildi",
        "Gaz tepkisi iyilestirildi",
        "Konfor modu korundu",
        "Kapsamli test sureci",
      ],
      customerReview:
        "Mercedes konforunu bozmadan harika bir guc artisi saglandi. Artik sollama cok daha guvenli ve keyifli.",
    },
  },
];

export const categories = ["Tumu", "ECU Remap", "Stage 2 Tuning", "DPF/EGR Cozum"];
