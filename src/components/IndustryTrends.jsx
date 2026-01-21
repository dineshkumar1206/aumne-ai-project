import { useEffect, useRef, useState } from "react";
import "./IndustryTrends.css";

const stats = [
  {
    value: 80,
    suffix: "%",
    title: "of customer interactions",
    desc: "handled by AI agents by 2029",
    source: "GARTNER",
  },
  {
    value: 95,
    suffix: "B",
    prefix: "$",
    title: "expected spending on service",
    desc: "transformation by 2030",
    source: "IDC",
  },
  {
    value: 46,
    suffix: "B",
    prefix: "$",
    title: "spent annually on service",
    desc: "transformation with limited results",
  },
  {
    value: 1,
    suffix: " in 3",
    title: "customers leave after a single",
    desc: "poor service experience",
    source: "PWC",
  },
  {
    value: "12–18",
    title: "months",
    desc: "typical transformation project duration costing millions",
    source: "ACCENTURE",
    noCount: true,
  },
  {
    value: 70,
    suffix: "%",
    title: "of enterprises remain tied to",
    desc: "legacy IVRs",
    source: "GARTNER",
  },
];

export default function IndustryTrends() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="industry">
      <div className="industry-header">
        <h2>Industry Trends</h2>
        <p>
          The customer service landscape is rapidly evolving, but many
          organizations struggle with transformation challenges.
        </p>
      </div>

      <div className="industry-grid">
        {stats.map((item, index) => (
          <StatCard key={index} item={item} visible={visible} delay={index} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function StatCard({ item, visible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible || item.noCount) return;

    const end = item.value;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [visible, item]);

  return (
    <div
      className={`industry-card ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${delay * 120}ms` }}
    >
      <div className="industry-value">
        {item.prefix}
        {item.noCount ? item.value : count}
        {item.suffix}
      </div>

      <p className="industry-title">{item.title}</p>
      <p className="industry-desc">{item.desc}</p>

      {item.source && (
        <p className="industry-source">— {item.source}</p>
      )}
    </div>
  );
}
