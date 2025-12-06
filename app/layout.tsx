import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medeniyetveteriner.com.tr"),
  title: "Veteriner Kliniği Ümraniye | İstanbul Anadolu Yakası Veteriner | Ahmet Ceyhun",
  description:
    "Ümraniye Şerifali'de profesyonel veteriner hizmetleri. Kedi, köpek, kuş veterineri. Aşılama, muayene, acil bakım. İstanbul Anadolu Yakası'nın güvenilir veterineri.  0552 697 66 68",
  keywords:
    "ümraniye veteriner, istanbul anadolu yakası veteriner, şerifali veteriner, kuş veterineri ümraniye, kedi veterineri istanbul, köpek veterineri ümraniye, veteriner kliniği ümraniye, acil veteriner istanbul, veteriner ahmet ceyhun, ümraniye veteriner kliniği, anadolu yakası veteriner, evcil hayvan doktoru",
  authors: [{ name: "Ahmet Ceyhun" }],
  creator: "Ahmet Ceyhun",
  publisher: "Medeniyet Veteriner Kliniği",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.medeniyetveteriner.com.tr",
    siteName: "Medeniyet Veteriner Kliniği",
    title: "Veteriner Kliniği Ümraniye | İstanbul Anadolu Yakası Veteriner",
    description:
      "Ümraniye Şerifali'de profesyonel veteriner hizmetleri. Kedi, köpek, kuş veterineri. Aşılama, muayene, acil bakım. Tel: 0552 697 66 68",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Medeniyet Veteriner Kliniği Ümraniye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veteriner Kliniği Ümraniye | İstanbul Anadolu Yakası Veteriner",
    description:
      "Ümraniye Şerifali'de profesyonel veteriner hizmetleri. Kedi, köpek, kuş veterineri. ☎ 0552 697 66 68",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "du-MMsf0r2Q-ST4eSOxStb7IpSjj_jyvGhEeFZpuXZo",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: "Medeniyet Veteriner Kliniği",
    image: "https://www.medeniyetveteriner.com.tr/logo.png",
    "@id": "https://www.medeniyetveteriner.com.tr",
    url: "https://www.medeniyetveteriner.com.tr",
    telephone: "+905526976668",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Şerifali, Açıkyüz Sk. No:6 D:A",
      addressLocality: "Ümraniye",
      addressRegion: "İstanbul",
      postalCode: "34775",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.015,
      longitude: 29.11,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/medeniyetveteriner",
      "https://www.instagram.com/medeniyetveteriner",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "48",
    },
  }

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <Navbar />
        {children}
        <div suppressHydrationWarning>
          <WhatsAppButton />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
