export interface FederalRuleRaw {
    id: string;
    pattern: string;
    title: string;
    severity: 'illegal' | 'deceptive' | 'caution';
    statute: string;
    lawName: string;
    explanation: string;
    enforceability: 'Unenforceable (Illegal)' | 'Highly Questionable' | 'Strictly Enforceable';
    consumerAdvice: string;
}
export interface StateLemonRaw {
    jurisdiction: {
        code: string;
        name: string;
        type: string;
    };
    metadata: {
        version?: string;
        effectiveDate?: string;
        lastAudited?: string;
        statuteRef: string;
        officialSourceUrl?: string;
    };
    lemonLaw: {
        repairAttemptsThreshold: number;
        daysOutOfServiceThreshold: number;
        safetyDefectAttemptsThreshold: number;
        coveragePeriod: string;
        impliedWarrantyWaivable: boolean;
        remedies: string[];
        attorneyFeesShift: boolean;
        specialRules: string[];
    };
}
export interface MagnusonMossRule {
    id: string;
    pattern: RegExp;
    title: string;
    severity: 'illegal' | 'deceptive' | 'caution';
    statute: string;
    lawName: string;
    explanation: string;
    enforceability: 'Unenforceable (Illegal)' | 'Highly Questionable' | 'Strictly Enforceable';
    consumerAdvice: string;
}
export interface StateLemonLaw {
    stateCode: string;
    stateName: string;
    statuteRef: string;
    repairAttemptsThreshold: number;
    daysOutOfServiceThreshold: number;
    safetyDefectAttemptsThreshold: number;
    coveragePeriod: string;
    impliedWarrantyWaivable: boolean;
    remedies: string[];
    attorneyFeesShift: boolean;
    specialRules: string[];
}
//# sourceMappingURL=types.d.ts.map