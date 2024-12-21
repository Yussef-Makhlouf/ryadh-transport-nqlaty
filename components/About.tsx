



'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
const features = [
  'خبرة تزيد عن 15 عامًا في مجال أنظمة الأمان',
  'فريق من المهندسين والفنيين المعتمدين',
  'استخدام أحدث التقنيات في مجال الأمان والمراقبة',
  'خدمة عملاء على مدار الساعة',
  'ضمان شامل على جميع الأجهزة والتركيبات',
  'حلول مخصصة تناسب احتياجات كل عميل',
]
const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#E31E24] font-semibold text-lg">من نحن</span>
          <h2 className="text-4xl font-bold text-[#2B3990] mt-2 mb-4">الخبرة والابتكار في خدمتك</h2>
          <div className="w-24 h-1 bg-[#E31E24] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن شركة رائدة في مجال نقل الأثاث، نسعى لتوفير أعلى مستويات الحماية والراحة لعملائنا باستخدام أحدث التقنيات.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
        
            <Image
              src="/03.png"
              alt="فريق النقل المحترف"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-xl transform hover:-rotate-2 transition-transform duration-300"
            />
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-[#E31E24]" />
                  </div>
                  <p className="mr-4 text-lg font-medium text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

