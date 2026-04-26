import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  Compass,
  FlaskConical,
  Gauge,
  Handshake,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const navItems = [
  ['Executive Summary', 'executive-summary'],
  ['Pharma Landscape', 'pharma-landscape'],
  ['Why Cursor Wins', 'why-cursor-wins'],
  ['30-60-90 Plan', 'execution-plan'],
  ['Pipeline Growth', 'pipeline-growth'],
  ['Success Metrics', 'success-metrics'],
]

const kpis = [
  { value: '4x', label: 'Pipeline Coverage by Day 90', icon: BarChart3 },
  { value: '1', label: 'Pilot Running or Formally Proposed', icon: Rocket },
  { value: '3+', label: 'Stakeholders Mapped Per Named Account', icon: Network },
]

const executiveCards = [
  {
    title: 'Learn the Product and the Market',
    text: "In the first 30 days, I will earn the right to sell by developing deep product fluency, understanding Cursor's enterprise motion, and learning how engineering teams inside pharma actually work.",
    icon: BrainCircuit,
  },
  {
    title: 'Create Technical and Executive Engagement',
    text: 'By day 60, I will be in active discovery with engineering leaders, identify existing Cursor users, map champions, and qualify opportunities using MEDDPICC.',
    icon: Users,
  },
  {
    title: 'Build Pipeline and Advance Enterprise Deals',
    text: 'By day 90, I will focus energy on the highest-signal accounts, move one account toward a structured pilot or proof of value, and establish clear next steps across every named account.',
    icon: Target,
  },
]

const landscapeCards = [
  {
    title: 'Massive, Expensive Engineering Teams',
    icon: Building2,
    bullets: [
      'Top 20 pharmaceutical companies each employ 2,000 to 10,000+ software engineers',
      'Developer time costs $150 to $250 per hour fully loaded',
      'Any productivity gain compounds rapidly across large teams',
      'R&D timelines are under intense pressure',
      'Speed to code is speed to cure',
    ],
  },
  {
    title: 'Regulated but Not Immune to Innovation',
    icon: ShieldCheck,
    bullets: [
      'GxP, 21 CFR Part 11, SOX, and HIPAA create compliance overhead',
      'Compliance is not a barrier to AI tooling when implemented correctly',
      'Validation requirements create demand for accurate, well-documented code generation',
      'IT leaders are under CTO mandate to modernize without compromising audit trails',
    ],
  },
  {
    title: 'Fragmented, High-Volume Codebase Complexity',
    icon: Layers3,
    bullets: [
      'Bioinformatics pipelines, clinical trial platforms, ERP integrations, and IoT stacks run in parallel',
      'Legacy code debt is significant',
      "Cursor's codebase awareness is suited for layered enterprise environments",
      'Multi-cloud and on-prem hybrid setups create constant context-switching pain',
    ],
  },
]

const winCards = [
  {
    title: 'Proven Enterprise Scale',
    icon: Gauge,
    bullets: [
      'Used by more than 50% of the Fortune 500',
      'Used by 50,000+ businesses globally as of early 2026',
      '$2B+ ARR by February 2026',
      '$29.3B valuation',
      'Deployed by companies such as Salesforce, NVIDIA, Adobe, and Uber',
    ],
  },
  {
    title: 'Built for Complex Codebases',
    icon: Code2,
    bullets: [
      'Cursor understands entire repositories, not just the open file',
      "This matters for pharma's layered systems and legacy environments",
      'Cursor edits code directly in context',
      'Reduces copy-paste work and context switching',
    ],
  },
  {
    title: 'Workflow-Native AI',
    icon: Workflow,
    bullets: [
      'Composer is designed around real engineering workflows',
      'Helps accelerate code generation, debugging, refactoring, documentation, and modernization',
      'Fits the way engineering teams actually build software',
    ],
  },
  {
    title: 'Champion-Driven Adoption',
    icon: Handshake,
    bullets: [
      'Developers adopt Cursor individually',
      'Champions validate value before IT procurement gets involved',
      'Bottom-up adoption creates a natural land-and-expand motion',
      'My job is to identify, support, and scale those champions',
    ],
  },
]

