import "./HowActWorks.css";

const lifecycle = [
  {
    step: "01",
    title: "Discovery",
    icon: "search",
    desc: "Ingests enterprise artifacts including legacy IVRs, workflows, transcripts, product documents, API guides, knowledge bases, etc. to capture intents, personas, and objectives.",
  },
  {
    step: "02",
    title: "Visibility",
    icon: "eye",
    desc: "Provides a single view into existing flows, performance, and gaps, creating a clear foundation for modernization.",
  },
  {
    step: "03",
    title: "Design",
    icon: "palette",
    desc: "Combines Fingerprinting, rule based heuristics, and AI models to generate conversational journeys aligned with enterprise goals and customer needs.",
  },
  {
    step: "04",
    title: "Develop",
    icon: "code",
    desc: "Flows are validated, refined, and integrated with human in the loop oversight, compliance checks, and system integrations.",
  },
  {
    step: "05",
    title: "Deploy",
    icon: "rocket",
    desc: "Publish across voice, chat, and digital platforms with enterprise grade governance and multi platform agility.",
  },
  {
    step: "06",
    title: "Continuous Evolution",
    icon: "refresh",
    desc: "A built in feedback loop captures insights from every interaction. ACT uses this learning to continuously evolve services.",
  },
];

export default function HowActWorks() {
  return (
    <section className="act-works">
      <div className="act-header">
        <h2>How ACT Works</h2>
        <p className="act-subtitle">
          ACT follows a continuous lifecycle — ensuring services are not only
          modernized but also transparent, governed, and continuously evolving
          alongside products.
        </p>
        <h3 className="act-lifecycle">The ACT Lifecycle</h3>
      </div>

      <div className="act-grid">
        {lifecycle.map((item, index) => (
          <div className="act-card" key={index}>
            <Icon type={item.icon} />
            <span className="act-step">{item.step}</span>
            <h4>{item.title}</h4>
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
    search: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 24 24">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="15" cy="10" r="1" />
        <circle cx="12" cy="14" r="1" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24">
        <path d="M8 17l-5-5 5-5M16 7l5 5-5 5" />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2c4 2 6 6 6 10l-6 4-6-4c0-4 2-8 6-10z" />
        <path d="M12 14v8" />
      </svg>
    ),
    refresh: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0 0 14-7M19 5a9 9 0 0 0-14 7" />
      </svg>
    ),
  };

  return <div className="act-icon">{icons[type]}</div>;
}
