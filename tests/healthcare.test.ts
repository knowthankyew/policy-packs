import { describe, it, expect } from 'vitest';
import {
  CHARITY_CARE_POLICIES,
  FPL_GUIDELINES,
  fplGuidelinesDataset,
  SHOPPABLE_CODES_BENCHMARKS,
  SEED_HOSPITALS,
} from '../src/healthcare';

describe('Healthcare Policy Pack Architecture', () => {
  it('loads Section 501(r) charity care policies across federal and state jurisdictions', () => {
    const jurisdictions = ['US', 'CA', 'NY', 'WA'];

    for (const code of jurisdictions) {
      const policy = CHARITY_CARE_POLICIES[code];
      expect(policy).toBeDefined();
      expect(policy.jurisdiction.code).toBe(code);
      expect(policy.metadata.statuteRef).toBeTruthy();
      expect(policy.metadata.lastAudited).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(policy.metadata.officialSourceUrl).toMatch(/^https?:\/\//);
      expect(policy.mandates.fullCharityFplThresholdPercent).toBeGreaterThanOrEqual(100);
      expect(policy.mandates.minimumEcaNoticeDays).toBeGreaterThanOrEqual(180);
      expect(policy.mandates.statutoryProtections.length).toBeGreaterThan(0);
    }
  });

  it('validates federal poverty guidelines structure and yearly tiers', () => {
    expect(FPL_GUIDELINES.length).toBeGreaterThanOrEqual(3);
    expect(fplGuidelinesDataset.statutoryBasis).toContain('42 U.S.C.');

    const guideline2026 = FPL_GUIDELINES.find((g) => g.year === 2026);
    expect(guideline2026).toBeDefined();
    expect(guideline2026?.regions.contiguous.baseAmount).toBeGreaterThan(15000);
    expect(guideline2026?.regions.alaska.baseAmount).toBeGreaterThan(guideline2026!.regions.contiguous.baseAmount);
    expect(guideline2026?.regions.hawaii.baseAmount).toBeGreaterThan(guideline2026!.regions.contiguous.baseAmount);
  });

  it('loads CMS shoppable code benchmarks with national medians', () => {
    expect(SHOPPABLE_CODES_BENCHMARKS.length).toBeGreaterThan(20);
    for (const item of SHOPPABLE_CODES_BENCHMARKS) {
      expect(item.code).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.nationalMedianCashPriceUSD).toBeGreaterThan(0);
      expect(item.medicareBaselineRateUSD).toBeGreaterThan(0);
    }
  });

  it('loads seed hospital profiles with Section 501(r) FAP tiers', () => {
    expect(SEED_HOSPITALS.length).toBeGreaterThan(0);
    for (const hospital of SEED_HOSPITALS) {
      expect(hospital.id).toBeTruthy();
      expect(hospital.legalName).toBeTruthy();
      expect(hospital.ein).toMatch(/^\d{2}-\d{7}$/);
      expect(hospital.fapTiers.length).toBeGreaterThan(0);
      expect(hospital.fapApplicationWindowDays).toBeGreaterThanOrEqual(240);
    }
  });
});
