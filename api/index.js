// Minimal Vercel serverless SSR proxy for Vite/TanStack Start (ESM)
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

async function tryImport(entryPath) {
  const url = pathToFileURL(entryPath).href;
  return import(url);
}

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
    const cwd = process.cwd();
    const localEntry = path.join(cwd, 'api', '_server', 'index.js');
    const distEntry = path.join(cwd, 'dist', 'server', 'index.js');

    let mod = null;
    if (fs.existsSync(localEntry)) {
      mod = await tryImport(localEntry);
    } else if (fs.existsSync(distEntry)) {
      mod = await tryImport(distEntry);
    } else {
      res.statusCode = 500;
      res.end('Server build not found');
      return;
    }

    const entry = mod.default || mod;
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
