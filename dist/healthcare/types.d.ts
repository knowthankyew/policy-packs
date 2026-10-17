export type PovertyRegion = 'contiguous' | 'alaska' | 'hawaii';
export interface FplYearlyGuideline {
    year: number;
    effectiveDate: string;
    publicationReference?: string;
    regions: Record<PovertyRegion, {
        baseAmount: number;
        incrementPerPerson: number;
    }>;
}
export interface FapTier {
    tierId: string;
    name: string;
    minFplPercent: number;
    maxFplPercent: number;
    discountPercent: number;
    notes?: string;
}
export interface HospitalBillingContact {
    department: string;
    mailingAddressLine1: string;
    mailingAddressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber?: string;
    faxNumber?: string;
    fapWebpageUrl?: string;
}
export interface HospitalProfile {
    id: string;
    legalName: string;
    displayName: string;
    ein: string;
    npi?: string;
    cmsCertificationNumber?: string;
    state: string;
    isTaxExempt501c3: boolean;
    fapTiers: FapTier[];
    agbDiscountPercent?: number;
    fapApplicationWindowDays: number;
    requiresAssetTest: boolean;
    assetExemptionLimitUSD?: number;
    billingContact: HospitalBillingContact;
    dataVerificationStatus?: 'VERIFIED_PRIMARY_SOURCE' | 'SAMPLE_POLICY_VERIFY_BILL' | 'CUSTOM_USER_POLICY';
    verificationNotes?: string;
    mrfSliceUrl?: string;
}
export interface BenchmarkItem {
    code: string;
    category: string;
    description: string;
    nationalMedianCashPriceUSD: number;
    medicareBaselineRateUSD: number;
    commonUnbundlingRisk: boolean;
    unbundlingWarning?: string;
}
export interface CharityCarePolicy {
    $schema?: string;
    jurisdiction: {
        code: string;
        name: string;
        type: 'federal' | 'state' | 'municipal';
    };
    metadata: {
        version: string;
        effectiveDate: string;
        lastAudited: string;
        statuteRef: string;
        officialSourceUrl: string;
    };
    mandates: {
        fullCharityFplThresholdPercent: number;
        partialDiscountFplThresholdPercent: number;
        minimumEcaNoticeDays: number;
        assetExemptionRequired: boolean;
        statutoryProtections: string[];
    };
}
//# sourceMappingURL=types.d.ts.map