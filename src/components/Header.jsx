import { useState } from 'react';
import { useData } from '../context/DataContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { settings } = useData();

  const links = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'منتجاتنا', href: '#products' },
    { name: 'لماذا نحن؟', href: '#why' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  if (!settings) return null;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            {settings.logo_image ? (
              <img src={settings.logo_image} alt="Logo" className="w-12 h-12 object-contain rounded-full" />
            ) : (
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z"/>
                </svg>
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold text-brand-dark">{settings.site_name}</h1>
              <p className="text-xs text-gray-500">{settings.site_tagline}</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-brand-blue font-medium transition-colors">{link.name}</a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:block btn-primary">اطلب الآن</a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-brand-dark" aria-label="القائمة">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t pt-4">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-brand-blue font-medium py-2">{link.name}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-center">اطلب الآن</a>
          </nav>
        )}
      </div>
    </header>
  );
}
