import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julio Castro | Full Stack Software Engineer",
  description: "Portafolio profesional de Julio Castro Alejos, Ingeniero de Software enfocado en el desarrollo Full Stack, IoT y soluciones de software de extremo a extremo.",
  keywords: ["Julio Castro Alejos", "Full Stack Software Engineer", "Full Stack Developer", "Spring Boot", "Laravel", "IoT", "Restock", "Lima", "Perú", "Software Engineering"],
  authors: [{ name: "Julio Castro Alejos" }],
  creator: "Julio Castro Alejos",
  openGraph: {
    title: "Julio Castro | Full Stack Software Engineer",
    description: "Portafolio profesional de Julio Castro Alejos, Ingeniero de Software enfocado en el desarrollo Full Stack, IoT y soluciones de extremo a extremo.",
    type: "website",
    locale: "es_PE",
    siteName: "Julio Castro Alejos Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Castro | Full Stack Software Engineer",
    description: "Portafolio profesional de Julio Castro Alejos, Ingeniero de Software enfocado en el desarrollo Full Stack, IoT y soluciones de extremo a extremo.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <div className="bg-glow-container">
          <div className="bg-glow-spot-1"></div>
          <div className="bg-glow-spot-2"></div>
        </div>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
