import { useData } from '../context/DataContext';

export default function Footer() {
  const { settings, contact } = useData();
  if (!settings) return null;

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {settings.logo_image ? (
                <img src={settings.logo_image} alt="Logo" className="w-12 h-12 object-contain rounded-full bg-white p-1" />
              ) : (
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z"/>
                  </svg>
                </div>
              )}
              <div>
                <h3 className="font-bold text-lg">{settings.site_name}</h3>
                <p className="text-xs text-gray-300">{settings.site_tagline}</p>
              </div>
            </div>
            {settings.footer_about && (
              <p className="text-sm text-gray-300 leading-relaxed">{settings.footer_about}</p>
            )}
          </div>

          <div>
            <h4 className="font-bold mb-4 text-brand-sky">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white transition">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition">من نحن</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition">منتجاتنا</a></li>
              <li><a href="#why" className="text-gray-300 hover:text-white transition">لماذا نحن؟</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-brand-sky">منتجاتنا</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="text-gray-300 hover:text-white transition">الحجم الأول - صغيرة</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition">الحجم الثاني - متوسطة</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition">الحجم الثالث - عائلية</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition">الحجم الرابع - كبيرة</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition">الحجم الخامس - عائلية كبيرة</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-brand-sky">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              {contact?.phone1 && (
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href={'tel:' + contact.phone1} dir="ltr" className="hover:text-white transition">{contact.phone1}</a>
                </li>
              )}
              {contact?.phone2 && (
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href={'tel:' + contact.phone2} dir="ltr" className="hover:text-white transition">{contact.phone2}</a>
                </li>
              )}
              {contact?.address && (
                <li className="flex items-start gap-2 text-gray-300">
                  <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {contact.address}
                </li>
              )}
            </ul>
          </div>
        </div>

        {settings.footer_copyright && (
          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
            <p>{settings.footer_copyright}</p>
          </div>
        )}
      </div>
    </footer>
  );
}
