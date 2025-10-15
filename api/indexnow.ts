import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const hostHeader = (req.headers['x-forwarded-host'] as string) || (req.headers.host as string) || 'jestemprogramista.pl';
    const host = hostHeader.replace(/:\d+$/, '');

    const key = 'ed0b30f902984f53a74ef2d69f77f48a';
    const keyLocation = `https://${host}/${key}.txt`;

    const { urlList } = req.body || {};
    if (!Array.isArray(urlList) || urlList.length === 0) {
      res.status(400).json({ error: 'urlList requerido y debe ser un array con al menos una URL' });
      return;
    }

    const payload = {
      host,
      key,
      keyLocation,
      urlList,
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (error: any) {
    res.status(500).json({ error: 'Error enviando a IndexNow', details: error?.message || String(error) });
  }
}