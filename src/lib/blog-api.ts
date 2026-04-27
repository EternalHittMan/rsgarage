/**
 * WordPress-style Blog API
 * Based on WordPress APIs: REST API, Options API, Metadata API
 * 
 * Features:
 * - REST API style endpoints
 * - Mock mode for development
 * - Metadata support for posts
 * - Options/Settings management
 * - Taxonomy (categories, tags) support
 */

// ============================================
// Types (WordPress-style)
// ============================================

export interface WP_Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  status: "publish" | "draft" | "pending" | "private";
  featured_media: string;
  categories: number[];
  tags: number[];
  meta: WP_PostMeta;
  author: number;
}

export interface WP_PostMeta {
  // Vehicle info
  vehicle_brand?: string;
  vehicle_model?: string;
  vehicle_year?: string;
  engine_type?: string;
  fuel_type?: string;
  transmission?: string;
  
  // Performance data
  original_power?: string;
  new_power?: string;
  power_gain?: string;
  original_torque?: string;
  new_torque?: string;
  torque_gain?: string;
  
  // Tuning info
  tuning_type?: string;
  services?: string[];
  work_done?: string[];
  
  // Customer
  customer_review?: string;
  customer_rating?: number;
}

export interface WP_Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  parent: number;
}

export interface WP_Tag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WP_Author {
  id: number;
  name: string;
  slug: string;
  avatar_urls: {
    "24": string;
    "48": string;
    "96": string;
  };
}

export interface WP_Options {
  site_title: string;
  site_description: string;
  posts_per_page: number;
  date_format: string;
  time_format: string;
  blog_public: boolean;
}

export interface WP_Query {
  page?: number;
  per_page?: number;
  search?: string;
  categories?: number[];
  tags?: number[];
  status?: string;
  orderby?: "date" | "title" | "id" | "modified";
  order?: "asc" | "desc";
  slug?: string;
}

export interface WP_Response<T> {
  data: T;
  total: number;
  total_pages: number;
  current_page: number;
}

// ============================================
// Mock Data
// ============================================

const mockCategories: WP_Category[] = [
  { id: 1, name: "ECU Remap", slug: "ecu-remap", description: "ECU yazılım optimizasyonu", count: 3, parent: 0 },
  { id: 2, name: "Stage 2 Tuning", slug: "stage-2-tuning", description: "Gelişmiş performans tuning", count: 2, parent: 0 },
  { id: 3, name: "DPF/EGR Çözüm", slug: "dpf-egr-cozum", description: "Emisyon sistemi çözümleri", count: 1, parent: 0 },
];

const mockTags: WP_Tag[] = [
  { id: 1, name: "Dizel", slug: "dizel", count: 4 },
  { id: 2, name: "Benzin", slug: "benzin", count: 2 },
  { id: 3, name: "Turbo", slug: "turbo", count: 5 },
  { id: 4, name: "DSG", slug: "dsg", count: 2 },
  { id: 5, name: "Manuel", slug: "manuel", count: 3 },
];

const mockAuthors: WP_Author[] = [
  {
    id: 1,
    name: "RS Garage",
    slug: "rs-garage",
    avatar_urls: {
      "24": "/images/logo.png",
      "48": "/images/logo.png",
      "96": "/images/logo.png",
    },
  },
];

