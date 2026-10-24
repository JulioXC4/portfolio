import type { Metadata, Viewport } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { JsonLd, mainWebsiteSchema } from "@/components/seo/JsonLd";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
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

const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Fraunces-SemiBoldItalic.ttf", weight: "600", style: "italic" },
  ],
  variable: "--font-accent",
  display: "swap",
  fallback: ["Georgia"],
  adjustFontFallback: "Times New Roman",
});

const siteUrl = "https://juliocastro.vercel.app";
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const viewport: Viewport = {
  themeColor: "#131514",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Julio Castro | Desarrollo de software y Full Stack en Perú",
    template: "%s | Julio Castro",
  },
  description:
    "Soy Julio Castro, estudiante de Ingeniería de Software en la UPC y desarrollador Full Stack. Desarrollo web, software a medida e integración de APIs para personas y negocios.",
  keywords: [
    "Desarrollador web freelance Perú",
    "Programador freelance Lima",
    "Creación de páginas web para negocios",
    "Desarrollo de landing pages profesionales",
    "Desarrollo de tiendas virtuales Perú",
    "Desarrollo de software a medida",
    "Desarrollo de aplicaciones web",
    "Desarrollador backend freelance",
    "Desarrollo de sistemas empresariales",
    "Servicios de programación para empresas",
    "Julio Castro Alejos",
    "Full Stack Developer Lima Perú",
    "Desarrollador Next.js React Lima",
    "Programador Spring Boot Laravel"
  ],
  authors: [{ name: "Julio Castro Alejos", url: siteUrl }],
  creator: "Julio Castro Alejos",
  publisher: "Julio Castro Alejos",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Julio Castro | Creo software que resuelve problemas reales",
    description:
      "Estudiante de Ingeniería de Software en la UPC y desarrollador Full Stack. Conoce mis servicios, trabajos con clientes y proyectos de software.",
    url: siteUrl,
    type: "website",
    locale: "es_PE",
    siteName: "Julio Castro - Portafolio y Servicios Digitales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Castro | Creo software que resuelve problemas reales",
    description:
      "Desarrollo web, software a medida e integración de APIs. Conoce mis servicios, trabajos con clientes y proyectos de software.",
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
  verification: {
    google: googleVerification || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${dmSans.variable} ${fraunces.variable}`}
    >
      <head>
        <JsonLd data={mainWebsiteSchema} />
      </head>
      <body>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <WhatsAppFloating />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
