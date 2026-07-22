import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pizzatwice.com'),
  title: "Pizza Twice | Atlantic Canada's Pizza Franchise — Since 1989",
  description:
    "Delicious pizzas, wings, donairs, and more at locations across New Brunswick, Nova Scotia, and Newfoundland. Order from your nearest Pizza Twice today. Franchise opportunities available.",
  keywords: [
    'Pizza Twice',
    'pizza delivery Atlantic Canada',
    'pizza franchise New Brunswick',
    'pizza Oromocto',
    'pizza Fredericton',
    'pizza Edmundston',
    'donairs NB',
    'pizza franchise opportunity',
  ],
  alternates: {
    canonical: 'https://www.pizzatwice.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.pizzatwice.com',
    siteName: 'Pizza Twice',
    title: "Pizza Twice | Atlantic Canada's Favorite Pizza — Since 1989",
    description: 'Delicious pizzas, wings, donairs, and more at 16+ locations across Atlantic Canada. Order from your nearest store today.',
    images: [
      {
        url: '/images/pizzalogo.png',
        width: 400,
        height: 110,
        alt: 'Pizza Twice — More Than Just Great Pizza',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Pizza Twice | Atlantic Canada's Pizza",
    description: 'Delicious pizzas, wings, donairs at 16+ locations across NB, NS, and NL. Since 1989.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pizzatwice.com/#organization",
        "name": "Pizza Twice",
        "url": "https://www.pizzatwice.com",
        "logo": "https://www.pizzatwice.com/images/pizzalogo.png",
        "description": "Atlantic Canada's pizza franchise — delicious pizzas, wings, donairs, and more at 16+ locations across New Brunswick, Nova Scotia, and Newfoundland since 1989.",
        "foundingDate": "1989",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Atlantic Canada"
        },
        "sameAs": [
          "https://www.facebook.com/pizzatwiceoromocto"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pizzatwice.com/#website",
        "url": "https://www.pizzatwice.com",
        "name": "Pizza Twice",
        "publisher": { "@id": "https://www.pizzatwice.com/#organization" },
        "inLanguage": "en-CA"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you offer delivery?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes! Most Pizza Twice locations offer fast delivery within their service area. Call your nearest location to confirm delivery availability." }
          },
          {
            "@type": "Question",
            "name": "What payment methods do you accept?",
            "acceptedAnswer": { "@type": "Answer", "text": "All Pizza Twice locations accept Interac, Visa, Mastercard, and cash. Debit at your door is available at select locations." }
          },
          {
            "@type": "Question",
            "name": "Can I order online?",
            "acceptedAnswer": { "@type": "Answer", "text": "Some locations offer online ordering through their individual websites. Check the Locations page for your nearest store's ordering options." }
          },
          {
            "@type": "Question",
            "name": "Do you sell U-Bake pizzas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes! Take home a 12-inch u-bake pizza or garlic fingers and bake them fresh in your own oven." }
          },
          {
            "@type": "Question",
            "name": "Do you cater for events?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, Pizza Twice caters for parties and events of all sizes. Contact your local store for catering options and pricing." }
          },
          {
            "@type": "Question",
            "name": "How many locations does Pizza Twice have?",
            "acceptedAnswer": { "@type": "Answer", "text": "Pizza Twice has 16+ franchise locations across New Brunswick, Nova Scotia, and Newfoundland. We've been serving Atlantic Canada since 1989." }
          },
          {
            "@type": "Question",
            "name": "What pizza sizes do you offer?",
            "acceptedAnswer": { "@type": "Answer", "text": "We offer 9-inch (4 slices), 12-inch (8 slices), 16-inch large (8 big slices), and party sizes including 12x24 and 24x24 sheet pizzas." }
          }
        ]
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${_inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
