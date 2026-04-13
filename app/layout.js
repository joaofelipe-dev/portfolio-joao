import { Space_Grotesk, Manrope } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";
import { Menu } from "@/components/Menu";
import { SpeedInsights } from "@vercel/speed-insights/next"
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

export const metadata = {
  title: {
    default: "João Felipe | Desenvolvedor Frontend React e Next.js",
    template: "%s | João Felipe — Desenvolvedor Frontend",
  },

  description:
    "Desenvolvedor Frontend especializado em React, Next.js e TypeScript. Crio interfaces modernas, performáticas e acessíveis — do layout ao deploy em produção com Vercel.",

  keywords: [
    "Desenvolvedor Frontend",
    "Frontend Developer",
    "Desenvolvedor React",
    "React Developer",
    "Desenvolvedor Next.js",
    "Next.js Developer",
    "Desenvolvedor TypeScript",
    "Desenvolvedor JavaScript",
    "Frontend Engineer",
    "Desenvolvedor Frontend Brasil",
    "Desenvolvedor Frontend São Paulo",
    "Contratar Desenvolvedor Frontend",
    "Vaga Frontend Junior",
    "Portfólio Desenvolvedor Frontend",
    "João Felipe Desenvolvedor",
    "João Felipe Frontend",
    "React Next.js Tailwind",
    "Interface moderna React",
    "Desenvolvedor CLT",
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
    title: "João Felipe | Desenvolvedor Frontend React e Next.js",
    description:
      "Interfaces modernas com React, Next.js e TypeScript. Projetos reais entregues em produção, código limpo e foco em performance.",
    url: "https://joao-felipe.vercel.app",
    siteName: "Portfólio — João Felipe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de João Felipe — Desenvolvedor Frontend React e Next.js",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "João Felipe | Desenvolvedor Frontend React e Next.js",
    description:
      "Interfaces modernas com React, Next.js e TypeScript. Código limpo, performance e projetos reais em produção.",
    images: ["/og-image.png"],
  },

  category: "tecnologia",
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
                "jobTitle": "Desenvolvedor Frontend",
                "url": "https://joao-felipe.vercel.app",
                "image": "https://joao-felipe.vercel.app/og-image.png",
                "sameAs": [
                  "https://github.com/joaofelipe-dev",
                  "https://linkedin.com/in/joao-felipedev"
                ],
                "description": "Desenvolvedor Frontend especializado em React, Next.js e TypeScript. Cria interfaces modernas e performáticas com deploy em produção.",
                "knowsAbout": [
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
                  "Acessibilidade Web"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Portfólio — João Felipe",
                "url": "https://joao-felipe.vercel.app",
                "author": "João Felipe",
                "description": "Portfólio profissional de João Felipe, Desenvolvedor Frontend especializado em React e Next.js."
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
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased overflow-y-auto overflow-x-hidden`}
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
