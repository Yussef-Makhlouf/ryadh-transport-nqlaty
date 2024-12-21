'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

const faqs = [
  {
    category: 'عام',
    questions: [
      {
        q: 'ما هي ساعات عمل الشركة؟',
        a: 'نعمل على مدار الساعة، 7 أيام في الأسبوع لتلبية احتياجاتكم في أي وقت.'
      },
      {
        q: 'هل تقدمون خدماتكم خارج الرياض؟',
        a: 'نعم، نقدم خدماتنا في الرياض والمناطق المحيطة بها. يرجى الاتصال بنا لمزيد من التفاصيل حول المناطق التي نغطيها.'
      },
      {
        q: 'هل تقدمون تقديرات مجانية للتكلفة؟',
        a: 'نعم، نقدم تقديرات مجانية للتكلفة. يمكنك الاتصال بنا أو ملء نموذج الطلب على موقعنا للحصول على تقدير.'
      }
    ]
  },
  {
    category: 'الخدمات',
    questions: [
      {
        q: 'ما هي الخدمات التي تقدمونها بالضبط؟',
        a: 'نقدم خدمات شاملة تشمل فك وتركيب الأثاث، التغليف، النقل، التخزين، وخدمات إضافية مثل التنظيف والترتيب.'
      },
      {
        q: 'هل تقومون بنقل الأجهزة الإلكترونية والأشياء الثمينة؟',
        a: 'نعم، لدينا خبرة في نقل الأجهزة الإلكترونية والأشياء الثمينة. نستخدم تقنيات تغليف خاصة لضمان سلامتها أثناء النقل.'
      },
      {
        q: 'هل توفرون خدمات التخزين؟',
        a: 'نعم، نوفر خدمات تخزين آمنة في مستودعات مجهزة لفترات قصيرة أو طويلة الأمد.'
      }
    ]
  },
  {
    category: 'التكلفة والدفع',
    questions: [
      {
        q: 'كيف يتم تحديد تكلفة النقل؟',
        a: 'تعتمد التكلفة على عدة عوامل مثل حجم الأثاث، المسافة، والخدمات الإضافية المطلوبة. نقدم تقديرًا دقيقًا بعد معاينة الأثاث.'
      },
      {
        q: 'ما هي طرق الدفع المقبولة؟',
        a: 'نقبل الدفع النقدي، والبطاقات الائتمانية، والتحويل البنكي.'
      },
      {
        q: 'هل هناك رسوم إضافية غير معلنة؟',
        a: 'لا، نحن نؤمن بالشفافية الكاملة. جميع الرسوم يتم توضيحها في العقد قبل بدء العمل.'
      }
    ]
  },
  {
    category: 'الضمان والتأمين',
    questions: [
      {
        q: 'هل تقدمون ضمانًا على خدماتكم؟',
        a: 'نعم، نقدم ضمانًا على جميع خدماتنا. إذا حدث أي ضرر ناتج عن خطأ من جانبنا، فإننا نتحمل المسؤولية الكاملة.'
      },
      {
        q: 'هل أنتم مؤمنون؟',
        a: 'نعم، لدينا تأمين شامل يغطي جميع عملياتنا لضمان حماية ممتلكاتك.'
      },
      {
        q: 'ماذا يحدث في حالة تلف أو فقدان شيء ما أثناء النقل؟',
        a: 'في حالة حدوث أي تلف أو فقدان، نقوم بتعويضك وفقًا لسياسة التأمين الخاصة بنا. نرجو إبلاغنا فورًا بأي مشكلة.'
      }
    ]
  },
  {
    category: 'التحضير للنقل',
    questions: [
      {
        q: 'كيف يمكنني الاستعداد ليوم النقل؟',
        a: 'ننصح بتجهيز قائمة بالأغراض الهامة، فصل الأشياء الثمينة، وإخلاء الممرات. سنقدم لك قائمة تفصيلية بالإرشادات قبل يوم النقل.'
      },
      {
        q: 'هل يجب علي تفريغ خزائن الملابس والأدراج؟',
        a: 'نعم، يفضل تفريغ الخزائن والأدراج لتسهيل عملية النقل وتقليل وزن الأثاث.'
      },
      {
        q: 'هل أحتاج إلى التواجد أثناء عملية النقل؟',
        a: 'يفضل تواجدك أو تواجد شخص يمثلك لتوجيه الفريق وضمان نقل جميع الأغراض بشكل صحيح.'
      }
    ]
  }
]

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({})

  const toggleQuestion = (category: string, index: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }))
  }

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2B3990] mb-4">الأسئلة الشائعة</h2>
          <div className="w-24 h-1 bg-[#E31E24] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-12 relative">
            <input
              type="text"
              placeholder="ابحث عن سؤال..."
              className="w-full p-4 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2B3990] outline-none shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>

          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-[#2B3990] bg-white p-4 rounded-xl shadow-md">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                      className="flex justify-between items-center w-full p-6 text-right hover:bg-gray-50 transition-colors duration-300"
                      onClick={() => toggleQuestion(category.category, index)}
                    >
                      <span className="font-medium text-lg">{faq.q}</span>
                      {openQuestions[`${category.category}-${index}`] ? (
                        <ChevronUp className="w-6 h-6 text-[#2B3990]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#2B3990]" />
                      )}
                    </button>
                    {openQuestions[`${category.category}-${index}`] && (
                      <div className="p-6 bg-gray-50 border-t border-gray-100">
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
