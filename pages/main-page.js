import Image from 'next/image'
import Link from 'next/link'

export default function MainPage () {
  return (
    <div className='w-full min-h-screen bg-gray-100 text-gray-900'>
      {/* Header */}
      <header className='w-full flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50'>
        <h1
          className='text-3xl font-bold text-gray-800 cursor-pointer'
          onClick={() => (window.location.href = '/')}
        >
          LEZZET CATERING
        </h1>
        <nav>
          <ul className='hidden md:flex space-x-6 text-lg font-medium'>
            <Link href='/history-menu' legacyBehavior>
              <a className='hover:text-red-600'>Tarihi Osmanlı Dönercisi</a>
            </Link>
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className='welcome-section text-center'>
        <h2 className='welcome-heading'>Hoş Geldiniz!</h2>
        <p className='welcome-text'>
          LEZZET CATERING, etkinliklerinizi unutulmaz kılmak için özel yemek
          çözümleri sunar. Eşsiz lezzetlerimiz ve profesyonel servisimizle, her
          türlü organizasyonunuzu mükemmel bir deneyime dönüştürüyoruz.
        </p>
      </section>

      {/* Menus Section */}
      <section id='menus' className='py-16 px-6 text-center'>
        <h2 className='text-4xl font-bold text-gray-800'>
          Menülerimizi Keşfedin
        </h2>
        <p className='mt-4 text-gray-600'>
          En sevdiğimiz tariflerimizden bir seçki.
        </p>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            Açık Büfe
          </div>
          <div className='p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            Atıştırmalıklar
          </div>
          <div className='p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            Kahvaltı
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id='gallery' className='py-16 px-6 text-center bg-gray-50'>
        <h2 className='text-4xl font-bold text-gray-800'>Galeri</h2>
        <p className='mt-4 text-gray-600'>Lezzetli sunumlarımızı keşfedin.</p>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Image
            src='/gallery1.jpg'
            alt='Galeri 1'
            width={300}
            height={200}
            className='rounded-lg shadow-lg'
          />
          <Image
            src='/gallery2.jpg'
            alt='Galeri 2'
            width={300}
            height={200}
            className='rounded-lg shadow-lg'
          />
          <Image
            src='/gallery3.jpg'
            alt='Galeri 3'
            width={300}
            height={200}
            className='rounded-lg shadow-lg'
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-16 px-6 text-center bg-gray-900 text-white'
      >
        <h2 className='text-4xl font-bold'>İletişim</h2>
        <p className='mt-4'>Adres: İstanbul, Türkiye</p>
        <p className='mt-2'>Telefon: +90 555 555 55 55</p>
        <p className='mt-2'>E-posta: info@lezzetcatering.com</p>
      </section>
    </div>
  )
}
