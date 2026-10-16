import {
  FederalRuleRaw,
  StateLemonRaw,
  MagnusonMossRule,
  StateLemonLaw,
} from './types';

import federalJson from './data/federal.json';
import caJson from './data/CA.json';
import nyJson from './data/NY.json';
import flJson from './data/FL.json';
import txJson from './data/TX.json';
import maJson from './data/MA.json';
import ilJson from './data/IL.json';
import paJson from './data/PA.json';
import njJson from './data/NJ.json';
import waJson from './data/WA.json';

export const federalWarrantyPolicy = federalJson;
export const caWarrantyPolicy = caJson as unknown as StateLemonRaw;
export const nyWarrantyPolicy = nyJson as unknown as StateLemonRaw;
export const flWarrantyPolicy = flJson as unknown as StateLemonRaw;
export const txWarrantyPolicy = txJson as unknown as StateLemonRaw;
export const maWarrantyPolicy = maJson as unknown as StateLemonRaw;
export const ilWarrantyPolicy = ilJson as unknown as StateLemonRaw;
export const paWarrantyPolicy = paJson as unknown as StateLemonRaw;
export const njWarrantyPolicy = njJson as unknown as StateLemonRaw;
export const waWarrantyPolicy = waJson as unknown as StateLemonRaw;

// 1. Build Magnuson-Moss Rules
export const LOADED_MAGNUSON_MOSS_RULES: MagnusonMossRule[] = (
  (federalWarrantyPolicy as unknown as { federalRules: FederalRuleRaw[] }).federalRules
).map((r) => ({
  id: r.id,
  pattern: new RegExp(r.pattern, 'i'),
  title: r.title,
  severity: r.severity,
  statute: r.statute,
  lawName: r.lawName,
  explanation: r.explanation,
  enforceability: r.enforceability,
  consumerAdvice: r.consumerAdvice,
}));

// 2. Build State Lemon Laws
export function policyToLemonLaw(raw: StateLemonRaw): StateLemonLaw {
  return {
    stateCode: raw.jurisdiction.code,
    stateName: raw.jurisdiction.name,
    statuteRef: raw.metadata.statuteRef,
    repairAttemptsThreshold: raw.lemonLaw.repairAttemptsThreshold,
    daysOutOfServiceThreshold: raw.lemonLaw.daysOutOfServiceThreshold,
    safetyDefectAttemptsThreshold: raw.lemonLaw.safetyDefectAttemptsThreshold,
    coveragePeriod: raw.lemonLaw.coveragePeriod,
    impliedWarrantyWaivable: raw.lemonLaw.impliedWarrantyWaivable,
    remedies: raw.lemonLaw.remedies,
    attorneyFeesShift: raw.lemonLaw.attorneyFeesShift,
    specialRules: raw.lemonLaw.specialRules,
  };
}

export const LOADED_STATE_LEMON_LAWS: Record<string, StateLemonLaw> = {
  DEFAULT: policyToLemonLaw(federalWarrantyPolicy as unknown as StateLemonRaw),
  CA: policyToLemonLaw(caWarrantyPolicy),
  NY: policyToLemonLaw(nyWarrantyPolicy),
  FL: policyToLemonLaw(flWarrantyPolicy),
  TX: policyToLemonLaw(txWarrantyPolicy),
  MA: policyToLemonLaw(maWarrantyPolicy),
  IL: policyToLemonLaw(ilWarrantyPolicy),
  PA: policyToLemonLaw(paWarrantyPolicy),
  NJ: policyToLemonLaw(njWarrantyPolicy),
  WA: policyToLemonLaw(waWarrantyPolicy),
};

export * from './types';
