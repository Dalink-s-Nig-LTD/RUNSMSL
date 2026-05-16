// Minimal Vercel serverless SSR proxy for Vite/TanStack Start (ESM)
import serverEntry from './_server/index.js';

function toRequest(req) {
  const host = req.headers.host || 'localhost';
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const url = new URL(req.url, `${protocol}://${host}`);
  const init = {
    method: req.method,
    headers: req.headers,
  };

  if (!['GET', 'HEAD'].includes(req.method || 'GET')) {
    init.body = req;
  }

  return new Request(url, init);
}

async function writeResponse(nodeRes, response) {
  nodeRes.statusCode = response.status;
  nodeRes.statusMessage = response.statusText;

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === 'set-cookie') {
      nodeRes.setHeader(key, response.headers.getSetCookie?.() || value);
      return;
    }
    nodeRes.setHeader(key, value);
  });

  if (!response.body) {
    nodeRes.end();
    return;
  }

  const arrayBuffer = await response.arrayBuffer();
  nodeRes.end(Buffer.from(arrayBuffer));
}

export default async function handler(req, res) {
  try {
    const entry = serverEntry.default || serverEntry;
    const fetchHandler = entry?.fetch || entry?.default?.fetch;
    if (typeof fetchHandler !== 'function') {
      res.statusCode = 500;
      res.end('Server fetch handler not found');
      return;
    }

    const request = toRequest(req);
    const response = await fetchHandler(request, {});
    await writeResponse(res, response);
  } catch (err) {
    res.statusCode = 500;
    res.end('SSR error: ' + String(err?.stack || err));
  }
}
