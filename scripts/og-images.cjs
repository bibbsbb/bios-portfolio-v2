/* eslint-disable @typescript-eslint/no-require-imports -- plain Node script */
// Renders the 1200x630 share images in public/og/ from small HTML templates.
// Usage: node scripts/og-images.cjs   (needs Google Chrome and playwright-core)
// Re-run after changing a project's headline, colors or images in lib/work.ts.
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = path.resolve(__dirname, '..');
const fs = require('fs');
// Images are inlined as data URIs because the template page can't read local files.
const pub = (p) => {
  const ext = path.extname(p).slice(1).replace('jpg', 'jpeg');
  return `data:image/${ext};base64,` + fs.readFileSync(path.join(ROOT, 'public', p)).toString('base64');
};
const fonts =
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500&family=Inter:wght@400;500&family=JetBrains+Mono&display=swap">';
const mark = (color) =>
  `<span style="display:inline-flex;align-items:center;gap:6px;color:${color}">
     <svg viewBox="0 0 40 80" width="14" height="28"><path d="M34 6 L8 40 L34 74" stroke="currentColor" stroke-width="9" fill="none"/></svg>
     <b style="font:500 30px 'Inter Tight'">b</b>
     <svg viewBox="0 0 40 80" width="14" height="28"><path d="M6 6 L32 40 L6 74" stroke="currentColor" stroke-width="9" fill="none"/></svg>
   </span>`;
const base = `*{margin:0;box-sizing:border-box}h1{text-wrap:balance}body{width:1200px;height:630px;overflow:hidden;font-family:Inter,Arial,sans-serif;-webkit-font-smoothing:antialiased}`;

const pages = {
  home: `<div style="display:flex;height:630px;background:#0a0a0a;color:#f5f5f4">
    <div style="flex:1;display:flex;flex-direction:column;justify-content:space-between;padding:64px">
      <div style="display:flex;align-items:center;gap:14px">${mark('#f5f5f4')}<span style="font:300 26px 'Inter Tight';letter-spacing:-.5px">brandon bibbins</span></div>
      <h1 style="font:300 72px/0.98 'Inter Tight';letter-spacing:-3px">I design, build and <span style="color:#737373">run</span> digital products.</h1>
      <p style="font:400 15px 'JetBrains Mono';letter-spacing:3px;text-transform:uppercase;color:#a3a3a3">Design · Development · IT leadership</p>
    </div>
    <img src="${pub('about/brandon.jpg')}" style="width:430px;height:630px;object-fit:cover;object-position:center 30%">
  </div>`,
  tautau: `<div style="position:relative;height:630px;background:#0a0a0a;color:#f5f5f4;padding:64px;display:flex;flex-direction:column;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${mark('#f5f5f4')}<span style="font:300 26px 'Inter Tight'">brandon bibbins</span></div>
    <div>
      <p style="font:400 15px 'JetBrains Mono';letter-spacing:3px;text-transform:uppercase;color:#b8995a">Private proposal</p>
      <h1 style="margin-top:22px;font:300 88px/0.95 'Inter Tight';letter-spacing:-3.5px">A modern home for<br><span style="color:#d9c38f">Tau Tau Chapter.</span></h1>
    </div>
    <p style="font:400 15px 'JetBrains Mono';letter-spacing:2px;color:#a3a3a3">Website proposal · Passcode required</p>
    <div style="position:absolute;right:0;top:0;bottom:0;width:14px;background:#3a1652"></div>
  </div>`,
};

function project(p) {
  const shot = p.images.board || p.images.desktop;
  return `<div style="display:flex;height:630px;background:${p.stage};color:${p.stageInk}">
    <div style="width:520px;display:flex;flex-direction:column;justify-content:space-between;padding:60px">
      <p style="font:400 14px 'JetBrains Mono';letter-spacing:3px;text-transform:uppercase;opacity:.6">${p.index} · Case study</p>
      <div>
        <p style="font:500 34px 'Inter Tight';letter-spacing:-.5px">${p.name}</p>
        <h1 style="margin-top:18px;font:300 52px/1.02 'Inter Tight';letter-spacing:-2px">${p.headline}</h1>
      </div>
      <div style="display:flex;align-items:center;gap:12px;opacity:.75">${mark(p.stageInk)}<span style="font:300 20px 'Inter Tight'">brandon bibbins</span></div>
    </div>
    <div style="flex:1;position:relative;overflow:hidden">
      ${p.note && p.logo
        ? // Brand-context projects show the logo, not the client's website, so the image never implies we built it.
          `<div style="position:absolute;inset:60px 60px 60px 24px;display:flex;align-items:center;justify-content:center;border-radius:18px;background:rgba(255,255,255,.55)"><img src="${pub(p.logo.slice(1))}" style="width:380px"></div>`
        : `<img src="${pub(shot.slice(1))}" style="position:absolute;left:24px;top:60px;width:760px;border-radius:14px;box-shadow:0 30px 70px rgba(10,10,10,.25)">`}
    </div>
  </div>`;
}

(async () => {
  // lib/work.ts is TypeScript: compile it to a temporary CommonJS module and load it.
  const ts = require(path.join(ROOT, 'node_modules/typescript'));
  const out = ts.transpileModule(fs.readFileSync(path.join(ROOT, 'lib/work.ts'), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const tmp = path.join(require('os').tmpdir(), 'og-work-' + process.pid + '.cjs');
  fs.writeFileSync(tmp, out);
  const { projects } = require(tmp);
  fs.unlinkSync(tmp);
  for (const p of projects) pages[p.slug] = project(p);

  fs.mkdirSync(path.join(ROOT, 'public/og'), { recursive: true });
  const b = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const page = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const [name, html] of Object.entries(pages)) {
    await page.setContent(`<!doctype html><html><head>${fonts}<style>${base}</style></head><body>${html}</body></html>`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(ROOT, 'public/og', name + '.jpg'), type: 'jpeg', quality: 88 });
    console.log('og/' + name + '.jpg');
  }
  await b.close();
})();
