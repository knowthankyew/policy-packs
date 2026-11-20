import { describe, it, expect } from 'vitest';
import { auditNoVacatedCitations, runAllAudits } from '../scripts/audit-claims.mjs';

describe('Claims, Invariants and Zero-Egress Linter (claims-linter.test.ts)', () => {
  it('runs all automated claims, grounding, vocabulary, and ReDoS audits with zero errors', () => {
    const errors = runAllAudits();
    expect(errors).toEqual([]);
  });

  it('rejects vacated 16 CFR Part 425 citations in active subscription rule fields', () => {
    const errors: string[] = [];
    auditNoVacatedCitations(errors, [
      { label: 'us-federal.json:AR-001:statute.code', value: '15 U.S.C. § 8403 / 16 CFR Part 425' },
    ]);
    expect(errors.length).toBe(1);
    expect(errors[0]).toContain('16 CFR Part 425');
  });
});
