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
  title: "João Felipe | Software Engineer & Strategic Frontend Specialist",
  description: "Engenheiro de Software especializado em arquiteturas frontend escaláveis, performance e excelência em UX. Foco em soluções robustas com React e Next.js.",
  keywords: ["Software Engineer", "Frontend Specialist", "React Architect", "Next.js", "Arquitetura Frontend", "João Felipe"],
  authors: [{ name: "João Felipe" }],
  creator: "João Felipe",
  metadataBase: new URL("https://joao-felipe.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "João Felipe | Desenvolvedor Frontend",
    description: "Transformando ideias em experiências digitais únicas.",
    url: "https://joao-felipe.vercel.app",
    siteName: "Portfólio João Felipe",
    images: [
      {
        url: "/og-image.png", // Sugestão: Crie esta imagem para redes sociais
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Felipe | Desenvolvedor Frontend",
    description: "Interfaces modernas e performance web.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "João Felipe",
              "jobTitle": "Desenvolvedor Frontend",
              "url": "https://joao-felipe.vercel.app",
              "sameAs": [
                "https://github.com/joaofelipe-dev",
                "https://linkedin.com/in/joao-felipedev"
              ]
            }),
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
