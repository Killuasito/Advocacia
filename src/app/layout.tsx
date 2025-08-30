import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Wemerson Texeira de Jesus | Advogado Trabalhista em São Paulo",
  description:
    "Escritório especializado em Direito do Trabalho. Acidente de trabalho, rescisão indireta, assédio moral, horas extras e outros direitos trabalhistas. Atendimento personalizado.",
  keywords: [
    "advogado trabalhista",
    "direito do trabalho",
    "rescisão indireta",
    "acidente de trabalho",
    "assédio moral",
    "horas extras",
    "verbas rescisórias",
    "São Paulo",
    "Itapevi",
  ],
  authors: [{ name: "Dr. Wemerson Texeira de Jesus" }],
  creator: "Dr. Wemerson Texeira de Jesus",
  publisher: "Dr. Wemerson Texeira de Jesus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dr. Wemerson Texeira de Jesus | Advogado Trabalhista",
    description:
      "Escritório especializado em Direito do Trabalho. Defesa eficiente dos seus direitos trabalhistas com atendimento personalizado e resultados comprovados.",
    url: "https://drwemersontexeiradejesus.vercel.app/",
    siteName: "Dr. Wemerson Texeira de Jesus",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "Dr. Wemerson Texeira de Jesus - Advogado Trabalhista",
      },
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    // Add your Google Search Console verification code when available
    google: "google-site-verification=your_verification_code",
  },
  alternates: {
    canonical: "https://drwemersontexeiradejesus.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured data for law firm */}
        <Script
          id="structured-data-law-firm"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Dr. Wemerson Texeira de Jesus - Advogado Trabalhista",
              image: "/logo.jpg",
              "@id": "https://drwemersontexeiradejesus.vercel.app/",
              url: "https://drwemersontexeiradejesus.vercel.app/",
              telephone: "+551195157-3924",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua João de Abreu, N° 141, Box 31",
                addressLocality: "Itapevi",
                addressRegion: "SP",
                postalCode: "06680-030",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -23.5290491,
                longitude: -46.933135,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://instagram.com/advogadowemersonteixeira",
                "https://facebook.com/share/1B7PCzeH31/?mibextid=wwXlfr",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços Jurídicos Trabalhistas",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Acidente de Trabalho e Doença Ocupacional",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Assédio Moral e Sexual no Ambiente de Trabalho",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rescisão Indireta",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Google Analytics - Add your GA code when available */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
