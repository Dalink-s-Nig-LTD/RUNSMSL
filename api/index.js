// Minimal Vercel serverless SSR proxy for Vite/TanStack Start
const fs = require('fs');
const path = require('path');

module.exports = async function (req, res) {
  try {
    const serverEntry = path.join(__dirname, '..', 'dist', 'server', 'index.js');
    if (!fs.existsSync(serverEntry)) {
      res.statusCode = 500;
      res.end('Server build not found');
      return;
    }

    const mod = require(serverEntry);
    const handler = mod && (mod.handler || mod.default || mod);
    if (typeof handler !== 'function') {
      res.statusCode = 500;
      res.end('Server handler not found');
      return;
    }

    // Delegate to the server entry. Many SSR bundles expect a (req,res) handler.
    return handler(req, res);
  } catch (err) {
    res.statusCode = 500;
    res.end('SSR error: ' + String(err));
  }
};
