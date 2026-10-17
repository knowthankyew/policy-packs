import { WagePolicyPack, StateWageRule } from './types';
export declare const caWagePolicy: WagePolicyPack;
export declare const nyWagePolicy: WagePolicyPack;
export declare const maWagePolicy: WagePolicyPack;
export declare const waWagePolicy: WagePolicyPack;
export declare const coWagePolicy: WagePolicyPack;
export declare const txWagePolicy: WagePolicyPack;
export declare const flWagePolicy: WagePolicyPack;
export declare const federalWagePolicy: WagePolicyPack;
export declare function policyToRule(policy: WagePolicyPack): StateWageRule;
export declare const RAW_POLICIES: WagePolicyPack[];
export declare const LOADED_STATE_WAGE_LAWS: Record<string, StateWageRule>;
export * from './types';
//# sourceMappingURL=index.d.ts.map