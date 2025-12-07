import "./WhyItWorks.css";

const WhyItWorks = () => {
  const stats = [
    {
      number: "50K-300K+",
      label: "Verified leads contacted monthly",
    },
    {
      number: "60%+",
      label: "Average open rate",
    },
    {
      number: "5%-8%",
      label: "Reply rate achieved",
    },
    {
      number: "100%",
      label: "Fully automated",
    },
  ];

  const features = [
    "No manual work, no spreadsheets",
    "Smart AI sorting for real-time lead qualification",
    "Built by a marketer + developer who uses it daily",
    "Proven system with measurable results",
  ];

  const scrollToFeatures = () => {
    const el = document.getElementById("finalCTA");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="why-it-works">
      <div className="why-it-works-container">
        <h2 className="section-title">Why It Works</h2>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="check-icon">✓</div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollToFeatures} className="cta-button-large">
        Contact us
      </button>
    </section>
  );
};

export default WhyItWorks;
