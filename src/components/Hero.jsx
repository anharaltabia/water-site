import { useData } from '../context/DataContext';

export default function Hero() {
  const { hero } = useData();
  if (!hero) return null;

  return (
    <section id="home" className="relative bg-gradient-to-b from-brand-light to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right">
            <span className="inline-block bg-brand-sky/20 text-brand-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
              {hero.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight mb-6">{hero.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{hero.description}</p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#products" className="btn-primary">استكشف منتجاتنا</a>
              <a href="#contact" className="btn-outline">اطلب الآن</a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-brand-sky rounded-full"></span> نقاء تام
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-brand-sky rounded-full"></span> جودة موثوقة
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-brand-sky rounded-full"></span> من الطبيعة
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-sky rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-brand-blue to-brand-sky rounded-3xl overflow-hidden shadow-2xl h-80 md:h-96 flex items-center justify-center">
              {hero.image_url ? (
                <img src={hero.image_url} alt="Hero" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-white p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z"/>
                  </svg>
                  <p className="text-2xl font-bold mb-2">مياه نقية</p>
                  <p className="text-sm opacity-90">من قلب الطبيعة</p>
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 text-center">
                <span className="text-brand-blue font-bold">{hero.ph_value}</span>
                <span className="text-gray-600 text-sm mr-2">{hero.ph_label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
