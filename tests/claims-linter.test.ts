import { describe, it, expect } from 'vitest';
import { runAllAudits } from '../scripts/audit-claims.mjs';

describe('Claims, Invariants and Zero-Egress Linter (claims-linter.test.ts)', () => {
  it('runs all automated claims, grounding, vocabulary, and ReDoS audits with zero errors', () => {
    const errors = runAllAudits();
    expect(errors).toEqual([]);
  });
});