const planTabs = [
  {
    id: '30',
    label: '30 Days',
    title: 'Learn, Listen, and Map the Terrain',
    objective:
      'Earn the right to sell by achieving deep product fluency and understanding how Cursor creates value inside pharma engineering workflows.',
    bullets: [
      'Learn to explain Cursor inside pharma workflows, including clinical data pipelines, bioinformatics, regulatory submission tools, and internal R&D platforms',
      'Study Cursor pricing, seat tiers, consumption, and enterprise licensing',
      'Understand how comparable enterprise life sciences deals have been structured',
      'Build strong internal alignment with Solutions Engineering, Customer Success, SDRs, and leadership',
      'Shadow calls and understand the journey from individual developer adoption to enterprise contract',
      'Identify channel and technology partners already embedded inside target pharma accounts',
      'Build a tiered account plan for named accounts',
      'Map VP, Director, engineering, platform, security, procurement, and developer stakeholders',
      'Schedule at least one intro call or warm conversation for each target account before day 30',
    ],
    outcomes: [
      'Product fluency established',
      'Target account maps built',
      'Internal operating rhythm established',
      'Warm conversations started across named accounts',
    ],
  },
  {
    id: '60',
    label: '60 Days',
    title: 'Get in Front of Builders and Start Qualifying',
    objective:
      'Land technical discovery, identify champions, and begin converting account research into qualified enterprise opportunities.',
    discovery: [
      'What languages and frameworks are your teams using most often?',
      'Which internal platforms are most actively developed?',
      'Where are engineers spending the most time on repetitive, low-value code work?',
      'What does the developer experience look like today?',
      'Where is the current developer workflow broken?',
      'How do you evaluate AI coding tools in a regulated environment?',
      'What would need to be true for Cursor to become an enterprise standard?',
    ],
    bullets: [
      'Land discovery calls with at least one technical or engineering leader in each named account',
      'Map the technical environment before pitching',
      'Identify active Cursor users inside each account',
      'Connect with practitioner champions and understand their workflows',
      'Give champions a path to internal advocacy',
      'Apply MEDDPICC rigorously',
      'Map economic buyer, technical champion, decision criteria, decision process, paper process, pain, and competition',
      'Build rough deal size and timeline for each active opportunity',
      'Log and forecast all activity with discipline',
    ],
    outcomes: [
      'At least one active discovery underway per account',
      'Minimum three stakeholders mapped per account',
      'Champions identified',
      'Rough deal size and timeline created',
      'MEDDPICC qualification started',
    ],
  },
  {
    id: '90',
    label: '90 Days',
    title: 'Build Pipeline and Drive Toward Enterprise Contracts',
    objective:
      'Concentrate energy on highest-signal accounts and move the best opportunity toward a structured pilot or proof of value.',
    bullets: [
      'Identify which accounts are ready to move and which require continued nurturing',
      'Push the most advanced account toward a structured pilot or proof of value',
      'Lock in Solutions Engineering support',
      'Co-create success criteria with the champion',
      'Define compliance, security, and validation requirements upfront',
      'Maintain biweekly cadence with all other accounts',
      'Bring useful value to every touchpoint, including case studies, workflow benchmarks, and peer stories',
      'Build executive alignment at the two most advanced accounts',
      'Connect developer productivity gains to business metrics',
      'Show impact on faster drug discovery cycles, reduced time to deployment, and lower engineering cost per feature',
      'Contribute to internal deal reviews',
      'Share life sciences learnings with the broader Cursor team',
      'Establish myself as the go-to voice on life sciences enterprise selling',
    ],
    outcomes: [
      '4x pipeline coverage of quota',
      'At least 50% of pipeline at Stage 2 or beyond',
      'One pilot running or formally proposed',
      'Clear next steps documented for every named account',
      'Executive alignment started in the two most advanced accounts',
    ],
  },
]

