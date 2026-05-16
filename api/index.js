// Minimal Vercel serverless SSR proxy for Vite/TanStack Start (ESM)
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

export default async function handler(req, res) {
  try {
    const serverEntry = path.join(process.cwd(), 'dist', 'server', 'index.js');
    if (!fs.existsSync(serverEntry)) {
      res.statusCode = 500;
      res.end('Server build not found');
      return;
    }

    const mod = await import(pathToFileURL(serverEntry).href);
    const h = mod.handler || mod.default || mod;
    if (typeof h !== 'function') {
      res.statusCode = 500;
      res.end('Server handler not found');
      return;
    }

    return h(req, res);
  } catch (err) {
    res.statusCode = 500;
    res.end('SSR error: ' + String(err));
  }
}
