const TURSO_URL = import.meta.env.VITE_TURSO_URL || 'https://anharaltabiawater-yousef73.aws-eu-west-1.turso.io/v2/pipeline';
const TURSO_TOKEN = import.meta.env.VITE_TURSO_TOKEN;

async function tursoQuery(sql, args = []) {
  const payload = {
    requests: [
      { type: 'execute', stmt: { sql: sql, args: args.map(arg => {
        if (typeof arg === 'string') return { type: 'text', value: arg };
        if (typeof arg === 'number') return { type: 'integer', value: String(arg) };
        return { type: 'null', value: null };
      }) } },
      { type: 'close' }
    ]
  };

  const response = await fetch(TURSO_URL, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + TURSO_TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error('Turso error: ' + response.status);
  const data = await response.json();
  const result = data.results?.[0]?.response?.result;
  if (!result) return null;

  const columns = result.cols?.map(c => c.name) || [];
  return result.rows?.map(row => {
    const obj = {};
    columns.forEach((col, i) => { obj[col] = row[i]?.value ?? null; });
    return obj;
  }) || [];
}

export async function getProducts() {
  return tursoQuery('SELECT * FROM products WHERE is_active = 1 ORDER BY sort_order');
}
export async function getSettings() {
  const rows = await tursoQuery('SELECT * FROM settings WHERE id = 1');
  return rows?.[0] || null;
}
export async function getHero() {
  const rows = await tursoQuery('SELECT * FROM hero WHERE id = 1');
  return rows?.[0] || null;
}
export async function getFeatures() {
  return tursoQuery('SELECT * FROM features ORDER BY sort_order');
}
export async function getContact() {
  const rows = await tursoQuery('SELECT * FROM contact WHERE id = 1');
  return rows?.[0] || null;
}
export { tursoQuery };

export async function getSocialLinks() {
  return tursoQuery('SELECT * FROM social_links WHERE is_active = 1 ORDER BY sort_order');
}
