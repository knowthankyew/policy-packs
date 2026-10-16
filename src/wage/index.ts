import { WagePolicyPack, StateWageRule } from './types';

import caJson from './data/CA.json';
import nyJson from './data/NY.json';
import maJson from './data/MA.json';
import waJson from './data/WA.json';
import coJson from './data/CO.json';
import txJson from './data/TX.json';
import flJson from './data/FL.json';
import federalJson from './data/federal.json';

export const caWagePolicy = caJson as unknown as WagePolicyPack;
export const nyWagePolicy = nyJson as unknown as WagePolicyPack;
export const maWagePolicy = maJson as unknown as WagePolicyPack;
export const waWagePolicy = waJson as unknown as WagePolicyPack;
export const coWagePolicy = coJson as unknown as WagePolicyPack;
export const txWagePolicy = txJson as unknown as WagePolicyPack;
export const flWagePolicy = flJson as unknown as WagePolicyPack;
export const federalWagePolicy = federalJson as unknown as WagePolicyPack;

export function policyToRule(policy: WagePolicyPack): StateWageRule {
  return {
    stateCode: policy.jurisdiction.code,
    stateName: policy.jurisdiction.name,
    statuteRef: policy.metadata.statuteRef,
    minimumWageRate: policy.standards.minimumWageRate,
    exemptionSalaryThreshold: policy.standards.exemptionSalaryThreshold,
    dailyOvertimeThreshold: policy.standards.dailyOvertimeThreshold,
    doubleTimeThreshold: policy.standards.doubleTimeThreshold,
    weeklyOvertimeThreshold: policy.standards.weeklyOvertimeThreshold,
    hasStateDisabilityTax: policy.standards.hasStateDisabilityTax,
    stateTaxName: policy.standards.stateTaxName,
    waitingTimePenaltyDays: policy.standards.waitingTimePenaltyDays,
    statutoryDamagesMultiplier: policy.standards.statutoryDamagesMultiplier,
    specialRules: policy.standards.specialRules,
  };
}

export const RAW_POLICIES: WagePolicyPack[] = [
  caWagePolicy,
  nyWagePolicy,
  maWagePolicy,
  waWagePolicy,
  coWagePolicy,
  txWagePolicy,
  flWagePolicy,
];

export const LOADED_STATE_WAGE_LAWS: Record<string, StateWageRule> = {
  DEFAULT: policyToRule(federalWagePolicy),
};

for (const policy of RAW_POLICIES) {
  LOADED_STATE_WAGE_LAWS[policy.jurisdiction.code] = policyToRule(policy);
}

export * from './types';
