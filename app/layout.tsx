import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./site.css";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });

const description =
  "Brandon Bibbins designs, builds and runs digital products: brand experience, UX/UI design, full-stack development and 12+ years of IT leadership.";

export const metadata: Metadata = {
  title: "Brandon Bibbins | Design, development and IT leadership",
  description,
  metadataBase: new URL('https://brandonbibbins.io'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Brandon Bibbins | Design, development and IT leadership",
    description,
    url: 'https://brandonbibbins.io',
    siteName: 'Brandon Bibbins',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brandon Bibbins portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brandon Bibbins | Design, development and IT leadership",
    description,
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

// Runs before first paint: skip the intro animation if it already played this session
// or the visitor prefers reduced motion, so it never flashes.
const introScript = `try{if(sessionStorage.getItem('bb-intro')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.intro='done'}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
