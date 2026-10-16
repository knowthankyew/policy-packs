import {
  CharityCarePolicy,
  FplYearlyGuideline,
  BenchmarkItem,
  HospitalProfile,
} from './types';

import federalJson from './data/federal.json';
import caJson from './data/CA.json';
import nyJson from './data/NY.json';
import waJson from './data/WA.json';

import fplGuidelinesJson from './data/fpl-guidelines.json';
import shoppableCodesJson from './data/shoppable-codes.json';
import seedHospitalsJson from './data/seed-hospitals.json';

export const federalCharityCarePolicy = federalJson as unknown as CharityCarePolicy;
export const caCharityCarePolicy = caJson as unknown as CharityCarePolicy;
export const nyCharityCarePolicy = nyJson as unknown as CharityCarePolicy;
export const waCharityCarePolicy = waJson as unknown as CharityCarePolicy;

export const CHARITY_CARE_POLICIES: Record<string, CharityCarePolicy> = {
  US: federalCharityCarePolicy,
  CA: caCharityCarePolicy,
  NY: nyCharityCarePolicy,
  WA: waCharityCarePolicy,
};

export const fplGuidelinesDataset = fplGuidelinesJson;
export const fplGuidelinesData = fplGuidelinesJson.guidelines as unknown as FplYearlyGuideline[];
export const FPL_GUIDELINES = fplGuidelinesData;

export const shoppableCodesData = shoppableCodesJson as unknown as BenchmarkItem[];
export const SHOPPABLE_CODES_BENCHMARKS = shoppableCodesData;

export const seedHospitalsData = seedHospitalsJson as unknown as HospitalProfile[];
export const SEED_HOSPITALS = seedHospitalsData;

export * from './types';
