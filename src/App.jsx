import { useState } from "react";

// Cursor Brand Colors (from the deck XML)
// #E85D26 = Cursor orange (primary accent, day-plan numbers)
// #595959 = body text gray
// #F04E37 = red accent (section headings)
// #1A1714 = near-black bg
// #FFFFFF = white

const ORANGE = "#E85D26";
const RED = "#F04E37";
const GRAY = "#595959";
const DARK = "#1A1714";
const WHITE = "#FFFFFF";
const CREAM = "#F5F0EB";
const DARK_MID = "#2C2420";

const DAYS = [
  {
    num: "30",
    title: "Learn, Listen & Map the Terrain",
    tagline: "Earn the right to sell",
    color: ORANGE,
    milestone: "Clear view of where momentum already exists across all named pharma accounts",
    sections: [
      {
        heading: "Product Fluency",
        items: [
          "Earn the right to sell by achieving deep product fluency - learn to explain Cursor inside pharma workflows: clinical data pipelines, bioinformatics, regulatory submission tools, and internal R&D platforms",
          "Study Cursor's pricing model until I can explain seat tiers, consumption, and enterprise licensing in my sleep. Understand how deals have been structured at comparable life sciences accounts",
        ],
      },
      {
        heading: "Internal Alignment",
        items: [
          "Get tight with my Solutions Engineer, Customer Success, and SDR partners. Shadow calls. Understand the customer journey from first user to enterprise contract",
          "Identify which channel and technology partners (consulting firms, SI partners, cloud resellers) already have relationships inside my target pharma accounts",
        ],
      },
      {
        heading: "Account Planning",
        items: [
          "Research and build a tiered account plan for my named pharma accounts including target contacts at the VP and Director level",
          "Schedule at least one intro call or warm conversation for each target account before day 30",
        ],
      },
    ],
  },
  {
    num: "60",
    title: "Get in Front of Builders & Start Qualifying",
    tagline: "Map environments, find champions",
    color: ORANGE,
    milestone: "At least one active discovery underway per account, min 3 mapped stakeholders, rough deal size and timeline logged",
    sections: [
      {
        heading: "Discovery Calls",
        items: [
          "Land discovery calls with at least one technical or engineering leader in each named account. Goal is to map their environment, not to pitch",
          "What languages and frameworks are their teams using? Which internal platforms are most actively developed? Where are engineers spending time on repetitive, low-value code work?",
        ],
      },
      {
        heading: "Champion Identification",
        items: [
          "Identify Cursor users already active inside each account. These are my champions. Connect with them, understand their workflows, give them a path to internal advocacy",
          "Apply MEDDPICC rigorously: map economic buyer, technical champion, decision criteria, and procurement process for each account",
        ],
      },
      {
        heading: "Deal Foundation",
        items: [
          "By day 60: at least one active discovery underway per account, minimum three mapped stakeholders, rough deal size and timeline, and all activity logged and forecasted",
        ],
      },
    ],
  },
  {
    num: "90",
    title: "Build Pipeline & Drive Toward Enterprise Contracts",
    tagline: "Convert signal into structured deals",
    color: ORANGE,
    milestone: "4x pipeline coverage of quota, 50%+ at Stage 2+, one pilot running or formally proposed",
    sections: [
      {
        heading: "Pipeline Concentration",
        items: [
          "By day 90 I will have enough signal to know which accounts are ready to move. This is where I concentrate energy without abandoning the others",
          "Push the most advanced account toward a structured pilot or proof of value. Lock in the SE, co-create success criteria with the champion, and define compliance and validation requirements upfront",
        ],
      },
      {
        heading: "Account Cadence",
        items: [
          "Maintain biweekly cadence with all other accounts. Bring something useful each time: relevant pharma case study, workflow benchmark, or peer story from a comparable organization",
          "Build executive alignment at the two most advanced accounts: connect developer productivity gains to business metrics - faster drug discovery cycles, reduced time to deployment, lower engineering cost per feature",
        ],
      },
      {
        heading: "Internal Leadership",
        items: [
          "Internally, build my reputation on the team. Contribute to deal reviews, share learnings from pharma accounts, and establish myself as the go-to voice on life sciences enterprise selling",
          "By day 90: 4x pipeline coverage of quota with at least 50% at Stage 2 or beyond, one pilot running or formally proposed, and clear documented next steps for every named account",
        ],
      },
    ],
  },
];

