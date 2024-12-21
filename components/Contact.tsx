'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2B3990]">اتصل بنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>

          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#2B3990]">معلومات الاتصال</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#E31E24] ml-2" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#E31E24] ml-2" />
                <span>      
                0565265233       
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#E31E24] ml-2" />
                <span>info@movingcompany.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-[#E31E24] ml-2" />
                <span>نعمل على مدار الساعة، 7 أيام في الأسبوع</span>
              </div>
            </div>
            

     
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

