
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Image src="/03.png" alt="Logo" width={100} height={100} />
            <a href="#" className="text-3xl font-bold text-[#2B3990] hover:text-[#E31E24] transition-colors duration-300">
              شركة نقل العفش | رياض
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {['خدماتنا', 'من نحن', 'الأحياء', 'الأسئلة الشائعة', 'اتصل بنا'].map((item, index) => (
              <a
                key={index}
                href={`#${item === 'خدماتنا' ? 'services' : 
                        item === 'من نحن' ? 'about' :
                        item === 'الأحياء' ? 'neighborhoods' :
                        item === 'الأسئلة الشائعة' ? 'faq' : 'contact'}`}
                className="text-gray-800 hover:text-[#2B3990] px-4 py-2 rounded-lg text-md font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-[#2B3990] hover:bg-gray-100 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            {['خدماتنا', 'من نحن', 'الأحياء', 'الأسئلة الشائعة', 'اتصل بنا'].map((item, index) => (
              <a
                key={index}
                href={`#${item === 'خدماتنا' ? 'services' : 
                        item === 'من نحن' ? 'about' :
                        item === 'الأحياء' ? 'neighborhoods' :
                        item === 'الأسئلة الشائعة' ? 'faq' : 'contact'}`}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#2B3990] rounded-lg transition-colors duration-300"
                        >
                          {item}
                        </a>
                      ))}
                      <div className="py-4">
                        <a
                          href="tel:0565265233"
                          className="block w-full text-center bg-[#2B3990] text-white px-6 py-3 rounded-lg hover:bg-[#1f2a6b] transition-colors duration-300"
                        >
                          احصل على عرض سعر
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </nav>
            )
          }
          
          export default Navbar
          
