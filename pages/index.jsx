import { useState } from "react";

const PHASES = [
  {
    id: 1,
    label: "PHASE 1",
    title: "Recon & Load",
    days: "Days 1–7",
    color: "#00D4FF",
    tasks: [
      "Update resume — 1 page, clean, no fluff. Lead with Lumen: enterprise accounts, network/fiber solutions, revenue numbers if possible.",
      "Print 60 copies on bright white 32lb paper. Treat it like a business card leave-behind.",
      "Build your Target 15 list (see below). Mix sizes. Prioritize companies using or selling tech infrastructure.",
      "For each target: Google the company, find the office address, look up the hiring manager or IT/Sales director on LinkedIn.",
      "Create a simple tracking sheet: Company | Contact Name | Visit Date | Outcome | Follow-Up Date",
      "Prep her 30-second walk-in pitch. Memorize it. Make it sound human, not rehearsed.",
    ],
  },
  {
    id: 2,
    label: "PHASE 2",
    title: "First Contact",
    days: "Weeks 2–4 (Mon/Wed/Fri)",
    color: "#FFB800",
    tasks: [
      "Hit 2–3 targets per outing. Don't rush — quality over quantity per visit.",
      "Walk in dressed like you already work there. Professional but approachable.",
      "Ask for the hiring manager by name if you have it. If not: 'Who would I speak with about career opportunities?'",
      "Lead with value: 'I have X years in enterprise telecom. I'm not here to drop a resume and leave — I'd love 15 minutes to learn about your team.'",
      "If they're not available: leave the resume, get a name, ask for the best way to follow up.",
      "Log every visit same day — outcome, vibe, who you met, what was said.",
    ],
  },
  {
    id: 3,
    label: "PHASE 3",
    title: "Warm Follow-Up",
    days: "Weeks 3–6",
    color: "#FF6B35",
    tasks: [
      "Every contact gets a follow-up within 48 hours — handwritten note or email, not both.",
      "For warm leads: propose a specific ask. 'Would you have 20 minutes Thursday over coffee?'",
      "Re-visit any target where you left a resume but didn't meet anyone — go back once more.",
      "If LinkedIn connection was made: send a short message referencing the visit. Keep it 3 sentences.",
      "Track which companies have posted jobs since your visit — shows timing alignment.",
    ],
  },
  {
    id: 4,
    label: "PHASE 4",
    title: "Close & Convert",
    days: "Weeks 6–8",
    color: "#00FF88",
    tasks: [
      "Push for the meeting at every warm contact. Lunch, coffee, 15-min call — whatever they'll give.",
      "At the meeting: listen more than you talk. Ask about their team, their challenges, their growth plans.",
      "Be direct at the end: 'I'd love to be part of what you're building. What does a path forward look like?'",
      "Don't wait to hear back — keep hitting the remaining targets in parallel.",
      "By Day 60: every contact should have been touched at least twice.",
    ],
  },
];

const TARGET_CATEGORIES = [
  {
    category: "Managed IT / MSP Firms",
    why: "They sell exactly what she supported at Lumen. She speaks the language.",
    examples: ["Logically", "Ntiva", "local MSPs in Phoenix metro"],
    slots: 4,
  },
  {
    category: "Telecom / Connectivity Resellers",
    why: "Direct overlap with Lumen. She knows the products, the problems, the clients.",
    examples: ["Comcast Business", "Cox Business", "TeleCommunication Systems"],
    slots: 3,
  },
  {
    category: "Mid-Size Enterprises w/ Internal IT",
    why: "Companies 50–300 employees often need a tech-savvy account or ops person.",
    examples: ["Healthcare groups, logistics, real estate firms, law firms"],
    slots: 4,
  },
  {
    category: "Cloud / SaaS Vendors",
    why: "They hire people who can translate technical to business. Lumen = perfect background.",
    examples: ["Local offices of Salesforce, RingCentral, Vonage, 8x8"],
    slots: 2,
  },
  {
    category: "Staffing / Tech Recruiting Firms",
    why: "She could land contract work immediately AND they hear about every opening first.",
    examples: ["TEKsystems", "Insight Global", "Robert Half Technology"],
    slots: 2,
  },
];

