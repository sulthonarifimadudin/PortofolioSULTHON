export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'fullstack' | 'iot' | 'devops' | 'database';
}

export interface TechItem {
  name: string;
  icon: string;
  category: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  video?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  isPortrait?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  image?: string;
  tech?: string;
}

export const getSkills = (lang: 'en' | 'id'): Skill[] => [
  { name: 'Next.js', level: 90, category: 'fullstack' },
  { name: 'React', level: 88, category: 'frontend' },
  { name: 'Vue', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'TypeScript', level: 82, category: 'frontend' },
  { name: 'Supabase', level: 80, category: 'database' },
  { name: 'SQL', level: 85, category: 'database' },
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'Git / GitHub', level: 90, category: 'devops' },
  { name: 'YOLO (AI Vision)', level: 75, category: 'backend' },
  { name: 'Raspberry Pi', level: 85, category: 'iot' },
  { name: 'Arduino / ESP32', level: 80, category: 'iot' },
];

export const getTechStack = (lang: 'en' | 'id'): TechItem[] => [
  { name: 'Next.js', icon: 'nextjs', category: 'Full-stack', description: lang === 'id' ? 'Framework React teratas' : 'Top React framework' },
  { name: 'React', icon: 'react', category: 'Frontend', description: lang === 'id' ? 'Pustaka komponen UI' : 'UI component library' },
  { name: 'Vue', icon: 'vue', category: 'Frontend', description: lang === 'id' ? 'Framework web progresif' : 'Progressive web framework' },
  { name: 'TypeScript', icon: 'typescript', category: 'Language', description: lang === 'id' ? 'Superset JavaScript' : 'JavaScript superset' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'Frontend', description: lang === 'id' ? 'Framework CSS utilitas' : 'Utility-first CSS framework' },
  { name: 'React Native', icon: 'react', category: 'Mobile', description: lang === 'id' ? 'Framework aplikasi mobile' : 'Mobile app framework' },
  { name: 'Android Studio', icon: 'androidstudio', category: 'Mobile', description: lang === 'id' ? 'IDE resmi Android' : 'Official Android IDE' },
  { name: 'Node.js', icon: 'nodejs', category: 'Backend', description: lang === 'id' ? 'Lingkungan eksekusi JavaScript' : 'JavaScript runtime' },
  { name: 'Supabase', icon: 'supabase', category: 'Database', description: lang === 'id' ? 'Platform BaaS berbasis SQL' : 'SQL-based BaaS platform' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'Database', description: lang === 'id' ? 'Database relasional andal' : 'Reliable relational database' },
  { name: 'Firebase', icon: 'firebase', category: 'Backend', description: lang === 'id' ? 'Platform pengembangan BaaS' : 'BaaS development platform' },
  { name: 'Docker', icon: 'docker', category: 'DevOps', description: lang === 'id' ? 'Platform kontainerisasi' : 'Container platform' },
  { name: 'Vercel', icon: 'vercel', category: 'DevOps', description: lang === 'id' ? 'Platform cloud frontend' : 'Frontend cloud platform' },
  { name: 'VS Code', icon: 'vscode', category: 'Tools', description: lang === 'id' ? 'Code editor utama' : 'Primary code editor' },
  { name: 'Antigravity', icon: 'antigravity', category: 'AI', description: lang === 'id' ? 'Asisten AI coding' : 'AI coding assistant' },
  { name: 'Figma', icon: 'figma', category: 'Design', description: lang === 'id' ? 'Alat desain antarmuka' : 'UI design tool' },
  { name: 'YOLO / AI', icon: 'ai', category: 'AI', description: lang === 'id' ? 'Computer Vision (Object Detection)' : 'Computer Vision (Object Detection)' },
  { name: 'Raspberry Pi', icon: 'raspberrypi', category: 'IoT', description: lang === 'id' ? 'SBC untuk IoT' : 'SBC for IoT' },
];

