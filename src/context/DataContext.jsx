import { createContext, useContext, useState, useEffect } from 'react';
import { tursoQuery } from '../lib/turso';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useState({
    settings: null, hero: null, products: [], features: [], contact: null, socialLinks: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAll() {
      try {
        const [settings, hero, products, features, contact, socialLinks] = await Promise.all([
          tursoQuery('SELECT * FROM settings WHERE id = 1').then(r => r?.[0] || null),
          tursoQuery('SELECT * FROM hero WHERE id = 1').then(r => r?.[0] || null),
          tursoQuery('SELECT * FROM products WHERE is_active = 1 ORDER BY sort_order'),
          tursoQuery('SELECT * FROM features ORDER BY sort_order'),
          tursoQuery('SELECT * FROM contact WHERE id = 1').then(r => r?.[0] || null),
          tursoQuery('SELECT * FROM social_links WHERE is_active = 1 ORDER BY sort_order'),
        ]);
        setData({
          settings, hero, products: products || [], features: features || [],
          contact, socialLinks: socialLinks || [],
        });
      } catch (err) { console.error('خطأ:', err); }
      finally { setLoading(false); }
    }
    loadAll();
  }, []);

  return <DataContext.Provider value={{ ...data, loading }}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be inside DataProvider');
  return ctx;
}
