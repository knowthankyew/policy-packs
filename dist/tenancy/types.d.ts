export type ClauseSeverity = 'Standard' | 'Watch' | 'LikelyUnenforceable';
export type ClauseCategory = 'SecurityDeposit' | 'LateFees' | 'EntryNotice' | 'HabitabilityRepairs' | 'EvictionLockout' | 'TerminationRenewal' | 'Disclosures' | 'General';
export interface TenancyRuleItem {
    id: string;
    category: ClauseCategory;
    name: string;
    severity: ClauseSeverity;
    statuteCitation: string;
    statuteSummary: string;
    officialUrl: string;
    triggerPatterns: string[];
    contraIndicatorPatterns: string[];
    disputeTemplate: string;
}
export interface TenancyJurisdictionRules {
    jurisdiction: string;
    jurisdictionName: string;
    statuteVersion: string;
    lastAudited: string;
    officialSourceUrl: string;
    rules: TenancyRuleItem[];
}
export type JurisdictionRules = TenancyJurisdictionRules;
export type RuleItem = TenancyRuleItem;
export interface SampleLease {
    title: string;
    jurisdiction: string;
    text: string;
}
export interface JurisdictionOption {
    code: string;
    label: string;
}
//# sourceMappingURL=types.d.ts.map