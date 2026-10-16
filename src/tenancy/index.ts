import { JurisdictionRules } from './types';
import federalJson from './data/federal.json';
import caJson from './data/CA.json';
import nyJson from './data/NY.json';
import txJson from './data/TX.json';
import flJson from './data/FL.json';
import ilJson from './data/IL.json';

export const federalTenancyData = federalJson as unknown as JurisdictionRules;
export const caTenancyData = caJson as unknown as JurisdictionRules;
export const nyTenancyData = nyJson as unknown as JurisdictionRules;
export const txTenancyData = txJson as unknown as JurisdictionRules;
export const flTenancyData = flJson as unknown as JurisdictionRules;
export const ilTenancyData = ilJson as unknown as JurisdictionRules;

export const JURISDICTION_RULES: Record<string, JurisdictionRules> = {
  FED: federalTenancyData,
  CA: caTenancyData,
  NY: nyTenancyData,
  TX: txTenancyData,
  FL: flTenancyData,
  IL: ilTenancyData,
};

export * from './types';
export * from './samples';
