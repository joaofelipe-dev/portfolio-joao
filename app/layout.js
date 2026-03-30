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
    default: "João Felipe | Frontend Developer (React & Next.js)",
    template: "%s | João Felipe",
  },

  description:
    "Desenvolvedor Frontend especializado em React e Next.js. Crio aplicações completas com foco em performance, UX e integrações com APIs. Veja meus projetos.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "João Felipe",
  ],

  authors: [{ name: "João Felipe", url: "https://github.com/joaofelipe-dev" }],
  creator: "João Felipe",
  publisher: "João Felipe",

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
    apple: [{ url: "/apple-touch-icon.png" }],
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
    title: "João Felipe | Frontend Developer",
    description:
      "Projetos em React, Next.js e aplicações completas com foco em performance e experiência do usuário.",
    url: "https://joao-felipe.vercel.app",
    siteName: "João Felipe Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio João Felipe - Frontend Developer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "João Felipe | Frontend Developer",
    description:
      "Aplicações modernas com React, Next.js e foco em performance.",
    images: ["/og-image.png"],
  },

  category: "technology",
};

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://joao-felipe.vercel.app"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Projetos",
                    "item": "https://joao-felipe.vercel.app#projetos"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Habilidades",
                    "item": "https://joao-felipe.vercel.app#skills"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Sobre",
                    "item": "https://joao-felipe.vercel.app#sobre"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Contato",
                    "item": "https://joao-felipe.vercel.app#contato"
                  }
                ]
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
        <SmoothScroll />
      </body>
    </html>
  );
}