const motions = [
  {
    title: 'Direct Outbound',
    icon: Compass,
    bullets: [
      'Build named account plans for named strategic pharma accounts ex. Eli Lilly, J&J, Pfizer, and Merck',
      'Focus on large engineering organizations with complex codebases and active digital transformation mandates',
      'Map six to eight personas per account',
      'Target CTO, VP Engineering, Director of Platform, Head of Developer Experience, Security, Procurement, and practitioner champions',
      'Lead with a clear POV: "Your engineers are spending meaningful time on work Cursor can accelerate, and your competitors are already exploring AI-native development."',
      'Run high-quality targeted outreach tied to triggers',
      'Triggers include new CTO hires, platform modernization announcements, R&D expansion, developer conference activity, cloud migration, AI strategy announcements, and hiring spikes',
      'Anchor every message in business value, not product features',
      "Drive toward a working session or workflow demonstration in the customer's own environment",
    ],
  },
  {
    title: 'Product-Led Signal and Champion Development',
    icon: Activity,
    bullets: [
      "Use Cursor's PLG motion as an inbound pipeline signal",
      'Identify accounts with existing Cursor users',
      'Engage individual practitioners already using Cursor',
      'Validate workflow wins',
      'Help champions tell the story internally',
      'Convert champion activity into pilots and enterprise scoping sessions',
      'Use champion credibility to open the enterprise door',
      'Position myself as a problem-solver and trusted advisor, not just a quota-carrying rep',
      'Use real pharma workflow examples, including bioinformatics pipeline debugging, clinical data tooling, regulatory documentation automation, and legacy code modernization',
    ],
  },
  {
    title: 'Existing Customers and Champions',
    icon: Users,
    bullets: [
      'Run structured account reviews at every existing customer',
      'Identify expansion signals such as new engineering teams, new data platforms, and new R&D initiatives',
      'Drive land-and-expand across business units',
      'Use one champion in bioinformatics to create conversations in clinical tech, regulatory affairs engineering, and manufacturing automation',
      'Turn customers into internal advocates, case study contributors, and peer references',
      'Ask champions for warm peer introductions',
      'Partner closely with Customer Success to identify expansion signals, health scores, and churn risk',
    ],
  },
  {
    title: 'Marketing and Industry Events',
    icon: LineChart,
    bullets: [
      'Treat events as pipeline engines, not brand plays',
      'Target BioIT World, HIMSS Life Sciences, DPharm, AWS and Azure life sciences events, and developer-focused cloud conference tracks',
      'Pre-book eight to twelve meetings with named target contacts before every event',
      'Avoid cold badge scanning',
      'Lead with the hook: "How much of your engineering team\'s time is spent on work that an AI pair programmer could accelerate today?"',
      'Convert quality conversations within 48 hours',
      'Drive next steps into demos, workflow sessions, or pilot scoping calls',
      'Supplement with small executive dinners for CTOs and VP Engineering leaders',
    ],
  },
  {
    title: 'Partners',
    icon: Handshake,
    bullets: [
      'Focus on partners with reach inside top-tier pharma',
      'Target global SIs such as Accenture, Deloitte, and Cognizant',
      'Target cloud hyperscalers such as AWS and Azure with life sciences practices',
      'Target specialist life sciences consulting firms',
      'Build joint account plans around digital transformation and R&D modernization',
      'Enable partners with the message: "Cursor gives pharma clients measurable productivity return quickly, with no rip-and-replace and minimal onboarding friction."',
      'Hold partners accountable to pipeline creation, not just deal support',
      'Define shared targets by account and review progress monthly',
      'Prioritize partners already embedded in GxP-compliant environments',
    ],
  },
]

