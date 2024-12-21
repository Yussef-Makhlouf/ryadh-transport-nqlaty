import { MapPin, Building, ArrowRight } from 'lucide-react'

const neighborhoods = [
  { name: 'النخيل', description: 'حي راقي بمنازل فاخرة وحدائق جميلة' },
  { name: 'الملقا', description: 'منطقة حيوية تجمع بين السكن والتجارة' },
  { name: 'الياسمين', description: 'حي هادئ مثالي للعائلات' },
  { name: 'الربيع', description: 'منطقة حديثة بتصاميم عصرية' },
  { name: 'العليا', description: 'قلب الرياض النابض بالحياة والأعمال' },
  { name: 'حطين', description: 'حي راقٍ يتميز بالفلل الفاخرة' },
]

const NeighborhoodsCovered = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50" id="neighborhoods">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2B3990] mb-4">نخدم جميع أحياء الرياض</h2>
          <div className="w-24 h-1 bg-[#E31E24] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نفتخر بتقديم خدماتنا في جميع أنحاء مدينة الرياض، مع تغطية شاملة لجميع الأحياء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2B3990] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-[#2B3990]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2B3990]">{neighborhood.name}</h3>
              </div>
              <p className="text-gray-600 mb-6">{neighborhood.description}</p>
              <div className="flex items-center text-[#E31E24]">
                <MapPin className="w-5 h-5 ml-2" />
                <span className="font-medium">منطقة مغطاة بالكامل</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#2B3990] to-[#1f2a6b] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">لم تجد حيك في القائمة؟</h3>
          <p className="text-lg mb-8 text-gray-200">
            لا تقلق! نحن نغطي جميع مناطق الرياض بدون استثناء
          </p>
          <a 
            href="tel:0565265233" 
            className="inline-flex items-center bg-white text-[#2B3990] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            تواصل معنا الآن
            <ArrowRight className="mr-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default NeighborhoodsCovered