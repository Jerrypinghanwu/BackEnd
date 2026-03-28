import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  console.log('🚀 Starting SSG Prerendering via Puppeteer & Vite Preview...');
  const server = await preview({ preview: { port: 4173, host: true } });
  
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: process.env.GITHUB_ACTIONS ? 'google-chrome' : undefined,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:4173/BackEnd/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  
  // Give React 2 seconds to completely hydrate and run animations
  await new Promise(r => setTimeout(r, 2000));
  
  let html = await page.content();
  // CRITICAL FIX: Puppeteer serializes absolute DOM paths for img src
  // We must strip http://127.0.0.1:4173 and keep the absolute-relative base '/BackEnd/'
  html = html.replace(/http:\/\/(127\.0\.0\.1|localhost):4173/g, '');
  
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  fs.writeFileSync(indexPath, html);
  
  await browser.close();
  server.httpServer.close();
  console.log('✅ SSG Prerendering complete. index.html is now fully populated.');
})().catch(err => {
  console.error('❌ SSG Prerendering failed:', err);
  process.exit(1);
});
