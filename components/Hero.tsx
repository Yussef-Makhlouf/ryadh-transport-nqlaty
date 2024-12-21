'use client'

import { Truck, Package, Shield, Clock, Users, Building } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900  to-black-800">

      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            أفضل شركة نقل عفش بالرياض
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12">
            خدمة احترافية بضمان الأمان والجودة
          </p>
          <div className="space-x-4 space-x-reverse">
            <a
              href="tel:0565265233"
              className="bg-[#E31E24] text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg inline-block"
            >
              احصل على عرض سعر
            </a>
            <a
              href="https://wa.me/+966565265233"
              className="bg-green-800  text-white border border-green-800 px-10 py-4 rounded-full text-xl font-semibold hover:bg-opacity-30 transition-all duration-300 inline-block"
            >
              واتساب
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent  pt-0 text-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Truck />, text: "نقل سريع وآمن" },
              { icon: <Package />, text: "تغليف احترافي" },
              { icon: <Shield />, text: "ضمان الجودة" },
              { icon: <Clock />, text: "خدمة 24/7" },
              { icon: <Users />, text: "فريق محترف" },
              { icon: <Building />, text: "تغطية شاملة" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#2B3990] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <div className="w-8 h-8 text-[#2B3990]">{item.icon}</div>
                  </div>
                  <span className="text-sm font-medium text-center">{item.text}</span>
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