const mockPosts: WP_Post[] = [
  {
    id: 1,
    slug: "peugeot-rcz-thp",
    title: { rendered: "Peugeot RCZ THP" },
    content: {
      rendered: `
        <p>Peugeot RCZ THP 156 aracına uygulanan Stage 1 ECU Remap ile performans değerleri önemli ölçüde artırıldı.</p>
        <p>Araç sahibinin talebi doğrultusunda güç ve tork değerleri optimize edildi. Motor ECU yazılımı tamamen yeniden haritalandırılarak, turbo basıncı ve yakıt haritası ayarlandı.</p>
        <h3>Yapılan İşlemler</h3>
        <ul>
          <li>Motor ECU yazılımı güncellendi</li>
          <li>Turbo basıncı optimize edildi</li>
          <li>Yakıt haritası ayarlandı</li>
          <li>Ateşleme zamanlama optimizasyonu</li>
          <li>Hava/yakıt oranı ince ayarı</li>
          <li>Tam diagnostik kontrol</li>
          <li>Dyno testi ve yol testi</li>
        </ul>
      `,
    },
    excerpt: {
      rendered: "Peugeot RCZ THP 156 aracına uygulanan Stage 1 ECU Remap ile performans değerleri önemli ölçüde artırıldı.",
    },
    date: "2024-12-15T10:00:00",
    modified: "2024-12-15T10:00:00",
    status: "publish",
    featured_media: "/images/project-1.png",
    categories: [1],
    tags: [2, 3],
    author: 1,
    meta: {
      vehicle_brand: "Peugeot",
      vehicle_model: "RCZ THP",
      vehicle_year: "2012",
      engine_type: "1.6L THP Turbo",
      fuel_type: "Benzin",
      transmission: "Manuel 6 İleri",
      original_power: "156 HP",
      new_power: "195 HP",
      power_gain: "+39 HP",
      original_torque: "240 Nm",
      new_torque: "300 Nm",
      torque_gain: "+60 Nm",
      tuning_type: "Stage 1 ECU Remap",
      services: ["ECU Remap", "Diagnostik Kontrol", "Yol Testi"],
      work_done: [
        "Motor ECU yazılımı güncellendi",
        "Turbo basıncı optimize edildi",
        "Yakıt haritası ayarlandı",
        "Ateşleme zamanlama optimizasyonu",
        "Hava/yakıt oranı ince ayarı",
        "Tam diagnostik kontrol",
        "Dyno testi ve yol testi",
      ],
      customer_review: "Aracımın performansı inanılmaz arttı. Özellikle orta devirlerde hissedilen güç artışı muhteşem. RS Garage ekibine çok teşekkürler!",
      customer_rating: 5,
    },
  },
  {
    id: 2,
    slug: "audi-a3",
    title: { rendered: "Audi A3" },
    content: {
      rendered: `
        <p>Audi A3 2.0 TDI aracına Stage 2 yazılım uygulaması yapıldı.</p>
        <p>Downpipe ve intercooler yükseltmesiyle birlikte maksimum verim elde edildi. DSG şanzıman yazılımı da güncellenerek vites geçişleri optimize edildi.</p>
      `,
    },
    excerpt: {
      rendered: "Audi A3 2.0 TDI aracına Stage 2 yazılım uygulaması yapıldı. Downpipe ve intercooler yükseltmesiyle birlikte maksimum verim elde edildi.",
    },
    date: "2024-11-20T14:30:00",
    modified: "2024-11-20T14:30:00",
    status: "publish",
    featured_media: "/images/project-2.png",
    categories: [2],
    tags: [1, 3, 4],
    author: 1,
    meta: {
      vehicle_brand: "Audi",
      vehicle_model: "A3",
      vehicle_year: "2019",
      engine_type: "2.0 TDI CR",
      fuel_type: "Dizel",
      transmission: "DSG 7 İleri",
      original_power: "150 HP",
      new_power: "210 HP",
      power_gain: "+60 HP",
      original_torque: "340 Nm",
      new_torque: "430 Nm",
      torque_gain: "+90 Nm",
      tuning_type: "Stage 2 Tuning",
      services: ["ECU Remap", "Downpipe Montaj", "Intercooler Upgrade", "DPF Çözümü"],
      work_done: [
        "Stage 2 ECU yazılımı yüklendi",
        "Yüksek akışlı downpipe montajı",
        "Upgrade intercooler montajı",
        "DPF yazılım çözümü",
        "EGR optimizasyonu",
        "DSG yazılımı güncellendi",
        "Kapsamlı yol testi",
      ],
      customer_review: "Stage 2 sonrası araç adeta bambaşka oldu. Güç artışı muazzam ve yakıt tüketimi bile iyileşti. Profesyonel iş!",
      customer_rating: 5,
    },
  },
  {
    id: 3,
    slug: "volkswagen-polo",
    title: { rendered: "Volkswagen Polo" },
    content: {
      rendered: `
        <p>Volkswagen Polo 1.4 TDI aracına ekonomi odaklı ECU Remap uygulandı.</p>
        <p>Yakıt tasarrufu ve performans dengesi sağlandı. EGR yazılım çözümü de uygulanarak motor verimliliği artırıldı.</p>
      `,
    },
    excerpt: {
      rendered: "Volkswagen Polo 1.4 TDI aracına ekonomi odaklı ECU Remap uygulandı. Yakıt tasarrufu ve performans dengesi sağlandı.",
    },
    date: "2024-10-10T09:15:00",
    modified: "2024-10-10T09:15:00",
    status: "publish",
    featured_media: "/images/project-3.png",
    categories: [1],
    tags: [1, 5],
    author: 1,
    meta: {
      vehicle_brand: "Volkswagen",
      vehicle_model: "Polo",
      vehicle_year: "2018",
      engine_type: "1.4 TDI",
      fuel_type: "Dizel",
      transmission: "Manuel 5 İleri",
      original_power: "95 HP",
      new_power: "125 HP",
      power_gain: "+30 HP",
      original_torque: "230 Nm",
      new_torque: "280 Nm",
      torque_gain: "+50 Nm",
      tuning_type: "Stage 1 ECU Remap",
      services: ["ECU Remap", "EGR Çözümü", "Diagnostik Kontrol"],
      work_done: [
        "Ekonomi odaklı ECU yazılımı",
        "EGR yazılım çözümü",
        "Turbo basıncı optimizasyonu",
        "Yakıt haritası ince ayarı",
        "Diagnostik kontrol",
        "Yol testi",
      ],
      customer_review: "Şehir içi kullanım için mükemmel bir ayar yaptılar. Hem güçlü hem de tasarruflu oldu aracım.",
      customer_rating: 5,
    },
  },
  {
    id: 4,
    slug: "dacia-duster",
    title: { rendered: "Dacia Duster" },
    content: {
      rendered: `
        <p>Dacia Duster 1.5 dCi aracına Stage 1 ECU Remap uygulandı.</p>
        <p>Şehir içi ve şehir dışı sürüş için optimize edilmiş güç eğrisi sağlandı.</p>
      `,
    },
    excerpt: {
      rendered: "Dacia Duster 1.5 dCi aracına Stage 1 ECU Remap uygulandı. Şehir içi ve şehir dışı sürüş için optimize edilmiş güç eğrisi sağlandı.",
    },
    date: "2024-09-05T16:00:00",
    modified: "2024-09-05T16:00:00",
    status: "publish",
    featured_media: "/images/project-4.png",
    categories: [1],
    tags: [1, 5],
    author: 1,
    meta: {
      vehicle_brand: "Dacia",
      vehicle_model: "Duster",
      vehicle_year: "2020",
      engine_type: "1.5 dCi",
      fuel_type: "Dizel",
      transmission: "Manuel 6 İleri",
      original_power: "115 HP",
      new_power: "145 HP",
      power_gain: "+30 HP",
      original_torque: "260 Nm",
      new_torque: "320 Nm",
      torque_gain: "+60 Nm",
      tuning_type: "Stage 1 ECU Remap",
      services: ["ECU Remap", "Diagnostik Kontrol", "Yol Testi"],
      work_done: [
        "ECU yazılımı güncellendi",
        "Turbo basıncı optimize edildi",
        "Tork limitleyici kaldırıldı",
        "Hız sınırlayıcı ayarlandı",
        "Kapsamlı diagnostik",
        "Yol testi tamamlandı",
      ],
      customer_review: "Duster artık çok daha güçlü. Özellikle rampalarda ve sollama manevralarında fark çok belirgin.",
      customer_rating: 5,
    },
  },
  {
    id: 5,
    slug: "bmw-320d",
    title: { rendered: "BMW 320d" },
    content: {
      rendered: `
        <p>BMW 320d F30 aracına Stage 2 yazılım ve mekanik modifikasyonlar uygulandı.</p>
        <p>Performans ve yakıt ekonomisi arasında mükemmel denge kuruldu.</p>
      `,
    },
    excerpt: {
      rendered: "BMW 320d F30 aracına Stage 2 yazılım ve mekanik modifikasyonlar uygulandı. Performans ve yakıt ekonomisi arasında mükemmel denge kuruldu.",
    },
    date: "2024-08-12T11:30:00",
    modified: "2024-08-12T11:30:00",
    status: "publish",
    featured_media: "/images/project-1.png",
    categories: [2],
    tags: [1, 3],
    author: 1,
    meta: {
      vehicle_brand: "BMW",
      vehicle_model: "320d",
      vehicle_year: "2015",
      engine_type: "2.0L N47 Diesel",
      fuel_type: "Dizel",
      transmission: "Otomatik 8 İleri",
      original_power: "184 HP",
      new_power: "245 HP",
      power_gain: "+61 HP",
      original_torque: "380 Nm",
      new_torque: "480 Nm",
      torque_gain: "+100 Nm",
      tuning_type: "Stage 2 Tuning",
      services: ["ECU Remap", "DPF Delete", "EGR Çözümü", "Turbo Upgrade"],
      work_done: [
        "Stage 2 ECU yazılımı",
        "DPF yazılım çözümü",
        "EGR yazılım çözümü",
        "Turbo basıncı artırıldı",
        "Ateşleme haritası optimize edildi",
        "Şanzıman yazılımı güncellendi",
        "Dyno ve yol testi",
      ],
      customer_review: "BMW performans deneyimi tamamen değişti. Sessiz ama çok güçlü bir araç oldu. Kesinlikle tavsiye ederim!",
      customer_rating: 5,
    },
  },
  {
    id: 6,
    slug: "mercedes-c220d",
    title: { rendered: "Mercedes C220d" },
    content: {
      rendered: `
        <p>Mercedes C220d W205 aracına premium ECU Remap uygulandı.</p>
        <p>Lüks sürüş deneyimi korunarak performans artırıldı.</p>
      `,
    },
    excerpt: {
      rendered: "Mercedes C220d W205 aracına premium ECU Remap uygulandı. Lüks sürüş deneyimi korunarak performans artırıldı.",
    },
    date: "2024-07-25T13:45:00",
    modified: "2024-07-25T13:45:00",
    status: "publish",
    featured_media: "/images/project-2.png",
    categories: [1],
    tags: [1, 3],
    author: 1,
    meta: {
      vehicle_brand: "Mercedes",
      vehicle_model: "C220d",
      vehicle_year: "2017",
      engine_type: "2.2L OM651",
      fuel_type: "Dizel",
      transmission: "9G-Tronic Otomatik",
      original_power: "170 HP",
      new_power: "215 HP",
      power_gain: "+45 HP",
      original_torque: "400 Nm",
      new_torque: "470 Nm",
      torque_gain: "+70 Nm",
      tuning_type: "Stage 1 ECU Remap",
      services: ["ECU Remap", "TCU Tuning", "Diagnostik Kontrol"],
      work_done: [
        "Premium ECU yazılımı yüklendi",
        "TCU şanzıman yazılımı güncellendi",
        "Vites geçişleri optimize edildi",
        "Gaz tepkisi iyileştirildi",
        "Konfor modu korundu",
        "Kapsamlı test süreci",
      ],
      customer_review: "Mercedes konforunu bozmadan harika bir güç artışı sağlandı. Artık sollama çok daha güvenli ve keyifli.",
      customer_rating: 5,
    },
  },
];

