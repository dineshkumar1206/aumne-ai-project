import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="bg-[#111] text-white py-24 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-500 mb-4">
          Industry Trends
        </h2>
        <p className="text-gray-400 text-lg">
          The customer service landscape is rapidly evolving, but many
          organizations struggle with transformation challenges.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      const current = Math.floor(eased * end);

      setCount(current);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [visible, item]);

  return (
    <div
      className={`bg-[#161616] rounded-2xl p-8 text-center shadow-lg transform transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {/* Number */}
      <div className="text-sky-500 text-5xl font-bold mb-4">
        {item.prefix}
        {item.noCount ? item.value : count}
        {item.suffix}
      </div>

      {/* Text */}
      <p className="text-gray-300 font-semibold">{item.title}</p>
      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>

      {/* Source */}
      {item.source && (
        <p className="text-sky-500 text-xs mt-4 tracking-widest">
          — {item.source}
        </p>
      )}
    </div>
  );
}
