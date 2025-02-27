'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCallClick = () => {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion('tel:0543757997')
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-2">
            <Image 
              src="/03.png" 
              alt="Logo" 
              width={50}
              height={50}
              className="hover:scale-110 transition-transform duration-300 cursor-pointer rounded-full shadow-lg bg-white"  
            />
            <a href="#" className={`text-lg sm:text-xl md:text-2xl font-bold ${
              scrolled ? 'text-[#2B3990]' : 'text-white'
            } transition-colors duration-300`}>
              شركة نقلاتي لنقل العفش | رياض
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {['خدماتنا', 'من نحن', 'الأحياء', 'الأسئلة الشائعة', 'اتصل بنا'].map((item, index) => (
              <a
                key={index}
                href={`#${item === 'خدماتنا' ? 'services' : 
                        item === 'من نحن' ? 'about' :
                        item === 'الأحياء' ? 'neighborhoods' :
                        item === 'الأسئلة الشائعة' ? 'faq' : 'contact'}`}
                className={`relative ${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-[#2B3990] px-3 py-2 text-md font-medium transition-all duration-300
                  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#2B3990] 
                  after:left-0 after:right-0 after:bottom-0 after:mx-auto after:transition-all 
                  hover:after:w-full focus:outline-none focus:ring-2 focus:ring-[#2B3990] focus:ring-offset-2 rounded-md`}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:0543757997"
              onClick={handleCallClick}
              className="group flex items-center gap-2 bg-[#2B3990] text-white px-6 py-2.5 rounded-full
                hover:bg-[#1f2a6b] transition-all duration-300 transform hover:scale-105 
                hover:shadow-lg text-sm font-medium focus:outline-none focus:ring-2 
                focus:ring-[#2B3990] focus:ring-offset-2"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              <span>احصل على عرض سعر</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 
                hover:text-[#2B3990] hover:bg-gray-100 transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-[#2B3990] focus:ring-offset-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed top-20 right-0 left-0 bg-white/95 backdrop-blur-lg 
        border-t border-gray-100 shadow-lg transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 pt-3 pb-6 space-y-2">
          {['خدماتنا', 'من نحن', 'الأحياء', 'الأسئلة الشائعة', 'اتصل بنا'].map((item, index) => (
            <a
              key={index}
              href={`#${item === 'خدماتنا' ? 'services' : 
                      item === 'من نحن' ? 'about' :
                      item === 'الأحياء' ? 'neighborhoods' :
                      item === 'الأسئلة الشائعة' ? 'faq' : 'contact'}`}
              className="block px-4 py-3 text-base font-medium text-gray-800 
                hover:bg-gray-50 hover:text-[#2B3990] rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="px-4 pt-2">
            <a
              href="tel:0565265233"
              onClick={(e) => {
                handleCallClick()
                setIsOpen(false)
              }}
              className="flex items-center justify-center gap-2 w-full bg-[#2B3990] text-white 
                px-6 py-3 rounded-full hover:bg-[#1f2a6b] transition-all duration-300 
                text-base font-medium hover:shadow-lg transform hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>احصل على عرض سعر</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
