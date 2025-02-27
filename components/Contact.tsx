'use client'

import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean
  }
}

const Contact = () => {
  const handleCallClick = () => {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion('tel:0565265233')
    }
  }

  const handleWhatsAppClick = () => {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion('https://wa.me/+966565265233')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#2B3990]">اتصل بنا</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">نحن هنا لمساعدتك في نقل أثاثك بأمان وسهولة. اتصل بنا الآن للحصول على خدمة متميزة</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-[#2B3990]">تواصل معنا مباشرة</h3>
            <div className="flex flex-col gap-6">
              <a
                href="tel:0565265233"
                onClick={handleCallClick}
                className="group flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                <div className="flex-1">
                  <div className="font-semibold">اتصل بنا الآن</div>
                  <div className="text-sm opacity-90">0565265233</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/+966565265233"
                onClick={handleWhatsAppClick}
                className="group flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <div className="flex-1">
                  <div className="font-semibold">راسلنا على واتساب</div>
                  <div className="text-sm opacity-90">متاح 24/7</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-[#2B3990]">معلومات الاتصال</h3>
            <div className="space-y-6">
              <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <MapPin className="w-6 h-6 text-[#E31E24] ml-4 flex-shrink-0" />
                <div>
                  <div className="font-medium">العنوان</div>
                  <div className="text-gray-600">الرياض، المملكة العربية السعودية</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Clock className="w-6 h-6 text-[#E31E24] ml-4 flex-shrink-0" />
                <div>
                  <div className="font-medium">ساعات العمل</div>
                  <div className="text-gray-600">نعمل على مدار الساعة، 7 أيام في الأسبوع</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Mail className="w-6 h-6 text-[#E31E24] ml-4 flex-shrink-0" />
                <div>
                  <div className="font-medium">البريد الإلكتروني</div>
                  <div className="text-gray-600">info@movingcompany.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact