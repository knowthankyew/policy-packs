import { describe, it, expect } from 'vitest';
import {
  LOADED_STATE_WAGE_LAWS,
  RAW_POLICIES,
  policyToRule,
} from '../src/wage';

describe('Wage Policy Pack Architecture', () => {
  it('loads federal and state wage laws across all 8 jurisdictions', () => {
    const states = ['CA', 'NY', 'MA', 'WA', 'CO', 'TX', 'FL', 'DEFAULT'];

    for (const code of states) {
      const rule = LOADED_STATE_WAGE_LAWS[code];
      expect(rule).toBeDefined();
      expect(rule.stateCode).toBeTruthy();
      expect(rule.stateName).toBeTruthy();
      expect(rule.statuteRef).toBeTruthy();
      expect(rule.minimumWageRate).toBeGreaterThanOrEqual(7.25);
      expect(rule.weeklyOvertimeThreshold).toBe(40);
      expect(Array.isArray(rule.specialRules)).toBe(true);
    }
  });

  it('validates California daily overtime and double time statutory rules', () => {
    const ca = LOADED_STATE_WAGE_LAWS.CA;
    expect(ca.dailyOvertimeThreshold).toBe(8);
    expect(ca.doubleTimeThreshold).toBe(12);
    expect(ca.hasStateDisabilityTax).toBe(true);
    expect(ca.waitingTimePenaltyDays).toBe(30);
    expect(ca.specialRules.length).toBeGreaterThan(0);

    const ma = LOADED_STATE_WAGE_LAWS.MA;
    expect(ma.statutoryDamagesMultiplier).toBe('MANDATORY Treble Damages (3x)');
  });

  it('validates raw policy transformations via policyToRule', () => {
    for (const raw of RAW_POLICIES) {
      const converted = policyToRule(raw);
      expect(converted.stateCode).toBe(raw.jurisdiction.code);
      expect(converted.minimumWageRate).toBe(raw.standards.minimumWageRate);
    }
  });
});