export const getSoftwareProjects = (lang: 'en' | 'id'): Project[] => [
  {
    title: 'Este Finance',
    description: lang === 'id' ? 'Sistem manajemen keuangan dan dashboard interaktif untuk Este Finance. Dilengkapi dengan analitik data, pelacakan transaksi, dan visualisasi metrik secara real-time.' : 'Financial management system and interactive dashboard for Este Finance. Features data analytics, transaction tracking, and real-time metric visualization.',
    tech: ['React 19', 'Vite', 'Vanilla CSS', 'Supabase', 'Capacitor', 'React Router'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/Este Finance_00-00-12.jpg',
    video: '/videos/ENGINER/Este Finance.mp4',
    github: 'https://github.com/sulthonarifimadudin/EsteFinance',
    featured: true,
    isPortrait: true,
  },
  {
    title: 'Digital Invitation Wedding',
    description: lang === 'id' ? 'Platform pembuatan undangan pernikahan digital yang elegan dan responsif. Mendukung fitur RSVP, galeri foto, kisah cinta, dan musik latar.' : 'An elegant and responsive digital wedding invitation platform. Supports RSVP functionality, photo galleries, love stories, and background music.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/Digital Invitation Wedding_00-00-03.jpg',
    video: '/videos/ENGINER/Digital Invitation Wedding.mp4',
    github: 'https://github.com/sulthonarifimadudin/Undangan-Pernikahan-Fahmi-Shelsy',
    featured: true,
  },
  {
    title: 'Body Worn Camera Monitoring',
    description: lang === 'id' ? 'Sistem monitoring kamera yang dipasang di tubuh (body worn) untuk kebutuhan keamanan dan pengawasan secara real-time. Dilengkapi integrasi streaming video dan pelacakan lokasi.' : 'Body worn camera monitoring system for real-time security and surveillance needs. Equipped with video streaming integration and location tracking.',
    tech: ['React', 'Node.js', 'Socket.io', 'MySQL', 'YOLOv8', 'FFmpeg', 'Docker'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/Body Worn Camera Monitoring_00-00-04.jpg',
    video: '/videos/ENGINER/Body Worn Camera Monitoring.mp4',
    github: 'https://github.com/sulthonarifimadudin/BodyWornCAMERAWeb',
    featured: true,
  },
  {
    title: 'Este Run',
    description: lang === 'id' ? 'Aplikasi pencatatan aktivitas lari dan manajemen event lari. Memudahkan peserta untuk mendaftar, melihat rute, dan melacak progres lari mereka.' : 'Running activity tracking and running event management application. Makes it easy for participants to register, view routes, and track their running progress.',
    tech: ['React', 'Vite', 'Supabase', 'Capacitor', 'Leaflet', 'Gemini AI', 'Framer Motion', 'Chart.js'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/Este Run_00-00-15.jpg',
    video: '/videos/ENGINER/Este Run.mp4',
    github: 'https://github.com/sulthonarifimadudin/Este.RUN',
    featured: true,
    isPortrait: true,
  },
  {
    title: 'Bus Trans Jatim',
    description: lang === 'id' ? 'Sistem pelacakan dan pemantauan armada Bus Trans Jatim berbasis perangkat keras IoT. Memungkinkan pemantauan lokasi real-time, kecepatan, dan manajemen armada.' : 'Trans Jatim Bus fleet tracking and monitoring system based on IoT hardware. Enables real-time location monitoring, speed tracking, and fleet management.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Leaflet', 'Supabase', 'React Query'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/Bus Trans Jatim_00-00-23.jpg',
    video: '/videos/ENGINER/Bus Trans Jatim.mp4',
    github: 'https://github.com/sulthonarifimadudin/TransJatimWEB',
    featured: true,
  },
  {
    title: 'ESTE.PHOTOGRAPH Graduation',
    description: lang === 'id' ? 'Platform pemesanan dan manajemen layanan fotografi wisuda untuk ESTE.PHOTOGRAPH. Mendukung penyimpanan data booking secara real-time, fungsi webhook, dan sistem dashboard.' : 'Graduation photography booking and management platform for ESTE.PHOTOGRAPH. Supports real-time booking data storage, webhook functionality, and a dashboard system.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Vercel'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/Este Photograph GRADUATION_00-00-00.jpg',
    video: '/videos/ENGINER/Este Photograph GRADUATION.mp4',
    github: 'https://github.com/sulthonarifimadudin/Este.Photograph-Graduation',
    featured: true,
  },
];

export const getIotProjects = (lang: 'en' | 'id'): Project[] => [
  {
    title: 'Pendingin Otomatis Berbasis PID',
    description: lang === 'id' ? 'Sistem pendingin otomatis menggunakan kendali PID untuk menstabilkan suhu secara presisi. Dilengkapi dengan sensor suhu dan aktuator kipas.' : 'Automatic cooling system using a PID controller to stabilize temperature precisely. Equipped with a temperature sensor and actuator fan.',
    tech: ['Arduino', 'C++', 'PID Controller', 'LM35 Sensor', 'DC Fan'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/Pendingin Otomatis dengan sensor suhu Berbasis PID.jpg',
    github: '#',
    featured: true,
  },
  {
    title: 'Tong Sampah Pintar Otomatis',
    description: lang === 'id' ? 'Tong sampah otomatis yang dapat membuka tutupnya sendiri ketika mendeteksi keberadaan tangan atau benda menggunakan sensor ultrasonik.' : 'Automatic smart trash can that opens its lid automatically when it detects the presence of hands or objects using an ultrasonic sensor.',
    tech: ['Arduino', 'C++', 'Ultrasonic Sensor', 'Servo Motor'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/Tong Sampah Otomatis.jpg',
    github: '#',
    featured: true,
  },
  {
    title: 'Body Worn Camera (Hardware)',
    description: lang === 'id' ? 'Perangkat keras Body Worn Camera yang dirancang untuk merekam video dan audio secara portabel, dilengkapi dengan modul transmisi data untuk live streaming.' : 'Body Worn Camera hardware designed for portable video and audio recording, equipped with a data transmission module for live streaming.',
    tech: ['Raspberry Pi', 'Python', 'Camera Module', 'Neo-6M GPS'],
    image: '/FOTO2/ENGINEER/Foto Tumbnail/BODY WORN CAMERA (1).png',
    github: '#',
    featured: true,
  },
];

export const getExperiences = (lang: 'en' | 'id'): Experience[] => [
  {
    company: 'ProCodeCG (Bandung)',
    role: lang === 'id' ? 'Intern Software Engineer' : 'Software Engineer Intern',
    period: '2026',
    description: lang === 'id'
      ? 'Membuat dan mengembangkan berbagai proyek aplikasi web dan mobile dengan integrasi fitur Artificial Intelligence (AI) di dalamnya.'
      : 'Built and developed various web and mobile application projects featuring Artificial Intelligence (AI) integration.',
    tech: ['React', 'Next.js', 'AI Integration', 'Node.js'],
  },
  {
    company: 'PTPN I Regional 2 (Bandung)',
    role: lang === 'id' ? 'Intern Software Engineer' : 'Software Engineer Intern',
    period: '2025',
    description: lang === 'id' 
      ? 'Mengembangkan visualisasi data interaktif menggunakan Looker Studio dan SQL dari data JSON. Merancang dan mendeploy Chatbot AI berbasis WhatsApp menggunakan N8N dan model AI Google Gemini untuk memudahkan pekerja lapangan dalam memantau kondisi perkebunan secara praktis dan real-time.' 
      : 'Developed interactive data visualizations using Looker Studio and SQL from JSON data. Designed and deployed a WhatsApp-based AI Chatbot using N8N and Google Gemini AI model to help field workers easily monitor plantation conditions in real-time.',
    tech: ['SQL', 'Looker Studio', 'N8N', 'Google Gemini', 'WhatsApp API'],
  }
];

export const getCertificates = (lang: 'en' | 'id'): Certificate[] => [
  {
    name: 'Webservices API Testing with Postman - Complete Guide',
    issuer: 'Udemy',
    date: 'July 2025',
    link: '/certificate/UC-8303e0cd-4d86-487a-a760-2f0259044ebb.pdf',
    tech: 'Postman',
  },
  {
    name: 'Web Development Bootcamp | Python Django Web Course',
    issuer: 'Udemy',
    date: 'July 2025',
    link: '/certificate/UC-f2d0a18f-7444-46a0-b64f-a98eb7fcc325.pdf',
    tech: 'Django',
  },
  {
    name: 'Kali Linux for Ethical Hackers',
    issuer: 'Udemy',
    date: 'July 2025',
    link: '/certificate/UC-c11bfbdf-e346-4be2-8fd6-c692b3d9d620.pdf',
    tech: 'Kali Linux',
  },
  {
    name: 'Python from Zero-to-Hero (Beginner Level)',
    issuer: 'Udemy',
    date: 'July 2025',
    link: '/certificate/UC-b9b871b9-ad2a-4bea-9319-d14b87a33c91.pdf',
    tech: 'Python',
  },
  {
    name: 'Master SQL with BigQuery using AI tools - From Zero to Hero',
    issuer: 'Udemy',
    date: 'July 2025',
    link: '/certificate/UC-94dbd7b4-6645-43ca-bea8-ff5a8893ded1.pdf',
    tech: 'SQL',
  },
  {
    name: 'Gmail Complete Course: 25+ Google email Techniques',
    issuer: 'Udemy',
    date: 'July 2025',
    link: '/certificate/UC-f9205e57-cdd5-43be-b5f0-4b2b1a5f9140.pdf',
    tech: 'Google',
  }
];
