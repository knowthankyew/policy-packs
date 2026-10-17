import { Severity, LegalClassification, TrapCategory as CommonTrapCategory, StatuteReference, TrackingMetadata } from '../common/types';
export type { Severity, LegalClassification, StatuteReference, TrackingMetadata, };
export type ExtensionTrapCategory = CommonTrapCategory;
export interface DeclarativeRule {
    id: string;
    title: string;
    category: ExtensionTrapCategory;
    classification: LegalClassification;
    severity: Severity;
    statute: StatuteReference;
    patterns: string[];
    explanation: string;
    recommendation: string;
    tracking?: TrackingMetadata;
}
export interface DetectionRule {
    id: string;
    title: string;
    category: ExtensionTrapCategory;
    classification: LegalClassification;
    severity: Severity;
    statute: StatuteReference;
    patterns: RegExp[];
    explanation: string;
    recommendation: string;
}
export interface PolicyPack {
    packId: string;
    name: string;
    version: string;
    jurisdiction: string;
    description: string;
    rules: DeclarativeRule[];
}
export type JurisdictionCode = 'FTC' | 'CA' | 'NY' | 'IL' | 'CO' | 'DE';
export type TrapSeverity = 'Unlawful' | 'Watch' | 'Standard';
export type SubscriptionTrapCategory = 'AsymmetricCancellation' | 'RetentionMaze' | 'InconspicuousRenewal' | 'PreRenewalNotice' | 'UnilateralPriceHike' | 'TrialConversion' | 'UnconditionalGift' | 'AffirmativeConsent';
export interface StatuteRule {
    id: string;
    category: SubscriptionTrapCategory;
    trapName: string;
    severity: TrapSeverity;
    statutoryCitation: string;
    vacatedRuleReference?: string;
    statuteSummary: string;
    triggerPatterns: string[];
    negativeExceptions?: string[];
    disputeTemplate: string;
}
export interface RegulatoryStatus {
    vacatedRule?: {
        name: string;
        citation: string;
        status: string;
        details: string;
        implication: string;
    };
    currentlyBindingAuthority?: string[];
}
export interface StatuteDataset {
    $schema?: string;
    jurisdictionCode: JurisdictionCode;
    jurisdictionName: string;
    statuteTitle: string;
    codification: string;
    lastAudited: string;
    officialSourceUrl: string;
    regulatoryStatus?: RegulatoryStatus;
    rules: StatuteRule[];
}
//# sourceMappingURL=types.d.ts.map