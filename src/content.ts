// All copy for the ClearPath site. Layout lives in src/sections.

export const brand = {
  name: 'ClearPath',
  company: 'Denovo Credit',
  maker: 'Innotel Labs',
  phone: '(774) 505-7135',
  phoneHref: 'tel:7745057135',
  site: 'https://denovocredit.com',
  tagline: 'Business credit, built on purpose',
}

export const nav = {
  links: [
    { label: 'Programs', href: '#programs' },
    { label: 'The build', href: '#ladder' },
    { label: 'Readiness check', href: '#readiness' },
    { label: 'Pricing', href: '#pricing' },
  ],
  signIn: { label: 'Client login', href: '#' },
  cta: { label: 'Check readiness', href: '#readiness' },
}

export const hero = {
  badge: 'New program: Business Credit Build',
  title: ['Build business credit', 'that stands on its own'],
  highlight: 'stands on its own',
  description:
    "ClearPath by Denovo Credit builds commercial credit profiles for founders — entity, DUNS, reporting tradelines and funding readiness — so your company borrows on its own name. Denovo's personal credit repair program is still here when you need it.",
  primary: { label: 'Check my readiness', href: '#readiness' },
  secondary: { label: 'See the build ladder', href: '#ladder' },
  footnote: 'Free 2-minute check · No credit pull · No obligation',
}

export const programs = {
  eyebrow: 'Two programs, one team',
  title: 'Fix the personal file. Build the business file.',
  description:
    'Most founders need both, but they are not the same product, the same bureaus or the same timeline. We staff them separately and say so in writing.',
  items: [
    {
      key: 'personal',
      name: 'Personal Credit Repair',
      status: 'Existing program',
      blurb:
        'The work ClearPath is known for: accurate, documented challenges to the consumer bureaus under CROA, reviewed with you every month.',
      points: [
        'Equifax, Experian and TransUnion',
        'Documented disputes and goodwill requests',
        'Inquiry and collection strategy',
        'Monthly progress review with your specialist',
      ],
      note: 'Separate agreement, from $99/mo',
    },
    {
      key: 'business',
      name: 'Business Credit Build',
      status: 'New program',
      blurb:
        'A commercial profile your company owns: a clean foundation, vendor accounts that report, and bank lines sized to real revenue.',
      points: [
        'Entity, EIN, DUNS and compliance setup',
        'Tiered vendor tradelines that actually report',
        'PAYDEX, Intelliscore and Payment Index tracking',
        'Lender-ready package for real funding',
      ],
      note: 'Setup + monthly, from $297',
      featured: true,
    },
  ],
  bundle: 'Run both programs and the monthly fee on the program you started first drops by $50.',
}

export const included = {
  eyebrow: 'What we actually do',
  title: 'The unglamorous work that moves a business file',
  description:
    'No secret lender lists and no shortcuts. Just the foundation, the accounts and the reporting discipline underwriters look for.',
  items: [
    {
      key: 'foundation',
      title: 'Entity and compliance foundation',
      description:
        'LLC or corporation on file, EIN, DUNS, a 411-listed phone, a commercial address and the licences your state wants to see.',
      span: 2,
    },
    {
      key: 'tradelines',
      title: 'Vendor accounts that report',
      description:
        'Net-30 suppliers and retail accounts chosen because they report to the commercial bureaus — not because they pay us a referral.',
      span: 1,
    },
    {
      key: 'monitoring',
      title: 'All three business bureaus',
      description: 'D&B, Experian Business and Equifax Business pulled and read every month, in plain English.',
      span: 1,
    },
    {
      key: 'funding',
      title: 'Funding readiness, not a promise',
      description:
        'We prepare the file underwriters ask for — statements, revenue, tradeline age — and we tell you honestly when you are not ready yet.',
      span: 2,
    },
  ],
}

