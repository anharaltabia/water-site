import { useData } from '../context/DataContext';

export default function Products() {
  const { products } = useData();

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">منتجاتنا</h2>
          <p className="section-subtitle">خمسة أحجام تناسب كل الاستخدامات، بنفس النقاء ونفس الجودة الثابتة</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-brand-blue to-brand-sky h-44 md:h-52 flex items-center justify-center relative">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-16 h-16 md:w-20 md:h-20 text-white opacity-95" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z"/>
                  </svg>
                )}
                <span className="absolute top-2 right-2 bg-white/90 text-brand-dark text-xs font-bold px-2 py-1 rounded-full">
                  {product.size_label}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-brand-dark text-base md:text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 min-h-[3rem]">{product.description}</p>
                <a href="#contact" className="block text-center bg-brand-blue text-white py-2 rounded-lg text-sm font-bold hover:bg-brand-dark transition-colors">اطلب الآن</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
