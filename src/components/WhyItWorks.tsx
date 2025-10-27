import "./WhyItWorks.css";

const WhyItWorks = () => {
  const stats = [
    {
      number: "5,000+",
      label: "Verified leads contacted monthly",
    },
    {
      number: "60%+",
      label: "Average open rate",
    },
    {
      number: "20%",
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

        <div className="quote-section">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            We first used this system to fill our agency's pipeline. Now we use
            it to fill yours.
          </p>
          <div className="quote-mark">"</div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
