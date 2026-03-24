import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";
import { Menu } from "@/components/Menu";
import { SpeedInsights } from "@vercel/speed-insights/next"
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "João Felipe | Software Engineer & Strategic Frontend Specialist",
    template: "%s | João Felipe",
  },
  description: "Engenheiro de Software especializado em arquiteturas frontend escaláveis, performance e excelência em UX. Foco em soluções robustas com React e Next.js.",
  keywords: ["Software Engineer", "Frontend Specialist", "React Architect", "Next.js", "Arquitetura Frontend", "João Felipe", "Desenvolvedor Web", "JavaScript Specialist"],
  authors: [{ name: "João Felipe", url: "https://github.com/joaofelipe-dev" }],
  creator: "João Felipe",
  publisher: "João Felipe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://joao-felipe.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "32x32" },
    ],
    apple: [
      { url: "/favicon.svg" }, // Idealmente seria um PNG 180x180
    ],
    shortcut: ["/favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "João Felipe | Software Engineer",
    description: "Engenheiro de Software especializado em arquiteturas frontend escaláveis e performance.",
    url: "https://joao-felipe.vercel.app",
    siteName: "João Felipe Portfolio",
    images: [
      {
        url: "/og-image.png", // Recomendado criar esta imagem (1200x630)
        width: 1200,
        height: 630,
        alt: "João Felipe | Software Engineer Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Felipe | Software Engineer",
    description: "Interfaces modernas e performance web excepcional.",
    creator: "@joaofelipe", // Se tiver twitter, ajustar aqui
    images: ["/og-image.png"],
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Permite zoom para acessibilidade, mas mantém controle
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth overflow-x-hidden">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "João Felipe",
                "jobTitle": "Software Engineer",
                "url": "https://joao-felipe.vercel.app",
                "image": "https://joao-felipe.vercel.app/og-image.png",
                "sameAs": [
                  "https://github.com/joaofelipe-dev",
                  "https://linkedin.com/in/joao-felipedev"
                ],
                "description": "Engenheiro de Software especializado em React, Next.js e performance de interfaces.",
                "knowsAbout": ["Frontend Development", "React", "Next.js", "Software Architecture", "Web Performance"]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "João Felipe Portfolio",
                "url": "https://joao-felipe.vercel.app",
                "author": "João Felipe",
                "description": "Portfólio profissional de João Felipe, Engenheiro de Software e Especialista Frontend."
              }
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <main>
          {children}
          <SpeedInsights />
        </main>
        <ThemeToggle />
        <Menu />
        <SmoothScroll/>
      </body>
    </html>
  );
}
