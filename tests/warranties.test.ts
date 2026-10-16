import { describe, it, expect } from 'vitest';
import {
  LOADED_MAGNUSON_MOSS_RULES,
  LOADED_STATE_LEMON_LAWS,
  federalWarrantyPolicy,
} from '../src/warranties';

describe('Warranties Policy Pack Architecture', () => {
  it('loads and compiles Magnuson-Moss rules into executable case-insensitive RegExps', () => {
    expect(LOADED_MAGNUSON_MOSS_RULES.length).toBeGreaterThan(0);

    for (const rule of LOADED_MAGNUSON_MOSS_RULES) {
      expect(rule.id).toBeTruthy();
      expect(rule.pattern).toBeInstanceOf(RegExp);
      expect(rule.pattern.flags).toContain('i');
      expect(rule.title).toBeTruthy();
      expect(rule.severity).toMatch(/^(illegal|deceptive|caution)$/);
      expect(rule.statute).toMatch(/(15 U\.S\.C\.|16 C\.F\.R\.)/);
      expect(rule.lawName).toBeTruthy();
      expect(rule.enforceability).toBeTruthy();
      expect(rule.consumerAdvice).toBeTruthy();
    }
  });

  it('validates tie-in sales prohibition under 15 U.S.C. § 2302(c)', () => {
    const tieInRule = LOADED_MAGNUSON_MOSS_RULES.find((r) => r.id === 'third_party_repair_ban');
    expect(tieInRule).toBeDefined();
    expect(tieInRule?.pattern.test('Warranty void if serviced by unauthorized third party')).toBe(true);
    expect(tieInRule?.pattern.test('Must use only genuine factory parts')).toBe(true);
  });

  it('loads State Lemon Laws across all 10 jurisdictions', () => {
    const jurisdictions = ['DEFAULT', 'CA', 'NY', 'FL', 'TX', 'MA', 'IL', 'PA', 'NJ', 'WA'];

    for (const code of jurisdictions) {
      const lemon = LOADED_STATE_LEMON_LAWS[code];
      expect(lemon).toBeDefined();
      expect(lemon.stateCode).toBeTruthy();
      expect(lemon.stateName).toBeTruthy();
      expect(lemon.statuteRef).toBeTruthy();
      expect(lemon.repairAttemptsThreshold).toBeGreaterThan(0);
      expect(lemon.daysOutOfServiceThreshold).toBeGreaterThan(0);
      expect(lemon.coveragePeriod).toBeTruthy();
      expect(lemon.remedies.length).toBeGreaterThan(0);
      expect(typeof lemon.attorneyFeesShift).toBe('boolean');
    }
  });

  it('validates California Song-Beverly Consumer Warranty Act thresholds', () => {
    const ca = LOADED_STATE_LEMON_LAWS.CA;
    expect(ca.statuteRef).toContain('Cal. Civ. Code § 1793.2');
    expect(ca.repairAttemptsThreshold).toBe(4);
    expect(ca.daysOutOfServiceThreshold).toBe(30);
    expect(ca.safetyDefectAttemptsThreshold).toBe(2);
    expect(ca.attorneyFeesShift).toBe(true);
  });
});