const metricCards = [
  'Day 30: Account maps completed',
  'Day 30: At least one warm intro or conversation per named account',
  'Day 60: One active discovery per account',
  'Day 60: Three or more stakeholders mapped per account',
  'Day 60: Champions identified',
  'Day 90: 4x pipeline coverage',
  'Day 90: 50% of pipeline at Stage 2 or beyond',
  'Day 90: One pilot running or formally proposed',
]

const funnelData = [
  { name: 'Target Accounts', value: 8 },
  { name: 'Active Conversations', value: 8 },
  { name: 'Qualified Opportunities', value: 5 },
  { name: 'Stage 2+', value: 3 },
  { name: 'Pilot / POV', value: 1 },
]

const chartColors = ['#9b8cff', '#7ca7ff', '#91e2ff', '#c9c2ff', '#ffffff']

function App() {
  const [activeTab, setActiveTab] = useState('30')
  const [expandedLandscape, setExpandedLandscape] = useState(0)
  const [openMotion, setOpenMotion] = useState(0)
  const currentPlan = useMemo(
    () => planTabs.find((tab) => tab.id === activeTab),
    [activeTab],
  )

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(155,140,255,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(124,167,255,0.11),transparent_30%)]" />
      <Nav />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 lg:px-10">
        <Hero />
        <Section id="executive-summary" eyebrow="Section 01" title="Executive Summary" icon={Sparkles}>
          <div className="grid gap-5 md:grid-cols-3">
            {executiveCards.map((card, index) => (
              <PremiumCard key={card.title} delay={index * 0.08}>
                <IconPill icon={card.icon} />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{card.text}</p>
              </PremiumCard>
            ))}
          </div>
        </Section>

        <Section id="pharma-landscape" eyebrow="Section 02" title="Pharma Engineering Landscape" icon={FlaskConical}>
          <div className="grid gap-5 lg:grid-cols-3">
            {landscapeCards.map((card, index) => (
              <ExpandableCard
                key={card.title}
                card={card}
                isOpen={expandedLandscape === index}
                onToggle={() => setExpandedLandscape(expandedLandscape === index ? -1 : index)}
              />
            ))}
          </div>
        </Section>

        <Section id="why-cursor-wins" eyebrow="Section 03" title="Why Cursor Wins in Pharma" icon={Code2}>
          <div className="grid gap-5 md:grid-cols-2">
            {winCards.map((card, index) => (
              <PremiumCard key={card.title} delay={index * 0.06}>
                <div className="flex items-center gap-4">
                  <IconPill icon={card.icon} />
                  <h3 className="text-xl font-semibold tracking-tight text-white">{card.title}</h3>
                </div>
                <BulletList items={card.bullets} className="mt-6" />
              </PremiumCard>
            ))}
          </div>
        </Section>

        <Section id="execution-plan" eyebrow="Section 04" title="30-60-90 Day Plan" icon={Target}>
          <div className="rounded-[2rem] border border-white/10 bg-[#111319]/80 p-3 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="grid gap-2 rounded-[1.5rem] border border-white/8 bg-black/20 p-2 sm:grid-cols-3">
              {planTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-2xl px-5 py-4 text-sm font-medium transition ${
                    activeTab === tab.id ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-2xl border border-purple-300/20 bg-purple-400/10"
                    />
                  )}
                  <span className="relative">{tab.label}</span>
                </button>
              ))}
            </div>
            <motion.div
              key={currentPlan.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="grid gap-8 p-5 lg:grid-cols-[1.15fr_0.85fr] lg:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                  {currentPlan.label}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{currentPlan.title}</h3>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">Objective</p>
                  <p className="mt-3 leading-7 text-slate-300">{currentPlan.objective}</p>
                </div>
                {currentPlan.discovery && (
                  <div className="mt-5 rounded-2xl border border-blue-300/15 bg-blue-400/[0.05] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                      Discovery Questions
                    </p>
                    <BulletList items={currentPlan.discovery} className="mt-4" />
                  </div>
                )}
                <BulletList items={currentPlan.bullets} className="mt-6 columns-1 gap-8 xl:columns-2" />
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-black/25 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/8 p-2 text-purple-200">
                    <Check size={18} />
                  </div>
                  <h4 className="font-semibold text-white">{currentPlan.label} Outcomes</h4>
                </div>
                <div className="mt-6 space-y-3">
                  {currentPlan.outcomes.map((outcome, index) => (
                    <motion.div
                      key={outcome}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="rounded-2xl border border-white/8 bg-white/[0.035] p-4 text-sm leading-6 text-slate-200"
                    >
                      {outcome}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section id="pipeline-growth" eyebrow="Section 05" title="Pipeline Growth Strategy" icon={Rocket}>
          <div className="space-y-4">
            {motions.map((motionItem, index) => (
              <AccordionItem
                key={motionItem.title}
                item={motionItem}
                index={index}
                isOpen={openMotion === index}
                onToggle={() => setOpenMotion(openMotion === index ? -1 : index)}
              />
            ))}
          </div>
        </Section>

        <Section id="success-metrics" eyebrow="Section 06" title="Success Metrics" icon={BarChart3}>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {metricCards.map((metric, index) => (
                <motion.div
                  key={metric}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.03 }}
                  className="group rounded-2xl border border-white/10 bg-[#111319]/80 p-4 transition hover:border-purple-300/30 hover:bg-[#151823]"
                >
                  <div className="flex items-start gap-3">
                    <CircleDot className="mt-0.5 text-purple-200" size={16} />
                    <p className="text-sm leading-6 text-slate-200">{metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <PremiumCard className="min-h-[430px]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                    Sample Funnel
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Pipeline Progression</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  Day 90 target state
                </div>
              </div>
              <div className="mt-8 h-[310px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={funnelData} layout="vertical" margin={{ left: 18, right: 28, top: 8, bottom: 8 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" horizontal={false} />
                    <XAxis type="number" hide domain={[0, 8]} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={148}
                      tick={{ fill: '#cbd5e1', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: 'rgba(155,140,255,0.08)' }}
                      contentStyle={{
                        background: '#111319',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '14px',
                        color: '#fff',
                      }}
                    />
                    <Bar dataKey="value" radius={[0, 12, 12, 0]} barSize={28}>
                      {funnelData.map((entry, index) => (
                        <Cell key={entry.name} fill={chartColors[index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </PremiumCard>
          </div>
        </Section>

        <ClosingSection />
      </div>
    </main>
  )
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090b]/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/12 bg-white/[0.06]">
            <LockKeyhole size={17} className="text-purple-200" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Cursor Sales OS</p>
            <p className="text-xs text-slate-500">Life Sciences Command Center</p>
          </div>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#execution-plan"
          className="group inline-flex items-center gap-2 rounded-full border border-purple-200/20 bg-purple-300/10 px-4 py-2 text-sm font-medium text-purple-100 transition hover:border-purple-200/40 hover:bg-purple-300/15"
        >
          View Plan
          <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative grid min-h-[calc(100vh-7rem)] items-center py-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(196,181,253,0.9)]" />
            Strategic enterprise sales role for life sciences and pharma
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            David Gutshall | Cursor Enterprise Sales Operating System
          </h1>
          <div className="mt-8 grid gap-3 text-sm font-medium text-slate-300 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
              Prepared for John Vaugh, VP Enterprise Sales
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
              Presentation: David Gutshall
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            This plan outlines how I would quickly build product fluency, map strategic life sciences accounts,
            identify active Cursor champions, create qualified pipeline, and convert bottom-up developer adoption
            into enterprise expansion.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-[#111319]/80 p-5 shadow-2xl shadow-black/40"
        >
          <div className="rounded-[1.5rem] border border-white/8 bg-black/25 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">Operating Model</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Command Center</h2>
              </div>
              <div className="rounded-full border border-blue-200/20 bg-blue-300/10 px-3 py-1 text-xs text-blue-100">
                Day 0 to 90
              </div>
            </div>
            <div className="mt-7 space-y-4">
              {['Product fluency', 'Account intelligence', 'Champion activation', 'Enterprise expansion'].map(
                (step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-white/8 text-xs text-white">
                      {index + 1}
                    </div>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${92 - index * 13}%` }}
                        transition={{ duration: 0.8, delay: 0.25 + index * 0.08 }}
                        className="h-full rounded-full bg-purple-300"
                      />
                    </div>
                    <span className="w-36 text-sm text-slate-300">{step}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="mt-4 grid gap-4">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-purple-300/30 hover:bg-white/[0.055]"
              >
                <div className="flex items-center gap-4">
                  <IconPill icon={kpi.icon} small />
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white">{kpi.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{kpi.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Section({ id, eyebrow, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-2 text-purple-200">
              <Icon size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

function PremiumCard({ children, className = '', delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, delay }}
      className={`group rounded-[1.6rem] border border-white/10 bg-[#111319]/80 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-[#151823] ${className}`}
    >
      {children}
    </motion.article>
  )
}

function ExpandableCard({ card, isOpen, onToggle }) {
  const Icon = card.icon
  return (
    <motion.article
      layout
      className="rounded-[1.6rem] border border-white/10 bg-[#111319]/80 p-5 transition hover:border-blue-300/30"
    >
      <button onClick={onToggle} className="flex w-full items-start justify-between gap-4 text-left">
        <div>
          <IconPill icon={Icon} />
          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{card.title}</h3>
        </div>
        <ChevronDown
          size={20}
          className={`mt-2 text-slate-400 transition ${isOpen ? 'rotate-180 text-purple-200' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <BulletList items={card.bullets} className="mt-6" />
      </motion.div>
    </motion.article>
  )
}

function AccordionItem({ item, index, isOpen, onToggle }) {
  const Icon = item.icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.04 }}
      className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#111319]/80"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-white/[0.035]"
      >
        <div className="flex items-center gap-4">
          <IconPill icon={Icon} small />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Motion {index + 1}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
          </div>
        </div>
        <ChevronDown className={`text-slate-400 transition ${isOpen ? 'rotate-180 text-purple-200' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="border-t border-white/10 px-5 pb-6 pt-5">
          <BulletList items={item.bullets} className="columns-1 gap-8 md:columns-2" />
        </div>
      </motion.div>
    </motion.article>
  )
}

function BulletList({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="break-inside-avoid text-sm leading-6 text-slate-300">
          <span className="mr-3 inline-flex h-5 w-5 translate-y-1 items-center justify-center rounded-full bg-purple-300/10 text-purple-200">
            <Check size={12} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function IconPill({ icon: Icon, small = false }) {
  return (
    <div
      className={`grid place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-purple-200 shadow-lg shadow-purple-950/20 ${
        small ? 'h-10 w-10' : 'h-12 w-12'
      }`}
    >
      <Icon size={small ? 18 : 21} />
    </div>
  )
}

function ClosingSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111319]/90 p-8 shadow-2xl shadow-black/30 sm:p-10 lg:p-12"
      >
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl" />
        <div className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">Closing Thesis</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">How I Will Win</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            "I will win this role the same way I have built territories before: by learning the product deeply,
            understanding the customer's world, building trust with technical champions, applying disciplined
            enterprise qualification, and creating urgency around measurable business outcomes. In life sciences,
            Cursor is not just a productivity tool. It is a way to help engineering teams move faster, reduce
            friction, and support the innovation engine behind better patient outcomes."
          </p>
          <a
            href="#execution-plan"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-purple-200/25 bg-purple-300/12 px-6 py-3 text-sm font-semibold text-purple-50 transition hover:-translate-y-0.5 hover:border-purple-200/45 hover:bg-purple-300/18"
          >
            View 90-Day Execution Plan
            <ArrowUpRight size={17} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default App