export const ladder = {
  eyebrow: 'The build ladder',
  title: 'Four stages, in the order underwriters read them',
  description: 'Anyone selling you a card in week one is skipping the part that makes the card possible.',
  stages: [
    {
      tier: 'Stage 0',
      name: 'Foundation',
      window: 'Days 1–30',
      summary: 'The company has to exist correctly before it can borrow.',
      items: [
        'Entity filed, or a compliance review of the one you have',
        'EIN and a business bank account in the entity name',
        'DUNS number and bureau files opened',
        'Commercial address, 411 phone line and NAICS code',
      ],
      reports: 'Opens files at D&B, Experian Business and Equifax Business',
    },
    {
      tier: 'Tier 1',
      name: 'Starter vendor accounts',
      window: 'Days 30–60',
      summary: 'Small net-30 invoices, paid early, to create a payment record.',
      items: [
        'Three to five net-30 suppliers that report',
        'Orders sized at $50–$250, not vanity spending',
        'Autopay set ten days before the due date',
        'First PAYDEX movement inside 60 days',
      ],
      reports: 'Payment experiences appear on all three commercial bureaus',
    },
    {
      tier: 'Tier 2',
      name: 'Retail and revolving',
      window: 'Days 60–120',
      summary: 'Store and fuel accounts that add revolving depth and higher limits.',
      items: [
        'Office supply and hardware accounts',
        'Business fuel cards for spend you already have',
        'Limits requested on revenue, not on hope',
        'Utilisation held under 30%',
      ],
      reports: 'Revolving tradelines, higher limits, stronger file age',
    },
    {
      tier: 'Tier 3',
      name: 'Bank and cash lines',
      window: 'Months 5–9',
      summary: 'Bank cards and lines priced off the file you just built.',
      items: [
        'No-PG business cards where the profile qualifies',
        'Bank line of credit applications',
        'Term loan and SBA readiness review',
        'Full lender package assembled with you',
      ],
      reports: 'Bank tradelines, then commercial underwriting',
    },
  ],
  note: 'Timelines assume clean entity documents and on-time payments. A slipped payment pushes every stage back.',
}

export const assessment = {
  eyebrow: 'Readiness check',
  title: 'Where does your business actually stand?',
  description:
    'Seven questions, no credit pull, nothing stored. You get a readiness score, the gaps that matter most and the stage we would start you at.',
  questions: [
    {
      id: 'entity',
      short: 'Entity',
      label: 'How is the business set up?',
      options: [
        { label: 'LLC or corporation, active', value: 3 },
        { label: 'Sole proprietor or DBA', value: 1 },
        { label: 'Not formed yet', value: 0 },
      ],
    },
    {
      id: 'ein',
      short: 'EIN',
      label: 'Do you have an EIN in the business name?',
      options: [
        { label: 'Yes, and I have the letter', value: 2 },
        { label: 'No, I use my SSN', value: 0 },
      ],
    },
    {
      id: 'bank',
      short: 'Business bank',
      label: 'Is there a business bank account in the entity name?',
      options: [
        { label: 'Yes, six months or more', value: 2 },
        { label: 'Yes, opened recently', value: 1 },
        { label: 'No, personal account only', value: 0 },
      ],
    },
    {
      id: 'identity',
      short: 'Address & phone',
      label: 'Commercial address and a 411-listed phone?',
      options: [
        { label: 'Both, in the business name', value: 2 },
        { label: 'Address only, phone is a cell', value: 1 },
        { label: 'Neither yet', value: 0 },
      ],
    },
    {
      id: 'personal',
      short: 'Owner credit',
      label: 'Owner personal credit score, roughly?',
      options: [
        { label: '720 or higher', value: 3 },
        { label: '660–719', value: 2 },
        { label: '580–659', value: 1 },
        { label: 'Below 580 or unknown', value: 0 },
      ],
    },
    {
      id: 'tradelines',
      short: 'Tradelines',
      label: 'How many business tradelines report today?',
      options: [
        { label: 'Five or more', value: 3 },
        { label: 'Two to four', value: 2 },
        { label: 'One', value: 1 },
        { label: 'None', value: 0 },
      ],
    },
    {
      id: 'age',
      short: 'Age & revenue',
      label: 'Time in business and annual revenue?',
      options: [
        { label: '2+ years, $250k+', value: 3 },
        { label: '1–2 years, $100k+', value: 2 },
        { label: 'Under a year, under $100k', value: 1 },
        { label: 'Pre-revenue', value: 0 },
      ],
    },
  ],
  bands: [
    {
      min: 0,
      max: 5,
      label: 'Foundation first',
      plan: 'Launch',
      verdict:
        'Nothing is reporting yet, which is normal for a new company. The next 30 days decide the next 12 months.',
      actions: [
        'File or confirm the entity and get the EIN',
        'Open the business bank account and request a DUNS',
        'Start personal repair in parallel if owner scores are under 660',
      ],
    },
    {
      min: 6,
      max: 10,
      label: 'Buildable in one quarter',
      plan: 'Builder',
      verdict:
        'The company exists and banks correctly. What is missing is reporting depth, which is the part we build.',
      actions: [
        'Open three net-30 vendor accounts that report',
        'Get listed correctly at all three commercial bureaus',
        'Hold utilisation under 30% on everything new',
      ],
    },
    {
      min: 11,
      max: 14,
      label: 'Nearly underwriting-ready',
      plan: 'Funded',
      verdict:
        'The foundation is real and some history exists. The gap is tier-2 depth and the documentation lenders ask for.',
      actions: [
        'Add two revolving accounts and request limit increases',
        'Pull all three bureau files and correct the errors',
        'Assemble the lender package before applying anywhere',
      ],
    },
    {
      min: 15,
      max: 18,
      label: 'Funding-ready profile',
      plan: 'Funded',
      verdict:
        'Most founders never get here. Your job now is sizing and sequencing, not building from scratch.',
      actions: [
        'Request increases on quiet, well-aged accounts',
        'Apply for a no-PG bank card before any term loan',
        'Keep PAYDEX at 80 and document every payment',
      ],
    },
  ],
}