const PIPELINE = [
  {
    id: "outbound",
    icon: "🎯",
    title: "Direct Outbound",
    subtitle: "Named account pursuit",
    color: RED,
    points: [
      "Build a named pharma account plan (J&J, Pfizer, Merck, IQVIA, Thermo Fisher) focused on large engineering orgs with complex codebases and active digital transformation mandates",
      'Map 6-8 personas per account and lead with a clear POV: "Your engineers are spending 40% of their time on work Cursor can accelerate - and your competitors are already using it"',
      "Run high-quality, targeted outreach sequences tied to triggers: new CTO hires, platform modernization announcements, R&D pipeline expansions, or developer conference activity",
      "Anchor every outreach in business value: faster drug discovery cycles, reduced time from code to compliance, lower cost per feature - not product features",
      "KPI discipline: daily outbound, weekly meeting targets, always driving toward a working session or workflow demonstration in the customer's own environment",
    ],
  },
  {
    id: "plg",
    icon: "⚡",
    title: "Product-Led Signal",
    subtitle: "Champion development",
    color: ORANGE,
    points: [
      "Leverage Cursor's built-in PLG motion as an inbound pipeline signal: usage data shows which pharma accounts already have active Cursor users before any enterprise conversation begins",
      "Engage individual practitioners already using Cursor inside target accounts. These are my future champions. Validate their workflow wins, help them tell the story internally, give them proof points",
      "Convert champion activity into structured pilots and enterprise scoping sessions. The champion's credibility with their engineering leadership is what opens the enterprise door",
      "Position myself as a problem-solver and trusted advisor to engineering leaders - not a rep running a quota play",
      "Use real-world pharma workflow use cases (bioinformatics pipeline debugging, clinical data tooling, regulatory documentation automation) to accelerate trust and shorten sales cycles significantly",
    ],
  },
  {
    id: "customers",
    icon: "🔄",
    title: "Existing Customers",
    subtitle: "Expand & champion network",
    color: "#2d7f1d",
    points: [
      "Run structured account reviews at every existing pharma customer to identify expansion signals: new engineering teams, new data platforms, new R&D initiatives that Cursor is not yet supporting",
      "Drive land-and-expand plays across business units. One champion in bioinformatics should lead to conversations in clinical tech, regulatory affairs engineering, and manufacturing automation",
      "Turn customers into internal advocates, case study contributors, and peer references within the pharma industry. A Merck VP vouching for Cursor to a J&J peer is worth more than any pitch",
      "Ask champions for warm peer introductions to create qualified pipeline across the sector",
      "Partner closely with Customer Success to proactively identify expansion signals, health scores, and any risk of churn before it becomes a problem",
    ],
  },
  {
    id: "events",
    icon: "🎪",
    title: "Marketing & Events",
    subtitle: "Pipeline engines",
    color: "#9333ea",
    points: [
      "Treat industry events as pipeline engines, not brand plays. Target key pharma and biotech engineering forums: BioIT World, HIMSS Life Sciences, DPharm, and developer-focused tracks at major cloud conferences",
      "Pre-book 8-12 meetings with named target contacts before every event. Warm outreach, not cold badge-scanning",
      'Lead with a sharp hook: "How much of your engineering team\'s time is spent on work that an AI pair programmer could accelerate today?"',
      "Focus on quality conversations with engineering leaders and senior developers, then convert within 48 hours to a next step (demo, workflow session, or pilot scoping call)",
      "Supplement with small executive dinners (6-10 people) targeting CTOs and VP Engineering from top pharma accounts to drive deeper relationships and peer learning",
    ],
  },
  {
    id: "partners",
    icon: "🤝",
    title: "Partners",
    subtitle: "Reach inside top-tier pharma",
    color: "#0369a3",
    points: [
      "Focus on partners with reach inside top-tier pharma: global SIs (Accenture, Deloitte, Cognizant), cloud hyperscalers (AWS, Azure with life sciences practices), and specialist life sciences consulting firms",
      "Build joint account plans co-selling into active digital transformation and R&D modernization projects where Cursor can accelerate the engineering layer",
      'Enable partners with a sharp message: "Cursor gives your pharma clients a measurable productivity return in week one - no rip-and-replace, no lengthy onboarding, no compliance risk"',
      "Hold partners accountable to pipeline creation, not just deal support. Define shared targets by account and review monthly",
      "Prioritize partners already embedded in GxP-compliant environments - they bring access and credibility that cold outreach cannot replicate",
    ],
  },
];

