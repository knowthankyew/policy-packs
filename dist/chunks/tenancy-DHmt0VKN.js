import { t as e } from "./rolldown-runtime-Dy4uBu1J.js";
var t = {
	jurisdiction: "FED",
	jurisdictionName: "Federal Baseline (United States)",
	statuteVersion: "2026.1",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://www.law.cornell.edu/uscode/text",
	rules: [
		{
			id: "FED-FHA-FAM-01",
			category: "General",
			name: "Fair Housing Act - Familial Status Discrimination",
			severity: "LikelyUnenforceable",
			statuteCitation: "42 U.S.C. § 3604(a)",
			statuteSummary: "The Fair Housing Act strictly prohibits discrimination based on familial status, including lease clauses banning children, restricting minors without safety justification, or imposing per-child penalty fees.",
			officialUrl: "https://www.law.cornell.edu/uscode/text/42/3604",
			triggerPatterns: ["(?:no\\s+children|adults\\s+only|children\\s+(?:not\\s+permitted|prohibited|not\\s+allowed))", "(?:extra\\s+fee|surcharge|additional\\s+rent)\\s+for\\s+(?:children|minors|each\\s+child)"],
			contraIndicatorPatterns: ["housing\\s+for\\s+older\\s+persons", "55\\s+and\\s+older"],
			disputeTemplate: "Under the federal Fair Housing Act (42 U.S.C. § 3604), residential leases cannot discriminate on the basis of familial status. The restriction regarding children or minors in this clause is void under federal law."
		},
		{
			id: "FED-FHA-DIS-02",
			category: "General",
			name: "Fair Housing Act - Assistance & Service Animals",
			severity: "LikelyUnenforceable",
			statuteCitation: "42 U.S.C. § 3604(f)(3)(B)",
			statuteSummary: "Landlords must make reasonable accommodations in rules or policies for individuals with disabilities, including permitting verified service and emotional support animals without charging pet rent or pet deposit fees.",
			officialUrl: "https://www.law.cornell.edu/uscode/text/42/3604",
			triggerPatterns: ["(?:no\\s+animals|no\\s+pets)\\s+(?:under\\s+any\\s+circumstances|strictly\\s+enforced|including\\s+service\\s+animals|including\\s+support\\s+animals)", "(?:service\\s+animals?|support\\s+animals?|assistance\\s+animals?)\\s+(?:must\\s+pay|subject\\s+to)\\s+(?:pet\\s+deposit|pet\\s+fee|pet\\s+rent)"],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under 42 U.S.C. § 3604(f)(3)(B) and federal HUD regulations, assistance and service animals are not pets and cannot be subjected to pet deposits, pet rent, or categorical no-pet bans."
		},
		{
			id: "FED-SCRA-MIL-03",
			category: "TerminationRenewal",
			name: "Servicemembers Civil Relief Act (SCRA) - Military Early Termination",
			severity: "LikelyUnenforceable",
			statuteCitation: "50 U.S.C. § 3955",
			statuteSummary: "Active-duty military personnel who receive deployment or permanent change of station (PCS) orders have the federal right to terminate a residential lease without liquidated damages or early termination penalties.",
			officialUrl: "https://www.law.cornell.edu/uscode/text/50/3955",
			triggerPatterns: [
				"(?:no\\s+exception|no\\s+early\\s+termination)\\s+for\\s+military",
				"waives?\\s+(?:all\\s+)?rights?\\s+under\\s+(?:the\\s+)?(?:scra|servicemembers\\s+civil\\s+relief\\s+act)",
				"(?:penalty|liquidated\\s+damages)\\s+applies\\s+(?:regardless\\s+of|even\\s+for)\\s+military\\s+deployment"
			],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under 50 U.S.C. § 3955 (Servicemembers Civil Relief Act), servicemembers have an unconditional federal right to terminate a residential lease upon receiving qualifying military orders without penalty."
		},
		{
			id: "FED-LEAD-DISC-04",
			category: "Disclosures",
			name: "Residential Lead-Based Paint Hazard Reduction Act",
			severity: "Watch",
			statuteCitation: "42 U.S.C. § 4852d",
			statuteSummary: "Federal law requires landlords renting residential housing built prior to 1978 to disclose known lead-based paint hazards and provide an EPA-approved information pamphlet before signing.",
			officialUrl: "https://www.law.cornell.edu/uscode/text/42/4852d",
			triggerPatterns: ["lead[\\s-]based\\s+paint", "housing\\s+built\\s+(?:prior\\s+to|before)\\s+1978"],
			contraIndicatorPatterns: ["lead\\s+hazard\\s+information\\s+pamphlet", "protect\\s+your\\s+family\\s+from\\s+lead"],
			disputeTemplate: "Under 42 U.S.C. § 4852d, if the property was constructed prior to 1978, the landlord must provide a lead disclosure statement and EPA disclosure pamphlet."
		}
	]
}, n = {
	jurisdiction: "CA",
	jurisdictionName: "California",
	statuteVersion: "2026.1",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://leginfo.legislature.ca.gov/faces/codes.xhtml",
	rules: [
		{
			id: "CA-SEC-DEP-CAP-01",
			category: "SecurityDeposit",
			name: "Security Deposit Maximum Cap (AB 12)",
			severity: "LikelyUnenforceable",
			statuteCitation: "Cal. Civ. Code § 1950.5(c)",
			statuteSummary: "Effective July 1, 2024 (AB 12), a landlord may not demand or receive security, however denominated, in an amount or value in excess of an amount equal to one month's rent (with narrow small-landlord exception allowing up to two months).",
			officialUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1950.5.&lawCode=CIV",
			triggerPatterns: [
				"(?:two|three|four|[2-9])\\s+months?(?:['’\\s]*)?rent[^.\\n]{0,80}(?:as|for)?\\s*(?:a\\s+)?(?:security\\s+)?deposit",
				"(?:security\\s+deposit|deposit)[^.\\n]{0,100}(?:two|three|four|[2-9])\\s+months?(?:['’\\s]*)?rent",
				"deposit\\s+(?:shall|must|is)\\s+equal\\s+to\\s+(?:two|three|four|[2-9])\\s+months"
			],
			contraIndicatorPatterns: ["not\\s+exceed\\s+one\\s+month", "equal\\s+to\\s+one\\s+month"],
			disputeTemplate: "Under Cal. Civ. Code § 1950.5(c) (as amended by AB 12), security deposits in California are capped at one month's rent. The demand for a deposit exceeding one month's rent is unlawful."
		},
		{
			id: "CA-SEC-DEP-RET-02",
			category: "SecurityDeposit",
			name: "Security Deposit Return Timeline (21 Days)",
			severity: "LikelyUnenforceable",
			statuteCitation: "Cal. Civ. Code § 1950.5(g)",
			statuteSummary: "No later than 21 calendar days after tenant has vacated the premises, the landlord must furnish an itemized statement of deductions and return any remaining portion of the deposit. Any clause extending this timeframe beyond 21 days is void.",
			officialUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1950.5.&lawCode=CIV",
			triggerPatterns: [
				"(?:thirty|forty-five|sixty|ninety|[3-9]\\d|\\d{3})\\s*(?:\\([0-9]+\\)\\s*)?(?:calendar\\s*)?days[^.\\n]{0,80}(?:return|refund|surrender|inspect|deduct)",
				"(?:within\\s+)?(?:thirty|forty-five|sixty|ninety|[3-9]\\d|\\d{3})\\s*(?:\\([0-9]+\\)\\s*)?(?:calendar\\s*)?days[^.\\n]{0,80}(?:to\\s+)?(?:return|refund|itemiz\\w+|send|furnish)[^.\\n]{0,40}(?:deposit|statement|balance)",
				"(?:deposit|refund|itemiz\\w+)[^.\\n]{0,80}(?:within\\s+)?(?:thirty|forty-five|sixty|ninety|[3-9]\\d|\\d{3})\\s*(?:\\([0-9]+\\)\\s*)?(?:calendar\\s*)?days"
			],
			contraIndicatorPatterns: ["21\\s+days", "twenty-one\\s+days"],
			disputeTemplate: "Under Cal. Civ. Code § 1950.5(g), landlords must return unused security deposits and itemized receipts within 21 calendar days. Clauses purporting to give 30, 45, or 60 days are contrary to California law."
		},
		{
			id: "CA-ENTRY-NOT-03",
			category: "EntryNotice",
			name: "Landlord Notice of Entry (24 Hours Written Notice)",
			severity: "LikelyUnenforceable",
			statuteCitation: "Cal. Civ. Code § 1954",
			statuteSummary: "Landlords may enter only in specific statutory circumstances (emergencies, necessary repairs, showings) and must provide at least 24 hours reasonable written notice during normal business hours. Clauses claiming entry at any time without notice are void.",
			officialUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1954.&lawCode=CIV",
			triggerPatterns: ["(?:enter|access|entry)[^.\\n]{0,80}(?:at\\s+any\\s+time|at\\s+any\\s+hour|without\\s+prior|without\\s+notice)", "waives?\\s+(?:any\\s+)?notice\\s+(?:prior\\s+to|of)\\s+entry"],
			contraIndicatorPatterns: ["except\\s+in\\s+(?:case\\s+of\\s+)?emergency", "24\\s+hours?\\s+written\\s+notice"],
			disputeTemplate: "Under Cal. Civ. Code § 1954, a landlord must provide at least 24 hours advance written notice before entering the dwelling, during normal business hours, except in case of true emergency."
		},
		{
			id: "CA-EVICT-SLF-04",
			category: "EvictionLockout",
			name: "Prohibition of Self-Help Evictions and Lockouts",
			severity: "LikelyUnenforceable",
			statuteCitation: "Cal. Civ. Code § 789.3",
			statuteSummary: "Landlords are strictly prohibited from changing locks, blocking tenant entry, terminating utility services, or removing tenant property without judicial process. Violations incur statutory damages up to $100 per day plus actual damages.",
			officialUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=789.3.&lawCode=CIV",
			triggerPatterns: ["(?:change\\s+(?:door\\s+)?locks|pad-?lock|terminate\\s+utilit\\w+|shut\\s+off\\s+utilit\\w+|cut\\s+off\\s+water|cut\\s+off\\s+power|remove\\s+(?:and\\s+dispose|tenant's?\\s+personal\\s+property|belongings)|re-enter\\s+premises)[^.\\n]{0,100}(?:without\\s+(?:court|judicial|legal)|self-help|immediately)", "re-enter\\s+and\\s+take\\s+possession\\s+without\\s+(?:legal\\s+process|court\\s+order|judicial)"],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under Cal. Civ. Code § 789.3, self-help evictions, lockouts, utility terminations, and warrantless seizures of tenant belongings are strictly unlawful and subject to severe civil statutory penalties."
		},
		{
			id: "CA-HABIT-REP-05",
			category: "HabitabilityRepairs",
			name: "Implied Warranty of Habitability (Non-Waivable)",
			severity: "LikelyUnenforceable",
			statuteCitation: "Cal. Civ. Code § 1941.1 & § 1942.1",
			statuteSummary: "Landlords have a non-waivable duty to provide tenantable housing including effective weatherproofing, plumbing, heating, gas/electric, clean grounds, and trash receptacles. Any lease provision waiving habitability or forcing 'as-is' is void as against public policy.",
			officialUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1941.1.&lawCode=CIV",
			triggerPatterns: [
				"waives?\\s+(?:all\\s+)?(?:implied\\s+)?warrant(?:y|ies)\\s+of\\s+habitability",
				"(?:strictly\\s+)?\"?as-is\"?\\s+condition[^.\\n]{0,100}(?:tenant\\s+waives|tenant\\s+responsible\\s+for\\s+all)",
				"tenant\\s+(?:shall|agrees\\s+to)\\s+be\\s+solely\\s+responsible\\s+for\\s+all\\s+(?:repairs|maintenance|roof|plumbing)"
			],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under Cal. Civ. Code § 1941.1 and § 1942.1, the implied warranty of habitability is non-waivable. Any lease provision transferring landlord structural maintenance duties or waiving habitability is void."
		},
		{
			id: "CA-LATE-FEE-06",
			category: "LateFees",
			name: "Liquidated Damages / Late Fee Reasonableness",
			severity: "Watch",
			statuteCitation: "Cal. Civ. Code § 1671(d)",
			statuteSummary: "In residential leases, late fees are governed by liquidated damages rules and must represent a reasonable endeavor to estimate actual damages caused by late payment. Excessive or escalating per-day penalty fees are routinely struck down by courts.",
			officialUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1671.&lawCode=CIV",
			triggerPatterns: ["(?:late\\s+fee|late\\s+charge)[^.\\n]{0,60}(?:\\$(?:[1-9]\\d{2,}|[2-9]\\d\\d)|(?:1[5-9]|[2-9]\\d)%)", "(?:\\$\\d+\\s+per\\s+day|daily\\s+late\\s+fee|calendar\\s+day\\s+rent\\s+remains)"],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under Cal. Civ. Code § 1671, late fees in California residential leases must reflect a reasonable pre-estimate of landlord administrative costs rather than an illegal punitive forfeiture."
		}
	]
}, r = {
	jurisdiction: "NY",
	jurisdictionName: "New York",
	statuteVersion: "2026.1",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://www.nysenate.gov/legislation/laws",
	rules: [
		{
			id: "NY-SEC-DEP-CAP-01",
			category: "SecurityDeposit",
			name: "Security Deposit 1-Month Cap",
			severity: "LikelyUnenforceable",
			statuteCitation: "N.Y. Gen. Oblig. Law § 7-108(1-a)(a)",
			statuteSummary: "Under the Housing Stability and Tenant Protection Act (HSTPA), no deposit or advance may exceed the amount of one month's rent. Demanding two months' deposit or first, last, and deposit upfront is strictly illegal.",
			officialUrl: "https://www.nysenate.gov/legislation/laws/GOB/7-108",
			triggerPatterns: [
				"(?:two|three|[2-9])\\s+months?(?:['’\\s]*)?rent",
				"(?:security\\s+deposit|deposit)[^.\\n]{0,100}(?:two|three|[2-9])\\s+months?",
				"(?:first|last)\\s+month(?:'s)?\\s+rent\\s+and\\s+security\\s+deposit\\s+(?:plus|and)\\s+advance"
			],
			contraIndicatorPatterns: ["not\\s+to\\s+exceed\\s+one\\s+month"],
			disputeTemplate: "Under N.Y. General Obligations Law § 7-108(1-a)(a), landlords in New York may not request or receive a deposit or advance exceeding one month's rent. Any excess security deposit demand is illegal."
		},
		{
			id: "NY-SEC-DEP-RET-02",
			category: "SecurityDeposit",
			name: "Security Deposit Return Timeline (14 Days)",
			severity: "LikelyUnenforceable",
			statuteCitation: "N.Y. Gen. Oblig. Law § 7-108(1-a)(e)",
			statuteSummary: "Within fourteen days after tenant has vacated, landlord shall provide an itemized statement indicating basis for deductions and return remaining deposit. If landlord fails to provide statement within 14 days, landlord forfeits any right to retain any portion.",
			officialUrl: "https://www.nysenate.gov/legislation/laws/GOB/7-108",
			triggerPatterns: [
				"(?:thirty|forty-five|sixty|[2-9]\\d|\\d{3})\\s*(?:\\([0-9]+\\)\\s*)?days[^.\\n]{0,80}(?:return|refund|vacat)",
				"(?:within\\s+)?(?:thirty|forty-five|sixty|[2-9]\\d|\\d{3})\\s*(?:\\([0-9]+\\)\\s*)?days[^.\\n]{0,80}(?:to\\s+)?(?:return|refund|itemiz\\w+|send|furnish)[^.\\n]{0,40}(?:deposit|statement|receipt)",
				"(?:deposit|refund|itemiz\\w+)[^.\\n]{0,80}(?:within\\s+)?(?:thirty|forty-five|sixty|[2-9]\\d|\\d{3})\\s*(?:\\([0-9]+\\)\\s*)?days"
			],
			contraIndicatorPatterns: ["14\\s+days", "fourteen\\s+days"],
			disputeTemplate: "Under N.Y. General Obligations Law § 7-108(1-a)(e), landlords must provide an itemized statement and refund deposits within 14 days. Failure to do so forfeits all deduction rights."
		},
		{
			id: "NY-ENTRY-NOT-06",
			category: "EntryNotice",
			name: "Landlord Reasonable Notice of Entry",
			severity: "LikelyUnenforceable",
			statuteCitation: "N.Y. Real Prop. Law § 235-b / NYC Admin. Code § 27-2008 / Quiet Enjoyment",
			statuteSummary: "Under New York common law covenant of quiet enjoyment, RPL § 235-b, NYC Administrative Code § 27-2008, and Attorney General guidelines, landlords must provide reasonable advance written notice (typically 24 hours for inspections, 1 week for repairs) during reasonable business hours. Entering without notice violates tenant rights.",
			officialUrl: "https://ag.ny.gov/resources/individuals/tenants-rights",
			triggerPatterns: ["(?:enter|access|entry)[^.\\n]{0,80}(?:at\\s+any\\s+(?:time|hour)|without\\s+notice|no\\s+notice)"],
			contraIndicatorPatterns: ["emergency"],
			disputeTemplate: "Under New York law and Tenant Protection guidelines, landlords must provide reasonable advance notice prior to entering for inspections or repairs. Demands to enter at any hour without notice violate the covenant of quiet enjoyment."
		},
		{
			id: "NY-LATE-FEE-03",
			category: "LateFees",
			name: "Statutory Late Fee Cap ($50 or 5%) & 5-Day Grace Period",
			severity: "LikelyUnenforceable",
			statuteCitation: "N.Y. Real Prop. Law § 238-a(2)",
			statuteSummary: "No late fee may be charged unless rent is late by at least five days, and the fee cannot exceed fifty dollars or five percent of the monthly rent, whichever is less.",
			officialUrl: "https://www.nysenate.gov/legislation/laws/RPP/238-A",
			triggerPatterns: ["(?:late\\s+fee|late\\s+charge)[^.\\n]{0,60}(?:(?:[6-9]|[1-9]\\d)%|\\$(?:[6-9]\\d|\\d{3,}))", "(?:if\\s+rent\\s+is\\s+not\\s+paid|delinquent)[^.\\n]{0,60}(?:by\\s+the\\s+(?:1st|2nd|3rd|4th)|prior\\s+to\\s+the\\s+5th)"],
			contraIndicatorPatterns: ["lesser\\s+of\\s+\\$50\\s+or\\s+5%", "5%\\s+or\\s+\\$50,\\s+whichever\\s+is\\s+less"],
			disputeTemplate: "Under N.Y. Real Property Law § 238-a(2), late fees cannot exceed $50 or 5% of monthly rent (whichever is less) and can only be assessed after a mandatory 5-day grace period."
		},
		{
			id: "NY-EVICT-SLF-04",
			category: "EvictionLockout",
			name: "Unlawful Eviction Criminalization (Self-Help Prohibition)",
			severity: "LikelyUnenforceable",
			statuteCitation: "N.Y. Real Prop. Law § 768",
			statuteSummary: "Self-help evictions, changing locks, padlock installations, or shutting off utilities without court order are Class A misdemeanors under New York State law carrying criminal and civil penalties from $1,000 to $10,000 per violation.",
			officialUrl: "https://www.nysenate.gov/legislation/laws/RPP/768",
			triggerPatterns: ["(?:pad-?lock|change\\s+(?:door\\s+)?locks|re-enter|turn\\s+off\\s+heat|turn\\s+off\\s+water|cut\\s+off\\s+power|remove\\s+tenant)[^.\\n]{0,80}(?:without\\s+(?:court|legal)|self-help|immediately)", "waives?\\s+(?:any\\s+)?notice\\s+(?:of\\s+eviction|before\\s+lockout)"],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under N.Y. Real Property Law § 768, any self-help eviction or non-judicial lockout is an illegal Class A misdemeanor subjecting the landlord to civil damages of up to $10,000."
		},
		{
			id: "NY-HABIT-WAR-05",
			category: "HabitabilityRepairs",
			name: "Statutory Warranty of Habitability (Non-Waivable)",
			severity: "LikelyUnenforceable",
			statuteCitation: "N.Y. Real Prop. Law § 235-b",
			statuteSummary: "Every written or oral lease contains a covenant and warranty that premises are fit for human habitation. Any lease agreement waiving or modifying this warranty is void as contrary to public policy.",
			officialUrl: "https://www.nysenate.gov/legislation/laws/RPP/235-B",
			triggerPatterns: [
				"waives?\\s+(?:any\\s+claim\\s+regarding\\s+)?warrant(?:y|ies)\\s+of\\s+habitability",
				"tenant\\s+waives\\s+section\\s+235-b",
				"tenant\\s+accepts\\s+premises\\s+as-is\\s+and\\s+assumes\\s+all\\s+structural\\s+repairs"
			],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under N.Y. Real Property Law § 235-b, the warranty of habitability is non-waivable. Any clause forcing the tenant to waive habitability or take on structural landlord repairs is void."
		},
		{
			id: "NY-OCCUP-ROOM-07",
			category: "General",
			name: "Roommate Law / Unlawful Restrictions on Occupancy",
			severity: "LikelyUnenforceable",
			statuteCitation: "N.Y. Real Prop. Law § 235-f",
			statuteSummary: "Under N.Y. Real Property Law § 235-f (the 'Roommate Law'), it is unlawful for a landlord to restrict occupancy of an apartment solely to the named tenant. A tenant has the non-waivable right to live with immediate family and one additional occupant (roommate) plus dependent children. Any lease clause waiving or restricting these occupancy rights is void as against public policy.",
			officialUrl: "https://www.nysenate.gov/legislation/laws/RPP/235-F",
			triggerPatterns: [
				"(?:no\\s+roommates?|no\\s+additional\\s+occupants?|occupancy\\s+(?:shall\\s+be\\s+)?strictly\\s+limited\\s+to\\s+(?:named|the)\\s+tenant)",
				"(?:waives?\\s+(?:all\\s+)?rights?\\s+under\\s+(?:section\\s+)?235-f|prohibits?\\s+roommates?)",
				"(?:unauthorized\\s+occupant|guest\\s+policy)[^.\\n]{0,80}(?:no\\s+other\\s+persons?|immediate\\s+default\\s+if\\s+anyone\\s+else\\s+resides)"
			],
			contraIndicatorPatterns: ["overcrowding", "legal\\s+occupancy\\s+limit"],
			disputeTemplate: "Under N.Y. Real Property Law § 235-f (the Roommate Law), tenants have the non-waivable right to share the premises with immediate family and an additional occupant. Lease restrictions prohibiting roommates are void under New York law."
		}
	]
}, i = {
	jurisdiction: "TX",
	jurisdictionName: "Texas",
	statuteVersion: "2026.1",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://statutes.capitol.texas.gov/",
	rules: [
		{
			id: "TX-SEC-DEP-RET-01",
			category: "SecurityDeposit",
			name: "Security Deposit 30-Day Return & Accounting",
			severity: "LikelyUnenforceable",
			statuteCitation: "Tex. Prop. Code § 92.103",
			statuteSummary: "The landlord shall refund a security deposit to the tenant on or before the 30th day after the date the tenant surrenders the premises, conditioned on tenant providing a forwarding address. Any clause providing longer is void.",
			officialUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.103",
			triggerPatterns: ["(?:deposit|security)[^.\\n]{0,60}(?:forty-five|sixty|ninety|[4-9]\\d|\\d{3})\\s*days\\s+(?:to\\s+return|to\\s+refund|after\\s+surrender)", "within\\s+(?:forty-five|sixty|ninety|[4-9]\\d)\\s*days[^.\\n]{0,50}(?:return|refund)\\s+(?:the\\s+)?deposit"],
			contraIndicatorPatterns: ["30\\s+days", "thirty\\s+days"],
			disputeTemplate: "Under Tex. Prop. Code § 92.103, landlords must refund the security deposit and furnish an itemized accounting within 30 days of surrender."
		},
		{
			id: "TX-LATE-FEE-02",
			category: "LateFees",
			name: "Late Fee Mandatory 2-Day Grace Period & Statutory Caps",
			severity: "LikelyUnenforceable",
			statuteCitation: "Tex. Prop. Code § 92.019",
			statuteSummary: "A landlord may not charge a late fee unless rent has remained unpaid for at least two full days after the due date. In addition, the fee cannot exceed 12% of the monthly rent for 4 units or less, or 10% for structures with 5+ units (unless higher actual damages are proven).",
			officialUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.019",
			triggerPatterns: ["(?:late\\s+fee|late\\s+charge)[^.\\n]{0,60}(?:on\\s+the\\s+(?:2nd|first|1st)\\s+day|immediate\\s+penalty)", "(?:late\\s+fee|late\\s+charge)[^.\\n]{0,60}(?:(?:1[3-9]|[2-9]\\d)%|\\$(?:[2-9]\\d\\d|\\d{4,}))"],
			contraIndicatorPatterns: ["two\\s+full\\s+days", "2\\s+days\\s+grace\\s+period"],
			disputeTemplate: "Under Tex. Prop. Code § 92.019, late fees cannot be assessed until rent is at least two full days overdue, and are legally capped at 10% to 12% of the monthly rent."
		},
		{
			id: "TX-LOCKOUT-SLF-03",
			category: "EvictionLockout",
			name: "Prohibition of Unlawful Lockouts and Exclusion",
			severity: "LikelyUnenforceable",
			statuteCitation: "Tex. Prop. Code § 92.0081",
			statuteSummary: "Landlords are prohibited from intentionally preventing a tenant from entering the leased premises except by judicial eviction process (with extremely limited, hyper-strict key replacement procedures). Lockouts without statutory 24-hour key availability incur civil penalties.",
			officialUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.0081",
			triggerPatterns: [
				"(?:immediate(?:ly)?\\s+)?(?:lockout|change\\s+(?:door\\s+)?locks|pad-?lock|prevent\\s+entry)",
				"(?:lockout|change\\s+(?:door\\s+)?locks|pad-?lock|prevent\\s+entry)[^.\\n]{0,60}(?:without\\s+notice|without\\s+providing\\s+key|immediate(?:ly)?|without\\s+court|self-help)",
				"tenant\\s+waives\\s+(?:all\\s+)?rights\\s+under\\s+(?:section\\s+)?92\\.0081"
			],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under Tex. Prop. Code § 92.0081, landlord self-help exclusions and lockouts are unlawful. A tenant excluded unlawfully may recover possession and statutory penalties of one month's rent plus $1,000."
		},
		{
			id: "TX-UTIL-SHUT-04",
			category: "EvictionLockout",
			name: "Prohibition of Utility Interruption",
			severity: "LikelyUnenforceable",
			statuteCitation: "Tex. Prop. Code § 92.008",
			statuteSummary: "A landlord or landlord's agent may not interrupt or cause the interruption of utility service paid directly to the utility company, or submetered electrical or water services, to force payment of rent.",
			officialUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.008",
			triggerPatterns: ["(?:cut\\s+off|shut\\s+off|disconnect|terminate|interrupt)\\s+(?:[^.\\n]{0,30})?(?:water|electricity|gas|power|utilit\\w+)"],
			contraIndicatorPatterns: ["emergency", "bona\\s+fide\\s+repairs"],
			disputeTemplate: "Under Tex. Prop. Code § 92.008, terminating or interrupting utilities for rent delinquency is strictly prohibited under Texas law."
		},
		{
			id: "TX-HABIT-REP-05",
			category: "HabitabilityRepairs",
			name: "Landlord Duty to Repair / Non-Waivable Habitability",
			severity: "LikelyUnenforceable",
			statuteCitation: "Tex. Prop. Code § 92.052, § 92.056 & § 92.006",
			statuteSummary: "Under Tex. Prop. Code § 92.052 and § 92.056, a landlord has a statutory duty to make a diligent effort to repair or remedy any condition that materially affects the physical health or safety of an ordinary tenant. Under Tex. Prop. Code § 92.006(c), this duty cannot be waived by lease agreement, and any lease provision forcing the tenant to accept premises as-is or assume all landlord repair duties is void.",
			officialUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.056",
			triggerPatterns: [
				"waives?\\s+(?:all\\s+)?(?:landlord\\s+)?duty\\s+to\\s+repair",
				"tenant\\s+(?:accepts|takes)\\s+premises\\s+(?:in\\s+)?(?:\"?as-is\"?|as\\s+is)[^.\\n]{0,80}(?:waives\\s+repairs|responsible\\s+for\\s+all\\s+repairs)",
				"tenant\\s+(?:agrees\\s+to\\s+pay|responsible\\s+for)\\s+all\\s+(?:structural\\s+)?repairs\\s+regardless\\s+of\\s+cause",
				"tenant\\s+waives\\s+(?:all\\s+)?rights\\s+under\\s+(?:subchapter\\s+b|section\\s+92\\.056)"
			],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under Tex. Prop. Code § 92.006 and § 92.056, a landlord's duty to repair conditions affecting tenant physical health and safety cannot be waived. Clauses transferring structural repair duties or waiving landlord obligations are void under Texas law."
		}
	]
}, a = {
	jurisdiction: "FL",
	jurisdictionName: "Florida",
	statuteVersion: "2026.1",
	lastAudited: "2026-09-01",
	officialSourceUrl: "http://www.leg.state.fl.us/statutes/",
	rules: [
		{
			id: "FL-SEC-DEP-RET-01",
			category: "SecurityDeposit",
			name: "Security Deposit Return (15 Days / 30 Days Claim)",
			severity: "LikelyUnenforceable",
			statuteCitation: "Fla. Stat. § 83.49(3)(a)",
			statuteSummary: "Landlord has 15 days to return the deposit together with interest if not imposing a claim. If imposing a claim for damages, landlord has 30 days to give written certified notice of intention. Landlords who fail to send notice forfeit the right to impose a claim.",
			officialUrl: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0000-0099/0083/Sections/0083.49.html",
			triggerPatterns: ["(?:deposit|security)[^.\\n]{0,60}(?:forty-five|sixty|ninety|[4-9]\\d|\\d{3})\\s*days\\s+(?:to\\s+return|to\\s+refund|to\\s+claim)", "within\\s+(?:forty-five|sixty|ninety|[4-9]\\d)\\s*days[^.\\n]{0,50}(?:return|refund)\\s+(?:the\\s+)?deposit"],
			contraIndicatorPatterns: ["15\\s+days", "30\\s+days"],
			disputeTemplate: "Under Fla. Stat. § 83.49(3)(a), a landlord has 15 days to return the deposit if no claim is made, or 30 days to provide certified written notice of specific itemized deductions. Longer timeframes in the lease are void."
		},
		{
			id: "FL-ENTRY-NOT-02",
			category: "EntryNotice",
			name: "Notice of Entry for Repairs (24 Hours Notice - Miya's Law)",
			severity: "LikelyUnenforceable",
			statuteCitation: "Fla. Stat. § 83.53(2)",
			statuteSummary: "Under Fla. Stat. § 83.53(2), as amended by Miya's Law (SB 898), reasonable notice for entry for repairs is statutorily defined as at least 24 hours prior notice (between 7:30 a.m. and 8:00 p.m.). The landlord may enter at any time without notice only in an emergency. Lease provisions providing less than 24 hours notice or waiving notice are legally non-compliant.",
			officialUrl: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0000-0099/0083/Sections/0083.53.html",
			triggerPatterns: [
				"(?:enter|access|inspection)[^.\\n]{0,60}(?:at\\s+any\\s+time\\s+without\\s+notice|without\\s+prior\\s+notice|no\\s+notice\\s+required)",
				"tenant\\s+waives?\\s+(?:any\\s+)?notice\\s+(?:prior\\s+to|of)\\s+entry",
				"(?:enter|access|repairs?)[^.\\n]{0,60}(?:(?:12|twelve|6|six|four|2|two)\\s+hours?\\s+notice|less\\s+than\\s+24\\s+hours)"
			],
			contraIndicatorPatterns: ["24\\s+hours", "twenty-four\\s+hours"],
			disputeTemplate: "Under Fla. Stat. § 83.53(2) (as amended by Miya's Law, SB 898), reasonable notice for entry to perform repairs is mandatory at least 24 hours prior to entry between 7:30 a.m. and 8:00 p.m. Provisions demanding entry with 12 hours or less, or waiving notice, violate Florida law."
		},
		{
			id: "FL-PROHIB-PRAC-03",
			category: "EvictionLockout",
			name: "Prohibited Practices (Self-Help Eviction & Utility Shutoff)",
			severity: "LikelyUnenforceable",
			statuteCitation: "Fla. Stat. § 83.67",
			statuteSummary: "A landlord of any dwelling unit shall not cause the termination or interruption of any utility service, prevent tenant from gaining reasonable access by changing locks, or remove outside doors or tenant personal property. Violators are liable for actual damages or 3 months' rent, whichever is greater.",
			officialUrl: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0000-0099/0083/Sections/0083.67.html",
			triggerPatterns: ["(?:terminate|interrupt|cut\\s+off)\\s+(?:utilities|water|electricity|gas)", "(?:change\\s+locks|padlock|remove\\s+outside\\s+doors|remove\\s+tenant\\s+property)[^.\\n]{0,60}(?:without\\s+court|immediate\\s+possession)"],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under Fla. Stat. § 83.67, self-help evictions, changing locks, and cutting off utilities are prohibited practices carrying statutory damages of three months' rent plus attorney's fees."
		},
		{
			id: "FL-HABIT-REP-04",
			category: "HabitabilityRepairs",
			name: "Landlord Duty to Maintain Premises (Non-Waivable Habitability)",
			severity: "LikelyUnenforceable",
			statuteCitation: "Fla. Stat. § 83.51 & § 83.47",
			statuteSummary: "Under Fla. Stat. § 83.51, the landlord shall at all times during the tenancy comply with the requirements of applicable building, housing, and health codes, maintaining roofs, windows, doors, floors, steps, and plumbing in reasonable repair. Under Fla. Stat. § 83.47, any provision in a rental agreement that purports to waive or preclude tenant rights or remedies under Chapter 83 is void and unenforceable.",
			officialUrl: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0000-0099/0083/Sections/0083.51.html",
			triggerPatterns: [
				"waives?\\s+(?:all\\s+)?(?:landlord\\s+)?maintenance\\s+and\\s+repair",
				"tenant\\s+(?:accepts|takes)\\s+premises\\s+(?:in\\s+)?\"?as-is\"?[^.\\n]{0,80}(?:waives|responsible\\s+for\\s+all\\s+repairs)",
				"tenant\\s+(?:shall|agrees\\s+to)\\s+maintain\\s+roof|foundation|structural",
				"waives?\\s+(?:any\\s+)?rights?\\s+under\\s+(?:section\\s+)?83\\.51"
			],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under Fla. Stat. § 83.51 and § 83.47, landlord duties to maintain the premises in compliance with applicable building, housing, and health codes cannot be waived by lease terms. Clauses transferring structural maintenance duties or waiving habitability are void under Florida law."
		}
	]
}, o = {
	jurisdiction: "IL",
	jurisdictionName: "Illinois",
	statuteVersion: "2026.1",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
	rules: [
		{
			id: "IL-SEC-DEP-RET-01",
			category: "SecurityDeposit",
			name: "Security Deposit Return Act (30-Day Itemization / 45-Day Return)",
			severity: "LikelyUnenforceable",
			statuteCitation: "765 ILCS 710/1",
			statuteSummary: "For residential rental units in properties containing 5 or more units, a lessor who withholds any deposit for damage must deliver an itemized statement within 30 days of surrender, and must return the balance within 45 days. If no damage is claimed, full deposit must be returned within 45 days.",
			officialUrl: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=076507100K1",
			triggerPatterns: ["(?:deposit|security)[^.\\n]{0,60}(?:sixty|ninety|[6-9]\\d|\\d{3})\\s*days\\s+(?:to\\s+return|to\\s+refund|after\\s+surrender)", "within\\s+(?:sixty|ninety|[6-9]\\d)\\s*days[^.\\n]{0,50}(?:return|refund)\\s+(?:the\\s+)?deposit"],
			contraIndicatorPatterns: ["30\\s+days", "45\\s+days"],
			disputeTemplate: "Under 765 ILCS 710/1 (Security Deposit Return Act), landlords in buildings with 5+ units must deliver an itemized statement within 30 days and return the deposit within 45 days. Longer lease provisions are unenforceable."
		},
		{
			id: "IL-EVICT-SLF-02",
			category: "EvictionLockout",
			name: "Forcible Entry and Detainer Act (Self-Help Prohibition)",
			severity: "LikelyUnenforceable",
			statuteCitation: "735 ILCS 5/9-101 et seq.",
			statuteSummary: "No person shall make an entry into lands or tenements except in cases where entry is allowed by law, and in such cases, only in a peaceable manner. Lockouts, taking possession by force, or self-help evictions outside court orders are strictly illegal.",
			officialUrl: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073500050K9-101",
			triggerPatterns: ["(?:lockout|change\\s+locks|repossess\\s+premises|padlock)[^.\\n]{0,60}(?:without\\s+court|without\\s+forcible\\s+entry|immediate\\s+possession)", "tenant\\s+waives?\\s+(?:any\\s+)?right\\s+to\\s+judicial\\s+eviction"],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under 735 ILCS 5/9-101, Illinois strictly prohibits self-help evictions. Landlords must obtain a judicial order of possession before barring tenant access or changing locks."
		},
		{
			id: "IL-RETALIAT-03",
			category: "General",
			name: "Retaliatory Eviction Ban",
			severity: "LikelyUnenforceable",
			statuteCitation: "765 ILCS 720/1",
			statuteSummary: "It is declared to be against public policy of Illinois for a landlord to terminate or refuse to renew a lease because a tenant has complained to any governmental authority regarding code or ordinance violations.",
			officialUrl: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=076507200K1",
			triggerPatterns: ["(?:tenant\\s+agrees\\s+not\\s+to\\s+report|prohibited\\s+from\\s+complaining\\s+to\\s+city|waives\\s+right\\s+to\\s+report\\s+code)", "(?:landlord\\s+may\\s+terminate|immediate\\s+termination)\\s+(?:if\\s+tenant\\s+contacts|upon\\s+tenant\\s+complaint\\s+to\\s+(?:city|building|inspector))"],
			contraIndicatorPatterns: [],
			disputeTemplate: "Under 765 ILCS 720/1, lease provisions punishing or restricting a tenant from reporting building code violations to municipal authorities are void as contrary to Illinois public policy."
		},
		{
			id: "IL-DEP-INT-04",
			category: "SecurityDeposit",
			name: "Security Deposit Interest Act (25+ Units)",
			severity: "LikelyUnenforceable",
			statuteCitation: "765 ILCS 715/1",
			statuteSummary: "A lessor of residential real property containing 25 or more units who receives a security deposit from a lessee and holds that deposit for more than 6 months shall pay interest annually to the lessee on the deposit at the rate established by the State Treasurer. Any lease waiver of deposit interest in covered buildings is void and unenforceable.",
			officialUrl: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=076507150K1",
			triggerPatterns: [
				"(?:no\\s+interest|waives?\\s+(?:any\\s+)?interest|interest-free)[^.\\n]{0,60}(?:on\\s+(?:the\\s+)?(?:security\\s+)?deposit|held\\s+in\\s+escrow)",
				"tenant\\s+waives?\\s+(?:all\\s+)?rights?\\s+under\\s+(?:the\\s+)?security\\s+deposit\\s+interest\\s+act",
				"deposit\\s+(?:shall|will)\\s+not\\s+bear\\s+interest"
			],
			contraIndicatorPatterns: ["less\\s+than\\s+25\\s+units", "single-family"],
			disputeTemplate: "Under 765 ILCS 715/1 (Security Deposit Interest Act), landlords of buildings containing 25 or more units must pay annual interest on security deposits held over 6 months. Blanket lease waivers of deposit interest in covered properties are unenforceable."
		}
	]
}, s = [
	{
		code: "CA",
		label: "California (Cal. Civ. Code & AB 12)"
	},
	{
		code: "NY",
		label: "New York (N.Y. GOB & RPL / HSTPA)"
	},
	{
		code: "TX",
		label: "Texas (Tex. Prop. Code Ch. 92)"
	},
	{
		code: "FL",
		label: "Florida (Fla. Stat. Ch. 83 & Miya's Law)"
	},
	{
		code: "IL",
		label: "Illinois (765 ILCS 710 & 715)"
	},
	{
		code: "FED",
		label: "Federal Baseline Only (FHA / SCRA)"
	}
], c = {
	ca: {
		title: "California Lease (AB 12 Predatory Clauses)",
		jurisdiction: "CA",
		text: "RESIDENTIAL LEASE AGREEMENT\n\nThis Residential Lease Agreement (\"Agreement\") is made and entered into on this 1st day of October, 2026, by and between Pacific Crest Management (\"Landlord\") and Jane Doe (\"Tenant\").\n\nSECTION 1. PREMISES AND TERM\nLandlord hereby leases to Tenant the real property located at 742 Evergreen Terrace, Apt 3B, San Francisco, CA 94102 for a term of twelve (12) months commencing on November 1, 2026.\n\nSECTION 2. MONTHLY RENT\nTenant agrees to pay Landlord monthly rent in the amount of $2,800.00, payable on or before the first day of each calendar month.\n\nSECTION 3. SECURITY DEPOSIT\nTenant shall deposit with Landlord the sum of $5,600.00 (two months' rent) as a security deposit to guarantee the faithful performance of all covenants herein. Landlord shall have sixty (60) days following surrender of the premises to inspect, deduct damages, and return any remaining balance.\n\nSECTION 4. LATE CHARGES AND RETURNED CHECKS\nIf rent is not received by Landlord by 11:59 PM on the 1st day of the month, Tenant shall pay a flat late fee of $250.00 immediately, plus an additional $25.00 for each calendar day rent remains delinquent.\n\nSECTION 5. RIGHT OF ENTRY\nLandlord and Landlord's agents reserve the right to enter the premises at any time without prior written or oral notice for purposes of inspection, showing prospective buyers or renters, or making alterations.\n\nSECTION 6. MAINTENANCE AND REPAIRS\nTenant accepts the premises in strictly \"AS-IS\" condition. Tenant waives all implied warranties of habitability and shall be solely responsible for all maintenance, plumbing clogs, appliance repairs, heating systems, and roof leaks regardless of cause or pre-existing conditions.\n\nSECTION 7. DEFAULT AND SELF-HELP REMEDIES\nIf Tenant breaches any term or fails to pay rent within three days, Landlord may immediately re-enter premises, terminate utility services, change door locks, and remove and dispose of Tenant's personal property without court process or judicial eviction proceedings.\n\nSECTION 8. GOVERNING LAW\nThis agreement shall be construed under the laws of the State of California."
	},
	ny: {
		title: "New York Lease (HSTPA Deposit & Late Fee Violations)",
		jurisdiction: "NY",
		text: "STANDARD APARTMENT LEASE - STATE OF NEW YORK\n\nDate: September 15, 2026\nLandlord: Gotham Realty Associates LLC\nTenant: John Smith\nBuilding Address: 450 W 42nd St, Apt 14D, New York, NY 10036\n\n1. LEASE TERM\nThe term of this lease shall be for 1 year beginning October 1, 2026 and ending September 30, 2027.\n\n2. RENT AMOUNT\nThe monthly rent is $3,200.00 payable on the first day of each month.\n\n3. SECURITY DEPOSIT\nTenant shall deposit $6,400.00 (two months rent) upon signing. Landlord shall return the deposit within 45 days after Tenant vacates the apartment.\n\n4. LATE PAYMENT PENALTY\nIf rent is not paid by the 2nd day of the month, Tenant shall pay a late fee equal to 15% of the monthly rent ($480.00).\n\n5. ACCESS TO PREMISES\nLandlord may enter the apartment at any hour without notice to inspect or repair.\n\n6. CONDITION OF PREMISES\nTenant acknowledges premises are in satisfactory condition and waives any claim regarding warranty of habitability under New York law.\n\n7. RE-ENTRY BY OWNER\nIf Tenant fails to pay rent, Landlord may immediately pad-lock apartment doors and remove Tenant's belongings without legal proceedings."
	},
	fed: {
		title: "Federal Baseline Violations (FHA Familial & Service Animals / SCRA)",
		jurisdiction: "FED",
		text: "RESIDENTIAL LEASE AGREEMENT\nLandlord: National Property Holdings LLC\nPremises: 100 Main Street, Unit 5\n\nSECTION 1. OCCUPANCY RESTRICTIONS\nAdults only. No children allowed in the building under any circumstances. Any tenant who has a child during tenancy shall pay a $500 monthly surcharge.\n\nSECTION 2. ANIMAL POLICY\nStrict no pets policy. No animals under any circumstances, including service animals or emotional support animals. Anyone with an assistance animal must pay a $1,000 non-refundable pet deposit.\n\nSECTION 3. MILITARY DEPLOYMENT\nTenant waives all rights under the Servicemembers Civil Relief Act (SCRA). No early termination allowed for military transfer or deployment."
	}
}, l = /* @__PURE__ */ e({
	JURISDICTION_OPTIONS: () => s,
	JURISDICTION_RULES: () => g,
	SAMPLE_LEASES: () => c,
	caTenancyData: () => d,
	federalTenancyData: () => u,
	flTenancyData: () => m,
	ilTenancyData: () => h,
	nyTenancyData: () => f,
	txTenancyData: () => p
}), u = t, d = n, f = r, p = i, m = a, h = o, g = {
	FED: u,
	CA: d,
	NY: f,
	TX: p,
	FL: m,
	IL: h
};
//#endregion
export { h as a, p as c, m as i, s as l, d as n, f as o, u as r, l as s, g as t, c as u };

//# sourceMappingURL=tenancy-DHmt0VKN.js.map