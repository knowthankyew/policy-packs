# `@knowthankyew/policy-packs`

> Centralized, version-controlled statutory and regulatory policy engine for knowthankyew client reality engines.

[![CI](https://github.com/knowthankyew/policy-packs/actions/workflows/ci.yml/badge.svg)](https://github.com/knowthankyew/policy-packs/actions/workflows/ci.yml)
[![Statutory Monitor](https://github.com/knowthankyew/policy-packs/actions/workflows/legal-statute-monitor.yml/badge.svg)](https://github.com/knowthankyew/policy-packs/actions/workflows/legal-statute-monitor.yml)
[![Zero-Egress Invariant](https://img.shields.io/badge/Air--Gap-Zero--Egress%20Verified-brightgreen)](#architectural-invariants)
[![Supply Chain](https://img.shields.io/badge/Supply--Chain-CycloneDX%20%2B%20SLSA-blue)](#supply-chain-integrity)

---

## 1. Executive Summary & Architecture

The **knowthankyew** portfolio provides client-side consumer reality engines across consumer contracts (`knowthankyew-extension`), residential leases (`lease-audit`), medical bills & charity care (`careCheck`), wage statements (`paystub-check`), subscription auto-renewals (`bill-of-rights-bot`), and product warranties (`warranty-watch`).

`@knowthankyew/policy-packs` unifies and centralizes all portfolio statutory logic into modular, domain-separated subpaths with transparent legal grounding (`statuteRef`, `jurisdiction`, `effectiveDate`, `lastAudited`, `officialSourceUrl`).

### Modular Domain Subpaths

| Subpath Export | Domain Coverage | Tracked Statutory Baselines |
| :--- | :--- | :--- |
| `@knowthankyew/policy-packs/subscriptions` | Auto-Renewals, Click-to-Cancel, Arbitration | 15 U.S.C. § 8401 (ROSCA), 16 CFR Part 425 (FTC Negative Option), State ARLs (CA AB 390/SB 313, NY, CO, IL, DE), UK DMCC Act 2024, EU Consumer Rights Directive (2011/83/EU), FAA |
| `@knowthankyew/policy-packs/tenancy` | Residential Leases & Tenant Protections | Cal. Civ. Code § 1950.5 (AB 12), N.Y. GOB § 7-108 / HSTPA, Tex. Prop. Code Ch. 92, Fla. Stat. Ch. 83, 765 ILCS 710/715, Fair Housing Act (FHA), Servicemembers Civil Relief Act (SCRA) |
| `@knowthankyew/policy-packs/healthcare` | Charity Care & Hospital Price Transparency | 26 U.S.C. § 501(r) Financial Assistance Policies, CMS 45 CFR Part 180, HHS Poverty Guidelines (FPL), State Charity Care Acts (CA H&SC § 127400, NY PHL § 2807-k, WA RCW 70.02) |
| `@knowthankyew/policy-packs/wage` | Overtime, Minimum Wage, Wage Theft | 29 U.S.C. § 201 (FLSA Overtime), State Wage Theft Prevention Acts (CA Labor Code § 203/226, NYLL § 195, MA, WA, CO, TX, FL) |
| `@knowthankyew/policy-packs/warranties` | Consumer Warranties & Lemon Laws | 15 U.S.C. § 2301 (Magnuson-Moss Warranty Act, 16 CFR Part 700 Anti-Tying), UCC § 2-314/2-315 Implied Warranties, State Lemon Laws (CA Song-Beverly, NY, FL, TX, MA, IL, PA, NJ, WA) |

---

## 2. Core Architectural Invariants

1. **Pillar 1: Zero-Egress Air-Gap Invariant**  
   `@knowthankyew/policy-packs` is consumed strictly as a compile-time dependency. Zero dynamic network requests are executed at runtime. All evaluations in consuming applications run locally in-memory.

2. **Pillar 4: Single Source of Truth & Parity**  
   Unified TypeScript types, JSON schemas, and rule IDs matching the portfolio's **Structured Handoff Protocol** (`@knowthankyew/privacy-telemetry/react`). Every rule specifies verifiable legal grounding.

3. **Pillar 5: Universal Supply-Chain Integrity & Attestation**  
   Automated CycloneDX SBOM generation (`bom.json`) on every CI build. SLSA Build Provenance attestation via GitHub Actions + Sigstore keyless Cosign bundles. Zero High/Critical CVEs (`npm audit --audit-level=high` fail-closed gate).

4. **Legally Defensible Human-in-the-Loop Review**  
   Daily automated statutory crawlers (`legal-statute-monitor.yml`) run at 06:00 UTC querying Federal Register, EUR-Lex, UK Legislation, and State feeds. Crawlers output structured markdown diff reports and open draft PRs labeled `needs-attorney-review`. Automated crawlers never auto-merge statutory updates without attorney verification.

---

## 3. Installation & Usage

```bash
npm install @knowthankyew/policy-packs
```

### Example: Consuming Subscriptions Policy Pack

```ts
import {
  COMPILED_POLICY_RULES,
  STATUTE_CATALOG,
} from '@knowthankyew/policy-packs/subscriptions';

// In-memory pattern evaluation against compiled statutory detection rules
const matches = COMPILED_POLICY_RULES.filter((rule) =>
  rule.patterns.some((pattern) => pattern.test(agreementText))
);
```

### Example: Consuming Tenancy Policy Pack

```ts
import {
  JURISDICTION_RULES,
  JURISDICTION_OPTIONS,
} from '@knowthankyew/policy-packs/tenancy';

const caRules = JURISDICTION_RULES.CA;
console.log(`California Tenancy Rules (${caRules.rules.length} active rules):`);
```

---

## 4. Development & Verification Commands

```bash
# Install dependencies
npm install

# Audit claims, zero-egress, and statutory grounding
npm run audit:claims

# Run automated regulatory monitor in test mock mode
npm run audit:statutes

# Build distribution bundle & TypeScript declarations
npm run build

# Run unit tests and ReDoS validation
npm test

# Generate CycloneDX Software Bill of Materials (SBOM)
npm run generate:sbom
```

---

## 5. Licensure

Licensed under the [MIT License](./LICENSE). Attribution notice available in [NOTICE.md](./NOTICE.md).