const MARKET = [
  {
    heading: "Massive, Expensive Engineering Teams",
    color: ORANGE,
    points: [
      "Top 20 pharma companies each employ 2,000-10,000+ software engineers",
      "Developer time costs $150-250/hour fully loaded; any productivity gain compounds rapidly",
      "R&D timelines are under intense pressure - speed to code is speed to cure",
    ],
  },
  {
    heading: "Regulated but Not Immune to Innovation",
    color: RED,
    points: [
      "GxP, 21 CFR Part 11, SOX, and HIPAA create compliance overhead - not a barrier to AI tooling",
      "Validation requirements create demand for accurate, well-documented code generation",
      "IT leaders are under CTO mandate to modernize without compromising audit trails",
    ],
  },
  {
    heading: "Fragmented, High-Volume Codebase Complexity",
    color: "#0369a3",
    points: [
      "Bioinformatics pipelines, clinical trial platforms, ERP integrations, and IoT stacks run in parallel",
      "Legacy code debt is enormous - Cursor's codebase-awareness is uniquely suited to this environment",
      "Multi-cloud and on-prem hybrid setups create constant context-switching pain that Cursor eliminates",
    ],
  },
];

const WHY_CURSOR = [
  {
    heading: "Proven Enterprise Scale",
    icon: "📈",
    stats: "$2B+ ARR · $29.3B Valuation",
    points: [
      "Used by more than 50% of the Fortune 500 and 50,000+ businesses globally as of early 2026",
      "Fastest ARR ramp in SaaS history",
      "Salesforce, NVIDIA, Adobe, and Uber have deployed Cursor organization-wide",
    ],
  },
  {
    heading: "Purpose-Built for Complex Codebases",
    icon: "⚙️",
    stats: "4x Faster · Full Repo Context",
    points: [
      "Cursor understands entire repositories, not just the open file - critical for pharma's layered systems",
      "Edits code directly in-context; eliminates copy-paste and context switching across tools",
      "Proprietary Composer model trained on real engineering workflows",
    ],
  },
  {
    heading: "Champion-Driven, Bottom-Up Adoption",
    icon: "🚀",
    stats: "36% Free-to-Paid · Industry Avg: 2-5%",
    points: [
      "Developers adopt Cursor individually, validate it, then advocate internally",
      "36% free-to-paid conversion rate proves the product sells itself",
      "PLG motion means Cursor already has users inside target pharma accounts - my job is to find and scale them",
    ],
  },
];

function CursorLogo({ size = 32 }) {
  return (
    <svg width={size * 4.2} height={size} viewBox="0 0 134 32" fill="none" aria-label="Cursor">
      <polygon points="14,2 26,9 14,16 2,9" fill="#E85D26" />
      <polygon points="26,9 26,23 14,30 14,16" fill="#C44B1E" />
      <polygon points="14,16 14,30 2,23 2,9" fill="#F0784A" />
      <text
        x="36"
        y="23"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        fontSize="20"
        fill="#1A1714"
        letterSpacing="-0.3"
      >
        Cursor
      </text>
    </svg>
  );
}

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "market", label: "Market" },
  { id: "why-cursor", label: "Why Cursor" },
  { id: "90-day", label: "30.60.90" },
  { id: "pipeline", label: "Pipeline" },
];

