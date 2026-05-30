const fs = require('fs');

const reelsData = [
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
    description: '"Hari ini bukan akhir, ini baru permulaan. Momen ini belum finish, ini adalah pengawalan dari sebuah perjuangan panjang. Saatnya buktikan, saatnya banggakan keluarga yang selalu ada di balik setiap langkah."\n\n@firsarinaldy\n#telkomuniversity #graduation #graduationphotoshoot',
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
    description: "Rois akhirnya menginjak jenjang terakhir, puncak dari hierarki kedewasaan dan kesempurnaan ilmu di pondok pesantren, kelas 12. Semua sudut pondok dan seluk beluknya telah ia jelajahi dan ini saatnya untuk menghadapi ujian sesungguhnya, ujian dari Allah.\n\n‘𝗪𝗮𝘀𝘁𝗮’𝗶𝗻𝘂 𝗯𝗶𝘀𝗵𝗮𝗯𝗿𝗶 𝘄𝗮𝘀𝗵𝘀𝗵𝗮𝗹𝗮𝗵’ Demikian Rois mengingatkan teman seperjuangannya untuk senantiasa bersabar atas keputusan Allah. Di sela-sela padatnya aktivitas, ia menyempatkan diri untuk saling mengingatkan dalam kebaikan.\n\nPrestasi akademik, hafalan Al-Quran, serta aktif dalam berbagai organisasi menjadikan kehidupan Rois tampak begitu sempurna. Hingga waktu memutuskan untuk tidak berpihak padanya. Ia merasa dikelilingi oleh keputusasaan mendalam. Akankah Rois menemukan makna ‘penyembuh’ sebenarnya dari sebuah kesabaran?\n\n𝙎𝙪𝙙𝙖𝙝𝙞 𝙂𝙖𝙡𝙖𝙪𝙢𝙪, 𝙈𝙖𝙧𝙞 𝙎𝙮𝙞’𝙖𝙧𝙠𝙖𝙣 𝘼𝙡-𝙌𝙪𝙧’𝙖𝙣 𝘽𝙚𝙧𝙨𝙖𝙢𝙖𝙠𝙪\n@ajrul.rois\n@pemudanontersesat\n\n@hawasi_uii\n@festivalquran_hawasi\n@uiiyogyakarta\n\n#FestivalAlQuran\n#HawasiUII\n#VideoSyiarQuranHawasi",
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

const stringifiedArray = `[
${reelsData.map(r => `  {
    id: '${r.id}',
    url: '${r.url}',
    platform: '${r.platform}',
    title: '${r.title}',
    category: '${r.category}',
    date: '${r.date}',
    description: ${JSON.stringify(r.description)},
    coverImage: '${r.coverImage}',
    localVideo: '${r.localVideo}'
  }`).join(',\n')}
]`;

const fileContents = fs.readFileSync('src/data/creator.ts', 'utf8');
const startTag = "export const getReels = (lang: 'en' | 'id'): ReelItem[] => [";
const startIndex = fileContents.indexOf(startTag);
if (startIndex === -1) {
    console.error('Could not find start index');
    process.exit(1);
}

const linesAfterStart = fileContents.slice(startIndex).split('\n');
const endLineIndex = linesAfterStart.findIndex(l => l.trim() === '];');
if (endLineIndex === -1) {
    console.error('Could not find end line index');
    process.exit(1);
}

const endAbsoluteIndex = startIndex + linesAfterStart.slice(0, endLineIndex + 1).join('\n').length;

const before = fileContents.slice(0, startIndex);
const after = fileContents.slice(endAbsoluteIndex);

const newFunction = `export const getReels = (lang: 'en' | 'id'): ReelItem[] => ${stringifiedArray};`;
const finalContent = before + newFunction + after;

fs.writeFileSync('src/data/creator.ts', finalContent);
console.log('Replaced successfully');
