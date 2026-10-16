#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..');

console.log('Generating CycloneDX SBOM (bom.json)...');
try {
  execSync('npx --yes @cyclonedx/cdxgen -o bom.json', {
    cwd: REPO_ROOT,
    stdio: 'inherit',
  });
  console.log('Successfully generated bom.json via cdxgen.');
} catch (err) {
  if (existsSync(resolve(REPO_ROOT, 'bom.json'))) {
    console.warn('cdxgen failed, but valid bom.json already exists.');
  } else {
    console.error('Failed to generate bom.json:', err);
    process.exit(1);
  }
}
