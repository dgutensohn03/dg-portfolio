// scripts/capture_screens.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const modules = [
  { client: 'kenvue', url: 'https://lhtclients.com/Projects/Kenvue/Cyber_Training/final_v15/story.html', file: 'kenvue-cybersecurity-thumb-title.jpg' },
  { client: 'valvoline', url: 'https://lhtclients.com/Projects/Valvoline/VGO/vmobile/NAPA/EngineOils/Page_1/a5/', file: 'valvoline-napa-oils-thumb-title.jpg' },
  { client: 'envision', url: 'https://lhtclients.com/Projects/Envision/EMTALA_Training/f4/', file: 'envision-emtala-thumb-title.jpg' },
  { client: 'acadia', url: 'https://lhtclients.com/Projects/Live_Courses/Acadia/Adverse_Events/Live/', file: 'acadia-adverse-events-thumb-title.jpg' },
  { client: 'jj', url: 'https://lhtclients.com/Projects/JJ/Dawn_Raid/final_40/', file: 'jj-dawn-raid-thumb-title.jpg' },
  { client: 'valvoline', url: 'https://lhtclients.com/Projects/Valvoline/ExpressCare/PCW_INTLExpressCare/_translation/Selling_Through_Conversation/a12/', file: 'valvoline-selling-conversation-thumb-title.jpg' },
  { client: 'janssen', url: 'https://lhtclients.com/Projects/Janssen/HCC_Annual_Canada_GSCO/final/', file: 'janssen-hcc-annual-thumb-title.jpg' },
  { client: 'jj', url: 'https://www.lhtclients.com/Projects/JJ/HT_Automation_101/module_4/final/', file: 'jj-automation101-thumb-title.jpg' },
  { client: 'jj', url: 'https://lhtclients.com/Projects/JJ/BCM_Portal/f1/', file: 'jj-bcm-portal-thumb-title.jpg' },
  { client: 'valvoline', url: 'https://lhtclients.com/Projects/Valvoline/SFDC/MapAnything/BestPractices/v2/story.html', file: 'valvoline-mapanything-thumb-title.jpg' },
  { client: 'aep', url: 'https://lhtclients.com/Projects/AEP/Sexual_Harassment/f1/', file: 'aep-sexual-harassment-thumb-title.jpg' },
  { client: 'umo', url: 'https://lhtclients.com/Projects/UMO/Compliance101/final_v5/', file: 'umo-compliance101-thumb-title.jpg' },
  { client: 'tg', url: 'https://lhtclients.com/Projects/TG/Therapeutics/Legal_and_Compliance_Overview/f5/story.html', file: 'tg-legal-compliance-thumb-title.jpg' },
  { client: 'owens-minor', url: 'https://www.lhtclients.com/Projects/OM/GDPR_Data_Protection/f3/', file: 'om-gdpr-thumb-title.jpg' },
  { client: 'jj', url: 'https://lhtclients.com/Projects/JJ/Export_Controls/Final2/index.html', file: 'jj-export-controls-thumb-title.jpg' },
  { client: 'jj', url: 'https://lhtclients.com/Projects/JJ/Passport_Innovation/f3/', file: 'jj-passport-innovation-thumb-title.jpg' },
  { client: 'jj', url: 'https://lhtclients.com/Projects/JJ/3DPrinting/final/', file: 'jj-3dprinting-thumb-title.jpg' },
  { client: 'valvoline', url: 'https://lhtclients.com/Projects/Valvoline/VIOC/V813/updates/a1/', file: 'valvoline-v813-thumb-title.jpg' },
  { client: 'valvoline', url: 'https://lhtclients.com/Projects/Valvoline/VCert/2024/dev/', file: 'valvoline-vcert-thumb-title.jpg' },
  { client: 'owens-minor', url: 'https://compliance.owens-minor.com/', file: 'om-ethics-portal-thumb-title.jpg' }
];

(async () => {
  const baseDir = path.join(process.cwd(), 'public', 'images', 'projects');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  for (const mod of modules) {
    const folderPath = path.join(baseDir, mod.client);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    console.log(`Capturing: ${mod.url}`);
    await page.goto(mod.url, { waitUntil: 'networkidle2' });
    
    // Wait a moment for UI animations, loaders, etc (instead of page.waitForTimeout)
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    await page.screenshot({
      path: path.join(folderPath, mod.file),
      type: 'jpeg',
      quality: 90,
    });
    
  }

  await browser.close();
  console.log('✅ Screenshots complete!');
})();
