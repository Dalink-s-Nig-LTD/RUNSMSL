import { Buffer } from 'node:buffer';

async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  try {
    // Dynamically import the built server entry (created by your build)
    const mod = await import('../dist/server/index.js');
    const handle = mod?.default ?? mod;

    const host = req.headers.host || 'localhost';
    const url = new URL(req.url, `https://${host}`);

    const init = { method: req.method, headers: req.headers };
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = await getRawBody(req);
    }

    const request = new Request(url.toString(), init);

    // Call the server handler which should return a Response-like object
    const response = await handle(request);

    // Forward status and headers
    res.statusCode = response.status || 200;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    // Stream/pipe the body
    const arrayBuffer = await response.arrayBuffer();
    const bodyBuffer = Buffer.from(arrayBuffer);
    res.end(bodyBuffer);
  } catch (err) {
    console.error('SSR handler error:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
}
