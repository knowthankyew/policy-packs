import { PolicyPack, DeclarativeRule, DetectionRule, JurisdictionCode, StatuteDataset } from './types';
export declare const usFederalPack: PolicyPack;
export declare const stateArlPack: PolicyPack;
export declare const ukDmccPack: PolicyPack;
export declare const euCrdPack: PolicyPack;
export declare const ALL_POLICY_PACKS: PolicyPack[];
/**
 * Compiles a declarative rule with string pattern definitions into a runtime DetectionRule
 * containing live, case-insensitive RegExp instances.
 */
export declare function compileDeclarativeRule(rule: DeclarativeRule): DetectionRule;
/**
 * Compiles an entire PolicyPack into executable DetectionRules.
 */
export declare function compilePolicyPack(pack: PolicyPack): DetectionRule[];
/**
 * Master collection of compiled detection rules loaded from all bundled policy packs.
 */
export declare const COMPILED_POLICY_RULES: DetectionRule[];
export declare const ftcData: StatuteDataset;
export declare const californiaData: StatuteDataset;
export declare const newYorkData: StatuteDataset;
export declare const illinoisData: StatuteDataset;
export declare const coloradoData: StatuteDataset;
export declare const delawareData: StatuteDataset;
export declare const STATUTE_CATALOG: Record<JurisdictionCode, StatuteDataset>;
export * from './types';
//# sourceMappingURL=index.d.ts.map