const mockOptions: WP_Options = {
  site_title: "RS Garage Projeler",
  site_description: "Profesyonel araç performans tuning projeleri",
  posts_per_page: 9,
  date_format: "d MMMM yyyy",
  time_format: "HH:mm",
  blog_public: true,
};

// ============================================
// API Configuration
// ============================================

interface BlogAPIConfig {
  mockMode: boolean;
  baseUrl?: string;
  apiKey?: string;
}

let apiConfig: BlogAPIConfig = {
  mockMode: true, // Default to mock mode
};

export function configureBlogAPI(config: Partial<BlogAPIConfig>) {
  apiConfig = { ...apiConfig, ...config };
}

export function isMockMode(): boolean {
  return apiConfig.mockMode;
}

// ============================================
// REST API Style Functions
// ============================================

/**
 * Get posts with WordPress-style query parameters
 */
export async function getPosts(query: WP_Query = {}): Promise<WP_Response<WP_Post[]>> {
  if (apiConfig.mockMode) {
    return getMockPosts(query);
  }
  
  // Real API call would go here
  const params = new URLSearchParams();
  if (query.page) params.append("page", query.page.toString());
  if (query.per_page) params.append("per_page", query.per_page.toString());
  if (query.search) params.append("search", query.search);
  if (query.categories) params.append("categories", query.categories.join(","));
  if (query.orderby) params.append("orderby", query.orderby);
  if (query.order) params.append("order", query.order);
  
  const response = await fetch(`${apiConfig.baseUrl}/wp-json/wp/v2/posts?${params}`);
  const data = await response.json();
  const total = parseInt(response.headers.get("X-WP-Total") || "0");
  const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "0");
  
  return {
    data,
    total,
    total_pages: totalPages,
    current_page: query.page || 1,
  };
}

