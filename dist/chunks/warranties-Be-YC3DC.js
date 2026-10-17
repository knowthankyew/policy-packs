import { t as e } from "./rolldown-runtime-Dy4uBu1J.js";
var t = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "US",
		name: "General US State Jurisdiction",
		type: "federal"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Uniform Commercial Code (U.C.C. § 2-608 & § 2-314) & State Laws",
		officialSourceUrl: "https://www.ftc.gov/legal-library/browse/statutes/magnuson-moss-warranty-federal-trade-commission-improvements-act"
	},
	federalRules: [
		{
			id: "anti_tampering_sticker",
			pattern: "(void\\s+if\\s+(removed|broken|damaged|tampered|seal|sticker|label))|(warranty\\s+void\\s+if\\s+seal\\s+is\\s+broken)|(do\\s+not\\s+remove\\s+seal)",
			title: "Illegal Anti-Tampering / Void-If-Sticker Clause",
			severity: "illegal",
			statute: "15 U.S.C. § 2302(c) & FTC Enforcement Guidance",
			lawName: "Magnuson-Moss Warranty Act § 102(c)",
			explanation: "Under federal law (15 U.S.C. § 2302(c)), warrantors cannot condition warranty coverage on keeping a sticker, seal, or label intact. The FTC has repeatedly issued warning letters confirming that \"Void If Seal Broken\" stickers are illegal unless the manufacturer provides the service or parts for free.",
			enforceability: "Unenforceable (Illegal)",
			consumerAdvice: "You can legally open your device or break warranty seals without forfeiting your warranty rights, unless the manufacturer proves your action directly caused the defect."
		},
		{
			id: "third_party_repair_ban",
			pattern: "(void\\s+if\\s+(?:repaired|serviced|opened|altered|modified)(?:\\s+or\\s+\\w+)*\\s+by\\s+(?:unauthorized|third\\s*party|non-factory|anyone\\s+other\\s+than))|(must\\s+use\\s+only\\s+genuine\\s+(?:\\w+\\s+)?(?:parts|components|accessories))|(void\\s+if\\s+non-oem\\s+parts)",
			title: "Illegal Tie-In Sales & Third-Party Repair Ban",
			severity: "illegal",
			statute: "15 U.S.C. § 2302(c)",
			lawName: "Magnuson-Moss Anti-Tie-In Provision",
			explanation: "Warrantors are strictly prohibited from requiring consumers to use specific brand-name parts or authorized repair shops to maintain warranty coverage, unless those parts or services are provided completely free of charge under the warranty.",
			enforceability: "Unenforceable (Illegal)",
			consumerAdvice: "Using independent repair shops or third-party compatible replacement parts does NOT invalidate your product warranty."
		},
		{
			id: "implied_warranty_disclaimer",
			pattern: "(disclaims?\\s+all\\s+(other\\s+)?warranties)|(no\\s+implied\\s+warranty\\s+of\\s+merchantability)|(sold\\s+\"?as\\s*is\"?)|(in\\s+lieu\\s+of\\s+all\\s+other\\s+warranties,\\s+express\\s+or\\s+implied)",
			title: "Illegal Disclaimer of Implied Warranties",
			severity: "illegal",
			statute: "15 U.S.C. § 2308(a)",
			lawName: "Magnuson-Moss § 108 Prohibition on Disclaimers",
			explanation: "If a seller or manufacturer gives a written warranty (or enters a service contract), federal law strictly forbids them from disclaiming implied warranties of merchantability and fitness for a particular purpose.",
			enforceability: "Unenforceable (Illegal)",
			consumerAdvice: "Even if the contract says \"No Implied Warranties\" or \"AS IS\", the seller remains legally bound by the implied warranty of merchantability because a written warranty was supplied."
		},
		{
			id: "mandatory_registration_card",
			pattern: "(must\\s+(return|mail|submit)\\s+(registration|warranty)\\s+card)|(warranty\\s+(?:is\\s+)?void\\s+unless\\s+registered\\s+within)|(registration\\s+required\\s+for\\s+coverage)",
			title: "Illegal Mandatory Registration Card Clause",
			severity: "deceptive",
			statute: "16 C.F.R. § 700.7",
			lawName: "FTC Disclosure Rule 16 C.F.R. § 700.7",
			explanation: "A warrantor cannot condition warranty coverage on the consumer returning a warranty registration card, unless the warranty is designated as a Full Warranty and the requirement is explicitly disclosed.",
			enforceability: "Unenforceable (Illegal)",
			consumerAdvice: "Failure to mail back a registration card or fill out an online registration form does not void your warranty rights if you have proof of purchase."
		},
		{
			id: "consumer_shipping_fee_demand",
			pattern: "(customer\\s+must\\s+pay\\s+all\\s+shipping\\s+and\\s+handling)|(owner\\s+responsible\\s+for\\s+freight\\s+costs)|(shipping\\s+fees\\s+non-refundable)",
			title: "Shipping Fee Requirement Under Warranty",
			severity: "caution",
			statute: "15 U.S.C. § 2304(a)(1)",
			lawName: "Magnuson-Moss Full Warranty Standards",
			explanation: "If a warranty is labeled as a \"Full Warranty\", requiring the consumer to pay shipping or handling fees to receive warranty service violates federal full warranty standards. Under a Limited Warranty, shipping fees may be assessed only if clearly disclosed.",
			enforceability: "Highly Questionable",
			consumerAdvice: "If the warranty claims to be a \"Full Warranty\", challenge any request to pay shipping or diagnostic fees."
		},
		{
			id: "unreasonable_notice_window",
			pattern: "(must\\s+notify\\s+within\\s+(5|7|10|14)\\s+days\\s+of\\s+(purchase|defect|delivery))|(claim\\s+void\\s+if\\s+not\\s+reported\\s+immediately)",
			title: "Deceptive Short Notice Window",
			severity: "deceptive",
			statute: "15 U.S.C. § 2302(a)",
			lawName: "Magnuson-Moss Clear Disclosure Mandate",
			explanation: "Imposing extremely short notification windows (e.g. 5–14 days) to report hidden defects creates an unreasonable duty on consumers and is routinely rejected by courts as unconscionable.",
			enforceability: "Highly Questionable",
			consumerAdvice: "You are legally entitled to report a covered defect within a reasonable timeframe during the warranty period, regardless of strict 10-day notice clauses."
		},
		{
			id: "forced_binding_arbitration",
			pattern: "(mandatory\\s+binding\\s+arbitration)|(waives?\\s+(all\\s+)?right\\s+to\\s+jury\\s+trial)|(no\\s+class\\s+action)",
			title: "Mandatory Binding Arbitration & Class Waiver",
			severity: "caution",
			statute: "15 U.S.C. § 2310(a) & FAA Case Law",
			lawName: "Magnuson-Moss Informal Dispute Settlement Rules",
			explanation: "While federal courts allow arbitration clauses in written consumer contracts, Magnuson-Moss encourages informal dispute settlement procedures and protects statutory consumer remedies.",
			enforceability: "Strictly Enforceable",
			consumerAdvice: "Check if the clause includes an opt-out window (often 30 days from purchase) allowing you to mail an opt-out letter to preserve your right to go to court."
		}
	],
	lemonLaw: {
		repairAttemptsThreshold: 3,
		daysOutOfServiceThreshold: 30,
		safetyDefectAttemptsThreshold: 2,
		coveragePeriod: "1–2 years or express warranty term",
		impliedWarrantyWaivable: !0,
		remedies: [
			"Full Refund or Fair Replacement",
			"Repair of Defect",
			"Incidental & Consequential Damages"
		],
		attorneyFeesShift: !0,
		specialRules: ["Federal Magnuson-Moss Act governs written warranties in all 50 states.", "U.C.C. § 2-608 allows revocation of acceptance when non-conformity substantially impairs value."]
	}
}, n = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "CA",
		name: "California",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Cal. Civ. Code § 1793.22 (Tanner Consumer Protection Act) & § 1790 et seq. (Song-Beverly)",
		officialSourceUrl: "https://leginfo.legislature.ca.gov/"
	},
	lemonLaw: {
		repairAttemptsThreshold: 4,
		daysOutOfServiceThreshold: 30,
		safetyDefectAttemptsThreshold: 2,
		coveragePeriod: "18 months / 18,000 miles (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !1,
		remedies: [
			"Full Refund (minus reasonable offset)",
			"Replacement Unit/Vehicle",
			"Mandatory Attorney Fee & Cost Shift"
		],
		attorneyFeesShift: !0,
		specialRules: [
			"Song-Beverly Act extends non-waivable implied warranty protections to ALL consumer goods in California.",
			"Prevailing consumers recover 100% of reasonable attorney fees and costs under Cal. Civ. Code § 1794(d).",
			"Civil penalty up to 2x actual damages for willful failure to repair or repurchase."
		]
	}
}, r = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "NY",
		name: "New York",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "N.Y. Gen. Bus. Law § 198-a (New Car) & U.C.C. § 2-608 (Consumer Goods)",
		officialSourceUrl: "https://ag.ny.gov/"
	},
	lemonLaw: {
		repairAttemptsThreshold: 4,
		daysOutOfServiceThreshold: 30,
		safetyDefectAttemptsThreshold: 2,
		coveragePeriod: "2 years / 18,000 miles (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !1,
		remedies: [
			"Full Refund including taxes & fees",
			"Replacement Product",
			"Attorney Fees & Costs"
		],
		attorneyFeesShift: !0,
		specialRules: ["N.Y. Gen. Bus. Law § 349 prohibits deceptive warranty practices for general consumer goods.", "U.C.C. § 2-608 authorizes revocation of acceptance when non-conformity substantially impairs value."]
	}
}, i = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "FL",
		name: "Florida",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Fla. Stat. § 681.102 (Motor Vehicles) & U.C.C. § 672.608 (Consumer Goods)",
		officialSourceUrl: "http://myfloridalegal.com/"
	},
	lemonLaw: {
		repairAttemptsThreshold: 3,
		daysOutOfServiceThreshold: 15,
		safetyDefectAttemptsThreshold: 1,
		coveragePeriod: "24 months (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !0,
		remedies: [
			"Full Refund of purchase price",
			"Replacement Product",
			"Attorney Fees & Costs"
		],
		attorneyFeesShift: !0,
		specialRules: ["15 days out of service threshold triggers lemon presumption for motor vehicles.", "General consumer goods governed by Fla. Stat. § 501.201 (FDUTPA) and UCC Article 2."]
	}
}, a = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "TX",
		name: "Texas",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Tex. Occ. Code § 2301.601 (Vehicles) & Tex. Bus. & Com. Code § 17.41 (DTPA)",
		officialSourceUrl: "https://www.txdmv.gov/motorists/consumer-protection/lemon-law"
	},
	lemonLaw: {
		repairAttemptsThreshold: 4,
		daysOutOfServiceThreshold: 30,
		safetyDefectAttemptsThreshold: 2,
		coveragePeriod: "2 years / 24,000 miles (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !0,
		remedies: [
			"Refund (minus usage deduction)",
			"Replacement Product",
			"Incidental Expenses & DTPA Damages"
		],
		attorneyFeesShift: !0,
		specialRules: ["Texas Deceptive Trade Practices Act (DTPA) provides enhanced remedies for unconscionable warranty disclaimers."]
	}
}, o = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "MA",
		name: "Massachusetts",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "M.G.L. c. 90 § 7N1/2 (Vehicles), c. 106 § 2-316A & c. 93A (Consumer Goods)",
		officialSourceUrl: "https://www.mass.gov/lemon-laws"
	},
	lemonLaw: {
		repairAttemptsThreshold: 3,
		daysOutOfServiceThreshold: 15,
		safetyDefectAttemptsThreshold: 1,
		coveragePeriod: "1 year / 15,000 miles (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !1,
		remedies: [
			"Full Refund",
			"Replacement Unit",
			"Double to Treble Damages under Ch. 93A"
		],
		attorneyFeesShift: !0,
		specialRules: ["M.G.L. c. 106 § 2-316A strictly bans ANY disclaimer of implied warranties of merchantability for consumer goods.", "Formal 93A demand letter can trigger double to treble statutory damages for refusal to honor valid warranty."]
	}
}, s = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "IL",
		name: "Illinois",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "815 ILCS 380/ (Vehicles) & 815 ILCS 505/ (Consumer Fraud Act)",
		officialSourceUrl: "https://www.illinoisattorneygeneral.gov/"
	},
	lemonLaw: {
		repairAttemptsThreshold: 4,
		daysOutOfServiceThreshold: 30,
		safetyDefectAttemptsThreshold: 2,
		coveragePeriod: "1 year / 12,000 miles (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !0,
		remedies: [
			"Full Refund",
			"Replacement Product",
			"Attorney Fees"
		],
		attorneyFeesShift: !0,
		specialRules: ["Presumption applies if defect continues after 4 repair attempts or 30 cumulative calendar days."]
	}
}, c = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "PA",
		name: "Pennsylvania",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "73 P.S. § 1951 (Vehicles) & 73 P.S. § 201-1 (Unfair Trade Practices)",
		officialSourceUrl: "https://www.attorneygeneral.gov/"
	},
	lemonLaw: {
		repairAttemptsThreshold: 3,
		daysOutOfServiceThreshold: 30,
		safetyDefectAttemptsThreshold: 1,
		coveragePeriod: "1 year / 12,000 miles (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !0,
		remedies: [
			"Full Refund",
			"Replacement Unit",
			"Attorney Fees & Costs"
		],
		attorneyFeesShift: !0,
		specialRules: ["Manufacturer must pay all statutory fees and consumer costs upon prevailing."]
	}
}, l = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "NJ",
		name: "New Jersey",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "N.J.S.A. 56:12-29 (Vehicles) & N.J.S.A. 56:8-1 (Consumer Fraud Act)",
		officialSourceUrl: "https://www.njconsumeraffairs.gov/"
	},
	lemonLaw: {
		repairAttemptsThreshold: 3,
		daysOutOfServiceThreshold: 20,
		safetyDefectAttemptsThreshold: 1,
		coveragePeriod: "2 years / 24,000 miles (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !1,
		remedies: [
			"Full Refund",
			"Replacement Product",
			"Mandatory Treble Damages & Counsel Fees"
		],
		attorneyFeesShift: !0,
		specialRules: ["New Jersey Consumer Fraud Act authorizes treble damages for deceptive warranty practices.", "20 cumulative days out of service triggers statutory lemon protections for vehicles."]
	}
}, u = {
	$schema: "../schemas/warranty-policy.schema.json",
	jurisdiction: {
		code: "WA",
		name: "Washington",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "RCW 19.118 (Vehicles) & RCW 19.86 (Consumer Protection Act)",
		officialSourceUrl: "https://www.atg.wa.gov/lemon-law"
	},
	lemonLaw: {
		repairAttemptsThreshold: 4,
		daysOutOfServiceThreshold: 30,
		safetyDefectAttemptsThreshold: 2,
		coveragePeriod: "2 years / 24,000 miles (Vehicles) | Express Warranty Window (Consumer Goods)",
		impliedWarrantyWaivable: !1,
		remedies: [
			"Full Refund",
			"Replacement",
			"Attorney Fees & Statutory Costs"
		],
		attorneyFeesShift: !0,
		specialRules: ["Washington Consumer Protection Act provides enhanced remedies for unlawful warranty disclaimers."]
	}
}, d = /* @__PURE__ */ e({
	LOADED_MAGNUSON_MOSS_RULES: () => S,
	LOADED_STATE_LEMON_LAWS: () => w,
	caWarrantyPolicy: () => p,
	federalWarrantyPolicy: () => f,
	flWarrantyPolicy: () => h,
	ilWarrantyPolicy: () => v,
	maWarrantyPolicy: () => _,
	njWarrantyPolicy: () => b,
	nyWarrantyPolicy: () => m,
	paWarrantyPolicy: () => y,
	policyToLemonLaw: () => C,
	txWarrantyPolicy: () => g,
	waWarrantyPolicy: () => x
}), f = t, p = n, m = r, h = i, g = a, _ = o, v = s, y = c, b = l, x = u, S = f.federalRules.map((e) => ({
	id: e.id,
	pattern: new RegExp(e.pattern, "i"),
	title: e.title,
	severity: e.severity,
	statute: e.statute,
	lawName: e.lawName,
	explanation: e.explanation,
	enforceability: e.enforceability,
	consumerAdvice: e.consumerAdvice
}));
function C(e) {
	return {
		stateCode: e.jurisdiction.code,
		stateName: e.jurisdiction.name,
		statuteRef: e.metadata.statuteRef,
		repairAttemptsThreshold: e.lemonLaw.repairAttemptsThreshold,
		daysOutOfServiceThreshold: e.lemonLaw.daysOutOfServiceThreshold,
		safetyDefectAttemptsThreshold: e.lemonLaw.safetyDefectAttemptsThreshold,
		coveragePeriod: e.lemonLaw.coveragePeriod,
		impliedWarrantyWaivable: e.lemonLaw.impliedWarrantyWaivable,
		remedies: e.lemonLaw.remedies,
		attorneyFeesShift: e.lemonLaw.attorneyFeesShift,
		specialRules: e.lemonLaw.specialRules
	};
}
var w = {
	DEFAULT: C(f),
	CA: C(p),
	NY: C(m),
	FL: C(h),
	TX: C(g),
	MA: C(_),
	IL: C(v),
	PA: C(y),
	NJ: C(b),
	WA: C(x)
};
//#endregion
export { h as a, b as c, C as d, g as f, f as i, m as l, d as m, w as n, v as o, x as p, p as r, _ as s, S as t, y as u };

//# sourceMappingURL=warranties-Be-YC3DC.js.map