import Image from 'next/image'

const images = [
  { src: '/Artboard 6.avif', alt: 'عمال ينقلون أريكة', category: 'نقل منزلي' },
  { src: '/Artboard 3.avif', alt: 'صناديق نقل معبأة', category: 'تعبئة' },
  { src: '/Artboard 5.avif', alt: 'شاحنة نقل يتم تحميلها', category: 'نقل تجاري' },
  { src: '/Artboard 4.avif', alt: 'عائلة في منزلها الجديد', category: 'نقل منزلي' },
  { src: '/Artboard 2.avif', alt: 'نقل مكتب', category: 'نقل تجاري' },
  { src: '/Artboard 1.avif', alt: 'تعبئة دقيقة للأغراض الهشة', category: 'تعبئة' },
]

const Gallery = () => {
  return (
    <section className="bg-white py-24" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">معرض أعمالنا</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">نفخر بتقديم خدمات نقل احترافية تجمع بين الكفاءة والأمان</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-emerald-500 rounded-full text-sm font-medium mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
