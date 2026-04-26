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
const HEADSHOT_URL =
  "https://media.licdn.com/dms/image/v2/D4E03AQHsrIJxKCLwjA/profile-displayphoto-scale_200_200/B4EZ11FkVkJcAc-/0/1775785887709?e=2147483647&v=beta&t=o02HWrb0XcDfO56EwoHbWUJ9y_W0TVJHLb891etTExE";

const DAYS = [
  {
    num: "30",
    title: "Learn, Listen & Map the Terrain",
    tagline: "Earn the right to sell",
    color: ORANGE,
    milestone: "Clear view of where momentum already exists across all named life sciences & biotech accounts",
    sections: [
      {
        heading: "Product Fluency",
        items: [
          "Earn the right to sell by achieving deep product fluency. Learn to explain Cursor inside life sciences & biotech workflows: clinical data pipelines, bioinformatics, regulatory submission tools, and internal R&D platforms",
          "Study Cursor's pricing model until I can explain seat tiers, consumption, and enterprise licensing in my sleep. Understand how deals have been structured at comparable life sciences accounts",
        ],
      },
      {
        heading: "Internal Alignment",
        items: [
          "Get tight with my Solutions Engineer, Customer Success, and SDR partners. Shadow calls. Understand the customer journey from first user to enterprise contract",
          "Identify which channel and technology partners (consulting firms, SI partners, cloud resellers) already have relationships inside my target life sciences & biotech accounts",
        ],
      },
      {
        heading: "Account Planning",
        items: [
          "Research and build a tiered account plan for my named life sciences & biotech accounts including target contacts at the VP and Director level",
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
          "Maintain biweekly cadence with all other accounts. Bring something useful each time: relevant life sciences & biotech case study, workflow benchmark, or peer story from a comparable organization",
          "Build executive alignment at the two most advanced accounts: connect developer productivity gains to business metrics - faster drug discovery cycles, reduced time to deployment, lower engineering cost per feature",
        ],
      },
      {
        heading: "Internal Leadership",
        items: [
          "Internally, build my reputation on the team. Contribute to deal reviews, share learnings from life sciences & biotech accounts, and establish myself as the go-to voice on life sciences enterprise selling",
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
      "Build a named life sciences & biotech account plan (ex. Eli Lilly, J&J, Pfizer, and Merck) focused on large engineering orgs with complex codebases and active digital transformation mandates",
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
      "Leverage Cursor's built-in PLG motion as an inbound pipeline signal: usage data shows which life sciences & biotech accounts already have active Cursor users before any enterprise conversation begins",
      "Engage individual practitioners already using Cursor inside target accounts. These are my future champions. Validate their workflow wins, help them tell the story internally, give them proof points",
      "Convert champion activity into structured pilots and enterprise scoping sessions. The champion's credibility with their engineering leadership is what opens the enterprise door",
      "Position myself as a problem-solver and trusted advisor to engineering leaders - not a rep running a quota play",
      "Use real-world life sciences & biotech workflow use cases (bioinformatics pipeline debugging, clinical data tooling, regulatory documentation automation) to accelerate trust and shorten sales cycles significantly",
    ],
  },
  {
    id: "customers",
    icon: "🔄",
    title: "Existing Customers",
    subtitle: "Expand & champion network",
    color: "#2d7f1d",
    points: [
      "Run structured account reviews at every existing life sciences & biotech customer to identify expansion signals: new engineering teams, new data platforms, new R&D initiatives that Cursor is not yet supporting",
      "Drive land-and-expand plays across business units. One champion in bioinformatics should lead to conversations in clinical tech, regulatory affairs engineering, and manufacturing automation",
      "Turn customers into internal advocates, case study contributors, and peer references within the life sciences & biotech industry. A Merck VP vouching for Cursor to a J&J peer is worth more than any pitch",
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
      "Treat industry events as pipeline engines, not brand plays. Target key life sciences & biotech engineering forums: BioIT World, HIMSS Life Sciences, DPharm, and developer-focused tracks at major cloud conferences",
      "Pre-book 8-12 meetings with named target contacts before every event. Warm outreach, not cold badge-scanning",
      'Lead with a sharp hook: "How much of your engineering team\'s time is spent on work that an AI pair programmer could accelerate today?"',
      "Focus on quality conversations with engineering leaders and senior developers, then convert within 48 hours to a next step (demo, workflow session, or pilot scoping call)",
      "Supplement with small executive dinners (6-10 people) targeting CTOs and VP Engineering from top life sciences & biotech accounts to drive deeper relationships and peer learning",
    ],
  },
  {
    id: "partners",
    icon: "🤝",
    title: "Partners",
    subtitle: "Reach inside top-tier life sciences & biotech",
    color: "#0369a3",
    points: [
      "Focus on partners with reach inside top-tier life sciences & biotech: global SIs (Accenture, Deloitte, Cognizant), cloud hyperscalers (AWS, Azure with life sciences practices), and specialist life sciences consulting firms",
      "Build joint account plans co-selling into active digital transformation and R&D modernization projects where Cursor can accelerate the engineering layer",
      'Enable partners with a sharp message: "Cursor gives your life sciences & biotech clients a measurable productivity return in week one - no rip-and-replace, no lengthy onboarding, no compliance risk"',
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
      "Top 20 life sciences & biotech companies each employ 2,000-10,000+ software engineers",
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
      "Legacy code debt is enormous. Cursor's codebase-awareness is uniquely suited to this environment",
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
      "Cursor understands entire repositories, not just the open file - critical for layered life sciences & biotech systems",
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
      "PLG motion means Cursor already has users inside target life sciences & biotech accounts, my job is to find and scale them",
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
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: "linear-gradient(180deg, #FBFAF8 0%, #F7F3EE 45%, #FBFAF8 100%)",
    minHeight: "100vh",
    color: "#171412",
  },
  header: {
    background: "rgba(251, 250, 248, 0.88)",
    borderBottom: "1px solid rgba(26, 23, 20, 0.08)",
    backdropFilter: "blur(18px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    padding: "0 clamp(20px, 4vw, 56px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 76,
    gap: 24,
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 11,
    color: "#7C7168",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  nav: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.72)",
    border: "1px solid rgba(26, 23, 20, 0.08)",
    borderRadius: 999,
    padding: 5,
    boxShadow: "0 10px 30px rgba(26, 23, 20, 0.05)",
  },
  navBtn: (active) => ({
    padding: "9px 14px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    fontSize: 12,
    fontWeight: 700,
    background: active ? DARK : "transparent",
    color: active ? WHITE : "#6F645C",
    transition: "background 0.2s, color 0.2s, transform 0.2s",
    letterSpacing: "0.01em",
  }),
  hero: {
    background:
      "radial-gradient(circle at 82% 18%, rgba(232, 93, 38, 0.18), transparent 32%), linear-gradient(135deg, #171412 0%, #29211C 58%, #3A2A22 100%)",
    color: WHITE,
    padding: "clamp(72px, 9vw, 128px) clamp(20px, 4vw, 56px)",
    position: "relative",
    overflow: "hidden",
  },
  heroInner: {
    position: "relative",
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.72fr)",
    gap: "clamp(32px, 6vw, 72px)",
    alignItems: "center",
  },
  heroCopy: {
    maxWidth: 720,
  },
  heroTitleLockup: {
    display: "flex",
    alignItems: "flex-end",
    gap: 24,
    marginBottom: 24,
  },
  heroTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(255, 255, 255, 0.1)",
    color: "#FFD7C7",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.14em",
    padding: "8px 12px",
    borderRadius: 999,
    marginBottom: 24,
    textTransform: "uppercase",
    border: "1px solid rgba(255, 255, 255, 0.14)",
  },
  heroTitle: {
    fontSize: "clamp(44px, 7vw, 88px)",
    fontWeight: 800,
    lineHeight: 0.96,
    letterSpacing: "-0.07em",
    margin: 0,
    maxWidth: 760,
  },
  headshotCard: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    borderRadius: 24,
    padding: 10,
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.28)",
    flex: "0 0 auto",
  },
  headshotImage: {
    width: 132,
    height: 132,
    borderRadius: 18,
    display: "block",
    objectFit: "cover",
    border: "1px solid rgba(255, 255, 255, 0.22)",
  },
  heroSub: {
    fontSize: "clamp(17px, 1.8vw, 21px)",
    color: "#D7CFC8",
    marginBottom: 34,
    maxWidth: 650,
    lineHeight: 1.65,
  },
  heroBadges: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },
  heroBadge: {
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: 16,
    padding: "16px 18px",
    fontSize: 13,
    color: "#F7F3EE",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
  },
  heroBadgeLabel: {
    color: "#FFB494",
    fontWeight: 800,
    display: "block",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  heroPanel: {
    background: "rgba(255, 255, 255, 0.94)",
    color: DARK,
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: 28,
    padding: 28,
    boxShadow: "0 28px 80px rgba(0, 0, 0, 0.28)",
  },
  heroPanelLabel: {
    color: ORANGE,
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  heroPanelTitle: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.04em",
    lineHeight: 1.05,
    marginBottom: 18,
  },
  heroMetricGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
    marginTop: 22,
  },
  heroMetric: {
    background: "#F8F5F1",
    border: "1px solid #EEE6DE",
    borderRadius: 18,
    padding: 16,
  },
  heroMetricValue: {
    fontSize: 24,
    fontWeight: 850,
    letterSpacing: "-0.04em",
    color: DARK,
  },
  heroMetricLabel: {
    fontSize: 12,
    lineHeight: 1.45,
    color: "#766B62",
    marginTop: 4,
  },
  section: {
    padding: "clamp(72px, 9vw, 112px) clamp(20px, 4vw, 56px)",
    maxWidth: 1180,
    margin: "0 auto",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 850,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: ORANGE,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: 850,
    lineHeight: 1.03,
    letterSpacing: "-0.055em",
    marginBottom: 34,
    color: DARK,
    maxWidth: 760,
  },
  marketGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 18,
  },
  marketCard: (color) => ({
    background: WHITE,
    borderRadius: 24,
    padding: 28,
    border: "1px solid rgba(26, 23, 20, 0.08)",
    boxShadow: "0 18px 48px rgba(26, 23, 20, 0.06)",
    position: "relative",
    overflow: "hidden",
    outline: `1px solid ${color}10`,
  }),
  marketHeading: (color) => ({
    fontSize: 18,
    fontWeight: 800,
    color: DARK,
    marginBottom: 18,
    letterSpacing: "-0.02em",
    display: "flex",
    alignItems: "center",
    gap: 10,
    "--dot": color,
  }),
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 18,
  },
  whyCard: {
    background: "linear-gradient(145deg, #FFFFFF 0%, #F8F5F1 100%)",
    border: "1px solid rgba(26, 23, 20, 0.08)",
    borderRadius: 24,
    padding: 28,
    color: DARK,
    boxShadow: "0 20px 54px rgba(26, 23, 20, 0.07)",
  },
  whyIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    background: "#FFF1EA",
    color: ORANGE,
    fontSize: 24,
    marginBottom: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  whyStat: {
    background: "#FFF1EA",
    color: ORANGE,
    fontSize: 12,
    fontWeight: 850,
    padding: "7px 11px",
    borderRadius: 999,
    display: "inline-block",
    marginBottom: 16,
    letterSpacing: "0.02em",
  },
  dayNav: {
    display: "flex",
    gap: 8,
    marginBottom: 26,
    borderRadius: 999,
    padding: 6,
    background: WHITE,
    border: "1px solid rgba(26, 23, 20, 0.08)",
    width: "fit-content",
    boxShadow: "0 14px 36px rgba(26, 23, 20, 0.06)",
  },
  dayNavBtn: (active) => ({
    padding: "10px 18px 10px 10px",
    border: "none",
    borderRadius: 999,
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 800,
    background: active ? DARK : WHITE,
    color: active ? WHITE : DARK,
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: 10,
  }),
  dayNumBadge: (active) => ({
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: active ? ORANGE : "#F1ECE6",
    color: active ? WHITE : "#6F645C",
    fontSize: 15,
    fontWeight: 850,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
  }),
  dayCard: {
    background: WHITE,
    borderRadius: 28,
    overflow: "hidden",
    border: "1px solid rgba(26, 23, 20, 0.08)",
    boxShadow: "0 24px 70px rgba(26, 23, 20, 0.08)",
  },
  dayHeader: {
    background: "linear-gradient(135deg, #171412 0%, #32261F 100%)",
    padding: "34px clamp(24px, 4vw, 44px)",
    display: "flex",
    alignItems: "flex-end",
    gap: 24,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  dayBigNum: {
    fontSize: "clamp(64px, 8vw, 104px)",
    fontWeight: 900,
    color: ORANGE,
    lineHeight: 1,
    letterSpacing: "-0.08em",
  },
  dayLabel: {
    fontSize: 12,
    color: "#BDB2AA",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 850,
  },
  dayTitle: {
    fontSize: "clamp(24px, 3vw, 34px)",
    fontWeight: 850,
    color: WHITE,
    marginBottom: 6,
    maxWidth: 500,
    letterSpacing: "-0.04em",
    lineHeight: 1.08,
  },
  dayTagline: {
    fontSize: 14,
    color: "#FFB494",
    fontWeight: 700,
  },
  dayBody: {
    padding: "clamp(24px, 4vw, 44px)",
  },
  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
    marginBottom: 32,
  },
  sectionBox: {
    background: "#FBF8F4",
    border: "1px solid #EFE7DF",
    borderRadius: 20,
    padding: 22,
  },
  sectionBoxHead: {
    fontSize: 12,
    fontWeight: 850,
    color: ORANGE,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 14,
  },
  bulletItem: {
    display: "flex",
    gap: 12,
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 1.62,
    color: "#645A52",
  },
  bulletDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: ORANGE,
    marginTop: 8,
    flexShrink: 0,
    boxShadow: "0 0 0 4px rgba(232, 93, 38, 0.1)",
  },
  milestone: {
    background: "#171412",
    borderRadius: 20,
    padding: "20px 22px",
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    boxShadow: "0 16px 36px rgba(26, 23, 20, 0.18)",
  },
  milestoneIcon: {
    fontSize: 20,
    flexShrink: 0,
    marginTop: 2,
  },
  milestoneText: {
    fontSize: 14,
    color: "#EEE7DF",
    lineHeight: 1.6,
  },
  milestoneLabel: {
    fontSize: 11,
    fontWeight: 850,
    color: "#FFB494",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 4,
    display: "block",
  },
  pipelineGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 18,
  },
  pipelineCard: (color) => ({
    background: WHITE,
    borderRadius: 24,
    overflow: "hidden",
    boxShadow: "0 18px 48px rgba(26, 23, 20, 0.06)",
    border: "1px solid rgba(26, 23, 20, 0.08)",
    cursor: "pointer",
    transition: "transform 0.18s, box-shadow 0.18s",
    outline: `1px solid ${color}10`,
  }),
  pipelineHeader: (color) => ({
    padding: "22px 24px 18px",
    borderBottom: "1px solid #F0E9E1",
    display: "flex",
    alignItems: "center",
    gap: 14,
  }),
  pipelineIconBg: (color) => ({
    width: 48,
    height: 48,
    borderRadius: 16,
    background: `${color}18`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    flexShrink: 0,
  }),
  pipelineTitle: {
    fontSize: 17,
    fontWeight: 850,
    color: DARK,
    marginBottom: 2,
    letterSpacing: "-0.02em",
  },
  pipelineSub: {
    fontSize: 12,
    color: "#7C7168",
    letterSpacing: "0.03em",
  },
  pipelineBody: {
    padding: "18px 24px 24px",
  },
  footer: {
    background: "#FBFAF8",
    borderTop: "1px solid rgba(26, 23, 20, 0.08)",
    padding: "30px clamp(20px, 4vw, 56px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  },
  footerText: {
    fontSize: 12,
    color: "#7C7168",
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
    <div style={{ background: "transparent" }}>
      <div className="app-section" style={styles.section}>
        <div style={styles.sectionLabel}>CONTEXT</div>
        <div className="section-title" style={styles.sectionTitle}>The Life Sciences & Biotech Engineering Landscape Today</div>
        <div className="card-grid" style={styles.marketGrid}>
          {MARKET.map((m) => (
            <div className="modern-card" key={m.heading} style={styles.marketCard(m.color)}>
              <div style={styles.marketHeading(m.color)}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: m.color,
                    boxShadow: `0 0 0 6px ${m.color}14`,
                    flexShrink: 0,
                  }}
                />
                {m.heading}
              </div>
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
    <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.72), rgba(247,243,238,0.45))" }}>
      <div className="app-section" style={styles.section}>
        <div style={styles.sectionLabel}>THE OPPORTUNITY</div>
        <div className="section-title" style={styles.sectionTitle}>Why Cursor is Positioned to Win in Life Sciences & Biotech</div>
        <div className="card-grid" style={styles.whyGrid}>
          {WHY_CURSOR.map((w) => (
            <div className="modern-card" key={w.heading} style={styles.whyCard}>
              <span style={styles.whyIcon}>{w.icon}</span>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 850,
                  color: DARK,
                  marginBottom: 10,
                  lineHeight: 1.18,
                  letterSpacing: "-0.03em",
                }}
              >
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
    <div style={{ background: "transparent" }}>
      <div className="app-section" style={styles.section}>
        <div style={styles.sectionLabel}>EXECUTION PLAN</div>
        <div className="section-title" style={styles.sectionTitle}>First 30 . 60 . 90 Days</div>

        <div className="day-nav" style={styles.dayNav}>
          {DAYS.map((d, i) => (
            <button
              key={d.num}
              style={styles.dayNavBtn(i === activeDay)}
              onClick={() => setActiveDay(i)}
              type="button"
            >
              <span style={styles.dayNumBadge(i === activeDay)}>{d.num}</span>
              <span>Day</span>
            </button>
          ))}
        </div>

        <div className="day-card" style={styles.dayCard}>
          <div className="day-header" style={styles.dayHeader}>
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

          <div className="day-body" style={styles.dayBody}>
            <div className="card-grid" style={styles.sectionGrid}>
              {day.sections.map((sec) => (
                <div className="modern-card" key={sec.heading} style={styles.sectionBox}>
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
    <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(251,250,248,0.95))" }}>
      <div className="app-section" style={styles.section}>
        <div style={styles.sectionLabel}>GROWTH STRATEGY</div>
        <div className="section-title" style={styles.sectionTitle}>Pipeline Growth Plan</div>
        <div className="card-grid" style={styles.pipelineGrid}>
          {PIPELINE.map((p) => (
            <div
              className="modern-card pipeline-card"
              key={p.id}
              style={{
                ...styles.pipelineCard(p.color),
                transform: expanded === p.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow:
                  expanded === p.id
                    ? `0 24px 60px ${p.color}22`
                    : "0 18px 48px rgba(26, 23, 20, 0.06)",
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
                  <div style={{ fontSize: 13, color: "#7C7168", fontWeight: 700 }}>
                    Click to expand strategy
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
  const currentDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.app}>
      <header className="site-header" style={styles.header}>
        <div className="site-logo">
          <CursorLogo size={28} />
        </div>
        <nav className="site-nav" style={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <button
              className="nav-button"
              key={item.id}
              style={styles.navBtn(activeSection === item.id)}
              onClick={() => scrollTo(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="header-context" style={styles.headerRight}>
          <span>Life Sciences . Enterprise SAE</span>
        </div>
      </header>

      <section className="hero-section" id="overview" style={styles.hero}>
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            opacity: 1,
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

        <div className="hero-inner" style={styles.heroInner}>
          <div className="hero-copy" style={styles.heroCopy}>
            <span style={styles.heroTag}>Operating Plan . Life Sciences</span>
            <div className="hero-heading-row" style={styles.heroTitleLockup}>
              <h1 className="hero-title" style={styles.heroTitle}>
                Building enterprise growth <span style={{ color: "#FF9A70" }}>in life sciences & biotech</span>
              </h1>
              <div className="headshot-card" style={styles.headshotCard}>
                <img src={HEADSHOT_URL} alt="David Gutshall headshot" style={styles.headshotImage} />
              </div>
            </div>
            <p className="hero-subtitle" style={styles.heroSub}>
              A sharper operating plan for identifying signal, developing champions, and turning
              Cursor's product-led adoption into durable enterprise contracts across life sciences & biotech.
            </p>
            <div className="hero-badges" style={styles.heroBadges}>
              <div style={styles.heroBadge}>
                <span style={styles.heroBadgeLabel}>Prepared For</span>
                Phil Tonachio - GVP, Life Sciences and Biotech
              </div>
              <div style={styles.heroBadge}>
                <span style={styles.heroBadgeLabel}>Presenter</span>
                David Gutshall
              </div>
              <div style={styles.heroBadge}>
                <span style={styles.heroBadgeLabel}>Date</span>
                {currentDate}
              </div>
              <div style={styles.heroBadge}>
                <span style={styles.heroBadgeLabel}>Focus</span>
                Large Enterprise Life Sciences & Biotech
              </div>
            </div>
          </div>

          <aside className="hero-panel" style={styles.heroPanel}>
            <div style={styles.heroPanelLabel}>Execution Focus</div>
            <div style={styles.heroPanelTitle}>Signal to champions to enterprise contracts.</div>
            <BulletList
              items={[
                "Map active Cursor usage and engineering stakeholders inside named life sciences & biotech accounts",
                "Turn practitioner wins into structured pilots with measurable productivity outcomes",
                "Build focused pipeline through outbound, PLG signal, customers, events, and partners",
              ]}
              dotColor={ORANGE}
            />
            <div className="hero-metrics" style={styles.heroMetricGrid}>
              <div style={styles.heroMetric}>
                <div style={styles.heroMetricValue}>90</div>
                <div style={styles.heroMetricLabel}>day operating cadence</div>
              </div>
              <div style={styles.heroMetric}>
                <div style={styles.heroMetricValue}>4x</div>
                <div style={styles.heroMetricLabel}>pipeline coverage target</div>
              </div>
              <div style={styles.heroMetric}>
                <div style={styles.heroMetricValue}>5</div>
                <div style={styles.heroMetricLabel}>pipeline creation motions</div>
              </div>
              <div style={styles.heroMetric}>
                <div style={styles.heroMetricValue}>50%+</div>
                <div style={styles.heroMetricLabel}>Stage 2+ pipeline mix</div>
              </div>
            </div>
          </aside>
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

      <footer className="site-footer" style={styles.footer}>
        <CursorLogo size={22} />
        <div style={{ ...styles.footerText, textAlign: "center" }}>
          Enterprise Sales Operating Plan . Life Sciences . {currentDate}
        </div>
        <div style={styles.footerText}>Confidential . David Gutshall</div>
      </footer>
    </div>
  );
}
