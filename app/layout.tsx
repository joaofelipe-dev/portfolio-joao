import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Menu } from "@/components/Menu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "motion/react";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "João Felipe | Engenheiro Frontend React e Next.js",
    template: "%s | João Felipe — Engenheiro Frontend",
  },

  description:
    "Engenheiro Frontend especializado em React, Next.js e TypeScript. Crio interfaces modernas, performáticas e acessíveis — do layout ao deploy em produção com Vercel.",

  keywords: [
    "Engenheiro Frontend",
    "Frontend Engineer",
    "Desenvolvedor React",
    "React Developer",
    "Desenvolvedor Next.js",
    "Next.js Developer",
    "Desenvolvedor TypeScript",
    "Desenvolvedor JavaScript",
    "Engenheiro Frontend Brasil",
    "Engenheiro Frontend São Paulo",
    "Contratar Engenheiro Frontend",
    "Vaga Frontend Junior",
    "Portfólio Engenheiro Frontend",
    "João Felipe Desenvolvedor",
    "João Felipe Frontend",
    "React Next.js Tailwind",
    "Interface moderna React",
    "Desenvolvedor CLT",
  ],

  authors: [{ name: "João Felipe", url: "https://github.com/joaofelipe-dev" }],
  creator: "João Felipe",
  publisher: "João Felipe",

  metadataBase: new URL("https://jfelipe.dev"),

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
    title: "João Felipe | Engenheiro Frontend React e Next.js",
    description:
      "Interfaces modernas com React, Next.js e TypeScript. Projetos reais entregues em produção, código limpo e foco em performance.",
    url: "https://jfelipe.dev",
    siteName: "Portfólio — João Felipe",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de João Felipe — Engenheiro Frontend React e Next.js",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "João Felipe | Engenheiro Frontend React e Next.js",
    description:
      "Interfaces modernas com React, Next.js e TypeScript. Código limpo, performance e projetos reais em produção.",
    images: ["/image.png"],
  },

  category: "tecnologia",
};

export const viewport: Viewport = {
  themeColor: "#05070f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark overflow-x-hidden">
      <head>
        <meta name="theme-color" content="#05070f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "João Felipe",
                jobTitle: "Engenheiro Frontend",
                url: "https://jfelipe.dev",
                image: "https://jfelipe.dev/image.png",
                sameAs: [
                  "https://github.com/joaofelipe-dev",
                  "https://linkedin.com/in/joao-felipedev",
                ],
                description:
                  "Engenheiro Frontend especializado em React, Next.js e TypeScript. Cria interfaces modernas e performáticas com deploy em produção.",
                knowsAbout: [
                  "Desenvolvimento Frontend",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "Node.js",
                  "PostgreSQL",
                  "Vercel",
                  "Performance Web",
                  "Acessibilidade Web",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Portfólio — João Felipe",
                url: "https://jfelipe.dev",
                author: "João Felipe",
                description:
                  "Portfólio profissional de João Felipe, Engenheiro Frontend especializado em React e Next.js.",
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://jfelipe.dev",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projetos",
                    item: "https://jfelipe.dev#projetos",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Habilidades",
                    item: "https://jfelipe.dev#skills",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Sobre",
                    item: "https://jfelipe.dev#sobre",
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "Contato",
                    item: "https://jfelipe.dev#contato",
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased overflow-y-auto overflow-x-hidden`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <main id="main">
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
          {process.env.VERCEL || process.env.NEXT_PUBLIC_VERCEL_ENV ? (
            <>
              <SpeedInsights />
              <Analytics />
            </>
          ) : null}
        </main>
        <Menu />
        <SmoothScroll />
      </body>
    </html>
  );
}
