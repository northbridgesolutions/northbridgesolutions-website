import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Northbridge Solutions | Professional Software Development & Engineering Services",
  description:
    "Northbridge Solutions provides cutting-edge software development, dedicated engineering teams, and digital transformation services. We design, develop, and implement technology solutions to drive business growth and efficiency.",
  keywords: [
    "Northbridge Solutions",
    "software development",
    "custom software",
    "engineering teams",
    "web development",
    "mobile applications",
    "AI solutions",
    "digital transformation",
    "cloud solutions",
    "software agency",
  ],
  authors: [{ name: "Northbridge Solutions" }],
  creator: "Northbridge Solutions",
  publisher: "Northbridge Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.northbridgesolutions.io",
    siteName: "Northbridge Solutions",
    title: "Northbridge Solutions | Professional Software Development Services",
    description:
      "Expert software development and dedicated engineering teams. We bridge technology and business success with cutting-edge solutions.",
    images: [
      {
        url: "/northbridge-logo.png",
        width: 1200,
        height: 630,
        alt: "Northbridge Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbridge Solutions | Professional Software Development Services",
    description: "Expert software development and dedicated engineering teams.",
    images: ["/northbridge-logo.png"],
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
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Northbridge Solutions",
              description:
                "Professional software development and engineering services company",
              url: "https://www.northbridgesolutions.io",
              logo: "https://www.northbridgesolutions.io/northbridge-logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-234-567-890",
                contactType: "Customer Service",
                email: "hello@northbridgesolutions.io",
                areaServed: "US",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Street",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94102",
                addressCountry: "US",
              },
              sameAs: ["https://linkedin.com/company/northbridgesolutions"],
              founder: {
                "@type": "Person",
                name: "Northbridge Solutions Team",
              },
              // foundingDate: "2020",
              // aggregateRating: {
              //   "@type": "AggregateRating",
              //   ratingValue: "4.9",
              //   reviewCount: "80",
              // },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a1f3a]">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
