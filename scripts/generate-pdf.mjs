import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';

const outDir = join(process.cwd(), 'out');
const PORT = 3001; // Avoid port 3000 collision

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = createServer(async (req, res) => {
  try {
    let filePath = req.url.split('?')[0]; // Remove query strings
    if (filePath === '/') filePath = '/index.html';
    
    // Auto-append .html for Next.js exported routes like /resume
    if (!extname(filePath)) {
      filePath += '.html';
    }

    const fullPath = join(outDir, filePath);
    const content = await readFile(fullPath);
    const ext = extname(fullPath);
    
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(content);
  } catch (err) {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, async () => {
  console.log(`[PDF Generator] Static server running on http://localhost:${PORT}`);
  
  try {
    console.log(`[PDF Generator] Launching Puppeteer...`);
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Viewport doesn't affect print PDF format directly, but good for media queries if any
    await page.setViewport({ width: 1200, height: 800 });
    
    console.log(`[PDF Generator] Navigating to /resume...`);
    // Wait for network idle to ensure fonts and images are fully loaded
    await page.goto(`http://localhost:${PORT}/resume`, { waitUntil: 'networkidle0' });
    
    console.log(`[PDF Generator] Generating PDF...`);
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true, // Important to print the dark background of the resume
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      }
    });
    
    await browser.close();
    
    // Save to public (so it persists in the repo/local dev) 
    // and out (so it gets deployed in the current CI run)
    await writeFile(join(process.cwd(), 'public', 'curriculo.pdf'), pdfBuffer);
    
    // Depending on when this script is run, 'out' might not exist (e.g. if run manually).
    // We only save to 'out' if it exists.
    try {
      const stat = await import('fs/promises').then(fs => fs.stat(outDir));
      if (stat.isDirectory()) {
        await writeFile(join(outDir, 'curriculo.pdf'), pdfBuffer);
      }
    } catch (e) {
      // out directory doesn't exist, ignore
    }
    
    console.log(`[PDF Generator] Success! Saved to public/curriculo.pdf`);
  } catch (error) {
    console.error(`[PDF Generator] Error:`, error);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