export const steps = {
  eyebrow: 'How it works',
  title: 'Four steps, one file',
  items: [
    {
      title: 'Apply and qualify',
      description:
        'A 20-minute call and three documents. You get an honest read on where you stand. If we cannot help, we say so.',
    },
    {
      title: 'Foundation sprint',
      description: 'Entity, EIN, DUNS, address, phone and bank account handled in the first 30 days.',
    },
    {
      title: 'Tradeline build',
      description: 'The right accounts in the right order, with payment discipline tracked every month.',
    },
    {
      title: 'Funding review',
      description: 'When the file is ready we package it and go to lenders with you — not instead of you.',
    },
  ],
}

export const metrics = [
  { value: 3, decimals: 0, suffix: '', label: 'Business bureaus we track' },
  { value: 4, decimals: 0, suffix: '', label: 'Stages in the build' },
  { value: 5, decimals: 0, suffix: '+', label: 'Reporting tradelines targeted' },
  { value: 90, decimals: 0, suffix: ' days', label: 'To your first reporting accounts' },
]

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Setup, then a monthly retainer',
  description:
    'The setup fee covers foundation work. The monthly fee covers opening accounts, reading your bureau files and keeping the build on schedule. Personal credit repair stays its own line item.',
  note: 'Month to month, cancel any time. No guarantee of a specific score, limit or approval — anyone who guarantees one is guessing.',
  tiers: [
    {
      name: 'Launch',
      setup: 297,
      monthly: 99,
      description: 'For new companies that need the foundation done right.',
      cta: 'Start with Launch',
      features: [
        'Entity and compliance review',
        'EIN, DUNS and bureau file setup',
        'Commercial address and 411 phone',
        'Business bank account guidance',
        'Two starter tradelines',
        'Monthly bureau check-in',
      ],
    },
    {
      name: 'Builder',
      setup: 597,
      monthly: 197,
      description: 'For companies with a foundation that need reporting depth.',
      cta: 'Start with Builder',
      popular: true,
      features: [
        'Everything in Launch',
        'Five reporting vendor accounts, sourced and managed',
        'Tier 2 retail and fuel accounts',
        'D&B, Experian and Equifax monitoring',
        'Monthly strategy call',
        'Payment-discipline tracking',
      ],
    },
    {
      name: 'Funded',
      setup: 997,
      monthly: 347,
      description: 'For owners going to lenders inside six to nine months.',
      cta: 'Talk to a strategist',
      features: [
        'Everything in Builder',
        'Tier 3 bank card and line applications',
        'Lender-ready documentation package',
        'Underwriting prep sessions',
        'Dedicated strategist',
        'Term loan and SBA readiness review',
      ],
    },
  ],
  addon: {
    label: 'Personal credit repair',
    price: '$99/mo',
    note: 'Bundle with any business program and save $50/mo on the first program.',
  },
}

