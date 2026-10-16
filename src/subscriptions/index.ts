import {
  PolicyPack,
  DeclarativeRule,
  DetectionRule,
  JurisdictionCode,
  StatuteDataset,
} from './types';

// Bundled Extension Declarative Policy Packs
import usFederalJson from './data/us-federal.json';
import stateArlJson from './data/state-arl.json';
import ukDmccJson from './data/uk-dmcc.json';
import euCrdJson from './data/eu-crd.json';

// Bundled Bot Jurisdiction Statute Datasets
import ftcJson from './data/ftc.json';
import californiaJson from './data/california.json';
import newYorkJson from './data/new-york.json';
import illinoisJson from './data/illinois.json';
import coloradoJson from './data/colorado.json';
import delawareJson from './data/delaware.json';

export const usFederalPack = usFederalJson as unknown as PolicyPack;
export const stateArlPack = stateArlJson as unknown as PolicyPack;
export const ukDmccPack = ukDmccJson as unknown as PolicyPack;
export const euCrdPack = euCrdJson as unknown as PolicyPack;

export const ALL_POLICY_PACKS: PolicyPack[] = [
  usFederalPack,
  stateArlPack,
  ukDmccPack,
  euCrdPack,
];

/**
 * Compiles a declarative rule with string pattern definitions into a runtime DetectionRule
 * containing live, case-insensitive RegExp instances.
 */
export function compileDeclarativeRule(rule: DeclarativeRule): DetectionRule {
  return {
    id: rule.id,
    title: rule.title,
    category: rule.category,
    classification: rule.classification,
    severity: rule.severity,
    statute: rule.statute,
    patterns: rule.patterns.map((p) => new RegExp(p, 'i')),
    explanation: rule.explanation,
    recommendation: rule.recommendation,
  };
}

/**
 * Compiles an entire PolicyPack into executable DetectionRules.
 */
export function compilePolicyPack(pack: PolicyPack): DetectionRule[] {
  return pack.rules.map(compileDeclarativeRule);
}

/**
 * Master collection of compiled detection rules loaded from all bundled policy packs.
 */
export const COMPILED_POLICY_RULES: DetectionRule[] = ALL_POLICY_PACKS.flatMap(compilePolicyPack);

// Bot Jurisdiction Datasets
export const ftcData = ftcJson as unknown as StatuteDataset;
export const californiaData = californiaJson as unknown as StatuteDataset;
export const newYorkData = newYorkJson as unknown as StatuteDataset;
export const illinoisData = illinoisJson as unknown as StatuteDataset;
export const coloradoData = coloradoJson as unknown as StatuteDataset;
export const delawareData = delawareJson as unknown as StatuteDataset;

export const STATUTE_CATALOG: Record<JurisdictionCode, StatuteDataset> = {
  FTC: ftcData,
  CA: californiaData,
  NY: newYorkData,
  IL: illinoisData,
  CO: coloradoData,
  DE: delawareData,
};

export * from './types';
