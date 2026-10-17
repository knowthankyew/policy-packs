import { t as e } from "./rolldown-runtime-Dy4uBu1J.js";
var t = {
	packId: "us-federal",
	name: "US Federal Statutory Policy Pack",
	version: "1.0.0",
	jurisdiction: "US Federal",
	description: "Statutory rules grounded in federal law: ROSCA, FTC Negative Option Rule, Federal Arbitration Act, and FTC Act Section 5.",
	rules: [
		{
			id: "AR-001",
			title: "Negative Option Automatic Renewal",
			category: "AUTO_RENEWAL",
			classification: "STATUTORY_VIOLATION",
			severity: "CRITICAL",
			statute: {
				code: "15 U.S.C. § 8403 (ROSCA) / 16 CFR Part 425",
				title: "Restore Online Shoppers Confidence Act & FTC Negative Option Rule",
				jurisdiction: "US Federal",
				plainExplanation: "Federal ROSCA and FTC Negative Option regulations require clear, conspicuous disclosure of recurring terms and explicit affirmative consumer consent prior to initial billing."
			},
			patterns: [
				"automatically\\s+(?:renews?|renewing|extend(?:s|ed)?)[^.\\n]{0,80}(?:until|unless|each|every|successive)",
				"renews?\\s+automatically[^.\\n]{0,80}(?:on\\s+a|each|every|at\\s+the\\s+end|until|unless)",
				"(?:subscription|membership|plan)\\s+(?:will\\s+automatically|automatically)\\s+(?:renews?|renewing)",
				"recurring\\s+(?:billing|charge|subscription|fee)[^.\\n]{0,80}(?:will\\s+occur|will\\s+be\\s+billed|unless\\s+you\\s+cancel)",
				"subscription\\s+will\\s+continue\\s+unless\\s+(?:cancelled|canceled)",
				"continuous\\s+service\\s+(?:program|plan|agreement)"
			],
			explanation: "The agreement binds you to automated recurring charges that renew indefinitely until you affirmatively navigate their cancellation procedure.",
			recommendation: "Verify that clear, upfront billing disclosures and an online cancellation button are present before submitting payment.",
			tracking: {
				agency: "Federal Trade Commission",
				statuteCode: "15 U.S.C. § 8403",
				cfr: "16 CFR Part 425",
				apiKeywords: [
					"Negative Option",
					"ROSCA",
					"Automatic Renewal",
					"Click to Cancel"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "AR-002",
			title: "Asymmetrical Cancellation Dark Pattern (Call/Mail-Only)",
			category: "AUTO_RENEWAL",
			classification: "STATUTORY_VIOLATION",
			severity: "CRITICAL",
			statute: {
				code: "15 U.S.C. § 45(a) (FTC Act § 5 - Deceptive Omissions)",
				title: "FTC Symmetrical Cancellation Enforcement & State ARLs",
				jurisdiction: "US Federal & Multi-State",
				plainExplanation: "Under FTC Act Section 5 deceptive trade practice enforcement and state Automatic Renewal Laws, businesses cannot engineer asymmetrical cancellation obstacles (such as requiring a phone call or physical letter to cancel a service enrolled in online)."
			},
			patterns: [
				"(?:cancel|terminate)\\s+(?:by\\s+calling|only\\s+by\\s+phone|via\\s+telephone|by\\s+written\\s+notice\\s+sent\\s+to)",
				"(?:to\\s+cancel|cancellation)[^.\\n]{0,50}must\\s+call",
				"must\\s+call[^.\\n]{0,50}(?:to\\s+cancel|customer\\s+support|business\\s+hours)",
				"to\\s+cancel\\s+(?:please\\s+call|call|contact)",
				"cancellation\\s+(?:must\\s+be\\s+received|notice)\\s+at\\s+least\\s+(?:30|60|90)\\s+days\\s+prior"
			],
			explanation: "The agreement forces you to call customer support or mail physical letters to cancel a subscription initiated online.",
			recommendation: "Do not agree unless an immediate online cancellation button is available in your account dashboard.",
			tracking: {
				agency: "Federal Trade Commission",
				statuteCode: "15 U.S.C. § 45(a)",
				apiKeywords: [
					"Negative Option",
					"Asymmetrical Cancellation",
					"Telephonic Obstacle",
					"ROSCA"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "ARB-001",
			title: "Mandatory Binding Arbitration & Jury Waiver",
			category: "ARBITRATION",
			classification: "RIGHTS_WAIVER",
			severity: "WARNING",
			statute: {
				code: "9 U.S.C. § 2 (FAA Enforcement) / U.S. Const. amend. VII",
				title: "Federal Arbitration Act & 7th Amendment Jury Right",
				jurisdiction: "US Federal",
				plainExplanation: "Enforceable under the Federal Arbitration Act (9 U.S.C. § 2). While lawful, it compels consumers to resolve disputes in private confidential forums instead of public courtrooms."
			},
			patterns: [
				"any\\s+dispute[^.\\n]{0,80}resolved\\s+by\\s+binding\\s+arbitration",
				"(?:you\\s+and\\s+(?:the\\s+(?:company|contractor|client)|we|contractor|client)\\s+agree\\s+to|disputes?\\s+resolved\\s+exclusively\\s+by)\\s+binding\\s+arbitration",
				"waive\\s+(?:any\\s+right\\s+to\\s+a|the\\s+right\\s+to\\s+a)\\s+jury\\s+trial",
				"administered\\s+by\\s+the\\s+american\\s+arbitration\\s+association",
				"administered\\s+by\\s+jams\\s+(?:pursuant\\s+to|under)",
				"governed\\s+by\\s+the\\s+federal\\s+arbitration\\s+act",
				"waiv(?:e|ing|es|ed)\\s+the\\s+right\\s+to\\s+trial\\s+by\\s+jury",
				"waive\\s+their\\s+right\\s+to\\s+trial\\s+by\\s+jury"
			],
			explanation: "Lawful under federal law, but you surrender your constitutional right to a jury trial and access to a public court of law if the company harms you.",
			recommendation: "Check whether the agreement includes a 30-day opt-out window to reject arbitration while maintaining your account.",
			tracking: {
				agency: "Consumer Financial Protection Bureau",
				statuteCode: "9 U.S.C. § 2",
				apiKeywords: [
					"Arbitration",
					"Mandatory Arbitration",
					"Dispute Resolution"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "ARB-002",
			title: "Class Action & Collective Lawsuit Waiver",
			category: "ARBITRATION",
			classification: "RIGHTS_WAIVER",
			severity: "WARNING",
			statute: {
				code: "Fed. R. Civ. P. 23 / AT&T Mobility LLC v. Concepcion",
				title: "Class Action Ban & Representative Action Waiver",
				jurisdiction: "US Federal",
				plainExplanation: "Prevents consumers from joining together in collective lawsuits, shielding companies from aggregate accountability for widespread small-dollar overcharges."
			},
			patterns: [
				"waive\\s+(?:any\\s+right\\s+to\\s+bring|the\\s+right\\s+to\\s+pursue|any\\s+right\\s+to\\s+participate\\s+in)\\s+(?:any\\s+class|a\\s+class\\s+action|representative\\s+action)",
				"no\\s+arbitration\\s+or\\s+(?:proceeding|claim)\\s+shall\\s+be\\s+joined\\s+with\\s+any\\s+other",
				"you\\s+may\\s+only\\s+resolve\\s+disputes\\s+(?:with\\s+us\\s+on|on)\\s+an\\s+individual\\s+basis",
				"may\\s+not\\s+bring\\s+a\\s+claim\\s+as\\s+a\\s+plaintiff\\s+or\\s+class\\s+member\\s+in\\s+any\\s+purported\\s+class",
				"class\\s+and\\s+collective\\s+action\\s+waiver",
				"agree\\s+to\\s+bring\\s+any\\s+claim\\s+on\\s+an\\s+individual\\s+basis",
				"not\\s+as\\s+a\\s+plaintiff\\s+or\\s+class\\s+member"
			],
			explanation: "Forces every consumer into isolated individual dispute proceedings, preventing class-wide relief for systematic issues.",
			recommendation: "Understand that you cannot join a class settlement if the company engages in unauthorized billing.",
			tracking: {
				statuteCode: "Fed. R. Civ. P. 23",
				apiKeywords: [
					"Class Action Waiver",
					"Collective Action",
					"Representative Proceeding"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "ARB-003",
			title: "30-Day Written Mail Opt-Out Provision",
			category: "ARBITRATION",
			classification: "RIGHTS_WAIVER",
			severity: "INFO",
			statute: {
				code: "UCC § 2-302 / Procedural Arbitration Opt-Out",
				title: "Dispute Resolution Opt-Out Mechanism",
				jurisdiction: "Uniform Commercial Code",
				plainExplanation: "A provision allowing consumers to reject binding arbitration and preserve court access if notice is provided within a limited timeframe."
			},
			patterns: [
				"you\\s+have\\s+the\\s+right\\s+to\\s+opt\\s*-\\s*out\\s+of\\s+(?:this\\s+arbitration|the\\s+arbitration\\s+agreement)",
				"opt-out\\s+notice\\s+must\\s+be\\s+(?:postmarked|received)\\s+within\\s+30\\s+days",
				"must\\s+mail\\s+(?:a\\s+written|written)\\s+notice\\s+of\\s+opt-out"
			],
			explanation: "You have a legally protected window to preserve your court rights by sending written notice.",
			recommendation: "Exercise this right immediately upon opening your account if you wish to retain courtroom protections.",
			tracking: {
				statuteCode: "UCC § 2-302",
				apiKeywords: ["Arbitration Opt-Out", "Opt Out Notice"],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "UNI-001",
			title: "Unilateral Contract Modification Without Prior Notice",
			category: "UNILATERAL_CHANGE",
			classification: "ONE_SIDED_DISCRETION",
			severity: "INFO",
			statute: {
				code: "Restatement (Second) of Contracts § 211 / Illusory Promise Doctrine",
				title: "Common Law Contract Modification Standards",
				jurisdiction: "US Common Law",
				plainExplanation: "While common in commercial terms, courts scrutinize clauses granting unlimited unilateral rights to alter material terms without advance notice or opt-out rights as potentially unenforceable illusory promises."
			},
			patterns: [
				"reserve\\s+the\\s+right\\s+to\\s+(?:modify|change|alter|update|amend)\\s+these\\s+terms[^.\\n]{0,60}(?:without\\s+notice|in\\s+our\\s+sole\\s+discretion)",
				"we\\s+may\\s+(?:change|modify|amend)\\s+these\\s+terms\\s+in\\s+our\\s+sole\\s+discretion\\s+without\\s+liability",
				"modifications\\s+are\\s+effective\\s+immediately\\s+upon\\s+posting"
			],
			explanation: "The platform claims the power to rewrite their agreement with you at any time without advance notice or affirmative re-consent.",
			recommendation: "Periodically monitor recurring pricing and terms directly rather than assuming terms remain fixed.",
			tracking: {
				statuteCode: "Restatement Contracts § 211",
				apiKeywords: [
					"Unilateral Modification",
					"Illusory Promise",
					"Sole Discretion"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "UNI-002",
			title: "Passive Deemed Consent via Continued Usage",
			category: "UNILATERAL_CHANGE",
			classification: "ONE_SIDED_DISCRETION",
			severity: "INFO",
			statute: {
				code: "15 U.S.C. § 45 (FTC Act § 5 - Deceptive Omissions)",
				title: "Inferred Consent & Unfair Trade Practice",
				jurisdiction: "US Federal",
				plainExplanation: "Treating silence or normal app usage as affirmative assent to modified material terms is scrutinized as an unfair business practice."
			},
			patterns: [
				"continued\\s+use[^.\\n]{0,60}(?:constitutes?|signifies)\\s+(?:your\\s+acceptance|acceptance)",
				"by\\s+continuing\\s+to\\s+(?:access|use)[^.\\n]{0,60}agree\\s+to\\s+be\\s+bound",
				"continued\\s+use\\s+following\\s+any\\s+updates\\s+constitutes\\s+binding\\s+agreement"
			],
			explanation: "Simply logging into your account is treated by the company as your legal signature accepting their newly revised terms.",
			recommendation: "Check policy revision dates if you notice billing or feature changes in your service.",
			tracking: {
				agency: "Federal Trade Commission",
				statuteCode: "15 U.S.C. § 45",
				apiKeywords: [
					"Deemed Assent",
					"Inferred Consent",
					"Unfair Terms"
				],
				lastVerifiedDate: "2026-09-01"
			}
		}
	]
}, n = {
	packId: "state-arl",
	name: "State Consumer Protection & ARL Policy Pack",
	version: "1.0.0",
	jurisdiction: "US State",
	description: "State statutory rules covering automatic renewals (California AB 2863, New York GBL § 527-a) and state privacy protections (CCPA/CPRA, Illinois BIPA).",
	rules: [
		{
			id: "AR-003",
			title: "Post-Trial Immediate Conversion Charge",
			category: "AUTO_RENEWAL",
			classification: "STATUTORY_VIOLATION",
			severity: "WARNING",
			statute: {
				code: "Cal. Bus. & Prof. Code § 17602(a)(2) / N.Y. GBL § 527-a",
				title: "Free Trial Disclosure Mandate",
				jurisdiction: "California & New York",
				plainExplanation: "Companies cannot convert free or discounted trials into full-rate paid subscriptions without upfront, conspicuous disclosure of the price after trial."
			},
			patterns: [
				"(?:free|introductory|discounted)\\s+trial\\s+(?:will|shall)\\s+(?:automatically\\s+convert|be\\s+charged|transition)",
				"upon\\s+the\\s+expiration\\s+of\\s+(?:the\\s+free\\s+trial|your\\s+trial),\\s+(?:you\\s+will\\s+be\\s+charged|your\\s+account\\s+will\\s+be\\s+billed)",
				"after\\s+(?:your\\s+trial|the\\s+trial\\s+period),\\s+(?:the\\s+regular|standard)\\s+(?:rate|price|fee)\\s+will\\s+apply"
			],
			explanation: "A promotional or free trial immediately converts into a recurring subscription billing at full price.",
			recommendation: "Set a calendar alert or utilize a single-use virtual card before starting the promotional trial.",
			tracking: {
				jurisdiction: "California / New York",
				statuteCode: "Cal. Bus. & Prof. Code § 17602(a)(2)",
				apiKeywords: [
					"Automatic Renewal",
					"Free Trial Conversion",
					"AB 2863"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "SURV-001",
			title: "Third-Party Behavioral Data Sale & Advertising Sharing",
			category: "SURVEILLANCE",
			classification: "SURVEILLANCE_NOTICE",
			severity: "WARNING",
			statute: {
				code: "Cal. Civ. Code § 1798.120 (CCPA/CPRA) / Multi-State Privacy",
				title: "Consumer Opt-Out of Data Sale & Cross-Context Sharing",
				jurisdiction: "California & Multi-State",
				plainExplanation: "Consumers possess an unconditional statutory right to direct businesses to cease selling or sharing their personal information for cross-context behavioral advertising."
			},
			patterns: [
				"share\\s+(?:your\\s+personal\\s+information|your\\s+data)[^.\\n]{0,80}(?:advertisers|data\\s+brokers|marketing\\s+partners)[^.\\n]{0,60}(?:targeted|cross-context)",
				"we\\s+may\\s+(?:sell|rent|trade)[^.\\n]{0,40}(?:your\\s+information|user\\s+data|personal\\s+data)",
				"third\\s+parties\\s+may\\s+collect\\s+information\\s+about\\s+your\\s+online\\s+activities"
			],
			explanation: "The policy states that your personal data and online habits may be sold, licensed, or shared with commercial data brokers or advertisers.",
			recommendation: "Look for a \"Do Not Sell or Share My Personal Information\" link in the page footer and exercise your statutory opt-out.",
			tracking: {
				jurisdiction: "California",
				statuteCode: "Cal. Civ. Code § 1798.120",
				apiKeywords: [
					"CCPA",
					"CPRA",
					"Cross-Context Behavioral Advertising",
					"Data Sale"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "SURV-002",
			title: "Continuous Background Location or Biometric Collection",
			category: "SURVEILLANCE",
			classification: "SURVEILLANCE_NOTICE",
			severity: "INFO",
			statute: {
				code: "740 ILCS 14/ (BIPA) / Cal. Civ. Code § 1798.140",
				title: "Biometric Information Privacy & Precise Geolocation",
				jurisdiction: "Illinois & California",
				plainExplanation: "Continuous collection of precise GPS location or biometric identifiers requires explicit written authorization and publicly available retention schedules."
			},
			patterns: ["collects?\\s+precise\\s+(?:geolocation|location\\s+data)[^.\\n]{0,60}(?:closed|background)", "(?:voice\\s+recordings|facial\\s+geometry|biometric\\s+identifiers)[^.\\n]{0,60}(?:stored|analyzed)"],
			explanation: "The platform retains rights to track your precise physical coordinates or analyze biometric identifiers continuously.",
			recommendation: "Deny persistent location permissions in your browser unless strictly needed for local services.",
			tracking: {
				jurisdiction: "Illinois / California",
				statuteCode: "740 ILCS 14/",
				apiKeywords: [
					"BIPA",
					"Biometric Privacy",
					"Geolocation"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "US-CO-001",
			title: "Colorado Advance Renewal Notice Disclosure",
			category: "AUTO_RENEWAL",
			classification: "STATUTORY_VIOLATION",
			severity: "WARNING",
			statute: {
				code: "Colo. Rev. Stat. § 6-1-732",
				title: "Colorado Automatic Renewal Notice Mandate",
				jurisdiction: "Colorado",
				plainExplanation: "Colorado law mandates advance notice before continuous service renewals or trial conversions, including clear cancellation details."
			},
			patterns: ["(?:automatic(?:ally)?\\s+renew(?:al|s)?|continuous\\s+service)[^.\\n]{0,60}(?:colorado|c\\.r\\.s\\.)[^.\\n]{0,60}(?:no\\s+notice|without\\s+advance\\s+notice)", "colorado\\s+(?:residents|consumers|subscribers)[^.\\n]{0,60}(?:waive|no)\\s+(?:advance\\s+notice|renewal\\s+notice)"],
			explanation: "The terms fail to provide the Colorado-mandated advance notification before continuous subscription renewal or free trial conversion.",
			recommendation: "Colorado law guarantees advance notice before automatic renewal. Verify that clear cancellation instructions are provided before renewal fees post.",
			tracking: {
				jurisdiction: "Colorado",
				statuteCode: "Colo. Rev. Stat. § 6-1-732",
				apiKeywords: [
					"Colorado ARL",
					"Automatic Renewal",
					"Advance Notice"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "US-IL-001",
			title: "Illinois Symmetrical Online Cancellation Mandate",
			category: "AUTO_RENEWAL",
			classification: "STATUTORY_VIOLATION",
			severity: "WARNING",
			statute: {
				code: "815 ILCS 601 (Illinois ACRA)",
				title: "Illinois Automatic Contract Renewal Act",
				jurisdiction: "Illinois",
				plainExplanation: "Illinois ACRA requires clear disclosure of auto-renewal terms and mandates symmetrical online cancellation for online subscriptions."
			},
			patterns: ["(?:automatic(?:ally)?\\s+renew(?:al|s)?)[^.\\n]{0,80}(?:illinois|815\\s+ilcs)[^.\\n]{0,60}(?:mail|written\\s+notice\\s+only|call\\s+to\\s+cancel)", "(?:illinois\\s+residents|illinois\\s+subscribers)[^.\\n]{0,60}(?:must\\s+call|written\\s+cancellation\\s+required)"],
			explanation: "The terms impose asymmetric obstacles on Illinois consumers by requiring phone calls or postal mail to cancel an online subscription.",
			recommendation: "Under 815 ILCS 601, consumers who enroll online have a statutory right to cancel online without obstructive call-in hurdles.",
			tracking: {
				jurisdiction: "Illinois",
				statuteCode: "815 ILCS 601",
				apiKeywords: [
					"Illinois ACRA",
					"Automatic Renewal",
					"Online Cancellation"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "US-OR-001",
			title: "Oregon Automatic Renewal Terms & Acknowledgment Disclosure",
			category: "AUTO_RENEWAL",
			classification: "STATUTORY_VIOLATION",
			severity: "WARNING",
			statute: {
				code: "Or. Rev. Stat. § 646A.295",
				title: "Oregon Automatic Renewal Law",
				jurisdiction: "Oregon",
				plainExplanation: "Oregon law requires businesses to clearly and conspicuously disclose auto-renewal offer terms, obtain affirmative consent, and provide an acknowledgment detailing straightforward cancellation procedures."
			},
			patterns: ["(?:automatic(?:ally)?\\s+renew(?:al|s)?)[^.\\n]{0,80}(?:oregon|ors\\s+646a)[^.\\n]{0,60}(?:no\\s+acknowledg?ment|waiv(?:e|es|ing)\\s+cancellation\\s+procedure)", "oregon\\s+(?:residents|consumers|subscribers)[^.\\n]{0,60}(?:no\\s+cancellation\\s+details|no\\s+written\\s+acknowledg?ment)"],
			explanation: "The agreement disclaims mandatory offer term disclosures, written acknowledgment, or the straightforward cancellation mechanism required for Oregon consumers under ORS § 646A.295.",
			recommendation: "Oregon ORS § 646A.295 requires clear pre-sale disclosure of terms, written acknowledgment with clear cancellation steps, and easy cancellation mechanisms.",
			tracking: {
				jurisdiction: "Oregon",
				statuteCode: "Or. Rev. Stat. § 646A.295",
				apiKeywords: [
					"Oregon ARL",
					"ORS 646A.295",
					"Cancellation Procedure",
					"Automatic Renewal"
				],
				lastVerifiedDate: "2026-09-01"
			}
		}
	]
}, r = {
	packId: "uk-dmcc",
	name: "UK Digital Markets, Competition and Consumers Act 2024",
	version: "1.0.0",
	jurisdiction: "UK",
	description: "Statutory rules covering the UK DMCC Act 2024 mandatory pre-renewal disclosure schedules and 14-day cooling-off rights for UK consumers (prospective regime, anticipated commencement Spring 2027).",
	rules: [
		{
			id: "UK-AR-001",
			title: "Prospective Pre-Renewal Reminder Schedule Prompt (DMCC Spring 2027)",
			category: "AUTO_RENEWAL",
			classification: "PROSPECTIVE_DUTY",
			severity: "WARNING",
			statute: {
				code: "UK DMCC Act 2024, Part 4, Chapter 2 (Section 258)",
				title: "Subscription Contracts — Pre-Renewal Reminder Schedule (Commencement Spring 2027)",
				jurisdiction: "UK",
				plainExplanation: "Under the UK DMCC Act 2024 (Part 4, Chapter 2, Section 258; anticipated commencement Spring 2027), traders must provide reminder notices before qualifying renewals (including the end of concessionary/trial periods and at 6-month renewal intervals)."
			},
			patterns: [
				"(?:subscription|contract)\\s+(?:will|shall)\\s+(?:automatically\\s+renew|continue)[^.\\n]{0,80}(?:without\\s+notice|without\\s+prior\\s+notice|no\\s+reminder\\s+notice)",
				"no\\s+(?:renewal\\s+reminder|advance\\s+notice)[^.\\n]{0,60}(?:sent|provided)\\s+(?:prior\\s+to|before)\\s+(?:renewal|billing)",
				"(?:you\\s+agree|agrees)\\s+that\\s+no\\s+(?:reminder|notice)\\s+(?:will|shall)\\s+be\\s+given\\s+prior\\s+to\\s+auto(?:matic)?-?renewal"
			],
			explanation: "The terms state or imply that the subscription will auto-renew without advance reminder notice. Note: under the prospective UK DMCC Act 2024 regime (Part 4, Chapter 2, Section 258, anticipated commencement Spring 2027), traders will be required to provide advance reminder notices before qualifying renewals (including post-trial rollovers and six-month renewal intervals). Prompt: verify whether this subscription schedule falls within Section 258 reminder requirements.",
			recommendation: "Review the trader's renewal terms against UK DMCC Act Section 258 statutory reminder schedules. When commenced in Spring 2027, failure to issue pre-renewal notices for qualifying renewal intervals will limit contract enforceability.",
			tracking: {
				agency: "Competition and Markets Authority (CMA)",
				jurisdiction: "UK",
				statuteCode: "UK DMCC Act 2024, Part 4, Chapter 2 (Section 258)",
				apiKeywords: [
					"DMCC 2024",
					"Subscription Contracts",
					"UK Consumer Rights"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "UK-AR-002",
			title: "Prospective 14-Day Cooling-Off Rights Obstruction (DMCC Spring 2027)",
			category: "AUTO_RENEWAL",
			classification: "PROSPECTIVE_DUTY",
			severity: "WARNING",
			statute: {
				code: "UK DMCC Act 2024, Part 4, Chapter 2 (Cancellation Rights)",
				title: "14-Day Subscription Cooling-Off Rights (Commencement Spring 2027)",
				jurisdiction: "UK",
				plainExplanation: "UK consumers possess an unwaivable statutory right to cancel a subscription contract within a 14-day cooling-off window at inception and upon each 12-month renewal."
			},
			patterns: [
				"waiv(?:e|es|ed)\\s+(?:cooling-off|cancellation)\\s+(?:rights?|period)",
				"no\\s+(?:right\\s+to\\s+cancel|cooling-off\\s+period)[^.\\n]{0,60}(?:once|after)\\s+(?:order|subscription|access\\s+is\\s+granted)",
				"cancellation\\s+(?:is\\s+not\\s+permitted|cannot\\s+be\\s+made)[^.\\n]{0,60}within\\s+(?:14\\s+days|the\\s+first\\s+14\\s+days)"
			],
			explanation: "The contract denies, restricts, or claims to waive 14-day cooling-off cancellation rights. Note: under the prospective UK DMCC Act 2024 regime (Part 4, Chapter 2, anticipated commencement Spring 2027), traders will be strictly prohibited from excluding statutory 14-day withdrawal windows.",
			recommendation: "Do not waive cooling-off cancellation rights. The upcoming DMCC Act regime will prohibit traders from excluding statutory 14-day withdrawal windows for consumer subscriptions.",
			tracking: {
				agency: "Competition and Markets Authority (CMA)",
				jurisdiction: "UK",
				statuteCode: "UK DMCC Act 2024, Part 4, Chapter 2",
				apiKeywords: [
					"DMCC 2024",
					"Cooling-Off",
					"Cancellation Rights"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "UK-CONS-001",
			title: "Unilateral Variation of Material Subscription Terms",
			category: "UNILATERAL_CHANGE",
			classification: "ONE_SIDED_DISCRETION",
			severity: "WARNING",
			statute: {
				code: "UK Consumer Rights Act 2015, Section 62",
				title: "Unfair Contract Terms — Unilateral Variations",
				jurisdiction: "UK",
				plainExplanation: "Terms granting traders unlimited unilateral discretion to alter subscription pricing, deliverables, or material specifications without consumer opt-out are presumptively unfair."
			},
			patterns: ["(?:we\\s+reserve|reserves)\\s+the\\s+right\\s+to\\s+(?:vary|alter|change)\\s+subscription\\s+fees[^.\\n]{0,60}(?:at\\s+any\\s+time|sole\\s+discretion)", "material\\s+(?:changes?|variations?)[^.\\n]{0,60}(?:effective\\s+immediately|without\\s+prior\\s+notice)[^.\\n]{0,60}(?:uk|england|wales|scotland)"],
			explanation: "The contract reserves unrestricted powers to alter prices or core subscription terms unilaterally without reasonable advance notice.",
			recommendation: "Under the UK Consumer Rights Act 2015, unfair price variation clauses are legally unenforceable against consumer subscribers.",
			tracking: {
				agency: "Competition and Markets Authority (CMA)",
				jurisdiction: "UK",
				statuteCode: "UK CRA 2015, Section 62",
				apiKeywords: [
					"CRA 2015",
					"Unfair Terms",
					"Unilateral Variation"
				],
				lastVerifiedDate: "2026-09-01"
			}
		}
	]
}, i = {
	packId: "eu-crd",
	name: "EU Consumer Rights Directive (2011/83/EU)",
	version: "1.0.0",
	jurisdiction: "EU",
	description: "Statutory rules covering EU CRD 2011/83/EU prohibitions on pre-ticked subscription boxes and requirements for transparent cancellation mechanisms.",
	rules: [
		{
			id: "EU-AR-001",
			title: "Pre-Ticked Consent Box & Default Additional Payments / Add-Ons",
			category: "AUTO_RENEWAL",
			classification: "STATUTORY_VIOLATION",
			severity: "CRITICAL",
			statute: {
				code: "Directive 2011/83/EU, Article 22",
				title: "Prohibition of Default Options for Additional Payments",
				jurisdiction: "EU",
				plainExplanation: "EU law strictly prohibits traders from inferring consumer consent through pre-ticked checkboxes or default options for additional payments or add-on subscriptions beyond the main purchase."
			},
			patterns: [
				"(?:additional|add[- ]on|monthly)\\s+(?:subscription|charge|fee|payment)\\s+(?:(?:checkbox|box|option)\\s+is|is)\\s+(?:pre-?selected|checked\\s+by\\s+default)",
				"unless\\s+you\\s+(?:uncheck|deselect)[^.\\n]{0,60}(?:subscription|monthly|recurring|enrolled)",
				"(?:automatically\\s+included|added\\s+by\\s+default)[^.\\n]{0,60}(?:opt-out|uncheck\\s+to\\s+remove)"
			],
			explanation: "The terms or checkout flow indicate that an additional recurring charge, add-on subscription, or optional payment is pre-selected or checked by default beyond the primary transaction.",
			recommendation: "EU Directive 2011/83/EU Article 22 prohibits default options (such as pre-ticked boxes) for additional payments. Consent for extra charges must be express and opt-in; otherwise consumers are entitled to full reimbursement.",
			tracking: {
				agency: "European Commission / National Consumer Authorities",
				jurisdiction: "EU",
				statuteCode: "Directive 2011/83/EU, Art. 22",
				apiKeywords: [
					"Consumer Rights Directive",
					"Directive 2011/83/EU",
					"Pre-ticked",
					"Default Option"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "EU-AR-002",
			title: "Statutory 14-Day EU Withdrawal Right Waiver",
			category: "AUTO_RENEWAL",
			classification: "RIGHTS_WAIVER",
			severity: "WARNING",
			statute: {
				code: "Directive 2011/83/EU, Articles 9, 16(m) & 25",
				title: "14-Day Right of Withdrawal & Article 16 Digital Exemptions",
				jurisdiction: "EU",
				plainExplanation: "EU consumers possess a statutory 14-day right of withdrawal from distance contracts. While Article 16(m) permits loss of withdrawal rights for digital content upon prior express consent and acknowledgment of loss of withdrawal, blanket waivers outside this statutory exception are void under Article 25."
			},
			patterns: [
				"(?:waiv(?:e|es|ing)|forfeit(?:s|ing)?)\\s+(?:right\\s+of\\s+withdrawal|your\\s+right\\s+of\\s+withdrawal|withdrawal\\s+right|your\\s+withdrawal\\s+right|cooling-off\\s+period)",
				"(?:by\\s+proceeding|by\\s+subscribing|by\\s+purchasing)[^.\\n]{0,60}(?:you\\s+waive|waiving|lose)\\s+(?:right|your\\s+right|statutory\\s+right|your\\s+statutory\\s+right)\\s+of\\s+withdrawal",
				"no\\s+statutory\\s+right\\s+of\\s+withdrawal[^.\\n]{0,60}(?:under\\s+any\\s+circumstances|is\\s+recognized)"
			],
			explanation: "The clause states that you waive or forfeit your 14-day statutory right of withdrawal / cooling-off period. Under Directive 2011/83/EU Art. 16(m), withdrawal rights may only be extinguished for digital content if the consumer gave prior express consent and expressly acknowledged forfeiture of the right; blanket or non-exempt waivers are null and void under Art. 25.",
			recommendation: "If you did not provide prior express consent and explicit acknowledgment for immediate digital performance, the trader cannot extinguish your statutory 14-day withdrawal right under Directive 2011/83/EU Article 25.",
			tracking: {
				agency: "European Commission / National Consumer Authorities",
				jurisdiction: "EU",
				statuteCode: "Directive 2011/83/EU, Art. 9, 25",
				apiKeywords: [
					"Right of Withdrawal",
					"Cooling-Off",
					"Directive 2011/83/EU"
				],
				lastVerifiedDate: "2026-09-01"
			}
		},
		{
			id: "EU-SURV-001",
			title: "Bundled Subscription & Tracking/Profiling Consent",
			category: "SURVEILLANCE",
			classification: "SURVEILLANCE_NOTICE",
			severity: "WARNING",
			statute: {
				code: "EU GDPR Regulation (EU) 2016/679, Articles 7 & 22",
				title: "Unbundled Freely-Given Consent Mandate",
				jurisdiction: "EU",
				plainExplanation: "Consent to behavioral advertising or profiling cannot be bundled into acceptance of subscription terms as a condition of service."
			},
			patterns: [
				"by\\s+(?:subscribing|purchasing|signing\\s+up)[^.\\n]{0,60}(?:agree|consent)\\s+to\\s+(?:our\\s+cookie\\s+policy|cross-site\\s+tracking)",
				"agreeing\\s+to\\s+these\\s+terms\\s+includes\\s+consent\\s+to\\s+(?:profiling|targeted\\s+advertising)",
				"(?:we\\s+may\\s+use|use)\\s+your\\s+data\\s+for\\s+(?:personalisation|behavioral\\s+profiling)\\s+as\\s+part\\s+of\\s+this\\s+subscription"
			],
			explanation: "The subscription contract conditions service access on blanket acceptance of behavioral tracking, advertising cookies, or automated profiling.",
			recommendation: "GDPR Article 7 requires data processing consent to be freely given, specific, and unbundled from subscription contract performance.",
			tracking: {
				agency: "European Data Protection Board (EDPB)",
				jurisdiction: "EU",
				statuteCode: "Regulation (EU) 2016/679, Art. 7",
				apiKeywords: [
					"GDPR",
					"Consent Bundling",
					"Profiling",
					"Article 7"
				],
				lastVerifiedDate: "2026-09-01"
			}
		}
	]
}, a = {
	$schema: "http://json-schema.org/draft-07/schema#",
	jurisdictionCode: "FTC",
	jurisdictionName: "Federal Trade Commission — ROSCA & FTC Act §5",
	statuteTitle: "Restore Online Shoppers' Confidence Act (ROSCA) & FTC Act Section 5",
	codification: "15 U.S.C. §§ 8401-8405 (ROSCA); 15 U.S.C. § 45(a) (FTC Act §5)",
	lastAudited: "2026-09-17",
	officialSourceUrl: "https://www.ftc.gov/legal-library/browse/statutes/restore-online-shoppers-confidence-act",
	regulatoryStatus: {
		vacatedRule: {
			name: "FTC 'Click-to-Cancel' Negative Option Rule",
			citation: "16 CFR Part 425 (2024 amendments)",
			status: "VACATED IN FULL — not currently binding law",
			details: "On July 8, 2025, the U.S. Court of Appeals for the Eighth Circuit vacated the FTC's 2024 Click-to-Cancel Rule in its entirety on procedural grounds (Custom Communications, Inc. v. FTC, No. 24-3137), days before its compliance deadline. The FTC opened a new rulemaking process (Advance Notice of Proposed Rulemaking, comments closed April 13, 2026) that may eventually revive similar requirements, but as of this audit date no replacement rule has been finalized or taken effect.",
			implication: "Do not cite 16 CFR Part 425 as currently binding federal law. The consumer-protection substance the vacated rule targeted (asymmetric cancellation, retention gauntlets, buried renewal terms) remains independently actionable under ROSCA and FTC Act §5, which were never affected by the vacatur, and under applicable state auto-renewal statutes (see /data/statutes/{state}.json for CA, NY, CO, DE, IL)."
		},
		currentlyBindingAuthority: [
			"ROSCA, 15 U.S.C. § 8403 — requires (1) clear and conspicuous disclosure of all material terms before collecting billing information, (2) express informed consent before charging, and (3) a simple mechanism to stop recurring charges, for any negative-option feature sold online.",
			"FTC Act § 5(a), 15 U.S.C. § 45(a) — prohibits unfair or deceptive acts or practices in commerce; the FTC has continued using this alongside ROSCA to bring enforcement actions (e.g., FTC v. Amazon; FTC v. Uber/UberOne, 2026) against exactly the cancellation-friction patterns the vacated rule targeted.",
			"State automatic-renewal statutes remain independently in force and are frequently stricter than federal law — check jurisdiction-specific files."
		]
	},
	rules: [
		{
			id: "FTC-CTC-01",
			category: "AsymmetricCancellation",
			trapName: "Asymmetric Cancellation ('Click-to-Cancel' Pattern)",
			severity: "Unlawful",
			statutoryCitation: "ROSCA, 15 U.S.C. § 8403(3); FTC Act § 5(a), 15 U.S.C. § 45(a)",
			vacatedRuleReference: "Formerly also enforced via 16 CFR § 425.6(a), vacated by the Eighth Circuit July 8, 2025 — see regulatoryStatus above. Not cited as independently binding.",
			statuteSummary: "ROSCA requires sellers to provide a simple mechanism for consumers to stop recurring charges on any negative-option feature sold online. The FTC has continued to treat cancellation flows that are harder than the enrollment flow (mandatory phone calls, in-person visits, or postal mail to cancel an online-only signup) as both a ROSCA violation and an unfair practice under FTC Act § 5, independent of the now-vacated Click-to-Cancel rule.",
			triggerPatterns: [
				"(?:must|required to|only way to|can only)\\s+cancel\\s+(?:by|via|through)?\\s*(?:calling|phone|calling us|telephoning|speaking to|contacting customer support by phone)",
				"call\\s+(?:1-800|1-888|1-877|1-866|1-855|\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4})\\s+to\\s+cancel",
				"cancellations?\\s+(?:are\\s+not|cannot\\s+be)\\s+(?:accepted|processed|handled)\\s+(?:online|via email|by email|through the website|through your account)",
				"cancel(?:lation)?\\s+(?:must be submitted|accepted only)\\s+(?:in writing|by certified mail|by postal mail|via certified letter|in person)"
			],
			negativeExceptions: [
				"or\\s+(?:you may\\s+)?cancel\\s+online",
				"cancel(?:led)?\\s+(?:at any time\\s+)?(?:via|through|in)\\s+(?:your\\s+)?(?:account|settings|portal|dashboard)",
				"click(?:ing)?\\s+(?:on\\s+)?(?:the\\s+)?[\"']?cancel(?:\\s+subscription)?[\"']?\\s+button"
			],
			disputeTemplate: "Under ROSCA, 15 U.S.C. § 8403(3), sellers must provide a simple mechanism to stop recurring charges on any online negative-option feature; requiring a phone call, in-person visit, or postal mail to cancel an enrollment that was completed online is inconsistent with this requirement and, independently, may constitute an unfair practice under FTC Act § 5(a). I request that cancellation be made available through the same online channel used to enroll."
		},
		{
			id: "FTC-SAVE-02",
			category: "RetentionMaze",
			trapName: "Retention Gauntlet / Unsolicited 'Saves' Pitch",
			severity: "Watch",
			statutoryCitation: "FTC Act § 5(a), 15 U.S.C. § 45(a); ROSCA, 15 U.S.C. § 8403(3)",
			vacatedRuleReference: "Formerly also enforced via 16 CFR § 425.6(b), vacated by the Eighth Circuit July 8, 2025 — see regulatoryStatus above. Not cited as independently binding.",
			statuteSummary: "The FTC has argued that mandatory retention interviews, forced 'save' pitches, or multi-step approval gauntlets imposed on a consumer attempting to cancel can themselves defeat ROSCA's 'simple mechanism' requirement and separately constitute an unfair practice under FTC Act § 5, even without the vacated rule's explicit consent-based carve-out. This is a developing enforcement theory rather than a settled bright-line rule, so it is flagged as Watch rather than Unlawful pending a clearer legal record.",
			triggerPatterns: [
				"(?:prior to|before|in order to)\\s+cancel(?:ling)?,?\\s*(?:you must|required to)\\s*(?:speak with|chat with|contact)\\s*(?:a|our)\\s*(?:specialist|retention|representative|agent|account manager)",
				"(?:must|required to)\\s*(?:complete|finish|submit)\\s*(?:a|an)\\s*(?:exit\\s+interview|cancellation\\s+survey|feedback\\s+session)\\s*(?:before|prior to|to complete)\\s*cancellation",
				"cancellation\\s+(?:requires|subject to)\\s+(?:manager\\s+approval|retention\\s+review|consultation)"
			],
			negativeExceptions: ["optional survey", "if you wish to provide feedback"],
			disputeTemplate: "Requiring a mandatory retention interview, agent consultation, or manager approval before cancellation can be completed raises concerns under ROSCA's simple-mechanism requirement (15 U.S.C. § 8403(3)) and FTC Act § 5(a)'s prohibition on unfair practices. I request that cancellation not be conditioned on completing a retention process."
		},
		{
			id: "FTC-DISC-03",
			category: "InconspicuousRenewal",
			trapName: "Inconspicuous / Buried Negative Option Terms",
			severity: "Unlawful",
			statutoryCitation: "ROSCA, 15 U.S.C. § 8403(1); FTC Act § 5(a), 15 U.S.C. § 45(a)",
			vacatedRuleReference: "Formerly also enforced via 16 CFR § 425.3, vacated by the Eighth Circuit July 8, 2025 — see regulatoryStatus above. Not cited as independently binding.",
			statuteSummary: "ROSCA requires clear and conspicuous disclosure of all material terms of a negative-option offer — including that charges will recur, the billing frequency, and the cancellation mechanism — before collecting billing information. Burying these terms in general boilerplate without clear presentation is a live ROSCA and FTC Act § 5 enforcement target independent of the vacated CFR rule.",
			triggerPatterns: [
				"automatically\\s+renews?\\s+(?:at\\s+the\\s+then-current\\s+rate|without\\s+further\\s+notice|indefinitely)\\s+unless\\s+cancelled",
				"renew(?:s|al)\\s+(?:will\\s+occur|occurs)\\s+automatically\\s+without\\s+(?:prior\\s+)?notice",
				"recurring\\s+basis\\s+(?:until|unless)\\s+(?:you\\s+)?notify\\s+us"
			],
			negativeExceptions: ["we will send you a reminder notice", "advance written notice will be provided"],
			disputeTemplate: "Under ROSCA, 15 U.S.C. § 8403(1), all material terms of a recurring-charge offer must be clearly and conspicuously disclosed before billing information is collected. Presenting auto-renewal terms in dense, generalized boilerplate without a clear, standalone disclosure is inconsistent with this requirement and may separately violate FTC Act § 5(a)."
		},
		{
			id: "FTC-HIKE-04",
			category: "UnilateralPriceHike",
			trapName: "Unilateral Price Increase Without Re-Consent",
			severity: "Watch",
			statutoryCitation: "FTC Act § 5(a), 15 U.S.C. § 45(a); ROSCA, 15 U.S.C. § 8403(2)",
			vacatedRuleReference: "Formerly also enforced via 16 CFR § 425.5, vacated by the Eighth Circuit July 8, 2025 — see regulatoryStatus above. Not cited as independently binding.",
			statuteSummary: "A seller reserving unlimited, no-notice authority to raise a recurring charge sits in legal grey area post-vacatur: ROSCA's express-informed-consent requirement was obtained for the original terms, not necessarily for an unknown future price, and the FTC has treated undisclosed material price changes as potentially deceptive under FTC Act § 5. This is flagged as Watch, not Unlawful, since there is no current bright-line federal rule requiring a specific notice period — check the applicable state file, several of which do set explicit advance-notice requirements for price increases.",
			triggerPatterns: [
				"reserves?\\s+the\\s+right\\s+to\\s+(?:change|increase|modify|alter)\\s+(?:subscription\\s+)?(?:fees|prices|rates)\\s+at\\s+(?:any\\s+time|our\\s+sole\\s+discretion)\\s+without\\s+(?:prior\\s+)?notice",
				"fees\\s+(?:may|will)\\s+increase\\s+(?:automatically|upon\\s+renewal)\\s+without\\s+(?:advance\\s+)?notice",
				"prices?\\s+subject\\s+to\\s+change\\s+without\\s+notice"
			],
			negativeExceptions: ["with at least 30 days advance notice", "will notify you in advance of any price changes"],
			disputeTemplate: "A clause reserving the right to raise recurring subscription rates without advance notice raises concerns under FTC Act § 5(a) and ROSCA's informed-consent requirement (15 U.S.C. § 8403(2)), and may separately violate your state's automatic-renewal notice statute. I request advance written notice and a clear opportunity to cancel before any price increase takes effect."
		},
		{
			id: "FTC-TRIAL-05",
			category: "TrialConversion",
			trapName: "Deceptive Free-Trial-to-Paid Conversion Trap",
			severity: "Unlawful",
			statutoryCitation: "ROSCA, 15 U.S.C. § 8403(1)-(3); FTC Act § 5(a), 15 U.S.C. § 45(a)",
			vacatedRuleReference: "Formerly also enforced via 16 CFR § 425.3(a)(3), vacated by the Eighth Circuit July 8, 2025 — see regulatoryStatus above. Not cited as independently binding.",
			statuteSummary: "Free-to-paid conversions are squarely within ROSCA's negative-option definition: the seller must clearly disclose the conversion date and recurring cost before collecting billing information, obtain express informed consent to the eventual charge, and provide a simple cancellation mechanism. This combination has been the basis of the FTC's largest ROSCA enforcement actions to date and does not depend on the vacated CFR rule.",
			triggerPatterns: [
				"(?:free\\s+trial|promotional\\s+period|introductory\\s+offer).*will\\s+(?:automatically\\s+)?convert\\s+(?:in)?to\\s+(?:a\\s+)?(?:paid|full-price|regular|recurring)\\s+subscription",
				"unless\\s+cancelled\\s+prior\\s+to\\s+the\\s+end\\s+of\\s+the\\s+(?:free\\s+)?trial,?\\s*(?:you\\s+will\\s+be\\s+charged|your\\s+card\\s+will\\s+be\\s+billed)",
				"free\\s+trial.*automatically\\s+charge.*billing\\s+information"
			],
			negativeExceptions: ["we will remind you before your trial ends", "reminder email sent prior to trial expiration"],
			disputeTemplate: "Under ROSCA, 15 U.S.C. § 8403, a free trial that converts to a paid recurring subscription must clearly disclose the conversion date and cost before billing information is collected, obtain express informed consent to the eventual charge, and provide a simple cancellation mechanism. The absence of a pre-charge reminder and clear disclosure here is inconsistent with these requirements and may independently violate FTC Act § 5(a)."
		}
	]
}, o = {
	$schema: "http://json-schema.org/draft-07/schema#",
	jurisdictionCode: "CA",
	jurisdictionName: "California",
	statuteTitle: "California Automatic Renewal Law (ARL)",
	codification: "Cal. Bus. & Prof. Code §§ 17600–17606 (AB 390 / AB 2863)",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17602",
	rules: [
		{
			id: "CA-ARL-01",
			category: "AsymmetricCancellation",
			trapName: "Mandatory Immediate Online Cancellation Violation",
			severity: "Unlawful",
			statutoryCitation: "Cal. Bus. & Prof. Code § 17602(c)",
			statuteSummary: "A consumer who accepts an automatic renewal or continuous service offer online must be allowed to terminate the automatic renewal or continuous service exclusively online at will, without engaging in further steps that obstruct or delay the consumer's ability to terminate immediately (such as a prominent direct button or link, or a pre-formatted termination email).",
			triggerPatterns: [
				"(?:must|required to|only way to)\\s+call\\s+(?:customer\\s+service|support|1-800|phone|representative)\\s+to\\s+cancel",
				"cancellations?\\s+(?:cannot|not\\s+accepted)\\s+(?:online|through\\s+account|by\\s+email)",
				"cancel(?:lation)?\\s+(?:only\\s+by|in\\s+person|by\\s+mail|via\\s+certified\\s+mail)"
			],
			negativeExceptions: [
				"terminate online at will",
				"cancel anytime in your account settings",
				"online cancellation link"
			],
			disputeTemplate: "Under Cal. Bus. & Prof. Code § 17602(c), California law mandates that consumers who enroll online must be allowed to terminate the subscription exclusively online at will without friction or mandatory phone calls. Your requirement violates California law."
		},
		{
			id: "CA-ARL-02",
			category: "PreRenewalNotice",
			trapName: "Lack of Advance Renewal Reminder Notice (AB 390 Mandate)",
			severity: "Unlawful",
			statutoryCitation: "Cal. Bus. & Prof. Code § 17602(a)(4)",
			statuteSummary: "Requires businesses to provide a clear and conspicuous notice to consumers 15 to 45 days before the automatic renewal date for contracts of one year or longer, or 3 to 21 days before the end of a free trial/promotional period exceeding 31 days.",
			triggerPatterns: [
				"auto-?renews?\\s+(?:for\\s+an\\s+additional\\s+year|annually)\\s+without\\s+(?:advance\\s+|further\\s+)?notice",
				"unless\\s+you\\s+cancel\\s+(?:at\\s+least\\s+)?(?:30|60|90)\\s+days\\s+prior\\s+to\\s+(?:the\\s+)?(?:expiration|renewal)",
				"written\\s+notice\\s+of\\s+cancellation\\s+(?:at\\s+least|no\\s+later\\s+than)\\s+(?:30|60)\\s+days\\s+before"
			],
			negativeExceptions: ["we will send you a notice 15 to 45 days prior", "renewal reminder will be sent in advance"],
			disputeTemplate: "Under Cal. Bus. & Prof. Code § 17602(a)(4), businesses with annual auto-renewals must provide clear written reminder notices between 15 and 45 days prior to the renewal date. Imposing strict advance cancellation windows without mandatory statutory reminder notices is unlawful."
		},
		{
			id: "CA-ARL-03",
			category: "UnconditionalGift",
			trapName: "Unlawful Renewal / Unconditional Gift Restitution",
			severity: "Unlawful",
			statutoryCitation: "Cal. Bus. & Prof. Code § 17603",
			statuteSummary: "In any case in which a business sends any goods, wares, merchandise, or services to a consumer under a continuous service agreement without first obtaining affirmative consent and complying with statutory disclosure and cancellation mandates, the goods or services shall for all purposes be deemed an unconditional gift to the consumer. The consumer may use or dispose of them without any obligation, and unauthorized charges are subject to complete restitution.",
			triggerPatterns: [
				"non-?refundable\\s+(?:upon|after)\\s+renewal",
				"no\\s+refunds\\s+(?:for|under)\\s+(?:any\\s+circumstances|partial\\s+terms|auto-renewals)",
				"all\\s+charges\\s+are\\s+final\\s+and\\s+non-?refundable"
			],
			negativeExceptions: ["subject to applicable statutory refund rights", "except where prohibited by law"],
			disputeTemplate: "Under Cal. Bus. & Prof. Code § 17603, any services or goods provided under an auto-renewal arrangement that fails to comply with California ARL mandates are deemed an unconditional gift. The consumer bears zero liability and is legally entitled to full restitution of all unauthorized renewal charges."
		},
		{
			id: "CA-ARL-04",
			category: "InconspicuousRenewal",
			trapName: "Failure to Present Terms in Visual Proximity",
			severity: "Watch",
			statutoryCitation: "Cal. Bus. & Prof. Code § 17602(a)(1)",
			statuteSummary: "Requires the automatic renewal offer terms to be presented in a clear and conspicuous manner in visual proximity to the request for consent to the offer before the subscription agreement is fulfilled.",
			triggerPatterns: ["by\\s+clicking\\s+[\"']?(?:i\\s+agree|continue|submit|sign\\s+up|order)[\"']?\\s+you\\s+agree\\s+to\\s+our\\s+terms\\s+of\\s+service", "terms\\s+of\\s+service\\s+(?:contain|include)\\s+(?:automatic\\s+renewal|recurring\\s+charges)"],
			negativeExceptions: ["separately displayed renewal terms", "stand-alone automatic renewal disclosure"],
			disputeTemplate: "Cal. Bus. & Prof. Code § 17602(a)(1) requires automatic renewal terms to be displayed clearly and conspicuously in direct visual proximity to the consent action, not hidden behind generic terms hyperlinks."
		}
	]
}, s = {
	$schema: "http://json-schema.org/draft-07/schema#",
	jurisdictionCode: "NY",
	jurisdictionName: "New York",
	statuteTitle: "New York Automatic Renewal Law",
	codification: "N.Y. Gen. Bus. Law § 527-a",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://www.nysenate.gov/legislation/laws/GBS/527-A",
	rules: [{
		id: "NY-ARL-01",
		category: "AsymmetricCancellation",
		trapName: "New York Online Cancellation Mechanism Violation",
		severity: "Unlawful",
		statutoryCitation: "N.Y. Gen. Bus. Law § 527-a(3)",
		statuteSummary: "A consumer who accepts an automatic renewal or continuous service offer online must be allowed to terminate the automatic renewal or continuous service exclusively online, which may include a termination email formatted and provided by the business that a consumer can send without additional information.",
		triggerPatterns: [
			"(?:must|required to)\\s+call\\s+(?:customer\\s+care|support|phone|representative)\\s+to\\s+cancel",
			"cancellations?\\s+(?:cannot|not\\s+accepted)\\s+(?:online|via\\s+email)",
			"cancel(?:lation)?\\s+(?:accepted\\s+only|submitted\\s+only)\\s+by\\s+(?:mail|phone)"
		],
		negativeExceptions: ["terminate exclusively online", "cancel directly in account settings"],
		disputeTemplate: "Under N.Y. Gen. Bus. Law § 527-a(3), New York consumers who enroll online must be provided an exclusive online cancellation mechanism. Refusing online cancellation is an explicit statutory violation."
	}, {
		id: "NY-ARL-02",
		category: "PreRenewalNotice",
		trapName: "Failure to Provide 15-to-30 Day Renewal Notice",
		severity: "Unlawful",
		statutoryCitation: "N.Y. Gen. Bus. Law § 527-a(2)",
		statuteSummary: "If an automatic renewal offer has an initial term of 12 months or longer and automatically renews for a term of more than one month, the business must provide clear and conspicuous written notice 15 to 30 days before the renewal date stating that the renewal will occur.",
		triggerPatterns: [
			"renews?\\s+automatically\\s+for\\s+(?:an\\s+additional\\s+)?(?:year|12\\s+months|annual\\s+term)",
			"annual\\s+subscription\\s+will\\s+auto-?renew\\s+without\\s+(?:written\\s+)?notice",
			"notice\\s+of\\s+cancellation\\s+(?:at\\s+least|no\\s+later\\s+than)\\s+(?:30|60)\\s+days\\s+prior"
		],
		negativeExceptions: ["notice 15 to 30 days prior to renewal", "written reminder will be provided"],
		disputeTemplate: "Under N.Y. Gen. Bus. Law § 527-a(2), contracts of 12 months or longer that auto-renew require formal written notice between 15 and 30 days in advance. Failure to send notice renders the renewal void and unenforceable under § 527-a(4)."
	}]
}, c = {
	$schema: "http://json-schema.org/draft-07/schema#",
	jurisdictionCode: "IL",
	jurisdictionName: "Illinois",
	statuteTitle: "Illinois Automatic Contract Renewal Act",
	codification: "815 ILCS 601/",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2361&ChapterID=67",
	rules: [{
		id: "IL-ACRA-01",
		category: "PreRenewalNotice",
		trapName: "Failure to Provide 30-to-60 Day Written Notice",
		severity: "Unlawful",
		statutoryCitation: "815 ILCS 601/10(b)",
		statuteSummary: "Any business that offers a contract with an automatic renewal clause for a term of 12 months or more must provide written notice to the consumer 30 to 60 days before the cancellation deadline or renewal date.",
		triggerPatterns: [
			"contract\\s+automatically\\s+renews?\\s+(?:for\\s+a\\s+period\\s+of\\s+12\\s+months|for\\s+one\\s+year)",
			"renew(?:s|al)\\s+(?:will\\s+occur|occurs)\\s+automatically\\s+unless\\s+cancelled\\s+prior",
			"renewed\\s+for\\s+successive\\s+(?:one-year|annual)\\s+periods"
		],
		negativeExceptions: ["notice 30 to 60 days before", "written notice will be sent 30 days prior"],
		disputeTemplate: "Under 815 ILCS 601/10(b), Illinois requires written disclosure 30 to 60 days before the renewal date for annual contracts. Failure to provide this notice invalidates automatic contract extension."
	}, {
		id: "IL-ACRA-02",
		category: "AsymmetricCancellation",
		trapName: "Illinois Online Cancellation Barrier",
		severity: "Unlawful",
		statutoryCitation: "815 ILCS 601/10(c)",
		statuteSummary: "A consumer who enters into an automatic renewal contract online must be allowed to terminate the contract online without requiring a phone call or in-person visit.",
		triggerPatterns: ["(?:must|required to)\\s+call\\s+(?:customer\\s+support|phone|representative)\\s+to\\s+cancel", "cancel(?:lation)?\\s+(?:only\\s+by|in\\s+person|by\\s+phone)"],
		negativeExceptions: ["terminate the contract online", "cancel online at any time"],
		disputeTemplate: "815 ILCS 601/10(c) mandates that Illinois consumers who subscribe online must be permitted to cancel online without telephonic or physical hurdles."
	}]
}, l = {
	$schema: "http://json-schema.org/draft-07/schema#",
	jurisdictionCode: "CO",
	jurisdictionName: "Colorado",
	statuteTitle: "Colorado Automatic Renewal Contracts Act",
	codification: "Colo. Rev. Stat. § 6-1-732",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://leg.colorado.gov/bills/hb21-1239",
	rules: [{
		id: "CO-ARCA-01",
		category: "AsymmetricCancellation",
		trapName: "Colorado Simple Online Cancellation Mandate",
		severity: "Unlawful",
		statutoryCitation: "Colo. Rev. Stat. § 6-1-732(2)(b)",
		statuteSummary: "Requires businesses to provide a simple, cost-effective, timely, and easy-to-use mechanism for cancellation. If entered into online, the business must provide a direct online cancellation mechanism, including a link or button on the website, within a customer portal, or an immediate pre-formatted email.",
		triggerPatterns: ["(?:must|required to)\\s+call\\s+(?:customer\\s+service|representative|phone)", "cancel(?:lation)?\\s+(?:accepted\\s+only|submitted\\s+only)\\s+by\\s+(?:mail|phone)"],
		negativeExceptions: ["direct cancellation link or button", "cancel online in your portal"],
		disputeTemplate: "Under Colo. Rev. Stat. § 6-1-732(2)(b), Colorado law mandates a direct online cancellation mechanism (such as a link or button) for online subscribers. Conditioning cancellation on phone calls is unlawful."
	}, {
		id: "CO-ARCA-02",
		category: "PreRenewalNotice",
		trapName: "Failure to Provide 25-to-40 Day Written Reminder",
		severity: "Unlawful",
		statutoryCitation: "Colo. Rev. Stat. § 6-1-732(2)(a)",
		statuteSummary: "For automatic renewal contracts with a term of one year or longer, the business must provide written notice 25 to 40 days before each renewal date detailing that the contract will renew unless cancelled, and instructions on how to cancel.",
		triggerPatterns: ["auto-?renews?\\s+annually\\s+unless\\s+cancelled", "renewed\\s+for\\s+an\\s+additional\\s+year\\s+without\\s+(?:written\\s+)?notice"],
		negativeExceptions: ["notice 25 to 40 days prior", "written notice will be sent 25 days before"],
		disputeTemplate: "Colo. Rev. Stat. § 6-1-732(2)(a) requires annual auto-renewal agreements to dispatch written reminders 25 to 40 days in advance. Failure to do so constitutes an deceptive trade practice."
	}]
}, u = {
	$schema: "http://json-schema.org/draft-07/schema#",
	jurisdictionCode: "DE",
	jurisdictionName: "Delaware",
	statuteTitle: "Delaware Automatic Renewal Protections",
	codification: "Del. Code Ann. tit. 6, § 2734",
	lastAudited: "2026-09-01",
	officialSourceUrl: "https://delcode.delaware.gov/title6/c027/sc02/index.html",
	rules: [{
		id: "DE-ARL-01",
		category: "InconspicuousRenewal",
		trapName: "Failure to Clearly and Conspicuously Disclose Renewal Terms",
		severity: "Unlawful",
		statutoryCitation: "Del. Code Ann. tit. 6, § 2734(a)",
		statuteSummary: "Any person that sells or offers consumer contracts with automatic renewal provisions must clearly and conspicuously disclose the renewal terms, including the recurring cost, length of renewal term, and cancellation procedure.",
		triggerPatterns: ["renews?\\s+automatically\\s+for\\s+(?:an\\s+additional\\s+)?term\\s+without\\s+notice", "renewed\\s+without\\s+further\\s+affirmative\\s+consent"],
		negativeExceptions: ["clearly disclosed renewal terms", "notice provided in advance"],
		disputeTemplate: "Under Del. Code Ann. tit. 6, § 2734(a), automatic renewal provisions must be clear and conspicuous. Failure to clearly present recurring terms renders the clause non-compliant."
	}, {
		id: "DE-ARL-02",
		category: "PreRenewalNotice",
		trapName: "Mandatory 30-to-60 Day Renewal Reminder Notice",
		severity: "Unlawful",
		statutoryCitation: "Del. Code Ann. tit. 6, § 2734(b)",
		statuteSummary: "Requires written notice between 30 and 60 days before the cancellation deadline for contracts of 12 months or longer.",
		triggerPatterns: ["contracts?\\s+(?:for\\s+12\\s+months|annual\\s+term).*auto-?renews?", "successive\\s+(?:one-year|12-month)\\s+terms\\s+without\\s+written\\s+notice"],
		negativeExceptions: ["notice 30 to 60 days in advance", "written reminder sent before renewal"],
		disputeTemplate: "Under Del. Code Ann. tit. 6, § 2734(b), automatic renewal contracts of 12 months or longer require clear written notice 30 to 60 days before renewal."
	}]
}, d = /* @__PURE__ */ e({
	ALL_POLICY_PACKS: () => g,
	COMPILED_POLICY_RULES: () => y,
	STATUTE_CATALOG: () => E,
	californiaData: () => x,
	coloradoData: () => w,
	compileDeclarativeRule: () => _,
	compilePolicyPack: () => v,
	delawareData: () => T,
	euCrdPack: () => h,
	ftcData: () => b,
	illinoisData: () => C,
	newYorkData: () => S,
	stateArlPack: () => p,
	ukDmccPack: () => m,
	usFederalPack: () => f
}), f = t, p = n, m = r, h = i, g = [
	f,
	p,
	m,
	h
];
function _(e) {
	return {
		id: e.id,
		title: e.title,
		category: e.category,
		classification: e.classification,
		severity: e.severity,
		statute: e.statute,
		patterns: e.patterns.map((e) => new RegExp(e, "i")),
		explanation: e.explanation,
		recommendation: e.recommendation
	};
}
function v(e) {
	return e.rules.map(_);
}
var y = g.flatMap(v), b = a, x = o, S = s, C = c, w = l, T = u, E = {
	FTC: b,
	CA: x,
	NY: S,
	IL: C,
	CO: w,
	DE: T
};
//#endregion
export { w as a, T as c, C as d, S as f, f as g, m as h, x as i, h as l, d as m, y as n, _ as o, p, E as r, v as s, g as t, b as u };

//# sourceMappingURL=subscriptions-CD8Xn3Yr.js.map