const styles = {
  app: {
    fontFamily: "Arial, 'Helvetica Neue', sans-serif",
    background: CREAM,
    minHeight: "100vh",
    color: DARK,
  },
  header: {
    background: DARK,
    borderBottom: `3px solid ${ORANGE}`,
    position: "sticky",
    top: 0,
    zIndex: 100,
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12,
    color: "#78716C",
    letterSpacing: "0.05em",
  },
  nav: {
    display: "flex",
    gap: 4,
    alignItems: "center",
  },
  navBtn: (active) => ({
    padding: "8px 16px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: active ? "700" : "400",
    background: active ? ORANGE : "transparent",
    color: active ? WHITE : "#94A3B8",
    transition: "all 0.2s",
    letterSpacing: "0.02em",
  }),
  hero: {
    background: DARK,
    color: WHITE,
    padding: "80px 40px 80px",
    position: "relative",
    overflow: "hidden",
  },
  heroTag: {
    display: "inline-block",
    background: ORANGE,
    color: WHITE,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: "0.12em",
    padding: "4px 12px",
    borderRadius: 4,
    marginBottom: 24,
    textTransform: "uppercase",
  },
  heroTitle: {
    fontSize: "clamp(36px, 5vw, 64px)",
    fontWeight: "700",
    lineHeight: 1.05,
    letterSpacing: "-1.5px",
    marginBottom: 24,
    fontFamily: "'Aptos Display', 'Georgia', serif",
    maxWidth: 700,
  },
  heroSub: {
    fontSize: 18,
    color: "#94A3B8",
    marginBottom: 40,
    maxWidth: 600,
    lineHeight: 1.6,
  },
  heroBadges: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },
  heroBadge: {
    background: DARK_MID,
    border: "1px solid #2C2420",
    borderRadius: 8,
    padding: "12px 20px",
    fontSize: 13,
    color: "#CBD5E1",
  },
  heroBadgeLabel: {
    color: ORANGE,
    fontWeight: "700",
    display: "block",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  section: {
    padding: "64px 40px",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: ORANGE,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: "clamp(28px, 3vw, 40px)",
    fontWeight: "700",
    lineHeight: 1.15,
    letterSpacing: "-0.5px",
    marginBottom: 40,
    fontFamily: "'Aptos Display', 'Georgia', serif",
    color: DARK,
  },
  marketGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 24,
  },
  marketCard: (color) => ({
    background: WHITE,
    borderRadius: 12,
    padding: 28,
    borderTop: `4px solid ${color}`,
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  }),
  marketHeading: (color) => ({
    fontSize: 16,
    fontWeight: "700",
    color: DARK,
    marginBottom: 16,
    paddingLeft: 12,
    borderLeft: `3px solid ${color}`,
  }),
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 24,
  },
  whyCard: {
    background: DARK,
    borderRadius: 12,
    padding: 28,
    color: WHITE,
    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
  },
  whyIcon: {
    fontSize: 32,
    marginBottom: 12,
    display: "block",
  },
  whyStat: {
    background: ORANGE,
    color: WHITE,
    fontSize: 12,
    fontWeight: "700",
    padding: "4px 10px",
    borderRadius: 4,
    display: "inline-block",
    marginBottom: 16,
    letterSpacing: "0.02em",
  },
  dayNav: {
    display: "flex",
    gap: 0,
    marginBottom: 32,
    borderRadius: 10,
    overflow: "hidden",
    border: `2px solid ${DARK}`,
    width: "fit-content",
  },
  dayNavBtn: (active) => ({
    padding: "14px 32px",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: "700",
    background: active ? DARK : WHITE,
    color: active ? WHITE : DARK,
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: 10,
  }),
  dayNumBadge: (active) => ({
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: active ? ORANGE : "#E5E7EB",
    color: active ? WHITE : DARK,
    fontSize: 15,
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
  }),
  dayCard: {
    background: WHITE,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  },
  dayHeader: {
    background: DARK,
    padding: "32px 40px",
    display: "flex",
    alignItems: "flex-end",
    gap: 24,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  dayBigNum: {
    fontSize: 80,
    fontWeight: "700",
    color: ORANGE,
    lineHeight: 1,
    fontFamily: "Arial Black, Arial, sans-serif",
    letterSpacing: "-3px",
  },
  dayLabel: {
    fontSize: 12,
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: "700",
  },
  dayTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: WHITE,
    marginBottom: 6,
    fontFamily: "'Aptos Display', 'Georgia', serif",
    maxWidth: 500,
  },
  dayTagline: {
    fontSize: 14,
    color: ORANGE,
    fontStyle: "italic",
  },
  dayBody: {
    padding: "32px 40px",
  },
  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
    marginBottom: 32,
  },
  sectionBox: {
    background: CREAM,
    borderRadius: 10,
    padding: 20,
  },
  sectionBoxHead: {
    fontSize: 12,
    fontWeight: "700",
    color: ORANGE,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 12,
  },
  bulletItem: {
    display: "flex",
    gap: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 1.55,
    color: GRAY,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: ORANGE,
    marginTop: 6,
    flexShrink: 0,
  },
  milestone: {
    background: DARK,
    borderRadius: 10,
    padding: "16px 20px",
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
  },
  milestoneIcon: {
    fontSize: 20,
    flexShrink: 0,
    marginTop: 2,
  },
  milestoneText: {
    fontSize: 13,
    color: "#E2E8F0",
    lineHeight: 1.6,
  },
  milestoneLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: ORANGE,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 4,
    display: "block",
  },
  pipelineGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: 24,
  },
  pipelineCard: (color) => ({
    background: WHITE,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
    borderTop: `4px solid ${color}`,
    cursor: "pointer",
    transition: "transform 0.18s, box-shadow 0.18s",
  }),
  pipelineHeader: (color) => ({
    padding: "20px 24px 16px",
    borderBottom: "1px solid #F0EDE9",
    display: "flex",
    alignItems: "center",
    gap: 14,
  }),
  pipelineIconBg: (color) => ({
    width: 44,
    height: 44,
    borderRadius: 10,
    background: `${color}18`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    flexShrink: 0,
  }),
  pipelineTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: DARK,
    marginBottom: 2,
  },
  pipelineSub: {
    fontSize: 12,
    color: "#94A3B8",
    letterSpacing: "0.03em",
  },
  pipelineBody: {
    padding: "16px 24px 20px",
  },
};

