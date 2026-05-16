import fs from 'fs';
import path from 'path';

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
  const cwd = process.cwd();
  const src = path.join(cwd, 'dist', 'server');
  const dest = path.join(cwd, 'api', '_server');
  try {
    await copyDir(src, dest);
    console.log('Copied server build to', dest);
  } catch (err) {
    console.error('Failed to copy server build:', err);
    process.exit(1);
  }
}

main();
