'use client'

import { PenToolIcon as Tool, Package, Truck, Warehouse, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'فك وتركيب الأثاث',
    description: 'نقوم بفك وتركيب جميع أنواع الأثاث باحترافية وعناية فائقة.',
    icon: <Tool className="w-12 h-12 text-[#2B3990]" />,
    steps: ['فك الأثاث بعناية', 'ترقيم القطع', 'تغليف القطع', 'إعادة التركيب في الموقع الجديد'],
  },
  {
    title: 'خدمات التغليف المتخصص',
    description: 'نستخدم مواد تغليف عالية الجودة لحماية ممتلكاتك أثناء النقل.',
    icon: <Package className="w-12 h-12 text-[#2B3990]" />,
    steps: ['اختيار مواد التغليف المناسبة', 'تغليف الأثاث والأجهزة', 'حماية القطع الحساسة', 'ترتيب وتنظيم العناصر المغلفة'],
  },
  {
    title: 'النقل باستخدام سيارات مجهزة',
    description: 'نمتلك أسطولًا من الشاحنات المجهزة خصيصًا لنقل الأثاث بأمان.',
    icon: <Truck className="w-12 h-12 text-[#2B3990]" />,
    steps: ['تحميل الأثاث بعناية', 'تثبيت القطع داخل الشاحنة', 'القيادة بحذر', 'تفريغ الأثاث في الموقع الجديد'],
  },
  {
    title: 'التخزين في مستودعات آمنة',
    description: 'نوفر خدمات تخزين آمنة ونظيفة لفترات قصيرة أو طويلة الأمد.',
    icon: <Warehouse className="w-12 h-12 text-[#2B3990]" />,
    steps: ['تغليف الأثاث للتخزين', 'ترتيب العناصر في المستودع', 'مراقبة درجة الحرارة والرطوبة', 'توفير الأمن على مدار الساعة'],
  },
  {
    title: 'خدمات إضافية',
    description: 'نقدم خدمات إضافية مثل التنظيف والترتيب والصيانة البسيطة.',
    icon: <Sparkles className="w-12 h-12 text-[#2B3990]" />,
    steps: ['تنظيف المنزل قبل النقل', 'ترتيب الأثاث في المنزل الجديد', 'إجراء إصلاحات بسيطة', 'تقديم نصائح للحفاظ على الأثاث'],
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2B3990] mb-4">خدماتنا المتميزة</h2>
          <div className="w-24 h-1 bg-[#E31E24] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-8">
                <div className="w-20 h-20 bg-[#2B3990] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#2B3990]">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                <h4 className="text-lg font-bold mb-4 text-[#2B3990]">خطوات العمل:</h4>
                <ul className="space-y-3">
                  {service.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center ">
                      <div className="w-6 h-6 rounded-full bg-[#E31E24] text-white flex items-center justify-center text-sm mr-3 ">
                        {stepIndex + 1}
                      </div>
                      <span className="px-4">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
