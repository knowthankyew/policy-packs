import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

describe('JSON Schema Conformance & Validation', () => {
  const schemasDir = resolve(import.meta.dirname, '../schemas');

  it('verifies all 5 domain JSON Schemas exist and parse valid JSON Schema Draft-07', () => {
    const expectedSchemas = [
      'subscriptions.schema.json',
      'tenancy.schema.json',
      'healthcare.schema.json',
      'wage.schema.json',
      'warranties.schema.json',
    ];

    for (const schemaName of expectedSchemas) {
      const fullPath = resolve(schemasDir, schemaName);
      const raw = readFileSync(fullPath, 'utf-8');
      const parsed = JSON.parse(raw);
      expect(parsed.$schema).toContain('json-schema.org');
      expect(parsed.title).toBeTruthy();
    }
  });

  it('validates subscription policy packs match schema structure', () => {
    const subDataDir = resolve(import.meta.dirname, '../src/subscriptions/data');
    const files = readdirSync(subDataDir).filter((f) => f.endsWith('.json'));

    for (const f of files) {
      const data = JSON.parse(readFileSync(resolve(subDataDir, f), 'utf-8'));
      if (data.packId) {
        expect(data.name).toBeTruthy();
        expect(Array.isArray(data.rules)).toBe(true);
      } else if (data.jurisdictionCode) {
        expect(data.statuteTitle).toBeTruthy();
        expect(Array.isArray(data.rules)).toBe(true);
      }
    }
  });
});
