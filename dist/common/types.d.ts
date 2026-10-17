/**
 * Common types and statutory grounding interfaces for KnowThankYew Policy Packs.
 */
export type Severity = 'CRITICAL' | 'WARNING' | 'INFO';
export type LegalClassification = 'STATUTORY_VIOLATION' | 'RIGHTS_WAIVER' | 'ONE_SIDED_DISCRETION' | 'SURVEILLANCE_NOTICE' | 'PROSPECTIVE_DUTY';
export type TrapCategory = 'AUTO_RENEWAL' | 'ARBITRATION' | 'UNILATERAL_CHANGE' | 'SURVEILLANCE' | 'WARRANTY_DISCLAIMER';
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
//# sourceMappingURL=types.d.ts.map