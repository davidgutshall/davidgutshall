import { useMemo, useState } from "react";

const sections = [
  {
    id: "market",
    label: "Market Context",
    eyebrow: "Life sciences operating reality",
    title: "AI adoption is no longer experimental. It is a competitive control point.",
    summary:
      "R&D, clinical operations, safety, regulatory, and commercial teams are under pressure to ship more with fewer handoffs while preserving compliance.",
    cards: [
      {
        title: "Macro pressure",
        insight: "Budgets are scrutinized, but productivity mandates are rising.",
        do: [
          "Map AI spend to mission-critical software delivery programs.",
          "Anchor discovery in cycle-time reduction, validated workflows, and developer experience.",
          "Segment accounts by R&D intensity, digital maturity, and regulated software footprint.",
        ],
        why: [
          "Life sciences buyers fund tools that compress time-to-insight and time-to-submission.",
          "Cursor becomes a platform decision when it is tied to velocity, governance, and talent leverage.",
          "Strong segmentation keeps effort focused on accounts with urgency and executive sponsorship.",
        ],
      },
      {
        title: "Buyer landscape",
        insight: "Engineering, data science, platform, and security must all see the win.",
        do: [
          "Build account maps across CIO, CTO, CISO, VP Engineering, Head of Data, and R&D informatics.",
          "Identify where AI coding assistants are already appearing through shadow adoption.",
          "Create multi-threaded POVs by function before the first executive meeting.",
        ],
        why: [
          "Enterprise deals stall when the technical win is not translated into risk-managed business value.",
          "Shadow adoption is proof of demand and a reason to standardize.",
          "Multi-threading prevents single-champion fragility.",
        ],
      },
      {
        title: "Adoption wedge",
        insight: "The cleanest entry point is high-value teams building regulated internal software.",
        do: [
          "Prioritize platform teams supporting clinical, regulatory, quality, and data products.",
          "Use pilot design to prove secure productivity gains in existing workflows.",
          "Expand from developer cohorts into enterprise-wide AI development standards.",
        ],
        why: [
          "These teams feel acute delivery pressure and can quantify productivity.",
          "A controlled pilot makes security and compliance stakeholders partners, not blockers.",
          "Standards conversations create durable expansion paths.",
        ],
      },
    ],
  },
  {
    id: "wins",
    label: "Why Cursor Wins",
    eyebrow: "Strategic differentiation",
    title: "Cursor wins because it feels like leverage, not another tool to administer.",
    summary:
      "The value story is speed with control: developers adopt it quickly, leaders see measurable throughput, and security can govern usage.",
    cards: [
      {
        title: "Native workflow adoption",
        insight: "Cursor meets developers where real work happens.",
        do: [
          "Lead with hands-on demos in actual engineering workflows.",
          "Show refactor, comprehension, test generation, and codebase navigation in one narrative.",
          "Turn skeptical senior engineers into internal proof points.",
        ],
        why: [
          "Developer pull is the fastest path to credible enterprise momentum.",
          "The demo lands when it is practical, not theatrical.",
          "Technical champions make procurement conversations sharper and less abstract.",
        ],
      },
      {
        title: "Executive value",
        insight: "The CFO and CIO care about capacity, risk, and modernization velocity.",
        do: [
          "Quantify reclaimed engineering hours and reduction in delivery bottlenecks.",
          "Connect Cursor to AI strategy, platform modernization, and hiring leverage.",
          "Frame rollout as governed enablement across priority teams.",
        ],
        why: [
          "Economic buyers approve outcomes, not feature lists.",
          "A strategic narrative lifts deal size and urgency.",
          "Governed enablement neutralizes the 'ban or tolerate' AI dilemma.",
        ],
      },
      {
        title: "Enterprise readiness",
        insight: "Security diligence is a sales motion, not a late-stage hurdle.",
        do: [
          "Bring security, legal, and platform stakeholders into the evaluation early.",
          "Document data handling, admin controls, and rollout policy in the mutual action plan.",
          "Treat procurement as a value-preservation lane, not an obstacle course.",
        ],
        why: [
          "Early diligence compresses cycle time and protects forecast integrity.",
          "Clear governance earns trust in regulated environments.",
          "Procurement moves faster when business impact is already validated.",
        ],
      },
    ],
  },
  {
    id: "30",
    label: "30 Days",
    eyebrow: "First 30 days",
    title: "Build the territory thesis, prove command of the market, and create executive access.",
    summary:
      "The first month is about precision: account ranking, stakeholder maps, sharp messaging, and fast discovery loops.",
    cards: [
      {
        title: "Territory command",
        insight: "Know exactly where to spend time before volume activity begins.",
        do: [
          "Tier life sciences accounts by revenue, R&D intensity, engineering footprint, AI posture, and renewal whitespace.",
          "Build top-25 account dossiers with current initiatives, leadership changes, and partner signals.",
          "Create account-specific hypotheses before outreach.",
        ],
        why: [
          "Enterprise selling rewards focus more than motion.",
          "Research-backed outreach creates executive relevance.",
          "Hypotheses turn first meetings into business conversations.",
        ],
      },
      {
        title: "Message-market fit",
        insight: "Every persona needs a crisp reason to care now.",
        do: [
          "Write persona-based messaging for CIO, CTO, CISO, VP Engineering, and R&D technology leaders.",
          "Convert generic AI interest into business triggers: modernization, productivity, governance, talent leverage.",
          "Package a five-minute Life Sciences Cursor demo story.",
        ],
        why: [
          "Relevance earns access in crowded executive inboxes.",
          "Triggers create urgency without hype.",
          "A tight demo makes Cursor tangible in the first conversation.",
        ],
      },
      {
        title: "Pipeline ignition",
        insight: "Create enough quality at-bats to expose real enterprise pain.",
        do: [
          "Launch targeted outbound sequences to top-tier accounts.",
          "Partner with marketing, solutions, and leadership for warm pathing.",
          "Book discovery with a clear promise: identify where AI can safely accelerate engineering output.",
        ],
        why: [
          "The goal is qualified learning, not vanity meetings.",
          "Warm access increases seniority and conversion.",
          "A strong meeting promise raises show rate and depth.",
        ],
      },
    ],
  },
  {
    id: "60",
    label: "60 Days",
    eyebrow: "Days 31-60",
    title: "Convert curiosity into qualified opportunities with executive-level business cases.",
    summary:
      "By day 60, the plan shifts from access to qualification: MEDDPICC rigor, mutual action plans, and pilot design.",
    cards: [
      {
        title: "Deep discovery",
        insight: "The best discovery clarifies pain, politics, process, and proof.",
        do: [
          "Run discovery around current SDLC friction, AI governance gaps, and modernization bottlenecks.",
          "Document metrics, economic impact, decision criteria, and paper process in CRM.",
          "Validate whether the account has a compelling event and executive owner.",
        ],
        why: [
          "Enterprise forecast quality starts with disciplined qualification.",
          "Metrics transform a promising meeting into a business case.",
          "Compelling events separate real deals from interesting conversations.",
        ],
      },
      {
        title: "Pilot architecture",
        insight: "A pilot must be designed like a buying step, not a free trial.",
        do: [
          "Define pilot users, use cases, baseline metrics, success criteria, security requirements, and expansion path.",
          "Secure sponsor agreement on what happens if success criteria are met.",
          "Establish a weekly cadence with technical and executive checkpoints.",
        ],
        why: [
          "Clear success criteria prevent subjective evaluation drift.",
          "Pre-negotiated next steps create commercial momentum.",
          "Executive checkpoints keep the pilot connected to business value.",
        ],
      },
      {
        title: "Multi-threading",
        insight: "Single-threaded enthusiasm is not a deal strategy.",
        do: [
          "Build champions in engineering and executive sponsorship in technology leadership.",
          "Invite security, procurement, and legal into the process with clear roles.",
          "Use each meeting to earn the next stakeholder introduction.",
        ],
        why: [
          "Consensus buying requires deliberate orchestration.",
          "Early risk alignment reduces late-stage surprise.",
          "Stakeholder momentum is a leading indicator of deal health.",
        ],
      },
    ],
  },
  {
    id: "90",
    label: "90 Days",
    eyebrow: "Days 61-90",
    title: "Create repeatable pipeline, advance late-stage deals, and set expansion foundations.",
    summary:
      "By day 90, the motion should show measurable pipeline coverage, qualified pilots, and executive-sponsored next steps.",
    cards: [
      {
        title: "Commercial conversion",
        insight: "Move from technical validation to negotiated business outcome.",
        do: [
          "Turn pilot results into an executive readout with quantified impact and rollout recommendation.",
          "Align pricing, procurement, security approvals, and implementation plan to the mutual close plan.",
          "Use expansion architecture to position land size intelligently.",
        ],
        why: [
          "Executive readouts create decision moments.",
          "Mutual close plans expose risk while there is still time to solve it.",
          "Smart land design protects both speed and long-term account value.",
        ],
      },
      {
        title: "Forecast discipline",
        insight: "The forecast should reflect evidence, not optimism.",
        do: [
          "Inspect every opportunity against MEDDPICC completeness and next-step quality.",
          "Separate commit, best case, and pipeline creation with clear exit criteria.",
          "Review deal risk weekly with manager, SE, and cross-functional partners.",
        ],
        why: [
          "A clean forecast builds trust with leadership.",
          "Exit criteria prevent happy ears.",
          "Shared risk inspection improves execution speed.",
        ],
      },
      {
        title: "Repeatable motion",
        insight: "Turn early wins into a vertical playbook.",
        do: [
          "Document winning messaging, objection handling, demo paths, pilot templates, and buyer maps.",
          "Create referenceable internal proof from strongest accounts.",
          "Refine the top-50 account strategy based on conversion data.",
        ],
        why: [
          "Repeatability compounds faster than individual heroics.",
          "Internal proof accelerates new conversations.",
          "Conversion data improves territory allocation.",
        ],
      },
    ],
  },
  {
    id: "pipeline",
    label: "Pipeline Strategy",
    eyebrow: "Pipeline operating system",
    title: "Generate 4x coverage through focused account selection, measurable pilots, and deal control.",
    summary:
      "The pipeline plan balances creation, conversion, and inspection so activity turns into qualified enterprise revenue.",
    cards: [
      {
        title: "Account focus",
        insight: "Win rate improves when the ICP is explicit and enforced.",
        do: [
          "Prioritize pharma, biotech, medtech, CRO, and health data leaders with large engineering populations.",
          "Score accounts on AI urgency, regulated software dependency, executive change, and known developer adoption.",
          "Maintain a weekly account heat map across engagement, pain, sponsor, and timing.",
        ],
        why: [
          "ICP discipline preserves selling capacity.",
          "Scoring surfaces the best next action.",
          "Heat maps make pipeline creation inspectable.",
        ],
      },
      {
        title: "Opportunity creation",
        insight: "Every qualified opportunity needs a business problem, a sponsor, and a path to proof.",
        do: [
          "Use discovery to convert interest into a defined evaluation with business outcomes.",
          "Package pilots around high-value teams and measurable delivery workflows.",
          "Create mutual action plans before technical work expands.",
        ],
        why: [
          "Evaluations without outcomes become product tours.",
          "High-value teams produce better proof and stronger references.",
          "Mutual action plans establish deal control early.",
        ],
      },
      {
        title: "Expansion strategy",
        insight: "The first deal should make the second deal obvious.",
        do: [
          "Design lands around teams with adjacent expansion paths.",
          "Capture usage proof, champion quotes, and before-after workflow examples.",
          "Schedule post-sale executive value reviews before signature.",
        ],
        why: [
          "Expansion is easiest when it is designed before close.",
          "Proof assets create internal demand.",
          "Value reviews protect retention and unlock broader rollout.",
        ],
      },
    ],
  },
];

