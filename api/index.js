// Minimal Vercel serverless SSR proxy for Vite/TanStack Start (ESM)
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

async function tryImport(entryPath) {
  const url = pathToFileURL(entryPath).href;
  const mod = await import(url);
  return mod;
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
