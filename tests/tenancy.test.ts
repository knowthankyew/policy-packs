import { describe, it, expect } from 'vitest';
import {
  JURISDICTION_RULES,
  JURISDICTION_OPTIONS,
  SAMPLE_LEASES,
} from '../src/tenancy';

describe('Tenancy Policy Pack Architecture', () => {
  it('loads all 6 tenancy jurisdiction packs with complete metadata', () => {
    const jurisdictions = ['FED', 'CA', 'NY', 'TX', 'FL', 'IL'];

    for (const code of jurisdictions) {
      const pack = JURISDICTION_RULES[code];
      expect(pack).toBeDefined();
      expect(pack.jurisdiction).toBe(code);
      expect(pack.jurisdictionName).toBeTruthy();
      expect(pack.statuteVersion).toBeTruthy();
      expect(pack.lastAudited).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(pack.officialSourceUrl).toMatch(/^https?:\/\//);
      expect(pack.rules.length).toBeGreaterThan(0);

      for (const rule of pack.rules) {
        expect(rule.id).toBeTruthy();
        expect(rule.category).toBeTruthy();
        expect(rule.name).toBeTruthy();
        expect(rule.severity).toMatch(/^(Standard|Watch|LikelyUnenforceable)$/);
        expect(rule.statuteCitation).toBeTruthy();
        expect(rule.statuteSummary).toBeTruthy();
        expect(rule.officialUrl).toMatch(/^https?:\/\//);
        expect(rule.triggerPatterns.length).toBeGreaterThan(0);
        expect(Array.isArray(rule.contraIndicatorPatterns)).toBe(true);
        expect(rule.disputeTemplate).toBeTruthy();

        // Verify trigger regex patterns compile
        for (const p of rule.triggerPatterns) {
          expect(() => new RegExp(p, 'i')).not.toThrow();
        }
      }
    }
  });

  it('validates California AB 12 deposit cap and return rules', () => {
    const ca = JURISDICTION_RULES.CA;
    const depositCapRule = ca.rules.find((r) => r.id === 'CA-SEC-DEP-CAP-01');
    expect(depositCapRule).toBeDefined();
    expect(depositCapRule?.statuteCitation).toContain('1950.5(c)');
    expect(depositCapRule?.severity).toBe('LikelyUnenforceable');

    const depositReturnRule = ca.rules.find((r) => r.id === 'CA-SEC-DEP-RET-02');
    expect(depositReturnRule).toBeDefined();
    expect(depositReturnRule?.statuteCitation).toContain('1950.5(g)');
  });

  it('exports valid jurisdiction options and sample leases', () => {
    expect(JURISDICTION_OPTIONS.length).toBe(6);
    expect(SAMPLE_LEASES.ca).toBeDefined();
    expect(SAMPLE_LEASES.ny).toBeDefined();
    expect(SAMPLE_LEASES.fed).toBeDefined();
    expect(SAMPLE_LEASES.ca.text).toContain('Pacific Crest Management');
  });
});
