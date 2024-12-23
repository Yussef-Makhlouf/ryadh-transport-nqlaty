'use client'

import { Truck, Package, Shield, Clock, Users, Building } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black-800">
      <div className="absolute inset-0 flex items-center justify-center px-4 mt-[-100px] sm:mt-0">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            أفضل شركة نقل عفش بالرياض
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-200 mb-8 sm:mb-12 px-2">
            خدمة احترافية بضمان الأمان والجودة
          </p>
          <div className="flex flex-col gap-4 px-4">
            <a
              href="tel:0565265233"
              className="bg-[#E31E24] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg"
            >
              احصل على عرض سعر
            </a>
            <a
              href="https://wa.me/+966565265233"
              className="bg-green-800 text-white border border-green-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-30 transition-all duration-300"
            >
              واتساب
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent">
        <div className="container mx-auto px-2 pb-4">
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: <Truck />, text: "نقل سريع وآمن" },
              { icon: <Package />, text: "تغليف احترافي" },
              { icon: <Shield />, text: "ضمان الجودة" },
              { icon: <Clock />, text: "خدمة 24/7" },
              { icon: <Users />, text: "فريق محترف" },
              { icon: <Building />, text: "تغطية شاملة" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-2 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#2B3990] bg-opacity-10 rounded-full flex items-center justify-center mb-2">
                    <div className="w-5 h-5 text-[#2B3990]">{item.icon}</div>
                  </div>
                  <span className="text-xs font-medium text-center">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