const metrics = [
  { label: "Accounts Engaged", value: 38, target: 50, detail: "Top-tier named accounts with confirmed persona engagement" },
  { label: "Discovery Calls", value: 18, target: 24, detail: "Qualified discovery meetings with documented pain and next steps" },
  { label: "Active Opportunities", value: 9, target: 12, detail: "MEDDPICC-qualified opportunities in active evaluation" },
  { label: "Pipeline Coverage", value: 3.2, target: 4, suffix: "x", detail: "Coverage against quota goal with 4x operating target" },
];

const dealFields = [
  { label: "Metrics", value: "20-30% engineering cycle-time compression target", status: "Quantified" },
  { label: "Economic buyer", value: "CIO / CTO with platform modernization mandate", status: "Mapped" },
  { label: "Decision criteria", value: "Developer adoption, security posture, measurable productivity", status: "Validated" },
  { label: "Decision process", value: "Security review -> pilot readout -> procurement -> rollout", status: "Sequenced" },
  { label: "Paper process", value: "MSA redlines, DPA, security packet, purchasing approval", status: "In motion" },
  { label: "Identify pain", value: "AI demand rising without standard governance or tooling", status: "Confirmed" },
  { label: "Champion identified", value: "VP Engineering with active pilot team", status: "Strong" },
  { label: "Competition", value: "Status quo, fragmented AI tools, internal build pressure", status: "Positioned" },
];