function BulletList({ items, dotColor = ORANGE }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={styles.bulletItem}>
          <span
            style={{
              ...styles.bulletDot,
              background: dotColor,
            }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MarketSection() {
  return (
    <div style={{ background: WHITE, padding: "64px 0", borderTop: "1px solid #EDE8E2" }}>
      <div style={styles.section}>
        <div style={styles.sectionLabel}>CONTEXT</div>
        <div style={styles.sectionTitle}>The Pharma Engineering Landscape Today</div>
        <div style={styles.marketGrid}>
          {MARKET.map((m) => (
            <div key={m.heading} style={styles.marketCard(m.color)}>
              <div style={styles.marketHeading(m.color)}>{m.heading}</div>
              <BulletList items={m.points} dotColor={m.color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyCursorSection() {
  return (
    <div style={{ background: CREAM, padding: "64px 0" }}>
      <div style={styles.section}>
        <div style={styles.sectionLabel}>THE OPPORTUNITY</div>
        <div style={styles.sectionTitle}>Why Cursor is Positioned to Win in Pharma</div>
        <div style={styles.whyGrid}>
          {WHY_CURSOR.map((w) => (
            <div key={w.heading} style={styles.whyCard}>
              <span style={styles.whyIcon}>{w.icon}</span>
              <div style={{ fontSize: 18, fontWeight: "700", color: WHITE, marginBottom: 8, lineHeight: 1.3 }}>
                {w.heading}
              </div>
              <span style={styles.whyStat}>{w.stats}</span>
              <BulletList items={w.points} dotColor={ORANGE} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DayPlanSection() {
  const [activeDay, setActiveDay] = useState(0);
  const day = DAYS[activeDay];

  return (
    <div style={{ background: WHITE, padding: "64px 0", borderTop: "1px solid #EDE8E2" }}>
      <div style={styles.section}>
        <div style={styles.sectionLabel}>EXECUTION PLAN</div>
        <div style={styles.sectionTitle}>First 30 . 60 . 90 Days</div>

        <div style={styles.dayNav}>
          {DAYS.map((d, i) => (
            <button
              key={d.num}
              style={{
                ...styles.dayNavBtn(i === activeDay),
                borderRight: i < DAYS.length - 1 ? `2px solid ${i === activeDay ? "#333" : "#E5E7EB"}` : "none",
              }}
              onClick={() => setActiveDay(i)}
              type="button"
            >
              <span style={styles.dayNumBadge(i === activeDay)}>{d.num}</span>
              <span>Day</span>
            </button>
          ))}
        </div>

        <div style={styles.dayCard}>
          <div style={styles.dayHeader}>
            <div>
              <div style={styles.dayLabel}>Day Plan</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={styles.dayBigNum}>{day.num}</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={styles.dayTitle}>{day.title}</div>
              <div style={styles.dayTagline}>{day.tagline}</div>
            </div>
          </div>

          <div style={styles.dayBody}>
            <div style={styles.sectionGrid}>
              {day.sections.map((sec) => (
                <div key={sec.heading} style={styles.sectionBox}>
                  <div style={styles.sectionBoxHead}>{sec.heading}</div>
                  <BulletList items={sec.items} />
                </div>
              ))}
            </div>

            <div style={styles.milestone}>
              <span style={styles.milestoneIcon}>🎯</span>
              <div>
                <span style={styles.milestoneLabel}>Day {day.num} Milestone</span>
                <span style={styles.milestoneText}>{day.milestone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={{ background: CREAM, padding: "64px 0" }}>
      <div style={styles.section}>
        <div style={styles.sectionLabel}>GROWTH STRATEGY</div>
        <div style={styles.sectionTitle}>Pipeline Growth Plan</div>
        <div style={styles.pipelineGrid}>
          {PIPELINE.map((p) => (
            <div
              key={p.id}
              style={{
                ...styles.pipelineCard(p.color),
                transform: expanded === p.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow: expanded === p.id ? `0 8px 32px ${p.color}28` : "0 2px 16px rgba(0,0,0,0.07)",
              }}
              onClick={() => setExpanded(expanded === p.id ? null : p.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setExpanded(expanded === p.id ? null : p.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div style={styles.pipelineHeader(p.color)}>
                <div style={styles.pipelineIconBg(p.color)}>{p.icon}</div>
                <div>
                  <div style={styles.pipelineTitle}>{p.title}</div>
                  <div style={styles.pipelineSub}>{p.subtitle}</div>
                </div>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 20,
                    color: p.color,
                    transform: expanded === p.id ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                  }}
                >
                  ↓
                </span>
              </div>

              <div style={styles.pipelineBody}>
                {expanded === p.id ? (
                  <BulletList items={p.points} dotColor={p.color} />
                ) : (
                  <div style={{ fontSize: 13, color: "#94A3B8", fontStyle: "italic" }}>
                    Click to expand strategy →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <CursorLogo size={28} />
        <nav style={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <button key={item.id} style={styles.navBtn(activeSection === item.id)} onClick={() => scrollTo(item.id)} type="button">
              {item.label}
            </button>
          ))}
        </nav>
        <div style={styles.headerRight}>
          <span>Life Sciences . Enterprise SAE</span>
        </div>
      </header>

      <section id="overview" style={styles.hero}>
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: DARK_MID,
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: -60,
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: ORANGE,
            opacity: 0.08,
          }}
        />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
          <span style={styles.heroTag}>Operating Plan . Life Sciences</span>
          <h1 style={styles.heroTitle}>
            Building Enterprise Growth <span style={{ color: ORANGE }}>in Pharma</span>
          </h1>
          <p style={styles.heroSub}>
            A structured plan to identify signal, build champions, and turn Cursor's product-led growth into multi-year
            enterprise contracts across the pharmaceutical sector.
          </p>
          <div style={styles.heroBadges}>
            <div style={styles.heroBadge}>
              <span style={styles.heroBadgeLabel}>Prepared For</span>
              John Vaugh - VP, Enterprise Sales
            </div>
            <div style={styles.heroBadge}>
              <span style={styles.heroBadgeLabel}>Presenter</span>
              David Gutshall
            </div>
            <div style={styles.heroBadge}>
              <span style={styles.heroBadgeLabel}>Date</span>
              April 25, 2026
            </div>
            <div style={styles.heroBadge}>
              <span style={styles.heroBadgeLabel}>Focus</span>
              Large Enterprise Pharma
            </div>
          </div>
        </div>
      </section>

      <div id="market">
        <MarketSection />
      </div>

      <div id="why-cursor">
        <WhyCursorSection />
      </div>

      <div id="90-day">
        <DayPlanSection />
      </div>

      <div id="pipeline">
        <PipelineSection />
      </div>

      <footer
        style={{
          background: DARK,
          borderTop: `3px solid ${ORANGE}`,
          padding: "32px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <CursorLogo size={22} />
        <div style={{ fontSize: 12, color: "#78716C", textAlign: "center" }}>
          Enterprise Sales Operating Plan . Life Sciences . April 2026
        </div>
        <div style={{ fontSize: 12, color: "#78716C" }}>Confidential . David Gutshall</div>
      </footer>
    </div>
  );
}
