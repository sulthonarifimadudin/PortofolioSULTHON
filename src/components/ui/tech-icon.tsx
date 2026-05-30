import { SiNextdotjs, SiReact, SiVuedotjs, SiNodedotjs, SiSupabase, SiDocker, SiRaspberrypi, SiFigma, SiPostgresql, SiVercel, SiFirebase, SiTypescript, SiTailwindcss, SiAndroidstudio, SiVite, SiFramer, SiLeaflet, SiSocketdotio, SiMysql, SiGooglegemini, SiChartdotjs, SiReactrouter, SiReactquery, SiCapacitor, SiFfmpeg, SiCss, SiArduino, SiCplusplus } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { ScanEye, Rocket } from 'lucide-react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 32, className = "opacity-80" }: TechIconProps) {
  const iconProps = { size, className };
  
  if (name === 'Next.js') return <SiNextdotjs {...iconProps} />;
  if (name === 'React' || name === 'React 18' || name === 'React 19' || name === 'React Native') return <SiReact {...iconProps} color="#61DAFB" />;
  if (name === 'Vue') return <SiVuedotjs {...iconProps} color="#4FC08D" />;
  if (name === 'Node.js') return <SiNodedotjs {...iconProps} color="#339933" />;
  if (name === 'Supabase') return <SiSupabase {...iconProps} color="#3ECF8E" />;
  if (name === 'Docker') return <SiDocker {...iconProps} color="#2496ED" />;
  if (name === 'Figma') return <SiFigma {...iconProps} color="#F24E1E" />;
  if (name === 'YOLO / AI' || name === 'YOLOv8') return <ScanEye {...iconProps} color="#FF6B6B" />;
  if (name === 'Raspberry Pi') return <SiRaspberrypi {...iconProps} color="#A22846" />;
  if (name === 'Arduino') return <SiArduino {...iconProps} color="#00979D" />;
  if (name === 'PostgreSQL') return <SiPostgresql {...iconProps} color="#4169E1" />;
  if (name === 'Vercel') return <SiVercel {...iconProps} />;
  if (name === 'Firebase') return <SiFirebase {...iconProps} color="#FFCA28" />;
  if (name === 'TypeScript') return <SiTypescript {...iconProps} color="#3178C6" />;
  if (name === 'Tailwind CSS') return <SiTailwindcss {...iconProps} color="#06B6D4" />;
  if (name === 'Android Studio') return <SiAndroidstudio {...iconProps} color="#3DDC84" />;
  if (name === 'VS Code') return <TbBrandVscode {...iconProps} color="#007ACC" />;
  if (name === 'Antigravity') return <Rocket {...iconProps} color="#FFD700" />;
  if (name === 'Vite') return <SiVite {...iconProps} color="#646CFF" />;
  if (name === 'Framer Motion') return <SiFramer {...iconProps} color="#0055FF" />;
  if (name === 'Leaflet') return <SiLeaflet {...iconProps} color="#199900" />;
  if (name === 'Socket.io') return <SiSocketdotio {...iconProps} color="#010101" />;
  if (name === 'MySQL') return <SiMysql {...iconProps} color="#4479A1" />;
  if (name === 'Gemini AI') return <SiGooglegemini {...iconProps} color="#8E75B2" />;
  if (name === 'Chart.js') return <SiChartdotjs {...iconProps} color="#FF6384" />;
  if (name === 'React Router') return <SiReactrouter {...iconProps} color="#CA4245" />;
  if (name === 'React Query') return <SiReactquery {...iconProps} color="#FF4154" />;
  if (name === 'Capacitor') return <SiCapacitor {...iconProps} color="#119EFF" />;
  if (name === 'FFmpeg') return <SiFfmpeg {...iconProps} color="#007808" />;
  if (name === 'Vanilla CSS') return <SiCss {...iconProps} color="#1572B6" />;
  if (name === 'C++') return <SiCplusplus {...iconProps} color="#00599C" />;

  return <span style={{ fontSize: size }}>💻</span>;
}