const PITCH = {
  opener: "Hi — I'm [Name]. I know this is a bit unconventional, but I believe in showing up instead of getting lost in an inbox.",
  middle: "I spent [X] years at Lumen Technologies managing enterprise accounts — fiber, network infrastructure, the full stack. I'm looking for my next opportunity and your company was at the top of my list.",
  close: "I'm not here to just drop a resume. I'd love five minutes with whoever leads [sales/IT/operations] — or even just to know the right person to reach out to.",
  leaveOff: "Here's my resume. Is there a card I could take, or a name I could follow up with?",
};

export default function Playbook() {
  const [activePhase, setActivePhase] = useState(1);
  const [activeTab, setActiveTab] = useState("phases");

  const phase = PHASES.find((p) => p.id === activePhase);

  return (
    <div style={{
      background: "#0A0C10",
      minHeight: "100vh",
      fontFamily: "'Courier New', monospace",
      color: "#E8E8E0",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1E2530",
        padding: "28px 32px 20px",
        background: "linear-gradient(180deg, #0D1018 0%, #0A0C10 100%)",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#00D4FF", marginBottom: 6, textTransform: "uppercase" }}>
              ◈ OPERATION BIG DOG — SPOUSE EDITION
            </div>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: 1, color: "#FFFFFF", fontFamily: "'Courier New', monospace" }}>
              60-DAY FIELD CAMPAIGN
            </h1>
            <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4, letterSpacing: 2 }}>
              TECH / IT / TELECOM · PHOENIX WEST VALLEY · IN-PERSON ONLY
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {["MWF", "2 HRS", "15 TARGETS"].map((stat) => (
              <div key={stat} style={{ textAlign: "center", padding: "8px 14px", border: "1px solid #1E2530", background: "#0D1018" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#00D4FF" }}>{stat}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Tab Nav */}
        <div style={{ display: "flex", gap: 4, marginTop: 20 }}>
          {[["phases", "PHASES"], ["targets", "TARGET LIST"], ["pitch", "THE PITCH"], ["rules", "RULES OF ENGAGEMENT"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                padding: "7px 14px",
                fontSize: 11,
                letterSpacing: 2,
                background: activeTab === id ? "#00D4FF" : "transparent",
                color: activeTab === id ? "#000" : "#6B7280",
                border: activeTab === id ? "none" : "1px solid #1E2530",
                cursor: "pointer",
                fontFamily: "'Courier New', monospace",
                fontWeight: activeTab === id ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "28px 32px" }}>

        {/* PHASES TAB */}
        {activeTab === "phases" && (
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24 }}>
            {/* Phase selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PHASES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhase(p.id)}
                  style={{
                    padding: "14px 16px",
                    background: activePhase === p.id ? p.color + "15" : "#0D1018",
                    border: activePhase === p.id ? `1px solid ${p.color}` : "1px solid #1E2530",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ fontSize: 10, letterSpacing: 3, color: p.color, marginBottom: 3, fontFamily: "'Courier New', monospace" }}>{p.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: activePhase === p.id ? "#FFFFFF" : "#9CA3AF", fontFamily: "'Courier New', monospace" }}>{p.title}</div>
                  <div style={{ fontSize: 10, color: "#4B5563", marginTop: 2, fontFamily: "'Courier New', monospace" }}>{p.days}</div>
                </button>
              ))}
            </div>

            {/* Phase detail */}
            <div style={{ background: "#0D1018", border: `1px solid ${phase.color}30`, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: 4, color: phase.color, marginBottom: 4 }}>{phase.label} · {phase.days}</div>
                  <h2 style={{ margin: 0, fontSize: 22, color: "#FFFFFF", fontFamily: "'Courier New', monospace" }}>{phase.title}</h2>
                </div>
                <div style={{ padding: "4px 12px", background: phase.color + "20", border: `1px solid ${phase.color}40`, fontSize: 11, color: phase.color, letterSpacing: 2 }}>
                  {phase.tasks.length} TASKS
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {phase.tasks.map((task, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, padding: "14px 16px", background: "#070809", border: "1px solid #1A1F28" }}>
                    <div style={{ fontSize: 11, color: phase.color, fontWeight: 700, minWidth: 24, paddingTop: 1 }}>{String(i + 1).padStart(2, "0")}</div>
                    <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.7 }}>{task}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TARGETS TAB */}
        {activeTab === "targets" && (
          <div>
            <div style={{ marginBottom: 20, padding: "14px 20px", background: "#0D1018", border: "1px solid #FFB80030", borderLeft: "3px solid #FFB800" }}>
              <span style={{ fontSize: 11, color: "#FFB800", letterSpacing: 2 }}>⚡ MISSION BRIEF — </span>
              <span style={{ fontSize: 12, color: "#9CA3AF" }}>Map these 5 categories. Slot in 15 total companies from your ZIP radius. Prioritize by proximity first, industry fit second.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {TARGET_CATEGORIES.map((cat, i) => (
                <div key={i} style={{ background: "#0D1018", border: "1px solid #1E2530", padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", marginBottom: 4, fontFamily: "'Courier New', monospace" }}>{cat.category}</div>
                      <div style={{ fontSize: 12, color: "#6B7280" }}>{cat.why}</div>
                    </div>
                    <div style={{ padding: "4px 12px", background: "#00D4FF15", border: "1px solid #00D4FF30", fontSize: 11, color: "#00D4FF", letterSpacing: 2, whiteSpace: "nowrap" }}>
                      {cat.slots} SLOTS
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid #1A1F28", paddingTop: 12 }}>
                    <div style={{ fontSize: 11, color: "#4B5563", letterSpacing: 2, marginBottom: 8 }}>EXAMPLES / WHERE TO LOOK</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {cat.examples.map((ex, j) => (
                        <span key={j} style={{ padding: "4px 10px", background: "#070809", border: "1px solid #1E2530", fontSize: 11, color: "#9CA3AF" }}>{ex}</span>
                      ))}
                    </div>
                  </div>
                  {/* Empty slots for filling in */}
                  <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {Array(cat.slots).fill(null).map((_, s) => (
                      <div key={s} style={{ padding: "6px 16px", border: "1px dashed #1E2530", fontSize: 11, color: "#374151", letterSpacing: 1 }}>
                        TARGET {s + 1} — TBD
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PITCH TAB */}
        {activeTab === "pitch" && (
          <div style={{ maxWidth: 680 }}>
            <div style={{ marginBottom: 20, padding: "14px 20px", background: "#0D1018", border: "1px solid #FF6B3530", borderLeft: "3px solid #FF6B35" }}>
              <span style={{ fontSize: 11, color: "#FF6B35", letterSpacing: 2 }}>⚡ FIELD NOTE — </span>
              <span style={{ fontSize: 12, color: "#9CA3AF" }}>This pitch is a template. It should feel like a real conversation, not a script. Adapt it every time based on the read.</span>
            </div>
            {[
              { label: "OPENER", color: "#00D4FF", text: PITCH.opener },
              { label: "THE BRIDGE", color: "#FFB800", text: PITCH.middle },
              { label: "THE ASK", color: "#FF6B35", text: PITCH.close },
              { label: "LEAVE-OFF", color: "#00FF88", text: PITCH.leaveOff },
            ].map((block, i) => (
              <div key={i} style={{ marginBottom: 16, background: "#0D1018", border: `1px solid ${block.color}25`, borderLeft: `3px solid ${block.color}` }}>
                <div style={{ padding: "8px 20px", background: block.color + "10", borderBottom: `1px solid ${block.color}20` }}>
                  <span style={{ fontSize: 10, letterSpacing: 3, color: block.color }}>{block.label}</span>
                </div>
                <div style={{ padding: "16px 20px", fontSize: 14, color: "#D1D5DB", lineHeight: 1.8, fontStyle: "italic" }}>
                  "{block.text}"
                </div>
              </div>
            ))}

            <div style={{ marginTop: 24, padding: 20, background: "#0D1018", border: "1px solid #1E2530" }}>
              <div style={{ fontSize: 11, color: "#6B7280", letterSpacing: 3, marginBottom: 16 }}>READ-THE-ROOM MATRIX</div>
              {[
                { signal: "Receptionist is friendly / chatty", move: "Ask for the manager directly. Good energy = open door." },
                { signal: "Lobby is busy / rushed", move: "Quick ask, leave resume, get a name. Come back." },
                { signal: "Manager comes out immediately", move: "This is your shot. Stay calm, be brief, go for the meeting." },
                { signal: "'We're not hiring right now'", move: "'I'm not looking for a job posting — I'm looking for the right team. Mind if I leave this and follow up in two weeks?'" },
                { signal: "They take your resume and walk away", move: "Send a follow-up email that day. Attach the resume again." },
              ].map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, padding: "12px 0", borderBottom: i < 4 ? "1px solid #1A1F28" : "none" }}>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}><span style={{ color: "#FFB800" }}>▸</span> {row.signal}</div>
                  <div style={{ fontSize: 12, color: "#D1D5DB" }}>{row.move}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RULES TAB */}
        {activeTab === "rules" && (
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { num: "01", title: "Dress like you already have the job.", body: "Every visit. No exceptions. First impression is everything when you're walking in cold." },
                { num: "02", title: "Never beg. Propose.", body: "You're not asking for charity. She has skills they need. Frame every ask as a mutual opportunity." },
                { num: "03", title: "Log same day.", body: "Memory fades. The tracking sheet is the campaign. If it's not logged, it didn't happen." },
                { num: "04", title: "Rejection isn't a no — it's timing.", body: "'We're not hiring' means 'not today.' Keep every contact warm. People get promoted. Budgets open up." },
                { num: "05", title: "Two-touch minimum per target.", body: "Every target gets visited at least twice in 60 days. If you haven't heard back, you haven't followed up enough." },
                { num: "06", title: "Online apps are the backup, not the plan.", body: "If she finds a posting at a company she's already visited, that's leverage. Use it. Don't rely on it." },
                { num: "07", title: "Protect the energy.", body: "MWF, 2 hours, then done. Don't let job searching consume everything. Burnout kills campaigns." },
                { num: "08", title: "Celebrate the reps, not just the results.", body: "Every walk-in is a win. Momentum matters. The job is the outcome — the habit is the work." },
              ].map((rule) => (
                <div key={rule.num} style={{ display: "flex", gap: 20, padding: 20, background: "#0D1018", border: "1px solid #1E2530" }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "#1E2530", minWidth: 40, fontFamily: "'Courier New', monospace" }}>{rule.num}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", marginBottom: 6, fontFamily: "'Courier New', monospace" }}>{rule.title}</div>
                    <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7 }}>{rule.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, padding: 20, background: "#0D1018", border: "1px solid #00FF8825", borderLeft: "3px solid #00FF88" }}>
              <div style={{ fontSize: 11, color: "#00FF88", letterSpacing: 3, marginBottom: 12 }}>THE MATH</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Total visits (8 weeks)", value: "48 outings" },
                  { label: "Avg targets per outing", value: "2–3 companies" },
                  { label: "Total touches", value: "96–144" },
                  { label: "Conversion needed", value: "1 job from 15 targets" },
                  { label: "Required hit rate", value: "6.7%" },
                  { label: "Cold sales typical rate", value: "10–20%" },
                ].map((stat, i) => (
                  <div key={i} style={{ padding: "10px 14px", background: "#070809", border: "1px solid #1A1F28" }}>
                    <div style={{ fontSize: 10, color: "#4B5563", letterSpacing: 2, marginBottom: 4 }}>{stat.label.toUpperCase()}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#00FF88" }}>{stat.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, fontSize: 12, color: "#6B7280", lineHeight: 1.7 }}>
                The numbers are on her side. In-person converts at a higher rate than any online application. She only needs one yes.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
