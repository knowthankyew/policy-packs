/**
 * Common types and statutory grounding interfaces for KnowThankYew Policy Packs.
 */

export type Severity = 'CRITICAL' | 'WARNING' | 'INFO';

export type LegalClassification =
  | 'STATUTORY_VIOLATION'   // Explicit violation of statute (ROSCA non-disclosure, dark cancellation)
  | 'RIGHTS_WAIVER'         // Enforceable under FAA/UCC, but strips consumer access to courts
  | 'ONE_SIDED_DISCRETION'  // Unilateral modification / illusory promise
  | 'SURVEILLANCE_NOTICE'   // Cross-context data brokerage / tracking disclosure
  | 'PROSPECTIVE_DUTY';     // Enacted statutory regime with prospective commencement

export type TrapCategory =
  | 'AUTO_RENEWAL'
  | 'ARBITRATION'
  | 'UNILATERAL_CHANGE'
  | 'SURVEILLANCE'
  | 'WARRANTY_DISCLAIMER';

export interface StatuteReference {
  code: string;
  title: string;
  jurisdiction: string;
  plainExplanation: string;
}

export interface LegalGroundingMetadata {
  statuteRef: string;
  jurisdiction: string;
  effectiveDate?: string;
  lastAudited: string;
  officialSourceUrl: string;
}

export interface TrackingMetadata {
  agency?: string;
  docket?: string;
  statuteCode?: string;
  cfr?: string;
  jurisdiction?: string;
  apiKeywords: string[];
  lastVerifiedDate: string;
}
