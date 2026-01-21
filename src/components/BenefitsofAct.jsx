import "./BenefitsofAct.css";

const benefits = [
  {
    icon: "refresh",
    title: "Transform Legacy to AI",
    desc: "Move from outdated IVRs and fragmented workflows to Agentic conversational services without starting from scratch.",
  },
  {
    icon: "eye",
    title: "Visibility & Control",
    desc: "Track deployed flows, measure performance, and gain actionable insights across the lifecycle.",
  },
  {
    icon: "nodes",
    title: "Agility Across Platforms",
    desc: "Design once and deploy everywhere across voice, chat, and digital channels, simplifying operations.",
  },
  {
    icon: "globe",
    title: "Omnichannel Experience",
    desc: "Ensure customers get consistent, connected journeys across every touchpoint.",
  },
  {
    icon: "user",
    title: "Human in the Loop",
    desc: "Experts stay in control. They review, refine, and release AI-generated flows to ensure accuracy, compliance, governance, and trust.",
  },
  {
    icon: "bot",
    title: "Agentic Orchestration and Co-Pilot",
    desc: "Intelligent orchestration across ACT, with a co-pilot that empowers teams to guide and collaborate with AI seamlessly.",
  },
];

export default function BenefitsofAct() {
  return (
    <section className="benefits">
      <div className="benefits-header">
        <h2>Benefits of ACT</h2>

        <p className="benefits-highlight">
          ACT bridges speed, savings, and customer delight with enterprise-grade control.
        </p>

        <p className="benefits-subtext">
          With ACT, enterprises gain the ability to modernize faster, reduce costs,
          and deliver seamless experiences — while staying in control of how services
          are built and evolved.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <Icon type={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ICONS ---------------- */

function Icon({ type }) {
  const icons = {
    refresh: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0 0 14-7M19 5a9 9 0 0 0-14 7" />
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 24 24">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    nodes: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="6" height="6" />
        <rect x="15" y="15" width="6" height="6" />
        <path d="M9 6h6v12h-6z" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
      </svg>
    ),
    user: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
    bot: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
        <path d="M12 2v4" />
      </svg>
    ),
  };

  return <div className="benefit-icon">{icons[type]}</div>;
}
