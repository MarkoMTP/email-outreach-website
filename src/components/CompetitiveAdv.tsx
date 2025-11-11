import "./CompetitiveAdvantage.css";

const CompetitiveAdvantage = () => {
  const timeline = [
    {
      period: "Within 30 Days",
      title: "Your automated system is live",
      description:
        "sending personalised emails to hundreds of ideal prospects weekly. The first qualified leads appear in your inbox.",
    },
    {
      period: "Within 90 Days",
      title: "You've booked 40-50 qualified discovery calls",
      description:
        "closed your first clients from the system, and the ROI is already positive. Your pipeline is predictable.",
    },
    {
      period: "Within 6 Months",
      title: "The system is your primary lead source",
      description:
        "generating consistent opportunities whilst you focus on delivery and growth. Revenue forecasting becomes accurate.",
    },
  ];

  return (
    <section className="competitive-advantage">
      <div className="advantage-container">
        <h2 className="section-title">Your Competitive Advantage Awaits</h2>
        <p className="section-subtitle">
          The gap between agencies using automated client acquisition and those
          still relying on manual prospecting is widening every month. Early
          adopters are securing more clients, growing faster, and building more
          valuable businesses—whilst their competitors remain stuck in the
          time-consuming grind of manual outreach.
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="transformation-proof">
          <p>
            The transformation is real, repeatable, and proven. Agencies across
            the World are implementing these systems and experiencing dramatic
            shifts in their growth trajectories.{" "}
            <strong>
              The question isn't whether automation works—the data proves it
              does. The question is whether you'll be an early adopter who gains
              competitive advantage, or whether you'll watch from the sidelines
              as others capture the market opportunity.
            </strong>
          </p>
        </div>

        <div className="urgency-message">
          <p>
            Every day you delay is another day of manual prospecting, another
            week of inconsistent pipeline, another month where growth depends on
            your personal effort rather than systematic infrastructure.{" "}
            <strong>
              The agencies implementing automated acquisition today will be the
              market leaders of tomorrow—because they're building scalable,
              predictable, data-driven growth engines whilst others remain
              trapped in outdated manual methods.
            </strong>
          </p>
        </div>

        <div className="availability-note">
          <div className="availability-icon">⚠️</div>
          <p className="availability-text">
            <strong>Limited Availability:</strong> We only work with 5-8 new
            clients per quarter to ensure exceptional implementation quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