export const faq = {
  title: 'Questions, answered plainly',
  items: [
    {
      q: 'Is business credit building the same as credit repair?',
      a: 'No. Personal credit repair is consumer work regulated under CROA, with its own agreement and disclosures. Business credit building is commercial profile development: entity records, vendor tradelines and bureau files in the company name. We run both, but they are separate engagements.',
    },
    {
      q: 'Can you guarantee I will be approved?',
      a: 'No, and nobody honestly can. Underwriters price their own risk. What we control is the foundation, the accuracy of your reporting and the order in which you apply. Any company guaranteeing a limit, a score or an approval is guessing with your money.',
    },
    {
      q: 'How long does it take to build a business credit file?',
      a: 'Plan on six to twelve months from a clean entity to a fundable profile. Your first reporting vendor accounts usually land within 90 days. Bank lines and larger limits come after that history exists.',
    },
    {
      q: 'Does my personal credit still matter?',
      a: 'Yes. Bank lines and most cards carry a personal guarantee, so the owner score is still read. If it is weak we work on the personal file in parallel instead of pretending it is irrelevant.',
    },
    {
      q: 'Can I use a virtual mailbox as my business address?',
      a: 'A registered agent is fine and often required. A virtual mailbox usually will not survive underwriting, because the bureau and the lender both want a real commercial address tied to the entity. We set up an address that holds up.',
    },
    {
      q: 'What if I have not formed the company yet?',
      a: 'You start at the foundation stage. Entity, EIN and bank account come first — no tradeline work happens before those exist, because none of it would report correctly.',
    },
    {
      q: 'What documents do you need from me?',
      a: 'Formation documents, the EIN letter (CP-575), three months of business bank statements, any licences your trade requires, and a government ID for the guarantor.',
    },
    {
      q: 'Am I locked into a contract?',
      a: 'No. Business programs are month to month and you can cancel from your client portal. Setup fees cover work already performed and are not refundable once foundation work begins.',
    },
  ],
}

export const cta = {
  eyebrow: 'Next step',
  title: 'Find out what your business can borrow on',
  description:
    'Send the basics and a strategist reviews your file, then calls you within one business day. No credit pull, no obligation, no pressure.',
  button: 'Request my review',
  success: 'Request received. A Denovo strategist will call within one business day.',
  interests: ['Business credit build', 'Personal credit repair', 'Both programs'],
}

export const footer = {
  blurb:
    "ClearPath is Denovo Credit's credit platform, built by Innotel Labs. Personal credit repair and audits since 1999, and now a business credit build for founders who want the company to carry its own weight.",
  columns: [
    {
      title: 'Programs',
      links: ['Personal Credit Repair', 'Business Credit Build', 'Funding Readiness', 'Pricing'],
    },
    { title: 'Company', links: ['About Denovo', 'Our team', 'Results', 'Contact', 'Careers'] },
    { title: 'Resources', links: ['Credit education', 'Business credit guide', 'FAQ', 'Client login'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Disclosures', 'CCPA notice'] },
  ],
  legal: `© ${new Date().getFullYear()} Denovo Credit Corporation. ClearPath is a platform by Denovo Credit, built by Innotel Labs.`,
  disclaimer:
    'Denovo Credit Corporation provides credit repair and business credit consulting services through ClearPath, a platform built by Innotel Labs. We do not guarantee any specific score, credit limit or approval; outcomes vary by profile and payment history. Business credit programs are commercial consulting engagements and are separate from consumer credit repair services.',
}
