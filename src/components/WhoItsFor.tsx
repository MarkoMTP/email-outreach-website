import "./WhoItsFor.css";

const WhoItsFor = () => {
  const audiences = [
    {
      icon: "🎯",
      title: "B2B Agencies",
      description:
        "Turn cold data into booked calls with a fully automated outreach system built to scale.",
    },
    {
      icon: "📢",
      title: "Marketing Agencies",
      description:
        "Generate a steady stream of qualified leads without wasting time on manual prospecting.",
    },
    {
      icon: "💻",
      title: "SaaS Founders",
      description:
        "Book product demos on autopilot—no SDRs, no cold calling, just consistent pipeline.",
    },
    {
      icon: "👔",
      title: "Recruiting Firms",
      description:
        "Fill your pipeline with verified decision-makers and automate first contact entirely.",
    },
    {
      icon: "📊",
      title: "Consultants & Service Providers",
      description:
        "Focus on closing deals while the system finds and warms up your next clients for you.",
    },
    {
      icon: "✨",
      title: "And Many Others",
      description:
        "If you sell B2B and rely on calls or demos, this engine keeps your calendar full—automatically.",
    },
  ];

  return (
    <section className="who-its-for">
      <div className="who-its-for-container">
        <h2 className="section-title">Who It's For</h2>
        <p className="section-subtitle">
          Built for B2B companies that want to scale predictably
        </p>

        <div className="audiences-grid">
          {audiences.map((audience, index) => (
            <div key={index} className="audience-card">
              <div className="audience-icon">{audience.icon}</div>
              <h3 className="audience-title">{audience.title}</h3>
              <p className="audience-description">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
