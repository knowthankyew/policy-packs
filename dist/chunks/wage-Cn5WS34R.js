import { t as e } from "./rolldown-runtime-Dy4uBu1J.js";
var t = {
	$schema: "../schemas/wage-policy.schema.json",
	jurisdiction: {
		code: "CA",
		name: "California",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Cal. Lab. Code § 203, § 510, § 515, § 226, & IWC Orders",
		officialSourceUrl: "https://www.dir.ca.gov/dlse/"
	},
	standards: {
		minimumWageRate: 16.9,
		exemptionSalaryThreshold: 70304,
		dailyOvertimeThreshold: 8,
		doubleTimeThreshold: 12,
		weeklyOvertimeThreshold: 40,
		hasStateDisabilityTax: !0,
		stateTaxName: "CA SDI (State Disability Insurance)",
		waitingTimePenaltyDays: 30,
		specialRules: [
			"Cal. Lab. Code § 515(a) mandates a salary of at least $70,304/yr ($1,352/wk) to be exempt from overtime. Paying under this threshold means the worker is non-exempt regardless of job title.",
			"California mandates 1.5x overtime after 8 hours in a single workday, and 2.0x double time after 12 hours.",
			"7th Consecutive Workday Rule: 1.5x for first 8 hours on 7th consecutive day of workweek, 2.0x thereafter.",
			"Cal. Lab. Code § 221 & Kerr's Catering ban all deductions for cash register shortages or breakage, even if authorized in writing.",
			"Cal. Lab. Code § 226 mandates itemized pay stubs with gross/net pay, total hours, rates, and employer address.",
			"Waiting Time Penalties: Failure to pay all wages due upon termination triggers up to 30 days of full daily wage penalties under Cal. Lab. Code § 203."
		]
	}
}, n = {
	$schema: "../schemas/wage-policy.schema.json",
	jurisdiction: {
		code: "NY",
		name: "New York",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "N.Y. Lab. Law § 190 et seq., § 195, & 12 NYCRR § 142-2.14",
		officialSourceUrl: "https://dol.ny.gov/"
	},
	standards: {
		minimumWageRate: 17,
		exemptionSalaryThreshold: 66300,
		weeklyOvertimeThreshold: 40,
		hasStateDisabilityTax: !0,
		stateTaxName: "NY DBL / PFL (Paid Family Leave)",
		statutoryDamagesMultiplier: "100% Liquidated Damages + Interest",
		specialRules: [
			"12 NYCRR § 142-2.14 requires an exempt salary of at least $66,300/yr ($1,275/wk) in NYC/Long Island/Westchester ($62,400 upstate).",
			"N.Y. Lab. Law § 193 strictly bans deductions for cash shortages, till shortages, or business expenses.",
			"New York Wage Theft Prevention Act (§ 195) mandates written wage notices upon hire and detailed pay stub itemization.",
			"Spread of Hours Rule: Extra 1 hour of pay at minimum wage if workday exceeds 10 hours from start to finish.",
			"100% statutory liquidated damages plus 9% prejudgment interest for willful unpaid wages under N.Y. Lab. Law § 198."
		]
	}
}, r = {
	$schema: "../schemas/wage-policy.schema.json",
	jurisdiction: {
		code: "MA",
		name: "Massachusetts",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "M.G.L. c. 149 §§ 148, 150 (Weekly Wage Act & Treble Damages) & c. 151 § 1A",
		officialSourceUrl: "https://www.mass.gov/orgs/massachusetts-attorney-generals-office"
	},
	standards: {
		minimumWageRate: 15,
		exemptionSalaryThreshold: 35568,
		weeklyOvertimeThreshold: 40,
		hasStateDisabilityTax: !0,
		stateTaxName: "MA PFML (Paid Family and Medical Leave)",
		statutoryDamagesMultiplier: "MANDATORY Treble Damages (3x)",
		specialRules: [
			"M.G.L. c. 149, § 150 strictly mandates automatic mandatory TREBLE DAMAGES (3x) for any late or unpaid wages violating § 148.",
			"Prevailing workers recover mandatory 100% reasonable attorney fees and litigation costs under Massachusetts law.",
			"M.G.L. c. 149 § 150 & Camara v. AG strictly ban deductions for damages or shortages as impermissible self-help.",
			"Employees must be paid within 6 or 7 days of the end of the pay period depending on pay frequency."
		]
	}
}, i = {
	$schema: "../schemas/wage-policy.schema.json",
	jurisdiction: {
		code: "WA",
		name: "Washington",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "RCW 49.46 (Minimum Wage Act), RCW 49.52, & WAC 296-128-545",
		officialSourceUrl: "https://www.lni.wa.gov/"
	},
	standards: {
		minimumWageRate: 17.13,
		exemptionSalaryThreshold: 80168.4,
		weeklyOvertimeThreshold: 40,
		hasStateDisabilityTax: !0,
		stateTaxName: "WA PFML & WA Cares Fund",
		statutoryDamagesMultiplier: "Double Damages (2x)",
		specialRules: [
			"Washington state minimum wage is $17.13/hr (2026).",
			"Exempt salary thresholds in WA are tied to multiples of state minimum wage (2.25x = $80,168.40/yr or $1,541.70/wk under WAC 296-128-545 for 2026).",
			"RCW 49.52.070 authorizes double damages (2x) for willful failure to pay earned wages."
		]
	}
}, a = {
	$schema: "../schemas/wage-policy.schema.json",
	jurisdiction: {
		code: "CO",
		name: "Colorado",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Colo. Rev. Stat. § 8-4-101 et seq. & COMPS Order #39",
		officialSourceUrl: "https://cdle.colorado.gov/wage-and-hour-laws"
	},
	standards: {
		minimumWageRate: 14.42,
		exemptionSalaryThreshold: 55e3,
		dailyOvertimeThreshold: 12,
		weeklyOvertimeThreshold: 40,
		hasStateDisabilityTax: !0,
		stateTaxName: "CO FAMLI (Family and Medical Leave Insurance)",
		statutoryDamagesMultiplier: "Penalties up to 3x Unpaid Wages",
		specialRules: [
			"COMPS Order #39 mandates an annual exempt salary of at least $55,000 ($1,057.69/wk).",
			"Colorado requires 1.5x overtime after 12 hours worked in a single workday or 12 consecutive hours.",
			"Deductions for cash shortages or property damage are strictly restricted under C.R.S. § 8-4-105."
		]
	}
}, o = {
	$schema: "../schemas/wage-policy.schema.json",
	jurisdiction: {
		code: "TX",
		name: "Texas",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Tex. Lab. Code § 61.001 et seq. (Texas Payday Law)",
		officialSourceUrl: "https://www.twc.texas.gov/jobseekers/texas-payday-law"
	},
	standards: {
		minimumWageRate: 7.25,
		exemptionSalaryThreshold: 35568,
		weeklyOvertimeThreshold: 40,
		hasStateDisabilityTax: !1,
		specialRules: [
			"Texas follows federal FLSA minimum wage ($7.25/hr) and weekly overtime rules (40 hrs/wk).",
			"Texas Payday Law governs wage claims through the Texas Workforce Commission (TWC).",
			"Deductions require prior written authorization signed by the employee."
		]
	}
}, s = {
	$schema: "../schemas/wage-policy.schema.json",
	jurisdiction: {
		code: "FL",
		name: "Florida",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Fla. Stat. § 448.110 & Fla. Const. Art. X, § 24",
		officialSourceUrl: "https://www.floridajobs.org/"
	},
	standards: {
		minimumWageRate: 13,
		exemptionSalaryThreshold: 35568,
		weeklyOvertimeThreshold: 40,
		hasStateDisabilityTax: !1,
		specialRules: ["Florida constitutional minimum wage increases by $1.00 each September until reaching $15.00/hr in 2026.", "Must serve 15-day written notice to employer prior to filing statutory minimum wage lawsuit under Fla. Stat. § 448.110."]
	}
}, c = {
	$schema: "../schemas/wage-policy.schema.json",
	jurisdiction: {
		code: "US",
		name: "General US Federal Standard",
		type: "federal"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Fair Labor Standards Act (29 U.S.C. § 201 et seq.)",
		officialSourceUrl: "https://www.dol.gov/agencies/whd/flsa"
	},
	standards: {
		minimumWageRate: 7.25,
		exemptionSalaryThreshold: 35568,
		weeklyOvertimeThreshold: 40,
		hasStateDisabilityTax: !1,
		specialRules: [
			"Federal FLSA mandates minimum wage of $7.25/hr and 1.5x overtime for hours worked beyond 40/week.",
			"Federal binding salary basis threshold is $35,568/yr ($684/wk) following the nationwide vacatur of the 2024 rule.",
			"Prevailing workers recover 100% back pay, 100% liquidated double damages, and attorney fees under 29 U.S.C. § 216(b)."
		]
	}
}, l = /* @__PURE__ */ e({
	LOADED_STATE_WAGE_LAWS: () => b,
	RAW_POLICIES: () => y,
	caWagePolicy: () => u,
	coWagePolicy: () => m,
	federalWagePolicy: () => _,
	flWagePolicy: () => g,
	maWagePolicy: () => f,
	nyWagePolicy: () => d,
	policyToRule: () => v,
	txWagePolicy: () => h,
	waWagePolicy: () => p
}), u = t, d = n, f = r, p = i, m = a, h = o, g = s, _ = c;
function v(e) {
	return {
		stateCode: e.jurisdiction.code,
		stateName: e.jurisdiction.name,
		statuteRef: e.metadata.statuteRef,
		minimumWageRate: e.standards.minimumWageRate,
		exemptionSalaryThreshold: e.standards.exemptionSalaryThreshold,
		dailyOvertimeThreshold: e.standards.dailyOvertimeThreshold,
		doubleTimeThreshold: e.standards.doubleTimeThreshold,
		weeklyOvertimeThreshold: e.standards.weeklyOvertimeThreshold,
		hasStateDisabilityTax: e.standards.hasStateDisabilityTax,
		stateTaxName: e.standards.stateTaxName,
		waitingTimePenaltyDays: e.standards.waitingTimePenaltyDays,
		statutoryDamagesMultiplier: e.standards.statutoryDamagesMultiplier,
		specialRules: e.standards.specialRules
	};
}
var y = [
	u,
	d,
	f,
	p,
	m,
	h,
	g
], b = { DEFAULT: v(_) };
for (let e of y) b[e.jurisdiction.code] = v(e);
//#endregion
export { _ as a, d as c, p as d, l as f, m as i, v as l, y as n, g as o, u as r, f as s, b as t, h as u };

//# sourceMappingURL=wage-Cn5WS34R.js.map