import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Bibbins | IT Director",
  description: "IT Director with 12+ years experience in IT leadership, endpoint management, identity & access, and AI-powered operations.",
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
    title: "Brandon Bibbins | IT Director",
    description: "IT Director with 12+ years experience in IT leadership, endpoint management, and AI-powered operations.",
    url: 'https://brandonbibbins.io',
    siteName: 'Brandon Bibbins',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brandon Bibbins - IT Director Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brandon Bibbins | IT Director",
    description: "IT Director with 12+ years experience in IT leadership and AI-powered operations.",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
