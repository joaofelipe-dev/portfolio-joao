import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "@/components/Menu/ThemeToggle";
import "./globals.css";
import { Menu } from "@/components/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfólio João Felipe",
  description: "Desenvolvedor Frontend | React | Next.js | Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
              <ThemeToggle />
              <Menu/>
      </body>
    </html>
  );
}
