import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from '../api/index.js';

async function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error('Source server build not found:', src);
    process.exit(1);
  }
  await fs.promises.rm(dest, { recursive: true, force: true });
  await fs.promises.mkdir(dest, { recursive: true });
  if (fs.promises.cp) {
    await fs.promises.cp(src, dest, { recursive: true });
  } else {
    const entries = await fs.promises.readdir(src, { withFileTypes: true });
    for (const e of entries) {
      const srcPath = path.join(src, e.name);
      const destPath = path.join(dest, e.name);
      if (e.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else {
        await fs.promises.copyFile(srcPath, destPath);
      }
    }
  }
}

async function main() {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const rootDir = path.resolve(scriptDir, '..');
  const src = path.join(rootDir, 'dist', 'server');
  const dest = path.join(rootDir, 'api', '_server');
  const clientIndex = path.join(rootDir, 'dist', 'client', 'index.html');
  try {
    await copyDir(src, dest);
    console.log('Copied server build to', dest);

    const req = { method: 'GET', url: '/', headers: { host: 'localhost', 'x-forwarded-proto': 'https' } };
    const res = {
      statusCode: 200,
      statusMessage: 'OK',
      headers: {},
      setHeader(key, value) {
        this.headers[key] = value;
      },
      end(body) {
        this.body = Buffer.isBuffer(body) ? body.toString() : String(body ?? '');
      },
    };

    await handler(req, res);
    if (!res.body) {
      throw new Error('Failed to render index.html from app shell');
    }
    await fs.promises.writeFile(clientIndex, res.body, 'utf8');
    console.log('Wrote static index.html to', clientIndex);
  } catch (err) {
    console.error('Failed to copy server build:', err);
    process.exit(1);
  }
}

main();
