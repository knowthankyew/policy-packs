import { StateLemonRaw, MagnusonMossRule, StateLemonLaw } from './types';
export declare const federalWarrantyPolicy: {
    $schema: string;
    jurisdiction: {
        code: string;
        name: string;
        type: string;
    };
    metadata: {
        version: string;
        effectiveDate: string;
        lastAudited: string;
        statuteRef: string;
        officialSourceUrl: string;
    };
    federalRules: {
        id: string;
        pattern: string;
        title: string;
        severity: string;
        statute: string;
        lawName: string;
        explanation: string;
        enforceability: string;
        consumerAdvice: string;
    }[];
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
};
export declare const caWarrantyPolicy: StateLemonRaw;
export declare const nyWarrantyPolicy: StateLemonRaw;
export declare const flWarrantyPolicy: StateLemonRaw;
export declare const txWarrantyPolicy: StateLemonRaw;
export declare const maWarrantyPolicy: StateLemonRaw;
export declare const ilWarrantyPolicy: StateLemonRaw;
export declare const paWarrantyPolicy: StateLemonRaw;
export declare const njWarrantyPolicy: StateLemonRaw;
export declare const waWarrantyPolicy: StateLemonRaw;
export declare const LOADED_MAGNUSON_MOSS_RULES: MagnusonMossRule[];
export declare function policyToLemonLaw(raw: StateLemonRaw): StateLemonLaw;
export declare const LOADED_STATE_LEMON_LAWS: Record<string, StateLemonLaw>;
export * from './types';
//# sourceMappingURL=index.d.ts.map