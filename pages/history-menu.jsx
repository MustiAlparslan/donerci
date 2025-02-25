export default function HistoryMenu() {
    return (
      <div className="min-h-screen p-10 bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Catering Deluxe</h1>
          <p className="text-lg text-gray-800 mb-10">Size en uygun menüleri birlikte seçelim.</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Menü Kartları */}
          {[
            { title: "Lezzetli Menü 1", description: "Özel tarifler ve harika tatlar.", price: "$50" },
            { title: "Lezzetli Menü 2", description: "Özel tarifler ve harika tatlar.", price: "$100" },
            { title: "Lezzetli Menü 3", description: "Özel tarifler ve harika tatlar.", price: "$150" },
            { title: "Lezzetli Menü 4", description: "Özel tarifler ve harika tatlar.", price: "$200" },
            { title: "Lezzetli Menü 5", description: "Özel tarifler ve harika tatlar.", price: "$250" },
            { title: "Lezzetli Menü 6", description: "Özel tarifler ve harika tatlar.", price: "$300" },
          ].map((menu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="mb-4 flex items-center justify-center">
                <img src="/images/food-icon.png" alt="Yemek" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{menu.title}</h3>
              <p className="text-gray-700 mb-4">{menu.description}</p>
              <p className="text-lg font-bold">{menu.price}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">İletişim</h2>
          <p className="text-gray-800">Adres: İstanbul, Türkiye</p>
          <p className="text-gray-800">Telefon: +90 555 555 55 55</p>
          <p className="text-gray-800">E-posta: info@deluxecatering.com</p>
        </div>
      </div>
    );
  }
  