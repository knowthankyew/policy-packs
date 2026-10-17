export interface WagePolicyPack {
    jurisdiction: {
        code: string;
        name: string;
        type: 'federal' | 'state' | 'municipal';
    };
    metadata: {
        version: string;
        effectiveDate?: string;
        lastAudited?: string;
        statuteRef: string;
        officialSourceUrl?: string;
    };
    standards: {
        minimumWageRate: number;
        exemptionSalaryThreshold?: number;
        dailyOvertimeThreshold?: number;
        doubleTimeThreshold?: number;
        weeklyOvertimeThreshold: number;
        hasStateDisabilityTax: boolean;
        stateTaxName?: string;
        waitingTimePenaltyDays?: number;
        statutoryDamagesMultiplier?: string;
        specialRules: string[];
    };
}
export interface StateWageRule {
    stateCode: string;
    stateName: string;
    statuteRef: string;
    minimumWageRate: number;
    exemptionSalaryThreshold?: number;
    dailyOvertimeThreshold?: number;
    doubleTimeThreshold?: number;
    weeklyOvertimeThreshold: number;
    hasStateDisabilityTax: boolean;
    stateTaxName?: string;
    waitingTimePenaltyDays?: number;
    statutoryDamagesMultiplier?: string;
    specialRules: string[];
}
//# sourceMappingURL=types.d.ts.map