<!-- diagram-meta
  last-validated: 2026-10-26
  validated-commit: 2717e18
  covers: [src/**, schemas/**, scripts/**, .github/workflows/**]
  generated-by: manual
-->

# Architecture & Pipeline Specification: Policy Packs Engine

> Centralized, version-controlled statutory intelligence and regulatory policy engine for `knowthankyew` client reality engines.

---

## 1. Executive Summary

`@knowthankyew/policy-packs` serves as the statutory backbone of the `knowthankyew` portfolio. Rather than scattering legal regexes, statutory threshold tables, and citation anchors across individual repositories, `policy-packs` centralizes all legal logic into modular, domain-separated packages. Consuming client applications ingest this package as a strictly compile-time, zero-egress air-gapped dependency.

---

## 2. System Architecture & Upstream Pipeline

### A. Regulatory Crawler & Human-in-the-Loop PR Pipeline

```mermaid
flowchart TD
    subgraph RegulatorySources["External Regulatory Feeds (Daily 06:00 UTC)"]
        FR["🏛️ Federal Register<br/><i>(FTC, CFPB, HHS, DOL)</i>"]
        EURLex["🇪🇺 EUR-Lex<br/><i>(Consumer Rights Directive)</i>"]
        UKLeg["🇬🇧 UK Legislation<br/><i>(DMCC Act 2024)</i>"]
        StateFeeds["🇺🇸 State Feeds<br/><i>(CA, NY, TX, FL, IL ARLs)</i>"]
    end

    subgraph Automation["GitHub Actions Automated Monitor"]
        Monitor["🤖 legal-statute-monitor.yml<br/><code>scripts/check-statutory-updates.mjs</code>"]
        DiffEngine["📝 Markdown Diff & Report Generator"]
        DraftPR["🔀 Automated Draft PR<br/><i>Label: 'needs-attorney-review'</i>"]
    end

    subgraph HumanReview["Human-in-the-Loop Gate"]
        Attorney["⚖️ Legal Counsel / Reviewer"]
        Approve["✅ Verify Citation, Jurisdiction & Effective Date"]
    end

    subgraph PolicyEngine["@knowthankyew/policy-packs Core Engine"]
        Subscriptions["📦 /subscriptions<br/><i>(ROSCA, Click-to-Cancel, ARLs)</i>"]
        Tenancy["📦 /tenancy<br/><i>(AB 12, HSTPA, Deposit Caps)</i>"]
        Healthcare["📦 /healthcare<br/><i>(501(r) FAP, CMS Transparency)</i>"]
        Wage["📦 /wage<br/><i>(FLSA, Wage Theft Acts)</i>"]
        Warranties["📦 /warranties<br/><i>(Magnuson-Moss, UCC, Lemon)</i>"]
    end

    subgraph Verification["CI Supply Chain & Quality Gates"]
        ReDoS["🛡️ safe-regex ReDoS Static Audit"]
        SBOM["📦 CycloneDX SBOM (bom.json)"]
        Cosign["🔏 Sigstore / SLSA Attestation"]
        Audit["🔒 npm audit (Fail-Closed High)"]
    end

    subgraph Downstream["Air-Gapped Client Reality Engines"]
        Ext["knowthankyew-extension"]
        BoR["bill-of-rights-bot"]
        Lease["lease-audit"]
        Care["careCheck"]
        Paystub["paystub-check"]
        Warranty["warranty-watch"]
    end

    %% Flow connections
    FR & EURLex & UKLeg & StateFeeds -->|"Query API / RSS Feeds"| Monitor
    Monitor --> DiffEngine
    DiffEngine --> DraftPR
    DraftPR --> Attorney
    Attorney -->|"Reviews & Merges"| Approve
    Approve --> PolicyEngine

    PolicyEngine --> Verification
    Verification -->|"Compile-Time Zero-Egress Build"| Downstream

    %% Class styling
    classDef reg fill:#0f172a,stroke:#64748b,stroke-width:1px,color:#f8fafc;
    classDef auto fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
    classDef gate fill:#78350f,stroke:#f59e0b,stroke-width:2px,color:#f8fafc;
    classDef engine fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#f8fafc;
    classDef ci fill:#312e81,stroke:#818cf8,stroke-width:1px,color:#f8fafc;

    class FR,EURLex,UKLeg,StateFeeds reg;
    class Monitor,DiffEngine,DraftPR auto;
    class Attorney,Approve gate;
    class Subscriptions,Tenancy,Healthcare,Wage,Warranties engine;
    class ReDoS,SBOM,Cosign,Audit ci;
```

### B. Consuming Domain Matrix

```mermaid
flowchart LR
    PP["@knowthankyew/policy-packs"]

    PP --> Subscriptions["/subscriptions"]
    PP --> Tenancy["/tenancy"]
    PP --> Healthcare["/healthcare"]
    PP --> Wage["/wage"]
    PP --> Warranties["/warranties"]

    Subscriptions --> KTYExt["knowthankyew-extension"]
    Subscriptions --> BORBot["bill-of-rights-bot"]
    Tenancy --> LeaseAudit["lease-audit"]
    Healthcare --> CareCheck["careCheck"]
    Wage --> PaystubCheck["paystub-check"]
    Warranties --> WarrantyWatch["warranty-watch"]

    classDef core fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#f8fafc;
    classDef sub fill:#1e293b,stroke:#38bdf8,stroke-width:1px,color:#f8fafc;
    classDef client fill:#312e81,stroke:#818cf8,stroke-width:1px,color:#f8fafc;

    class PP core;
    class Subscriptions,Tenancy,Healthcare,Wage,Warranties sub;
    class KTYExt,BORBot,LeaseAudit,CareCheck,PaystubCheck,WarrantyWatch client;
```

---

## 3. Core Architectural Invariants

| # | Invariant | Description & Enforcement |
|:--|:----------|:--------------------------|
| 1 | **Zero-Egress Air-Gap** | Consumed strictly as a compile-time dependency; zero runtime network callers exist in the package. |
| 2 | **Explicit Legal Grounding** | Every rule must provide `statuteRef`, `jurisdiction`, `effectiveDate`, `lastAudited`, and `officialSourceUrl`. |
| 3 | **ReDoS-Free Regexes** | 100% of patterns validated using `safe-regex` to eliminate exponential backtracking risks. |
| 4 | **Human-in-the-Loop Review** | Daily monitors generate draft PRs labeled `needs-attorney-review`; no autonomous mutation without human verification. |
| 5 | **Supply Chain Integrity** | CycloneDX SBOM (`bom.json`) + Sigstore / Cosign keyless attestation on every build. |

---

## 4. Directory Structure

```
policy-packs/
├── .github/workflows/
│   ├── ci.yml                     # Test, lint, build, ReDoS & SBOM generation
│   └── legal-statute-monitor.yml  # Daily 06:00 UTC crawler & draft PR generator
├── schemas/                       # Canonical JSON Schemas for statutory rules
├── scripts/
│   ├── audit-claims.mjs           # Enforces statutory grounding metadata presence
│   ├── check-statutory-updates.mjs# Multi-jurisdictional crawler script
│   └── generate-sbom.mjs          # CycloneDX SBOM generator
├── src/
│   ├── subscriptions/             # Auto-renewal, click-to-cancel & arbitration rules
│   ├── tenancy/                   # Security deposits, illegal waivers & habitability
│   ├── healthcare/                # 501(r) charity care & price transparency rules
│   ├── wage/                      # FLSA, overtime & state wage theft rules
│   └── warranties/                # Magnuson-Moss, UCC & lemon law rules
├── tests/                         # Vitest suites + ReDoS validation tests
├── package.json                   # Multi-subpath exports definition
└── vite.config.ts                 # Build configuration
```
