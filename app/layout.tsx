import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import FloatingButtons from '@/components/FloatingButtons'


const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'أفضل شركة نقل عفش بالرياض - خدمة احترافية بضمان الأمان',
  description: 'نقدم خدمات نقل العفش والأثاث في الرياض بأعلى مستويات الاحترافية والأمان. فك، تغليف، نقل وتركيب مع ضمان سلامة ممتلكاتك.',
  keywords: 'نقل عفش الرياض, شركة نقل اثاث, فك وتركيب, نقل عفش, شركة نقل اثاث بالرياض',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}

