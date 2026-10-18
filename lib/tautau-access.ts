// Passcode gate for the Tau Tau Chapter pitch deck at /tautau.
// The passcode lives in the TAUTAU_PASSCODE environment variable. A correct entry
// sets a cookie holding an HMAC of a fixed label, keyed by the passcode, so changing
// the passcode signs everyone out.

export const ACCESS_COOKIE = 'tautau_access';

// Pages that show the passcode screen when locked, and where to go after unlocking.
// Anything else under /tautau is an asset and just gets a 401.
export const GATED_PAGES: Record<string, string> = {
  '/tautau': '/tautau',
  '/tautau/': '/tautau',
  '/tautau/index.html': '/tautau',
  '/tautau/checklist': '/tautau/checklist',
  '/tautau/checklist/': '/tautau/checklist',
  '/tautau/checklist/index.html': '/tautau/checklist',
};

// Only known proposal pages are valid return targets after unlocking.
export function safeNext(next: unknown): string {
  return typeof next === 'string' && Object.values(GATED_PAGES).includes(next) ? next : '/tautau';
}

const encoder = new TextEncoder();

export async function accessToken(passcode: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(passcode),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode('tautau-deck-v1'));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('');
}

// Constant-time comparison so response timing doesn't leak how much matched.
export function safeEqual(a: string, b: string): boolean {
  const x = encoder.encode(a);
  const y = encoder.encode(b);
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

// The passcode screen. `digits` > 0 shows that many code boxes (for a numeric passcode);
// without JavaScript, or for other passcodes, it is a plain passcode field.
export function unlockPage(wrong: boolean, digits = 0, next = '/tautau'): string {
  const boxes = Array.from({ length: digits }, (_, i) =>
    `<input class="box" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Digit ${i + 1}" autocomplete="${i === 0 ? 'one-time-code' : 'off'}">`,
  ).join('');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0a0a0a">
<title>Brandon Bibbins · Proposal for Tau Tau Chapter</title>
<meta name="description" content="A website proposal for Tau Tau Chapter from Brandon Bibbins. Passcode required.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Brandon Bibbins">
<meta property="og:title" content="A modern home for Tau Tau Chapter">
<meta property="og:description" content="A website proposal from Brandon Bibbins. Passcode required.">
<meta property="og:url" content="https://www.brandonbibbins.io/tautau">
<meta property="og:image" content="https://www.brandonbibbins.io/og/tautau.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="A modern home for Tau Tau Chapter">
<meta name="twitter:description" content="A website proposal from Brandon Bibbins. Passcode required.">
<meta name="twitter:image" content="https://www.brandonbibbins.io/og/tautau.jpg">
<link rel="icon" href="/favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500&family=Inter:wght@400;500&family=JetBrains+Mono&display=swap">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{min-height:100%}
body{background:#0a0a0a;color:#f5f5f4;font-family:Inter,Arial,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit;text-decoration:none}
.grain::after{content:"";position:fixed;inset:0;pointer-events:none;opacity:.06;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.glow{position:fixed;width:900px;height:900px;right:-260px;top:-300px;border-radius:50%;background:radial-gradient(circle,rgba(184,153,90,.16),transparent 62%);pointer-events:none}
.wrap{position:relative;min-height:100svh;max-width:1360px;margin:0 auto;padding:32px 28px;display:grid;grid-template-rows:auto 1fr auto;gap:40px}
header{display:flex;align-items:center;justify-content:space-between}
.logo{display:inline-flex;align-items:center;gap:12px;transition:opacity .25s}
.logo:hover{opacity:.7}
.mark{display:inline-flex;align-items:center;gap:3px}
.mark b{font:500 24px/1 'Inter Tight',Arial,sans-serif}
.logo span.name{font:300 20px/1 'Inter Tight',Arial,sans-serif;letter-spacing:-.3px}
.back{font:400 12px/1 'JetBrains Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#8f8f8f;transition:color .25s}
.back:hover{color:#f5f5f4}
main{display:grid;gap:56px;align-items:center}
@media (min-width:960px){main{grid-template-columns:1.15fr .85fr;gap:80px}.wrap{padding:40px 56px}}
.eyebrow{font:400 12px/1.4 'JetBrains Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:#b8995a}
h1{margin-top:22px;font:300 clamp(48px,7.4vw,112px)/.94 'Inter Tight',Arial,sans-serif;letter-spacing:-.045em;text-wrap:balance}
h1 em{font-style:normal;color:#d9c38f;display:inline-block;position:relative}
h1 em::after{content:"";position:absolute;left:0;right:0;bottom:-.06em;height:2px;background:#b8995a;transform:scaleX(0);transform-origin:left;animation:draw 1.2s 1s cubic-bezier(.2,.7,.2,1) forwards}
.lede{margin-top:28px;max-width:520px;font-size:18px;line-height:1.6;color:#a3a3a3}
.meta{margin-top:36px;display:flex;flex-wrap:wrap;gap:10px}
.meta span{font:400 12px/1 'JetBrains Mono',monospace;letter-spacing:.08em;color:#a3a3a3;padding:9px 14px;border:1px solid #262626;border-radius:999px}
.card{position:relative;background:linear-gradient(180deg,#141414,#101010);border:1px solid #262626;border-radius:28px;padding:40px 34px 34px;box-shadow:0 40px 120px rgba(0,0,0,.5)}
@media (min-width:960px){.card{padding:48px 44px 40px}}
.card .lock{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(184,153,90,.14);color:#d9c38f}
.card h2{margin-top:24px;font:300 32px/1.1 'Inter Tight',Arial,sans-serif;letter-spacing:-.02em}
.card p.sub{margin-top:10px;font-size:15px;line-height:1.5;color:#8f8f8f}
form{margin-top:30px}
.boxes{display:none;gap:12px}
.js .boxes{display:flex}
.js .plain{display:none}
.box{width:100%;min-width:0;aspect-ratio:4/5;max-height:88px;text-align:center;font:400 34px/1 'JetBrains Mono',monospace;color:#f5f5f4;background:#0a0a0a;border:1px solid #2e2e2e;border-radius:16px;outline:none;caret-color:#d9c38f;transition:border-color .2s,box-shadow .2s,transform .2s}
.box:focus{border-color:#b8995a;box-shadow:0 0 0 4px rgba(184,153,90,.15)}
.box.filled{border-color:#4a4a4a}
.plain{width:100%;padding:18px 20px;font:400 20px/1 'JetBrains Mono',monospace;letter-spacing:.2em;color:#f5f5f4;background:#0a0a0a;border:1px solid #2e2e2e;border-radius:16px;outline:none}
.plain:focus{border-color:#b8995a;box-shadow:0 0 0 4px rgba(184,153,90,.15)}
button{margin-top:18px;width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:18px 20px;font:500 16px/1 Inter,Arial,sans-serif;color:#1e0c2c;background:#d9c38f;border:0;border-radius:16px;cursor:pointer;transition:background .2s,transform .2s}
button:hover{background:#e6d4a6}
button:active{transform:scale(.99)}
button span{transition:transform .25s}
button:hover span{transform:translateX(4px)}
.error{margin-top:16px;font-size:14px;color:#f0a4a4;display:flex;gap:8px;align-items:center}
.help{margin-top:26px;padding-top:22px;border-top:1px solid #222;font-size:14px;line-height:1.5;color:#737373}
.help a{color:#d9c38f;border-bottom:1px solid rgba(217,195,143,.35)}
footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;font:400 12px/1.4 'JetBrains Mono',monospace;color:#5c5c5c}
.rise{opacity:0;transform:translateY(22px);animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards}
.d1{animation-delay:.05s}.d2{animation-delay:.15s}.d3{animation-delay:.3s}.d4{animation-delay:.45s}.d5{animation-delay:.6s}
.shake{animation:shake .5s cubic-bezier(.36,.07,.19,.97) .5s both}
@keyframes rise{to{opacity:1;transform:none}}
@keyframes draw{to{transform:scaleX(1)}}
@keyframes shake{10%,90%{transform:translateX(-2px)}20%,80%{transform:translateX(4px)}30%,50%,70%{transform:translateX(-8px)}40%,60%{transform:translateX(8px)}}
@media (prefers-reduced-motion:reduce){.rise,.shake{animation:none;opacity:1;transform:none}h1 em::after{animation:none;transform:none}}
</style>
</head>
<body class="grain">
<div class="glow" aria-hidden="true"></div>
<div class="wrap">
<header class="rise d1">
<a class="logo" href="/" aria-label="Brandon Bibbins, home page">
<span class="mark" aria-hidden="true"><svg viewBox="0 0 40 80" width="11" height="22"><path d="M34 6 L8 40 L34 74" stroke="currentColor" stroke-width="9" fill="none"/></svg><b>b</b><svg viewBox="0 0 40 80" width="11" height="22"><path d="M6 6 L32 40 L6 74" stroke="currentColor" stroke-width="9" fill="none"/></svg></span>
<span class="name">brandon bibbins</span>
</a>
<a class="back" href="/">← Portfolio</a>
</header>
<main>
<section>
<p class="eyebrow rise d2">Private proposal · Prepared for</p>
<h1 class="rise d3">A modern home for <em>Tau Tau Chapter.</em></h1>
<p class="lede rise d4">An early look at a new website for the chapter: a homepage concept, how it works on a phone, the plan and timeline, and what it takes to launch.</p>
<div class="meta rise d5"><span>16 slides</span><span>Concept · Not final design</span><span>October 2026</span></div>
</section>
<section class="card ${wrong ? 'shake' : 'rise d4'}" aria-labelledby="t">
<div class="lock" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></div>
<h2 id="t">Enter your passcode</h2>
<p class="sub">${digits ? `It’s the ${digits}-digit code that came with your invitation.` : 'It came with your invitation.'}</p>
<form method="post" action="/tautau/unlock" id="f">
<input type="hidden" name="next" value="${safeNext(next)}">
${digits ? `<div class="boxes" role="group" aria-label="Passcode">${boxes}</div>` : ''}
<input class="plain" id="passcode" name="passcode" type="password" ${digits ? 'inputmode="numeric"' : ''} autocomplete="current-password" required aria-label="Passcode" placeholder="Passcode">
${wrong ? '<p class="error" role="alert">That passcode didn’t work. Please try again.</p>' : ''}
<button type="submit">View the proposal <span>→</span></button>
</form>
<p class="help">Need the passcode? Email <a href="mailto:brandonbibbins@gmail.com">brandonbibbins@gmail.com</a></p>
</section>
</main>
<footer class="rise d5"><span>© 2026 Brandon Bibbins · Los Angeles</span><a href="/">brandonbibbins.io</a></footer>
</div>
<script>
(function(){
  var boxes = Array.prototype.slice.call(document.querySelectorAll('.box'));
  if (!boxes.length) return;
  document.documentElement.classList.add('js');
  var real = document.getElementById('passcode'), form = document.getElementById('f');
  real.removeAttribute('required');
  function sync(){
    var v = boxes.map(function(b){ return b.value; }).join('');
    real.value = v;
    boxes.forEach(function(b){ b.classList.toggle('filled', !!b.value); });
    if (v.length === boxes.length) form.requestSubmit ? form.requestSubmit() : form.submit();
  }
  boxes.forEach(function(b, i){
    b.addEventListener('input', function(){
      b.value = b.value.replace(/\\D/g, '').slice(-1);
      if (b.value && boxes[i + 1]) boxes[i + 1].focus();
      sync();
    });
    b.addEventListener('keydown', function(e){
      if (e.key === 'Backspace' && !b.value && boxes[i - 1]) { boxes[i - 1].focus(); boxes[i - 1].value = ''; sync(); }
      if (e.key === 'ArrowLeft' && boxes[i - 1]) boxes[i - 1].focus();
      if (e.key === 'ArrowRight' && boxes[i + 1]) boxes[i + 1].focus();
    });
    b.addEventListener('paste', function(e){
      var t = (e.clipboardData || window.clipboardData).getData('text').replace(/\\D/g, '');
      if (!t) return;
      e.preventDefault();
      boxes.forEach(function(x, j){ x.value = t[j] || ''; });
      (boxes[Math.min(t.length, boxes.length) - 1] || b).focus();
      sync();
    });
  });
  form.addEventListener('submit', function(e){ if (real.value.length < boxes.length) { e.preventDefault(); boxes[real.value.length].focus(); } });
  // Focus the first box on desktop only; on phones it would jump past the headline and open the keyboard.
  if (window.matchMedia('(min-width: 960px)').matches) boxes[0].focus();
})();
</script>
</body>
</html>`;
}
