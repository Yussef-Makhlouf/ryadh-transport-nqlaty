import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import FloatingButtons from '@/components/FloatingButtons'
import Script from 'next/script'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://naqlaty-ship.com'),
  title: {
    default: 'نقل عفش الرياض | شركة نقلتي للشحن والنقل',
    template: '%s | نقلتي للشحن'
  },
  description: 'شركة نقلتي - خدمات نقل العفش في الرياض بأعلى معايير الجودة والأمان. فك وتركيب وتغليف الأثاث مع ضمان كامل على جميع المنقولات',
// In the metadata object, update the keywords array:
keywords: [
  'نقل عفش الرياض',
  'نقليات عفش الرياض',
  'الرياض نقل عفش',
  'نقل عفش الرياض الدمام',
  'نقل عفش الرياض جدة',
  'نقل عفش من الرياض الى جدة',
  'شركة نقل عفش جدة الرياض',
  'اسعار نقل عفش من الرياض الى جدة',
  'شركة نقل عفش الرياض الدمام',
  'نقل عفش من الدمام الى الرياض',
  'دينا نقل عفش من الرياض الى الدمام',
  'نقل عفش الرياض القصيم',
  'نقل عفش من الرياض الى القصيم',
  'نقل عفش الرياض بريدة',
  'نقل عفش الرياض باكستاني',
  'شركة نقل عفش بالرياض باكستاني',
  'نقل عفش الرياض ابها',
  'نقل عفش من الرياض الى ابها',
  'نقل عفش الرياض مكة',
  'نقل عفش من الرياض الى مكة',
  'نقل عفش الرياض الطائف',
  'شركة نقل عفش من الطائف الى الرياض',
  'نقل اثاث طويق',
  'فك وتركيب اثاث',
  'تغليف اثاث',
  'افضل شركة نقل عفش'
],
  applicationName: 'نقلتي للشحن',
  
  authors: [{ name: 'نقلتي للشحن' }],
  creator: 'نقلتي للشحن',
  publisher: 'نقلتي للشحن',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://naqlaty-ship.com'
  },
  openGraph: {
    type: 'website',
    url: 'https://naqlaty-ship.com',
    title: 'نقل عفش الرياض | شركة نقلتي للشحن والنقل',
    description: 'شركة نقلتي - خدمات نقل العفش في الرياض بأعلى معايير الجودة والأمان',
    siteName: 'نقلتي للشحن',
    images: [
      {
        url: 'https://naqlaty-ship.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'نقلتي للشحن - نقل عفش الرياض'
      }
    ],
    locale: 'ar_SA'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نقل عفش الرياض | شركة نقلتي للشحن والنقل',
    description: 'خدمات نقل العفش في الرياض بأعلى معايير الجودة والأمان',
    images: ['https://naqlaty-ship.com/twitter-image.jpg']
  },
  verification: {
    google: 'your-google-verification-code'
  },
  category: 'نقل عفش',
  classification: 'خدمات نقل',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2B3990" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16595993654"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16595993654');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16595993654/kWc4CMLDtqIaELaIy-k9',
                'value': 1.0,
                'currency': 'EGP',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className={cairo.className}>
        <Navbar />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}