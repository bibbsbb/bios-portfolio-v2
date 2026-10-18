// Passcode gate for the Tau Tau Chapter pitch deck at /tautau.
// The passcode lives in the TAUTAU_PASSCODE environment variable. A correct entry
// sets a cookie holding an HMAC of a fixed label, keyed by the passcode, so changing
// the passcode signs everyone out.

export const ACCESS_COOKIE = 'tautau_access';

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

export function unlockPage(wrong: boolean): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Brandon Bibbins · Proposal for Tau Tau Chapter</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400&family=Inter:wght@400;500&family=JetBrains+Mono&display=swap">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%}
body{background:#0a0a0a;color:#f4eee3;font-family:Inter,Arial,sans-serif;display:flex;align-items:center;justify-content:center;padding:24px;-webkit-font-smoothing:antialiased}
main{width:100%;max-width:440px}
.mark{font:300 28px/1 'Inter Tight',Arial,sans-serif;letter-spacing:-.5px;color:#fff}
.mark b{font-weight:400}
.eyebrow{margin-top:56px;font:400 12px/1.4 'JetBrains Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#b8995a}
h1{margin-top:12px;font:300 40px/1.1 'Inter Tight',Arial,sans-serif;letter-spacing:-1px;color:#fff}
p.lede{margin-top:14px;font-size:16px;line-height:1.5;color:#a3a3a3}
form{margin-top:36px;display:flex;flex-direction:column;gap:12px}
label{font:400 12px/1 'JetBrains Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#8f8f8f}
input{width:100%;padding:16px 18px;font:400 18px/1 'JetBrains Mono',monospace;color:#fff;background:#161616;border:1px solid #2e2e2e;border-radius:8px;outline:none}
input:focus{border-color:#b8995a}
button{margin-top:8px;padding:16px 18px;font:500 16px/1 Inter,Arial,sans-serif;color:#1e0c2c;background:#d9c38f;border:0;border-radius:8px;cursor:pointer}
button:hover{background:#e6d4a6}
.error{font-size:14px;color:#f0a4a4}
footer{margin-top:48px;font:400 12px/1.4 'JetBrains Mono',monospace;color:#5c5c5c}
</style>
</head>
<body>
<main>
<div class="mark">&lt;<b>b</b>&gt; brandon bibbins</div>
<div class="eyebrow">Private proposal</div>
<h1>Tau Tau Chapter</h1>
<p class="lede">Enter the passcode you were given to view the proposal.</p>
<form method="post" action="/tautau/unlock">
<label for="passcode">Passcode</label>
<input id="passcode" name="passcode" type="password" autocomplete="current-password" required autofocus>
${wrong ? '<p class="error" role="alert">That passcode didn’t work. Try again.</p>' : ''}
<button type="submit">View proposal</button>
</form>
<footer>Prepared by Brandon Bibbins · October 2026</footer>
</main>
</body>
</html>`;
}