function getMockPosts(query: WP_Query): WP_Response<WP_Post[]> {
  let filtered = [...mockPosts];
  
  // Filter by status
  if (query.status) {
    filtered = filtered.filter((p) => p.status === query.status);
  } else {
    filtered = filtered.filter((p) => p.status === "publish");
  }
  
  // Filter by search
  if (query.search) {
    const searchLower = query.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.rendered.toLowerCase().includes(searchLower) ||
        p.content.rendered.toLowerCase().includes(searchLower)
    );
  }
  
  // Filter by categories
  if (query.categories && query.categories.length > 0) {
    filtered = filtered.filter((p) =>
      p.categories.some((c) => query.categories!.includes(c))
    );
  }
  
  // Filter by tags
  if (query.tags && query.tags.length > 0) {
    filtered = filtered.filter((p) =>
      p.tags.some((t) => query.tags!.includes(t))
    );
  }
  
  // Filter by slug
  if (query.slug) {
    filtered = filtered.filter((p) => p.slug === query.slug);
  }
  
  // Sort
  const orderby = query.orderby || "date";
  const order = query.order || "desc";
  
  filtered.sort((a, b) => {
    let comparison = 0;
    switch (orderby) {
      case "date":
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
        break;
      case "modified":
        comparison = new Date(a.modified).getTime() - new Date(b.modified).getTime();
        break;
      case "title":
        comparison = a.title.rendered.localeCompare(b.title.rendered);
        break;
      case "id":
        comparison = a.id - b.id;
        break;
    }
    return order === "desc" ? -comparison : comparison;
  });
  
  // Pagination
  const page = query.page || 1;
  const perPage = query.per_page || mockOptions.posts_per_page;
  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const paginatedData = filtered.slice(start, start + perPage);
  
  return {
    data: paginatedData,
    total,
    total_pages: totalPages,
    current_page: page,
  };
}

