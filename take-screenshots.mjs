import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const outDir = path.resolve('public/screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log('Navigating to http://127.0.0.1:4173/ ...');
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle', timeout: 10000 });

  // 1. Hero & Dark Brown Header
  console.log('1. Capturing Header & Hero...');
  await page.screenshot({ path: path.join(outDir, '1-hero-header.png') });

  // 2. Banana Leaf Feast Section
  console.log('2. Capturing Banana Leaf Feast Builder with Dish Images...');
  const feastSection = page.locator('#leaf-feast');
  await feastSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '2-feast-builder.png') });

  // 3. Event Planning Mandapam
  console.log('3. Capturing Mandapam Events...');
  const mandapamSection = page.locator('#mandapam-events');
  await mandapamSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '3-mandapam-scenography.png') });

  // 4. Muhurtham Calendar
  console.log('4. Capturing Muhurtham Calendar...');
  const panchangamSection = page.locator('#panchangam');
  await panchangamSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '4-muhurtham-calendar.png') });

  // 5. Recipe Vault
  console.log('5. Capturing Recipe Vault...');
  const recipeSection = page.locator('#recipe-vault');
  await recipeSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '5-recipe-vault.png') });

  await browser.close();
  console.log('Screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});
