import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
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
    <html lang="es" data-scroll-behavior="smooth" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