/**
 * Get a single post by ID or slug
 */
export async function getPost(idOrSlug: number | string): Promise<WP_Post | null> {
  if (apiConfig.mockMode) {
    if (typeof idOrSlug === "number") {
      return mockPosts.find((p) => p.id === idOrSlug) || null;
    }
    return mockPosts.find((p) => p.slug === idOrSlug) || null;
  }
  
  const endpoint = typeof idOrSlug === "number" 
    ? `${apiConfig.baseUrl}/wp-json/wp/v2/posts/${idOrSlug}`
    : `${apiConfig.baseUrl}/wp-json/wp/v2/posts?slug=${idOrSlug}`;
  
  const response = await fetch(endpoint);
  if (!response.ok) return null;
  
  const data = await response.json();
  return Array.isArray(data) ? data[0] || null : data;
}

/**
 * Get categories
 */
export async function getCategories(): Promise<WP_Category[]> {
  if (apiConfig.mockMode) {
    return mockCategories;
  }
  
  const response = await fetch(`${apiConfig.baseUrl}/wp-json/wp/v2/categories`);
  return response.json();
}

/**
 * Get a single category
 */
export async function getCategory(idOrSlug: number | string): Promise<WP_Category | null> {
  if (apiConfig.mockMode) {
    if (typeof idOrSlug === "number") {
      return mockCategories.find((c) => c.id === idOrSlug) || null;
    }
    return mockCategories.find((c) => c.slug === idOrSlug) || null;
  }
  
  const endpoint = typeof idOrSlug === "number"
    ? `${apiConfig.baseUrl}/wp-json/wp/v2/categories/${idOrSlug}`
    : `${apiConfig.baseUrl}/wp-json/wp/v2/categories?slug=${idOrSlug}`;
  
  const response = await fetch(endpoint);
  if (!response.ok) return null;
  
  const data = await response.json();
  return Array.isArray(data) ? data[0] || null : data;
}