function App() {
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const [expandedCards, setExpandedCards] = useState({ market: 0 });
  const [mode, setMode] = useState("do");

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeTab) ?? sections[0],
    [activeTab],
  );

  const expandedIndex = expandedCards[activeSection.id];

  function toggleCard(index) {
    setExpandedCards((current) => ({
      ...current,
      [activeSection.id]: current[activeSection.id] === index ? null : index,
    }));
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0F14] text-[#E6EDF3]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,156,255,0.18),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(91,156,255,0.08),transparent_28%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <Header />

        <div className="mt-6 grid flex-1 gap-5 lg:grid-cols-[260px_minmax(0,1fr)]">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <section className="min-w-0 rounded-[2rem] border border-white/10 bg-[#11161C]/85 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6">
            <SectionHero section={activeSection} mode={mode} setMode={setMode} />

            <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
              <div className="space-y-3">
                {activeSection.cards.map((card, index) => (
                  <ExpandableCard
                    key={card.title}
                    card={card}
                    index={index}
                    isExpanded={expandedIndex === index}
                    mode={mode}
                    onToggle={() => toggleCard(index)}
                  />
                ))}
              </div>

              <aside className="space-y-4">
                <PipelineDashboard />
                <DealStrategyPanel />
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="rounded-[2rem] border border-white/10 bg-[#11161C]/70 p-5 shadow-2xl shadow-black/20 backdrop-blur md:p-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#5B9CFF]/25 bg-[#5B9CFF]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[#9fc5ff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5B9CFF] shadow-[0_0_18px_rgba(91,156,255,0.9)]" />
            Strategic field plan
          </div>
          <h1 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-[#E6EDF3] md:text-5xl">
            Enterprise Sales Business Plan – Life Sciences
          </h1>
          <p className="mt-3 text-base text-[#9DA7B3] md:text-lg">
            30-60-90 Execution + Pipeline Strategy
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-[#9DA7B3]">
          Presented by
          <div className="mt-1 text-lg font-semibold text-[#E6EDF3]">David Gutshall</div>
        </div>
      </div>
    </header>
  );
}

function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="rounded-[2rem] border border-white/10 bg-[#11161C]/70 p-2 shadow-2xl shadow-black/20 backdrop-blur lg:sticky lg:top-5 lg:self-start">
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {sections.map((section, index) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setActiveTab(section.id)}
            className={`group min-w-fit rounded-2xl border px-4 py-3 text-left text-sm transition duration-300 lg:min-w-0 ${
              activeTab === section.id
                ? "border-[#5B9CFF]/50 bg-[#5B9CFF]/12 text-[#E6EDF3] shadow-[0_0_28px_rgba(91,156,255,0.12)]"
                : "border-transparent text-[#9DA7B3] hover:border-white/10 hover:bg-white/[0.04] hover:text-[#E6EDF3]"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid h-7 w-7 place-items-center rounded-full text-xs transition ${
                  activeTab === section.id ? "bg-[#5B9CFF] text-[#07111f]" : "bg-white/5 text-[#9DA7B3] group-hover:bg-white/10"
                }`}
              >
                {index + 1}
              </span>
              <span className="font-medium">{section.label}</span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}

function SectionHero({ section, mode, setMode }) {
  return (
    <div className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 md:grid-cols-[minmax(0,1fr)_auto]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5B9CFF]">{section.eyebrow}</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-[-0.03em] md:text-4xl">{section.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#9DA7B3] md:text-base">{section.summary}</p>
      </div>
      <div className="flex items-start md:justify-end">
        <div className="rounded-2xl border border-white/10 bg-[#11161C] p-1">
          {[
            ["do", "What I Do"],
            ["why", "Why It Matters"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setMode(value)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition duration-300 ${
                mode === value ? "bg-[#5B9CFF] text-[#07111f]" : "text-[#9DA7B3] hover:text-[#E6EDF3]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpandableCard({ card, index, isExpanded, mode, onToggle }) {
  const bullets = mode === "do" ? card.do : card.why;

  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-[#11161C] transition duration-300 hover:-translate-y-0.5 hover:border-[#5B9CFF]/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.26)]">
      <button type="button" onClick={onToggle} className="w-full p-5 text-left">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5B9CFF]">
              <span>0{index + 1}</span>
              <span className="h-px w-8 bg-[#5B9CFF]/50" />
              <span className="opacity-0 transition duration-300 group-hover:opacity-100">Hover insight</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#9DA7B3]">{card.insight}</p>
          </div>
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-xl transition duration-300 ${isExpanded ? "rotate-45 text-[#5B9CFF]" : "text-[#9DA7B3]"}`}>
            +
          </span>
        </div>
        <p className="mt-4 text-xs font-medium text-[#9DA7B3] transition group-hover:text-[#E6EDF3]">
          Click to expand how I'd execute this
        </p>
      </button>

      <div className={`grid transition-all duration-500 ease-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <ul className="space-y-3 border-t border-white/10 px-5 pb-5 pt-4">
            {bullets.map((bullet, bulletIndex) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-6 text-[#E6EDF3]"
                style={{ animation: isExpanded ? `slideIn 420ms ease ${bulletIndex * 70}ms both` : "none" }}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B9CFF] shadow-[0_0_14px_rgba(91,156,255,0.8)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function PipelineDashboard() {
  return (
    <section className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5B9CFF]">Pipeline Dashboard</p>
          <h3 className="mt-2 text-xl font-semibold">Mock operating metrics</h3>
        </div>
        <div className="rounded-full border border-[#5B9CFF]/30 bg-[#5B9CFF]/10 px-3 py-1 text-xs font-semibold text-[#9fc5ff]">
          4x goal
        </div>
      </div>

      <div className="mt-5 space-y-5">
        {metrics.map((metric) => {
          const percent = Math.min((metric.value / metric.target) * 100, 100);
          return (
            <div key={metric.label} className="group">
              <div className="mb-2 flex items-end justify-between gap-3">
                <div>
                  <div className="text-sm font-medium">{metric.label}</div>
                  <div className="h-0 text-xs text-[#9DA7B3] opacity-0 transition-all duration-300 group-hover:h-5 group-hover:opacity-100">
                    {metric.detail}
                  </div>
                </div>
                <div className="text-sm font-semibold text-[#E6EDF3]">
                  {metric.value}
                  {metric.suffix ?? ""} <span className="text-[#9DA7B3]">/ {metric.target}{metric.suffix ?? ""}</span>
                </div>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#5B9CFF] to-[#9fc5ff] shadow-[0_0_18px_rgba(91,156,255,0.45)] transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function DealStrategyPanel() {
  return (
    <section className="rounded-[1.5rem] border border-white/10 bg-[#11161C] p-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5B9CFF]">Deal Strategy Panel</p>
        <h3 className="mt-2 text-xl font-semibold">MEDDPICC inspection</h3>
        <p className="mt-2 text-sm leading-6 text-[#9DA7B3]">A clean view of deal control, risk, and next best action.</p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        {dealFields.map((field) => (
          <div key={field.label} className="rounded-2xl border border-white/10 bg-black/20 p-4 transition duration-300 hover:border-[#5B9CFF]/40 hover:bg-[#5B9CFF]/[0.06]">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9DA7B3]">{field.label}</div>
              <div className="rounded-full bg-white/[0.06] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9fc5ff]">
                {field.status}
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#E6EDF3]">{field.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-[#5B9CFF]/25 bg-[#5B9CFF]/10 p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9fc5ff]">Timeline</div>
        <p className="mt-2 text-sm leading-6 text-[#E6EDF3]">
          Discovery complete by week 2, pilot launched by week 4, executive readout by week 7, commercial close plan active by week 8.
        </p>
      </div>
    </section>
  );
}

export default App;
