import "./CompetitiveAdvantage.css";

const CompetitiveAdvantage = () => {
  const timeline = [
    {
      period: "Week 1–4",
      title: "Your private outreach system goes live",
      description:
        "The system starts sourcing and messaging qualified prospects every single day — just like a full-time SDR team would, but without the salary or downtime. Your first interested leads appear within weeks.",
    },
    {
      period: "Month 2–3",
      title: "Your calendar starts filling with booked calls",
      description:
        "The campaigns run on autopilot, constantly refining subject lines and follow-ups. You’re handling real conversations — not chasing prospects — while the system continues outreach in the background.",
    },
    {
      period: "Month 4–6",
      title: "Your outreach team is now 100% automated",
      description:
        "Lead flow becomes predictable. Every day, verified prospects are contacted, replies are sorted, and new calls are booked — all without hiring or managing a single SDR.",
    },
  ];

  return (
    <section className="competitive-advantage">
      <div className="advantage-container">
        <h2 className="section-title">
          Your Automated SDR Team — Working 24/7
        </h2>
        <p className="section-subtitle">
          Think of Email Outreach Engine™ as your own private sales development
          team — sourcing leads, writing messages, sending personalized emails,
          and booking calls automatically. It runs quietly in the background,
          generating qualified opportunities every week without any manual
          effort.
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
            Businesses that implement this system replace the cost and
            complexity of traditional outreach teams with a lean, data-driven
            automation engine.
            <strong>
              Instead of hiring SDRs, training them, and managing turnover — you
              launch a digital version that works nonstop, scales instantly, and
              never misses a follow-up.
            </strong>
          </p>
        </div>

        <div className="urgency-message">
          <p>
            Every week you wait is another week of manual outreach, inconsistent
            pipeline, and missed opportunities.{" "}
            <strong>
              Early adopters are already using automation to generate consistent
              client flow — the question is whether you’ll build your own system
              or keep relying on people and spreadsheets.
            </strong>
          </p>
        </div>

        <div className="availability-note">
          <div className="availability-icon">⚠️</div>
          <p className="availability-text">
            <strong>Limited Availability:</strong> We only onboard a few new
            clients each quarter to ensure proper setup, testing, and long-term
            results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
