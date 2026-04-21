// tools/sync-intl-tel-input.js
const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function exists(p) {
  return fs.existsSync(p);
}

function rmSafe(targetPath) {
  if (!exists(targetPath)) return;
  fs.rmSync(targetPath, { recursive: true, force: true });
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function copyDir(srcDir, destDir) {
  if (!exists(srcDir)) return;

  ensureDir(destDir);

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);

    if (entry.isDirectory()) copyDir(src, dest);
    else copyFile(src, dest);
  }
}

function assertExists(p, label) {
  if (!exists(p)) {
    console.error(`[sync] ERROR: Missing ${label}: ${p}`);
    process.exit(1);
  }
}

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

// --- Resolve package root ---
let pkgJsonPath;
try {
  pkgJsonPath = require.resolve('intl-tel-input/package.json');
} catch (e) {
  console.error('[sync] ERROR: intl-tel-input is not installed. Run: npm i intl-tel-input');
  process.exit(1);
}

const pkgRoot = path.dirname(pkgJsonPath);
const pkgJSON = readJSON(pkgJsonPath);
const version = pkgJSON?.version || 'unknown';

// --- Sources in node_modules ---
const srcCss  = path.join(pkgRoot, 'build', 'css', 'intlTelInput.min.css');
const srcJs   = path.join(pkgRoot, 'build', 'js', 'intlTelInputWithUtils.min.js');
const srcImg  = path.join(pkgRoot, 'build', 'img');
const srcI18n = path.join(pkgRoot, 'build', 'js', 'i18n');

// Ensure critical assets exist
assertExists(srcCss, 'CSS intlTelInput.min.css');
assertExists(srcJs, 'JS intlTelInputWithUtils.min.js');

// --- Destinations in plugin ---
const pluginRoot = path.resolve(__dirname, '..');
const outBase    = path.join(pluginRoot, 'assets', 'lib');

const outCss  = path.join(outBase, 'intl-tel-input', 'intlTelInput.min.css');
const outJs   = path.join(outBase, 'intl-tel-input', 'intlTelInputWithUtils.min.js');
const outImg  = path.join(outBase, 'img');
const outI18n = path.join(outBase, 'intl-tel-input', 'i18n');

// --- Cleanup (so no leftovers after updates) ---
rmSafe(outCss);
rmSafe(outJs);
rmSafe(outImg);
rmSafe(outI18n);

// Recreate base folders (optional, but clearer)
ensureDir(path.dirname(outCss));
ensureDir(path.dirname(outJs));

// --- Copy assets ---
copyFile(srcCss, outCss);
copyFile(srcJs, outJs);
copyDir(srcImg, outImg);
copyDir(srcI18n, outI18n);

// --- Report ---
const copied = [];
copied.push(path.relative(pluginRoot, outCss));
copied.push(path.relative(pluginRoot, outJs));
if (exists(outImg)) copied.push(path.relative(pluginRoot, outImg) + '/');
if (exists(outI18n)) copied.push(path.relative(pluginRoot, outI18n) + '/');

console.log(`[sync] intl-tel-input v${version} synced:`);
for (const item of copied) console.log(`  - ${item}`);