/**
 * Get tags
 */
export async function getTags(): Promise<WP_Tag[]> {
  if (apiConfig.mockMode) {
    return mockTags;
  }
  
  const response = await fetch(`${apiConfig.baseUrl}/wp-json/wp/v2/tags`);
  return response.json();
}

/**
 * Get site options
 */
export async function getOptions(): Promise<WP_Options> {
  if (apiConfig.mockMode) {
    return mockOptions;
  }
  
  const response = await fetch(`${apiConfig.baseUrl}/wp-json/wp/v2/settings`);
  return response.json();
}

/**
 * Get author
 */
export async function getAuthor(id: number): Promise<WP_Author | null> {
  if (apiConfig.mockMode) {
    return mockAuthors.find((a) => a.id === id) || null;
  }
  
  const response = await fetch(`${apiConfig.baseUrl}/wp-json/wp/v2/users/${id}`);
  if (!response.ok) return null;
  return response.json();
}

// ============================================
// Metadata API
// ============================================

/**
 * Get post meta value
 */
export function getPostMeta<K extends keyof WP_PostMeta>(
  post: WP_Post,
  key: K
): WP_PostMeta[K] | undefined {
  return post.meta[key];
}

/**
 * Get all post meta
 */
export function getAllPostMeta(post: WP_Post): WP_PostMeta {
  return post.meta;
}

// ============================================
// Helper Functions
// ============================================

/**
 * Format date according to site options
 */
export function formatPostDate(date: string): string {
  const d = new Date(date);
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/**
 * Get category names for a post
 */
export function getPostCategoryNames(post: WP_Post): string[] {
  return post.categories.map((catId) => {
    const cat = mockCategories.find((c) => c.id === catId);
    return cat ? cat.name : "";
  }).filter(Boolean);
}

/**
 * Get tag names for a post
 */
export function getPostTagNames(post: WP_Post): string[] {
  return post.tags.map((tagId) => {
    const tag = mockTags.find((t) => t.id === tagId);
    return tag ? tag.name : "";
  }).filter(Boolean);
}

/**
 * Convert WP_Post to simple Project format for compatibility
 */
export function wpPostToProject(post: WP_Post) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    image: post.featured_media,
    date: formatPostDate(post.date),
    category: getPostCategoryNames(post)[0] || "",
    originalPower: post.meta.original_power || "",
    newPower: post.meta.new_power || "",
    powerGain: post.meta.power_gain || "",
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
    services: post.meta.services || [],
    details: {
      engine: post.meta.engine_type,
      year: post.meta.vehicle_year,
      fuelType: post.meta.fuel_type,
      transmission: post.meta.transmission,
      originalTorque: post.meta.original_torque,
      newTorque: post.meta.new_torque,
      torqueGain: post.meta.torque_gain,
      tuningType: post.meta.tuning_type,
      workDone: post.meta.work_done,
      customerReview: post.meta.customer_review,
    },
  };
}
