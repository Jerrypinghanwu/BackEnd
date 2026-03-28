import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  console.log('🚀 Starting SSG Prerendering via Puppeteer & Vite Preview...');
  const server = await preview({ preview: { port: 4173 } });
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  
  const html = await page.content();
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  fs.writeFileSync(indexPath, html);
  
  await browser.close();
  server.httpServer.close();
  console.log('✅ SSG Prerendering complete. index.html is now fully populated.');
})();
