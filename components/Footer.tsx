import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  خدماتنا
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base hover:text-[#E31E24]">
                      نقل الأثاث
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-[#E31E24]">
                      فك وتركيب
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-[#E31E24]">
                      التغليف
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-[#E31E24]">
                      التخزين
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  الشركة
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base hover:text-[#E31E24]">
                      من نحن
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-[#E31E24]">
                      فريق العمل
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-[#E31E24]">
                      الوظائف
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-[#E31E24]">
                      اتصل بنا
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              اشترك في نشرتنا الإخبارية
            </h3>
            <p className="mt-4 text-base text-gray-300">
              احصل على آخر التحديثات والعروض من شركتنا.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:mr-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-[#E31E24] border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#E31E24]"
                >
                  اشترك
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-[#E31E24]">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E31E24]">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E31E24]">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2023 شركة نقل الأثاث. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
