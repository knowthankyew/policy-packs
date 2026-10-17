import { CharityCarePolicy, FplYearlyGuideline, BenchmarkItem, HospitalProfile } from './types';
export declare const federalCharityCarePolicy: CharityCarePolicy;
export declare const caCharityCarePolicy: CharityCarePolicy;
export declare const nyCharityCarePolicy: CharityCarePolicy;
export declare const waCharityCarePolicy: CharityCarePolicy;
export declare const CHARITY_CARE_POLICIES: Record<string, CharityCarePolicy>;
export declare const fplGuidelinesDataset: {
    version: string;
    lastAudited: string;
    source: string;
    statutoryBasis: string;
    guidelines: {
        year: number;
        effectiveDate: string;
        publicationReference: string;
        regions: {
            contiguous: {
                baseAmount: number;
                incrementPerPerson: number;
            };
            alaska: {
                baseAmount: number;
                incrementPerPerson: number;
            };
            hawaii: {
                baseAmount: number;
                incrementPerPerson: number;
            };
        };
    }[];
};
export declare const fplGuidelinesData: FplYearlyGuideline[];
export declare const FPL_GUIDELINES: FplYearlyGuideline[];
export declare const shoppableCodesData: BenchmarkItem[];
export declare const SHOPPABLE_CODES_BENCHMARKS: BenchmarkItem[];
export declare const seedHospitalsData: HospitalProfile[];
export declare const SEED_HOSPITALS: HospitalProfile[];
export * from './types';
//# sourceMappingURL=index.d.ts.map