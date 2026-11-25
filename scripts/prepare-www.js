// Copia só os arquivos do app (site) para a pasta www/, que o Capacitor empacota no APK/AAB.
// Com CANAL=play, gera a versão da Google Play: sem Pix, com anúncios + Google Play Billing.
const fs = require('fs');
const path = require('path');

const out = 'www';
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);

const exts = ['.html', '.js', '.json', '.png', '.svg', '.css', '.webp', '.jpg', '.ico', '.mid', '.midi'];
const skip = new Set(['package.json', 'package-lock.json', 'capacitor.config.json']);

for (const f of fs.readdirSync('.')) {
  if (!fs.statSync(f).isFile()) continue;
  if (skip.has(f)) continue;
  if (exts.includes(path.extname(f).toLowerCase())) {
    fs.copyFileSync(f, path.join(out, f));
  }
}

for (const d of ['hinos', 'samples', 'vendor']) if (fs.existsSync(d)) fs.cpSync(d, path.join(out, d), { recursive: true });

const idx = path.join(out, 'index.html');
console.log('www/ pronto:', fs.readdirSync(out).join(', '));

// ===== Canal da Google Play (CANAL=play): cobrança só pelo Google Play Billing, sem Pix =====
if (process.env.CANAL === 'play') {
  const cfgPath = path.join(out, 'pro-config.js');
  const cfg = {};
  new Function('window', fs.readFileSync(cfgPath, 'utf8'))({ set PRO_CFG(v) { Object.assign(cfg, v); } });
  const limpo = {
    modo: 'play',
    produtoId: cfg.produtoId || 'pro_desbloqueio',
    app: cfg.app || 'violin-game',
    freeHinos: cfg.freeHinosPlay != null ? cfg.freeHinosPlay : 10,
    previewSec: cfg.previewSec,
    playCompra: cfg.playCompra !== false,
    adRewardedId: cfg.adRewardedId,
    adHoras: cfg.adHoras || 1,
    adsTeste: process.env.ADS_TESTE !== 'false'   // true = anúncios de teste do Google (padrão); false só no build de produção
  };
  fs.writeFileSync(cfgPath, 'window.PRO_CFG = ' + JSON.stringify(limpo, null, 2) + ';\n');

  let h = fs.readFileSync(idx, 'utf8');
  h = h.replace(/\/\*PIX-JS-START\*\/[\s\S]*?\/\*PIX-JS-END\*\//g, '');
  if (/meuidwp|proPixPayload|proActivate|proCall\(|script\.google\.com/.test(h)) throw new Error('Sobrou Pix/ativação no index.html do canal play');
  fs.writeFileSync(idx, h);
  const cfgOut = fs.readFileSync(cfgPath, 'utf8');
  if (/meuidwp|pixKey|scriptUrl|whatsapp/.test(cfgOut)) throw new Error('Sobrou Pix no pro-config.js do canal play');
  console.log('Canal play: Pix removido, modo Google Play Billing + anúncios ativo.');
}
