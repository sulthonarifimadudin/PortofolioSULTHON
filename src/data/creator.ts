export interface PhotoItem {
  id: string;
  title: string;
  category: 'graduation' | 'engagement';
  image: string;
  description?: string;
}

export interface ReelItem {
  id: string;
  url: string;
  platform: 'instagram' | 'tiktok';
  title: string;
  description: string;
  category: string;
  date: string;
  coverImage: string;
  localVideo?: string;
}

export interface FeaturedWork {
  id: string;
  title: string;
  client: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

export interface Client {
  name: string;
  logo?: string;
  testimonial?: string;
  role?: string;
}

export const getPhotoCategories = (lang: 'en' | 'id') => [
  { id: 'all', label: lang === 'id' ? 'Semua Karya' : 'All Works' },
  { id: 'graduation', label: 'Graduation' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'fnb', label: 'Food & Beverage' },
] as const;

export const getPhotos = (lang: 'en' | 'id'): PhotoItem[] => [];

export const getReels = (lang: 'en' | 'id'): ReelItem[] => [
  {
    id: 'r1',
    url: 'https://www.instagram.com/reel/C_X3T86yrT2/',
    platform: 'instagram',
    title: 'Graduation Highlight',
    category: 'Graduation',
    date: '2024',
    description: "EstePhotograph Graduation at UIN Bandung\n\n@dqoy793 #graduation #graduationphotoshoot",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r1.mp4'
  },
  {
    id: 'r2',
    url: 'https://www.instagram.com/reel/C8qNf08yxJ5/',
    platform: 'instagram',
    title: 'Graduation Highlight',
    category: 'Graduation',
    date: '2024',
    description: "Este.Photograph Graduation at Telkom University\n\n#telkomuniversity #graduation #graduationphotoshoot",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r2.mp4'
  },
  {
    id: 'r3',
    url: 'https://www.instagram.com/reel/C_TAYp8yhD4/',
    platform: 'instagram',
    title: 'Graduation Highlight',
    category: 'Graduation',
    date: '2024',
    description: "\"Hari ini bukan akhir, ini baru permulaan. Momen ini belum finish, ini adalah pengawalan dari sebuah perjuangan panjang. Saatnya buktikan, saatnya banggakan keluarga yang selalu ada di balik setiap langkah.\"\n\n@firsarinaldy\n#telkomuniversity #graduation #graduationphotoshoot",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r3.mp4'
  },
  {
    id: 'r4',
    url: 'https://www.instagram.com/reel/DA2u2CgSR0N/',
    platform: 'instagram',
    title: 'Graduation & Engagement',
    category: 'Graduation',
    date: '2024',
    description: "Este.Photograph Graduation n Engagement at Telkom University\n\n#telkomuniversity #graduation #graduationphotoshoot",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r4.mp4'
  },
  {
    id: 'r5',
    url: 'https://www.instagram.com/reel/DBa1sJdSRtM/',
    platform: 'instagram',
    title: 'Graduation Highlight',
    category: 'Graduation',
    date: '2024',
    description: "Este.Photograph Graduation n Engagement at Institus Teknologi Bandung\n\n#graduation #graduationphotoshoot",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r5.mp4'
  },
  {
    id: 'r6',
    url: 'https://www.instagram.com/reel/DCHyO8VybQY/',
    platform: 'instagram',
    title: 'Commercial Highlight',
    category: 'Commercial',
    date: '2024',
    description: "Yearbook @ventitrebratvae ™\nThx @satrchz_ @adityaedwin219\n\n#yearbook #annualyearbook #videographer #videoasthetic #vidoeproduction",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r6.mp4'
  },
  {
    id: 'r7',
    url: 'https://www.instagram.com/reel/Cy51_tMyq6G/',
    platform: 'instagram',
    title: 'Event Highlight',
    category: 'Event',
    date: '2024',
    description: "RASA SEHATI & Prada 1444 H DOCUMENTARY",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r7.mp4'
  },
  {
    id: 'r8',
    url: 'https://www.instagram.com/reel/C-IqjSvygZ-/',
    platform: 'instagram',
    title: 'Motor Cinematic',
    category: 'Cinematic',
    date: '2024',
    description: "Benelli Motobi 152 Caferacer edition.\nOwner: @athallahzakkii \n\n@estephotograph @adityaedwin219 @kangeditorberkelas @airtas_01 @benelliindonesia @benelli_moker #caferacerindonesia #benellimotobi200evo #caferacerstyle #caferacercinematicvideo",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r8.mp4'
  },
  {
    id: 'r9',
    url: 'https://www.instagram.com/tv/COy3-5lnhJ9/',
    platform: 'instagram',
    title: 'As-Syifa Production',
    category: 'Short Movie',
    date: '2024',
    description: "Rois, seorang santri berprestasi, menginjak jenjang terakhir di pondok pesantren. Kehidupannya tampak sempurna hingga ujian berat datang menguji kesabarannya. Akankah ia menemukan makna ‘penyembuh’ sebenarnya?\n\n𝙎𝙪𝙙𝙖𝙝𝙞 𝙂𝙖𝙡𝙖𝙪𝙢𝙪, 𝙈𝙖𝙧𝙞 𝙎𝙮𝙞’𝙖𝙧𝙠𝙖𝙣 𝘼𝙡-𝙌𝙪𝙧’𝙖𝙣 𝘽𝙚𝙧𝙨𝙖𝙢𝙖𝙠𝙪\n@ajrul.rois @pemudanontersesat\n@hawasi_uii @festivalquran_hawasi @uiiyogyakarta\n\n#FestivalAlQuran #HawasiUII #VideoSyiarQuranHawasi",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r9.mp4'
  },
  {
    id: 'r10',
    url: 'https://www.instagram.com/reel/CwnYpYryDq6/',
    platform: 'instagram',
    title: 'Cinematic City View',
    category: 'Cinematic',
    date: '2024',
    description: "Cinematic Surabaya City with  @airtas_01\n\n@adityaedwin219 @kangeditorberkelas @estephotograph #surabaya #surabayacityscape #surabayanightlife",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r10.mp4'
  },
  {
    id: 'r11',
    url: 'https://www.instagram.com/reel/Cr1H7QBAo9r/',
    platform: 'instagram',
    title: 'Event Highlight',
    category: 'Event',
    date: '2023',
    description: "Pawai Obor PRADA 1444 H",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r11.mp4'
  },
  {
    id: 'r12',
    url: 'https://www.instagram.com/reel/CqwQ0hsgQ-h/',
    platform: 'instagram',
    title: 'Cinematic View',
    category: 'Cinematic',
    date: '2023',
    description: "Ngabuburits vibes @telkomdormitory @telkomuniversity #takjil #romadhon2023",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r12.mp4'
  },
  {
    id: 'r13',
    url: 'https://www.instagram.com/reel/CtO5w-2ghH3/',
    platform: 'instagram',
    title: 'The Quiet',
    category: 'Cinematic',
    date: '2023',
    description: "The Quiet Telkom University",
    coverImage: '/images/portfolio/event-1.jpg',
    localVideo: '/videos/portfolio/r13.mp4'
  }
];

export const getFeaturedWorks = (lang: 'en' | 'id'): FeaturedWork[] => [
  {
    id: 'fw1',
    title: 'Ethereal Horizons',
    client: 'Luxe Magazine',
    date: '2024',
    category: 'Editorial',
    image: '/images/portfolio/featured-1.jpg',
    description: lang === 'id' ? 'Seri editorial sinematik yang mengeksplorasi persimpangan antara lanskap alam dan emosi manusia. Diambil di lokasi di tiga negara.' : 'A cinematic editorial series exploring the intersection of natural landscapes and human emotion. Shot on location across three countries.',
  },
  {
    id: 'fw2',
    title: 'The Grand Celebration',
    client: 'Private Client',
    date: '2024',
    category: 'Event',
    image: '/images/portfolio/featured-2.jpg',
    description: lang === 'id' ? 'Liputan pernikahan penuh termasuk potret pranikah, upacara, dan film sorotan sinematik untuk pernikahan taman yang intim.' : 'Full wedding coverage including pre-wedding portraits, ceremony, and a cinematic highlight film for an intimate garden wedding.',
  },
  {
    id: 'fw3',
    title: 'Brand Reimagined',
    client: 'Artisan Coffee Co.',
    date: '2023',
    category: 'Commercial',
    image: '/images/portfolio/featured-3.jpg',
    description: lang === 'id' ? 'Rebranding visual lengkap termasuk fotografi produk, bidikan gaya hidup, dan konten media sosial untuk merek kopi premium.' : 'Complete visual rebrand including product photography, lifestyle shots, and social media content for a premium coffee brand.',
  },
];

export const getClients = (lang: 'en' | 'id'): Client[] => [
  {
    name: 'Luxe Magazine',
    testimonial: lang === 'id' ? 'Sulthon memiliki insting yang luar biasa terhadap detail. Setiap frame menceritakan kisah yang sangat beresonansi dengan audiens kami.' : 'Sulthon has an incredible eye for detail. Every frame tells a story that resonates deeply with our audience.',
    role: 'Creative Director',
  },
  {
    name: 'Artisan Coffee Co.',
    testimonial: lang === 'id' ? 'Fotografi produknya melampaui ekspektasi kami. Keterlibatan online kami meningkat sebesar 40% setelah rebrand.' : 'The product photography exceeded our expectations. Our online engagement increased by 40% after the rebrand.',
    role: 'Marketing Manager',
  },
  {
    name: 'Tech Innovators Summit',
    testimonial: lang === 'id' ? 'Profesional, kreatif, dan dapat diandalkan. Dokumentasi acara dikirimkan sebelum jadwal dan terlihat memukau.' : 'Professional, creative, and reliable. The event documentation was delivered ahead of schedule and looked stunning.',
    role: 'Event Coordinator',
  },
  {
    name: 'Eternal Moments Wedding',
    testimonial: lang === 'id' ? 'Film pernikahan kami sungguh magis. Sulthon mengabadikan momen-momen yang bahkan kami tidak tahu sedang terjadi.' : 'Our wedding film was absolutely magical. Sulthon captured moments we didn\'t even know were happening.',
    role: 'Client',
  },
  {
    name: 'Urban Style Co.',
    testimonial: lang === 'id' ? 'Fotografi gaya hidup dengan sempurna menangkap esensi merek kami. Bekerja dengan Sulthon selalu menyenangkan.' : 'The lifestyle photography perfectly captured our brand essence. Working with Sulthon is always a pleasure.',
    role: 'Brand Manager',
  },
  {
    name: 'National University',
    testimonial: lang === 'id' ? 'Liputan fotografi kelulusan yang komprehensif dengan hasil yang indah. Para lulusan kami sangat senang.' : 'Comprehensive graduation photography coverage with beautiful results. Our graduates were thrilled.',
    role: 'Events Department',
  },
];
