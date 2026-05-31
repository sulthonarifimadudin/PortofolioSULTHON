import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const madeTommy = localFont({
  src: "../../public/fonts/MADE Tommy Soft Bold PERSONAL USE.otf",
  variable: "--font-heading",
  display: "swap",
});

const authenticSignature = localFont({
  src: "../../public/fonts/Authentic Signature.otf",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://este.my.id"),
  title: "Sulthon | Engineer × Creator — Portfolio",
  description:
    "Full-stack developer & creative photographer/videographer. Building Digital Experiences. Capturing Visual Stories. Portfolio of software engineering, IoT projects, photography, and videography.",
  keywords: [
    "portfolio",
    "software engineer",
    "photographer",
    "videographer",
    "full-stack developer",
    "IoT",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Sulthon | Engineer × Creator",
    description: "Building Digital Experiences. Capturing Visual Stories.",
    type: "website",
    url: "https://este.my.id",
    siteName: "Sulthon Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sulthon | Engineer × Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulthon | Engineer × Creator",
    description: "Building Digital Experiences. Capturing Visual Stories.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${madeTommy.variable} ${authenticSignature.variable} h-full antialiased`}>
      <head>
        {/* Playfair Display from Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Page Content */}
        <div className="relative z-0 flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
