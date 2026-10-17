import { t as e } from "./rolldown-runtime-Dy4uBu1J.js";
var t = {
	$schema: "../schemas/charity-care-policy.schema.json",
	jurisdiction: {
		code: "US",
		name: "General US Federal Standard",
		type: "federal"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "26 U.S.C. § 501(r) & CMS 45 CFR Part 180",
		officialSourceUrl: "https://www.irs.gov/charities-non-profits/financial-assistance-policies-faps"
	},
	mandates: {
		fullCharityFplThresholdPercent: 200,
		partialDiscountFplThresholdPercent: 400,
		minimumEcaNoticeDays: 240,
		assetExemptionRequired: !1,
		statutoryProtections: [
			"Tax-exempt 501(c)(3) hospitals must establish and publicize a written Financial Assistance Policy (FAP).",
			"Amounts Generally Billed (AGB): Charges for eligible patients cannot exceed amounts generally billed to insured individuals.",
			"Extraordinary Collection Actions (ECAs) are strictly banned for at least 240 days following the first post-discharge billing statement.",
			"Hospitals must make reasonable efforts to determine charity care eligibility before reporting debt to credit agencies or initiating lawsuits."
		]
	}
}, n = {
	$schema: "../schemas/charity-care-policy.schema.json",
	jurisdiction: {
		code: "CA",
		name: "California",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "Cal. Health & Safety Code § 127400 et seq. (Hospital Fair Pricing Act / AB 1020)",
		officialSourceUrl: "https://hcai.ca.gov/facility-reporting/hospital-fair-pricing-policies/"
	},
	mandates: {
		fullCharityFplThresholdPercent: 200,
		partialDiscountFplThresholdPercent: 400,
		minimumEcaNoticeDays: 240,
		assetExemptionRequired: !0,
		statutoryProtections: [
			"Hospital Fair Pricing Act mandates discounted or free care for uninsured and underinsured patients up to 400% of the Federal Poverty Level.",
			"Hospitals must provide an interest-free payment plan where monthly payments cannot exceed 10% of patient household family monthly income.",
			"Under AB 1020, hospitals cannot assign debt to collections without providing 180 days advance notice and certifying eligibility checks.",
			"Primary residence, retirement accounts, and essential monetary assets up to statutory thresholds are protected from asset tests."
		]
	}
}, r = {
	$schema: "../schemas/charity-care-policy.schema.json",
	jurisdiction: {
		code: "NY",
		name: "New York",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "N.Y. Public Health Law § 2807-k (Financial Aid Law)",
		officialSourceUrl: "https://www.health.ny.gov/regulations/public_health_law/section/2807-k/"
	},
	mandates: {
		fullCharityFplThresholdPercent: 100,
		partialDiscountFplThresholdPercent: 300,
		minimumEcaNoticeDays: 240,
		assetExemptionRequired: !0,
		statutoryProtections: [
			"New York Financial Aid Law requires general hospitals to offer financial aid policies for low- and moderate-income patients.",
			"Patients with incomes below 100% FPL cannot be charged more than a nominal statutory fee ($0-$15 depending on service).",
			"Sliding scale discounts apply up to at least 300% FPL.",
			"Prohibits hospitals from forcing property liens or home foreclosures for unpaid medical debt."
		]
	}
}, i = {
	$schema: "../schemas/charity-care-policy.schema.json",
	jurisdiction: {
		code: "WA",
		name: "Washington",
		type: "state"
	},
	metadata: {
		version: "2026.1",
		effectiveDate: "2026-01-01",
		lastAudited: "2026-09-01",
		statuteRef: "RCW 70.41.020 & RCW 70.41.030 (Charity Care Act / SHB 1616)",
		officialSourceUrl: "https://doh.wa.gov/data-and-statistical-reports/healthcare-data/hospital-reporting/hospital-charity-care"
	},
	mandates: {
		fullCharityFplThresholdPercent: 200,
		partialDiscountFplThresholdPercent: 400,
		minimumEcaNoticeDays: 240,
		assetExemptionRequired: !0,
		statutoryProtections: [
			"Washington Charity Care Act (SHB 1616) mandates 100% free care for families earning up to 200% of the Federal Poverty Level.",
			"Large health systems (Tier 1) must provide sliding scale discounts for families earning up to 400% FPL.",
			"Hospitals are strictly barred from considering a patient's primary residence or retirement assets when assessing charity care.",
			"Mandatory plain-language charity care notice must accompany all patient bills and discharge paperwork."
		]
	}
}, a = {
	version: "1.0.0",
	lastAudited: "2026-09-01",
	source: "U.S. Department of Health and Human Services (HHS) Annual Poverty Guidelines",
	statutoryBasis: "42 U.S.C. § 9902(2)",
	guidelines: [
		{
			year: 2024,
			effectiveDate: "2024-01-17",
			publicationReference: "89 FR 2961 (Jan. 17, 2024)",
			regions: {
				contiguous: {
					baseAmount: 15060,
					incrementPerPerson: 5380
				},
				alaska: {
					baseAmount: 18810,
					incrementPerPerson: 6730
				},
				hawaii: {
					baseAmount: 17310,
					incrementPerPerson: 6190
				}
			}
		},
		{
			year: 2025,
			effectiveDate: "2025-01-15",
			publicationReference: "90 FR 3728 (Jan. 15, 2025)",
			regions: {
				contiguous: {
					baseAmount: 15650,
					incrementPerPerson: 5580
				},
				alaska: {
					baseAmount: 19550,
					incrementPerPerson: 6980
				},
				hawaii: {
					baseAmount: 17990,
					incrementPerPerson: 6420
				}
			}
		},
		{
			year: 2026,
			effectiveDate: "2026-01-14",
			publicationReference: "Projected benchmark based on HHS statutory formula; verify against official Federal Register publication upon release",
			regions: {
				contiguous: {
					baseAmount: 16200,
					incrementPerPerson: 5780
				},
				alaska: {
					baseAmount: 20240,
					incrementPerPerson: 7230
				},
				hawaii: {
					baseAmount: 18630,
					incrementPerPerson: 6650
				}
			}
		}
	]
}, o = /*#__PURE__*/ JSON.parse("[{\"code\":\"99281\",\"category\":\"Emergency Room Visit\",\"description\":\"Emergency department visit, level 1 (minor/straightforward)\",\"nationalMedianCashPriceUSD\":120,\"medicareBaselineRateUSD\":24.50,\"commonUnbundlingRisk\":false},{\"code\":\"99282\",\"category\":\"Emergency Room Visit\",\"description\":\"Emergency department visit, level 2 (low-to-moderate severity)\",\"nationalMedianCashPriceUSD\":210,\"medicareBaselineRateUSD\":45.80,\"commonUnbundlingRisk\":false},{\"code\":\"99283\",\"category\":\"Emergency Room Visit\",\"description\":\"Emergency department visit, level 3 (moderate severity)\",\"nationalMedianCashPriceUSD\":450,\"medicareBaselineRateUSD\":75.30,\"commonUnbundlingRisk\":false},{\"code\":\"99284\",\"category\":\"Emergency Room Visit\",\"description\":\"Emergency department visit, level 4 (high severity, no immediate threat)\",\"nationalMedianCashPriceUSD\":850,\"medicareBaselineRateUSD\":138.20,\"commonUnbundlingRisk\":false},{\"code\":\"99285\",\"category\":\"Emergency Room Visit\",\"description\":\"Emergency department visit, level 5 (high severity, immediate threat)\",\"nationalMedianCashPriceUSD\":1450,\"medicareBaselineRateUSD\":204.60,\"commonUnbundlingRisk\":false},{\"code\":\"99202\",\"category\":\"Evaluation & Management\",\"description\":\"Office or outpatient visit for evaluation and management of new patient, 15-29 minutes\",\"nationalMedianCashPriceUSD\":95,\"medicareBaselineRateUSD\":74.20,\"commonUnbundlingRisk\":false},{\"code\":\"99203\",\"category\":\"Evaluation & Management\",\"description\":\"Office or outpatient visit for evaluation and management of new patient, 30-44 minutes\",\"nationalMedianCashPriceUSD\":165,\"medicareBaselineRateUSD\":114.50,\"commonUnbundlingRisk\":false},{\"code\":\"99204\",\"category\":\"Evaluation & Management\",\"description\":\"Office or outpatient visit for evaluation and management of new patient, 45-59 minutes\",\"nationalMedianCashPriceUSD\":260,\"medicareBaselineRateUSD\":170.80,\"commonUnbundlingRisk\":false},{\"code\":\"99205\",\"category\":\"Evaluation & Management\",\"description\":\"Office or outpatient visit for evaluation and management of new patient, 60-74 minutes\",\"nationalMedianCashPriceUSD\":360,\"medicareBaselineRateUSD\":225.40,\"commonUnbundlingRisk\":false},{\"code\":\"99213\",\"category\":\"Evaluation & Management\",\"description\":\"Office or outpatient visit for evaluation and management of established patient, 20-29 minutes\",\"nationalMedianCashPriceUSD\":125,\"medicareBaselineRateUSD\":92.30,\"commonUnbundlingRisk\":false},{\"code\":\"99214\",\"category\":\"Evaluation & Management\",\"description\":\"Office or outpatient visit for evaluation and management of established patient, 30-39 minutes\",\"nationalMedianCashPriceUSD\":190,\"medicareBaselineRateUSD\":131.20,\"commonUnbundlingRisk\":false},{\"code\":\"99215\",\"category\":\"Evaluation & Management\",\"description\":\"Office or outpatient visit for evaluation and management of established patient, 40-54 minutes\",\"nationalMedianCashPriceUSD\":275,\"medicareBaselineRateUSD\":183.60,\"commonUnbundlingRisk\":false},{\"code\":\"70450\",\"category\":\"Radiology / CT Scan\",\"description\":\"Computed tomography, head or brain; without contrast material\",\"nationalMedianCashPriceUSD\":420,\"medicareBaselineRateUSD\":98.40,\"commonUnbundlingRisk\":false},{\"code\":\"70491\",\"category\":\"Radiology / CT Scan\",\"description\":\"Computed tomography, neck; with contrast material(s)\",\"nationalMedianCashPriceUSD\":540,\"medicareBaselineRateUSD\":128.00,\"commonUnbundlingRisk\":false},{\"code\":\"71250\",\"category\":\"Radiology / CT Scan\",\"description\":\"Computed tomography, thorax; without contrast material\",\"nationalMedianCashPriceUSD\":510,\"medicareBaselineRateUSD\":112.50,\"commonUnbundlingRisk\":false},{\"code\":\"74177\",\"category\":\"Radiology / CT Scan\",\"description\":\"Computed tomography, abdomen and pelvis; with contrast material(s)\",\"nationalMedianCashPriceUSD\":780,\"medicareBaselineRateUSD\":198.50,\"commonUnbundlingRisk\":false},{\"code\":\"70551\",\"category\":\"Radiology / MRI\",\"description\":\"Magnetic resonance imaging, brain; without contrast material\",\"nationalMedianCashPriceUSD\":720,\"medicareBaselineRateUSD\":195.00,\"commonUnbundlingRisk\":false},{\"code\":\"72148\",\"category\":\"Radiology / MRI\",\"description\":\"Magnetic resonance imaging, lumbar spine; without contrast material\",\"nationalMedianCashPriceUSD\":690,\"medicareBaselineRateUSD\":190.00,\"commonUnbundlingRisk\":false},{\"code\":\"73721\",\"category\":\"Radiology / MRI\",\"description\":\"Magnetic resonance imaging, any joint of lower extremity; without contrast\",\"nationalMedianCashPriceUSD\":650,\"medicareBaselineRateUSD\":185.00,\"commonUnbundlingRisk\":false},{\"code\":\"71045\",\"category\":\"Radiology / X-Ray\",\"description\":\"Radiologic examination, chest; single view\",\"nationalMedianCashPriceUSD\":85,\"medicareBaselineRateUSD\":22.40,\"commonUnbundlingRisk\":false},{\"code\":\"71046\",\"category\":\"Radiology / X-Ray\",\"description\":\"Radiologic examination, chest; 2 views\",\"nationalMedianCashPriceUSD\":115,\"medicareBaselineRateUSD\":28.90,\"commonUnbundlingRisk\":false},{\"code\":\"76700\",\"category\":\"Radiology / Ultrasound\",\"description\":\"Ultrasound, abdominal, real time with image documentation; complete\",\"nationalMedianCashPriceUSD\":320,\"medicareBaselineRateUSD\":88.20,\"commonUnbundlingRisk\":false},{\"code\":\"76805\",\"category\":\"Radiology / Ultrasound\",\"description\":\"Ultrasound, pregnant uterus, real time with image documentation, fetal and maternal evaluation\",\"nationalMedianCashPriceUSD\":350,\"medicareBaselineRateUSD\":110.00,\"commonUnbundlingRisk\":false},{\"code\":\"76830\",\"category\":\"Radiology / Ultrasound\",\"description\":\"Ultrasound, transvaginal\",\"nationalMedianCashPriceUSD\":310,\"medicareBaselineRateUSD\":85.40,\"commonUnbundlingRisk\":false},{\"code\":\"77067\",\"category\":\"Radiology / Mammography\",\"description\":\"Screening mammography, bilateral (2-view study of each breast), including computer-aided detection\",\"nationalMedianCashPriceUSD\":240,\"medicareBaselineRateUSD\":142.50,\"commonUnbundlingRisk\":false},{\"code\":\"80048\",\"category\":\"Pathology & Laboratory\",\"description\":\"Basic metabolic panel (Calcium, Carbon dioxide, Chloride, Creatinine, Glucose, Potassium, Sodium, BUN)\",\"nationalMedianCashPriceUSD\":35,\"medicareBaselineRateUSD\":9.40,\"commonUnbundlingRisk\":true,\"unbundlingWarning\":\"Do not bill constituent electrolyte/glucose tests separately when BMP is performed\"},{\"code\":\"80053\",\"category\":\"Pathology & Laboratory\",\"description\":\"Comprehensive metabolic panel (14 clinical chemistry tests)\",\"nationalMedianCashPriceUSD\":45,\"medicareBaselineRateUSD\":11.20,\"commonUnbundlingRisk\":true,\"unbundlingWarning\":\"Do not bill individual tests (e.g. 82040 Albumin, 82247 Bilirubin) separately when CMP is performed\"},{\"code\":\"80061\",\"category\":\"Pathology & Laboratory\",\"description\":\"Lipid panel (Total cholesterol, HDL cholesterol, Triglycerides)\",\"nationalMedianCashPriceUSD\":40,\"medicareBaselineRateUSD\":14.50,\"commonUnbundlingRisk\":true,\"unbundlingWarning\":\"Constituent lipid tests (82465, 83718, 84478) are bundled within 80061\"},{\"code\":\"81001\",\"category\":\"Pathology & Laboratory\",\"description\":\"Urinalysis, automated, with microscopy\",\"nationalMedianCashPriceUSD\":20,\"medicareBaselineRateUSD\":3.80,\"commonUnbundlingRisk\":false},{\"code\":\"83036\",\"category\":\"Pathology & Laboratory\",\"description\":\"Hemoglobin; glycosylated (A1C)\",\"nationalMedianCashPriceUSD\":32,\"medicareBaselineRateUSD\":10.90,\"commonUnbundlingRisk\":false},{\"code\":\"84443\",\"category\":\"Pathology & Laboratory\",\"description\":\"Thyroid stimulating hormone (TSH)\",\"nationalMedianCashPriceUSD\":45,\"medicareBaselineRateUSD\":18.60,\"commonUnbundlingRisk\":false},{\"code\":\"85025\",\"category\":\"Pathology & Laboratory\",\"description\":\"Complete blood count (CBC) with automated differential\",\"nationalMedianCashPriceUSD\":30,\"medicareBaselineRateUSD\":8.75,\"commonUnbundlingRisk\":true,\"unbundlingWarning\":\"Constituent hematology tests (85004, 85048) are bundled within 85025\"},{\"code\":\"85610\",\"category\":\"Pathology & Laboratory\",\"description\":\"Prothrombin time (PT/INR)\",\"nationalMedianCashPriceUSD\":25,\"medicareBaselineRateUSD\":4.70,\"commonUnbundlingRisk\":false},{\"code\":\"87880\",\"category\":\"Pathology & Laboratory\",\"description\":\"Infectious agent antigen detection; Streptococcus, group A (rapid strep test)\",\"nationalMedianCashPriceUSD\":30,\"medicareBaselineRateUSD\":12.40,\"commonUnbundlingRisk\":false},{\"code\":\"93000\",\"category\":\"Cardiology & Pulmonary\",\"description\":\"Electrocardiogram, routine ECG with at least 12 leads; with interpretation and report\",\"nationalMedianCashPriceUSD\":75,\"medicareBaselineRateUSD\":15.80,\"commonUnbundlingRisk\":false},{\"code\":\"93306\",\"category\":\"Cardiology & Pulmonary\",\"description\":\"Echocardiography, transthoracic, real-time with image documentation, with Doppler echocardiography\",\"nationalMedianCashPriceUSD\":680,\"medicareBaselineRateUSD\":182.40,\"commonUnbundlingRisk\":false},{\"code\":\"94010\",\"category\":\"Cardiology & Pulmonary\",\"description\":\"Spirometry, including graphic record, total and timed vital capacity\",\"nationalMedianCashPriceUSD\":95,\"medicareBaselineRateUSD\":28.30,\"commonUnbundlingRisk\":false},{\"code\":\"95810\",\"category\":\"Cardiology & Pulmonary\",\"description\":\"Polysomnography; age 6 years or older, sleep staging with 4 or more additional parameters\",\"nationalMedianCashPriceUSD\":980,\"medicareBaselineRateUSD\":520.00,\"commonUnbundlingRisk\":false},{\"code\":\"43239\",\"category\":\"Gastroenterology / Surgery\",\"description\":\"Esophagogastroduodenoscopy (EGD), flexible, transoral; with biopsy, single or multiple\",\"nationalMedianCashPriceUSD\":1450,\"medicareBaselineRateUSD\":395.00,\"commonUnbundlingRisk\":false},{\"code\":\"45378\",\"category\":\"Gastroenterology / Surgery\",\"description\":\"Colonoscopy, flexible; diagnostic, with or without collection of specimen\",\"nationalMedianCashPriceUSD\":1350,\"medicareBaselineRateUSD\":360.00,\"commonUnbundlingRisk\":false},{\"code\":\"45380\",\"category\":\"Gastroenterology / Surgery\",\"description\":\"Colonoscopy, flexible; with biopsy, single or multiple\",\"nationalMedianCashPriceUSD\":1550,\"medicareBaselineRateUSD\":425.00,\"commonUnbundlingRisk\":false},{\"code\":\"47562\",\"category\":\"Surgery\",\"description\":\"Laparoscopy, surgical; cholecystectomy (gallbladder removal)\",\"nationalMedianCashPriceUSD\":4800,\"medicareBaselineRateUSD\":1650.00,\"commonUnbundlingRisk\":false},{\"code\":\"49505\",\"category\":\"Surgery\",\"description\":\"Repair initial inguinal hernia, age 5 years or older; reducible\",\"nationalMedianCashPriceUSD\":3600,\"medicareBaselineRateUSD\":980.00,\"commonUnbundlingRisk\":false},{\"code\":\"29881\",\"category\":\"Surgery / Orthopedics\",\"description\":\"Arthroscopy, knee, surgical; with meniscectomy (medial or lateral)\",\"nationalMedianCashPriceUSD\":3400,\"medicareBaselineRateUSD\":920.00,\"commonUnbundlingRisk\":false},{\"code\":\"27447\",\"category\":\"Surgery / Orthopedics\",\"description\":\"Arthroplasty, knee, condyle and plateau; medial and lateral compartments (total knee replacement)\",\"nationalMedianCashPriceUSD\":12500,\"medicareBaselineRateUSD\":4200.00,\"commonUnbundlingRisk\":false},{\"code\":\"27130\",\"category\":\"Surgery / Orthopedics\",\"description\":\"Arthroplasty, acetabular and proximal femoral prosthetic replacement (total hip replacement)\",\"nationalMedianCashPriceUSD\":13200,\"medicareBaselineRateUSD\":4450.00,\"commonUnbundlingRisk\":false},{\"code\":\"66984\",\"category\":\"Surgery / Ophthalmology\",\"description\":\"Extracapsular cataract removal with insertion of intraocular lens prosthesis (one stage)\",\"nationalMedianCashPriceUSD\":2200,\"medicareBaselineRateUSD\":680.00,\"commonUnbundlingRisk\":false},{\"code\":\"59400\",\"category\":\"Obstetrics & Delivery\",\"description\":\"Routine obstetric care including antepartum care, vaginal delivery, postpartum care\",\"nationalMedianCashPriceUSD\":3200,\"medicareBaselineRateUSD\":1820.00,\"commonUnbundlingRisk\":true,\"unbundlingWarning\":\"Global obstetric package includes antepartum visits, delivery, and postpartum care\"},{\"code\":\"59510\",\"category\":\"Obstetrics & Delivery\",\"description\":\"Routine obstetric care including antepartum care, cesarean delivery, and postpartum care\",\"nationalMedianCashPriceUSD\":4100,\"medicareBaselineRateUSD\":2180.00,\"commonUnbundlingRisk\":true,\"unbundlingWarning\":\"Global cesarean obstetric package includes antepartum visits, delivery, and postpartum care\"},{\"code\":\"97110\",\"category\":\"Therapy & Rehabilitation\",\"description\":\"Therapeutic procedure, 1 or more areas, each 15 minutes; therapeutic exercises\",\"nationalMedianCashPriceUSD\":65,\"medicareBaselineRateUSD\":26.80,\"commonUnbundlingRisk\":false},{\"code\":\"97140\",\"category\":\"Therapy & Rehabilitation\",\"description\":\"Manual therapy techniques (e.g. mobilization/manipulation), 1 or more regions, each 15 minutes\",\"nationalMedianCashPriceUSD\":60,\"medicareBaselineRateUSD\":24.20,\"commonUnbundlingRisk\":false}]"), s = [
	{
		id: "cleveland-clinic-main",
		legalName: "The Cleveland Clinic Foundation",
		displayName: "Cleveland Clinic (Main Campus)",
		ein: "34-0714585",
		npi: "1043256789",
		cmsCertificationNumber: "360180",
		state: "OH",
		isTaxExempt501c3: !0,
		dataVerificationStatus: "SAMPLE_POLICY_VERIFY_BILL",
		verificationNotes: "EIN verified via IRS Form 990 / TEOS. Policy brackets based on published Cleveland Clinic Financial Assistance Policy. NPI/CCN should be confirmed against patient's physical billing statement before mailing dispute letters.",
		fapTiers: [
			{
				tierId: "tier-100",
				name: "100% Charity Care Assistance",
				minFplPercent: 0,
				maxFplPercent: 250,
				discountPercent: 100,
				notes: "Full balance forgiveness for household income at or below 250% FPL"
			},
			{
				tierId: "tier-75",
				name: "Sliding Scale Tier 1",
				minFplPercent: 250,
				maxFplPercent: 300,
				discountPercent: 75,
				notes: "75% discount off gross charges or AGB equivalent"
			},
			{
				tierId: "tier-50",
				name: "Sliding Scale Tier 2",
				minFplPercent: 300,
				maxFplPercent: 400,
				discountPercent: 50,
				notes: "50% discount off gross charges or AGB equivalent"
			}
		],
		agbDiscountPercent: 67,
		fapApplicationWindowDays: 240,
		requiresAssetTest: !1,
		billingContact: {
			department: "Patient Financial Services / Financial Assistance Office",
			mailingAddressLine1: "9500 Euclid Avenue",
			mailingAddressLine2: "Mail Code P24",
			city: "Cleveland",
			state: "OH",
			zipCode: "44195",
			phoneNumber: "(866) 621-6385",
			fapWebpageUrl: "https://my.clevelandclinic.org/patients/billing-finance/financial-assistance"
		}
	},
	{
		id: "mayo-clinic-rochester",
		legalName: "Mayo Clinic Rochester",
		displayName: "Mayo Clinic (Rochester, MN)",
		ein: "41-6011702",
		npi: "1386629910",
		cmsCertificationNumber: "240010",
		state: "MN",
		isTaxExempt501c3: !0,
		dataVerificationStatus: "SAMPLE_POLICY_VERIFY_BILL",
		verificationNotes: "EIN verified via IRS Form 990 / TEOS. Policy brackets based on published Mayo Clinic Financial Assistance Policy. NPI/CCN should be confirmed against patient's physical billing statement before mailing dispute letters.",
		fapTiers: [
			{
				tierId: "tier-100",
				name: "Full Charity Care Forgiveness",
				minFplPercent: 0,
				maxFplPercent: 200,
				discountPercent: 100,
				notes: "100% balance adjustment for household income up to 200% FPL"
			},
			{
				tierId: "tier-80",
				name: "Sliding Scale Assistance (200-300% FPL)",
				minFplPercent: 200,
				maxFplPercent: 300,
				discountPercent: 80,
				notes: "80% reduction on allowable balance"
			},
			{
				tierId: "tier-60",
				name: "Sliding Scale Assistance (300-400% FPL)",
				minFplPercent: 300,
				maxFplPercent: 400,
				discountPercent: 60,
				notes: "60% reduction on allowable balance"
			}
		],
		agbDiscountPercent: 64,
		fapApplicationWindowDays: 240,
		requiresAssetTest: !0,
		assetExemptionLimitUSD: 1e4,
		billingContact: {
			department: "Mayo Clinic Patient Financial Services",
			mailingAddressLine1: "200 First Street SW",
			city: "Rochester",
			state: "MN",
			zipCode: "55905",
			phoneNumber: "(844) 217-9591",
			fapWebpageUrl: "https://www.mayoclinic.org/patient-visitor-guide/billing-insurance/financial-assistance"
		}
	},
	{
		id: "ascension-health-national",
		legalName: "Ascension Health",
		displayName: "Ascension Health System",
		ein: "38-3486381",
		npi: "1992765432",
		cmsCertificationNumber: "140182",
		state: "MO",
		isTaxExempt501c3: !0,
		dataVerificationStatus: "SAMPLE_POLICY_VERIFY_BILL",
		verificationNotes: "EIN verified via IRS Form 990 / TEOS. Policy brackets based on published Ascension Health Financial Assistance Policy. NPI/CCN should be confirmed against patient's physical billing statement before mailing dispute letters.",
		fapTiers: [{
			tierId: "tier-100",
			name: "100% Financial Assistance",
			minFplPercent: 0,
			maxFplPercent: 250,
			discountPercent: 100,
			notes: "100% reduction for income at or below 250% FPL"
		}, {
			tierId: "tier-70",
			name: "Partial Assistance Tier",
			minFplPercent: 250,
			maxFplPercent: 400,
			discountPercent: 70,
			notes: "70% reduction for income between 250% and 400% FPL"
		}],
		agbDiscountPercent: 70,
		fapApplicationWindowDays: 240,
		requiresAssetTest: !1,
		billingContact: {
			department: "Patient Financial Counseling Department",
			mailingAddressLine1: "4600 Edmundson Road",
			city: "St. Louis",
			state: "MO",
			zipCode: "63134",
			phoneNumber: "(888) 888-2723",
			fapWebpageUrl: "https://healthcare.ascension.org/billing/financial-assistance"
		}
	},
	{
		id: "kaiser-foundation-hospitals",
		legalName: "Kaiser Foundation Hospitals",
		displayName: "Kaiser Permanente (Northern & Southern CA)",
		ein: "94-1340523",
		npi: "1295748901",
		cmsCertificationNumber: "050512",
		state: "CA",
		isTaxExempt501c3: !0,
		dataVerificationStatus: "SAMPLE_POLICY_VERIFY_BILL",
		verificationNotes: "EIN verified via IRS Form 990 / TEOS. Policy brackets based on published Kaiser Permanente Financial Assistance Policy. NPI/CCN should be confirmed against patient's physical billing statement before mailing dispute letters.",
		fapTiers: [{
			tierId: "tier-100",
			name: "Medical Financial Assistance (MFA) 100%",
			minFplPercent: 0,
			maxFplPercent: 300,
			discountPercent: 100,
			notes: "100% forgiveness up to 300% FPL"
		}, {
			tierId: "tier-50",
			name: "Sliding Scale MFA",
			minFplPercent: 300,
			maxFplPercent: 400,
			discountPercent: 50,
			notes: "50% reduction for 300% - 400% FPL"
		}],
		agbDiscountPercent: 65,
		fapApplicationWindowDays: 240,
		requiresAssetTest: !1,
		billingContact: {
			department: "Medical Financial Assistance Program",
			mailingAddressLine1: "P.O. Box 7083",
			city: "Pasadena",
			state: "CA",
			zipCode: "91109",
			phoneNumber: "(800) 390-3506",
			fapWebpageUrl: "https://healthy.kaiserpermanente.org/support/pay-bills/financial-assistance"
		}
	}
], c = /* @__PURE__ */ e({
	CHARITY_CARE_POLICIES: () => p,
	FPL_GUIDELINES: () => g,
	SEED_HOSPITALS: () => b,
	SHOPPABLE_CODES_BENCHMARKS: () => v,
	caCharityCarePolicy: () => u,
	federalCharityCarePolicy: () => l,
	fplGuidelinesData: () => h,
	fplGuidelinesDataset: () => m,
	nyCharityCarePolicy: () => d,
	seedHospitalsData: () => y,
	shoppableCodesData: () => _,
	waCharityCarePolicy: () => f
}), l = t, u = n, d = r, f = i, p = {
	US: l,
	CA: u,
	NY: d,
	WA: f
}, m = a, h = a.guidelines, g = h, _ = o, v = _, y = s, b = y;
//#endregion
export { u as a, m as c, y as d, _ as f, v as i, c as l, g as n, l as o, f as p, b as r, h as s, p as t, d as u };

//# sourceMappingURL=healthcare-CDJO-bjN.js.map