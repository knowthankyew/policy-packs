# Legal, Privacy, and Statutory Attribution Notice

**KnowThankYew Statutory & Regulatory Policy Engine (`@knowthankyew/policy-packs`)**  
Copyright © 2026 knowthankyew / The KnowThankYew Contributors  
Repository: [https://github.com/knowthankyew/policy-packs](https://github.com/knowthankyew/policy-packs)

---

## 1. Specification Notice & Architectural Invariants

`@knowthankyew/policy-packs` provides centralized, compiled statutory and regulatory policy packs for knowthankyew client reality engines:

1. **Pillar 1: Zero-Egress Air-Gap Invariant:**  
   The centralized policy engine is consumed strictly as a compile-time dependency. Zero dynamic network requests are executed at runtime. All statutory rule evaluations in consuming applications run locally in-memory.

2. **Pillar 4: Single Source of Truth & Legal Grounding:**  
   Every rule provides verified statutory grounding (`statuteRef`, `jurisdiction`, `effectiveDate`, `lastAudited`, `officialSourceUrl`). Schemas and rule definitions align with the portfolio's Structured Handoff Protocol.

3. **Pillar 5: Universal Supply-Chain Integrity & Attestation:**  
   Automated CycloneDX SBOM (`bom.json`) generation on every build, SLSA Build Provenance attestation via GitHub Actions and Sigstore Cosign, and fail-closed security auditing.

4. **Legally Defensible Human-in-the-Loop Review:**  
   Automated daily regulatory crawlers query official statutory feeds and output standardized diff reports to open draft pull requests labeled `needs-attorney-review`. Automated crawlers never auto-merge statutory updates without legal verification.

---

## 2. Software Bill of Materials (SBOM) & Third-Party Licensure

A complete, machine-readable **CycloneDX Software Bill of Materials** (`bom.json`) is generated on build in CI and attached to release artifacts.

For the root software license terms, refer to [LICENSE](./LICENSE).
