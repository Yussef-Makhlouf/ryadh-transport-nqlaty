'use client'
import { Truck, Package, Shield, Users, ArrowRight, Phone, Star } from 'lucide-react'

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean
  }
}

const Hero = () => {
  const handleCallClick = () => {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion('tel:0563009155')
    }
  }

  const handleWhatsAppClick = () => {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion('https://wa.me/+966565265233')
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#1f2a6b] to-[#2B3990]">
      {/* Dynamic Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm">الأفضل في نقل العفش بالرياض</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              نقل عفش
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
الرياض              
</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              نقدم خدمة متكاملة لنقل الأثاث مع ضمان السلامة والجودة العالية
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="tel:0565265233" 
                onClick={handleCallClick}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                اتصل الآن
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://wa.me/+966565265233" 
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                واتساب
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto lg:mx-0">
              {[
                { number: '1000+', label: 'عميل سعيد' },
                { number: '5', label: 'سنوات خبرة' },
                { number: '24/7', label: 'دعم متواصل' },
                { number: '100%', label: 'ضمان الجودة' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Truck />, title: "نقل سريع", desc: "توصيل في نفس اليوم" },
                { icon: <Package />, title: "تغليف محكم", desc: "مواد تغليف عالية الجودة" },
                { icon: <Shield />, title: "ضمان شامل", desc: "تأمين كامل على المنقولات" },
                { icon: <Users />, title: "فريق محترف", desc: "عمالة مدربة ومتخصصة" },
              ].map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2B3990] transition-colors">
                    <div className="w-6 h-6 text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
