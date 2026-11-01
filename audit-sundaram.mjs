import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function runAudit() {
  console.log('--- STARTING SUNDARAM & SONS AUDIT ---');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('[Browser Error]:', msg.text());
    }
  });

  const screenshotDir = path.resolve(process.cwd(), 'audit-screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // Try localhost:4173, [::1]:4173, or 127.0.0.1
  const targets = ['http://[::1]:4173/', 'http://localhost:4173/', 'http://127.0.0.1:4173/'];
  let connected = false;

  for (const url of targets) {
    try {
      console.log(`Connecting to ${url} ...`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 5000 });
      connected = true;
      console.log(`Successfully connected to ${url}`);
      break;
    } catch (e) {
      console.log(`Failed connecting to ${url}: ${e.message}`);
    }
  }

  if (!connected) {
    throw new Error('Could not connect to preview server.');
  }

  // 1. Hero Screenshot
  console.log('1. Capturing Hero with Kolam Artwork...');
  await page.screenshot({ path: path.join(screenshotDir, '1-hero-kolam.png') });

  // Test interactive Kolam switcher in Hero
  console.log('Testing Kolam pattern switcher...');
  const brahmaBtn = page.getByRole('button', { name: 'Brahma Mudi' });
  if (await brahmaBtn.isVisible()) {
    await brahmaBtn.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(screenshotDir, '1b-hero-brahma-kolam.png') });
  }

  // 2. Banana Leaf Feast Section
  console.log('2. Scrolling to Banana Leaf Feast Simulator...');
  const leafSection = page.locator('#leaf-feast');
  await leafSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(screenshotDir, '2-banana-leaf-feast.png') });

  // Test clicking Chettinad Raja Virundhu preset
  console.log('Testing package switch on Banana Leaf...');
  const chettinadBtn = page.getByRole('button', { name: /Chettinad Raja Virundhu/i });
  if (await chettinadBtn.isVisible()) {
    await chettinadBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '2b-chettinad-leaf-package.png') });
  }

  // 3. Royal Mandapam & Event Planning
  console.log('3. Scrolling to Mandapam & Event Planning...');
  const mandapamSection = page.locator('#mandapam-events');
  await mandapamSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(screenshotDir, '3-mandapam-events.png') });

  // Test Night Lighting Toggle on Mandapam
  console.log('Testing Mandapam Night Lighting...');
  const nightBtn = page.getByRole('button', { name: /Deepam Glow/i });
  if (await nightBtn.isVisible()) {
    await nightBtn.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(screenshotDir, '3b-mandapam-night-deepam.png') });
  }

  // 4. 100-Year Heritage Timeline
  console.log('4. Scrolling to 100-Year Heritage Timeline...');
  const heritageSection = page.locator('#heritage');
  await heritageSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(screenshotDir, '4-heritage-timeline.png') });

  // 5. Auspicious Panchangam Muhurtham Calculator
  console.log('5. Scrolling to Muhurtham Panchangam Calculator...');
  const panchangamSection = page.locator('#panchangam');
  await panchangamSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(screenshotDir, '5-panchangam-calculator.png') });

  // 6. Recipe Vault
  console.log('6. Scrolling to Recipe Vault...');
  const recipeSection = page.locator('#recipe-vault');
  await recipeSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(screenshotDir, '6-recipe-vault.png') });

  // 7. Test Reserve Muhurtham Modal
  console.log('7. Opening VIP Reservation Modal...');
  const reserveBtn = page.getByRole('button', { name: /Reserve Muhurtham/i }).first();
  await reserveBtn.click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(screenshotDir, '7-reservation-modal.png') });

  // Close modal
  const closeBtn = page.locator('button:has(svg.lucide-x)');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
    await page.waitForTimeout(400);
  }

  // 8. Mobile Viewport Check (390px iPhone 14 Pro)
  console.log('8. Capturing Mobile Viewport...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(screenshotDir, '8-mobile-hero.png') });

  await browser.close();

  console.log('--- AUDIT FINISHED SUCCESSFULLY! ---');
  console.log('Total Console Errors:', consoleErrors.length);
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
