import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function MainPage () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sections = [
    {
      title: 'Hizmetlerimiz',
      desc: 'Özel catering hizmetlerimizle unutulmaz lezzetler sunuyoruz.'
    },
    {
      title: 'Kampanyalar',
      desc: 'Özel indirimler ve fırsatlar sizi bekliyor!'
    },
    {
      title: 'Müşteri Memnuniyeti',
      desc: 'Lezzet ve kaliteyi bir araya getiriyoruz.'
    },
    {
      title: 'Bize Ulaşın',
      desc: 'Etkinlikleriniz için en iyi catering hizmetini sunuyoruz.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sections.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='w-full min-h-screen bg-white text-gray-900'>
        {/* Header */}
        <header className='w-full flex justify-center items-center p-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50'>
          <div className='flex items-center space-x-8'>
          <h1 className="text-3xl font-bold text-red-600 cursor-pointer" onClick={() => window.location.href = '/'}>Catering Firması</h1>
            <nav>
              <ul className='flex space-x-6 text-lg font-medium'>
                <li>
                  <a href='#services' className='hover:text-red-600'>
                    Hizmetler
                  </a>
                </li>
                <li>
                  <a href='#campaigns' className='hover:text-red-600'>
                    Kampanyalar
                  </a>
                </li>
                <li>
                  <a href='#reviews' className='hover:text-red-600'>
                    Müşteri Yorumları
                  </a>
                </li>
                <li>
                  <a href='#contact' className='hover:text-red-600'>
                    İletişim
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section with Slider */}
        <section className='w-full max-w-5xl mx-auto mt-24 p-10 text-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl shadow-lg'>
          <h2 className='text-4xl font-bold'>{sections[currentIndex].title}</h2>
          <p className='mt-2 text-lg'>{sections[currentIndex].desc}</p>
        </section>

        {/* Hizmetler Section */}
        <section id='services' className='py-16 px-6 text-center'>
          <h2 className='text-4xl font-bold text-gray-800'>Hizmetlerimiz</h2>
          <p className='mt-4 text-gray-600'>
            Düğün, kurumsal etkinlikler ve özel davetler için profesyonel
            catering hizmeti.
          </p>
          <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='p-6 bg-gray-100 rounded-lg shadow'>
              Geleneksel Menü
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow'>
              Vejetaryen Seçenekler
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow'>
              Özel Diyet Menüleri
            </div>
          </div>
        </section>

        {/* Kampanyalar */}
        <section id='campaigns' className='py-16 px-6 text-center bg-gray-50'>
          <h2 className='text-4xl font-bold text-gray-800'>Kampanyalar</h2>
          <p className='mt-4 text-gray-600'>Özel indirimlerden yararlanın!</p>
          <div className='mt-6 p-6 bg-red-100 rounded-lg shadow'>
            Tüm etkinliklerde %15 indirim!
          </div>
        </section>

        {/* Müşteri Yorumları */}
        <section id='reviews' className='py-16 px-6 text-center'>
          <h2 className='text-4xl font-bold text-gray-800'>
            Müşteri Yorumları
          </h2>
          <p className='mt-4 text-gray-600'>
            Müşterilerimizin deneyimlerini okuyun.
          </p>
          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 bg-gray-100 rounded-lg shadow'>
              “Yemekler harikaydı!”
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow'>
              “Etkinliğimiz çok keyifli geçti.”
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section
          id='contact'
          className='py-16 px-6 text-center bg-gray-900 text-white'
        >
          <h2 className='text-4xl font-bold text-red-400'>İletişim</h2>
          <p className='mt-4'>Adres: İstanbul, Türkiye</p>
          <p className='mt-2'>Telefon: +90 555 555 55 55</p>
          <p className='mt-2'>E-posta: info@cateringfirmasi.com</p>
          <div className='mt-6 p-6 bg-gray-700 rounded-lg shadow'>
            İletişim Formu Gelecek
          </div>
        </section>
      </div>
    </>
  )
}
