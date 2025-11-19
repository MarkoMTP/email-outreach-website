import "./ThreeComponents.css";

const ThreeComponents = () => {
  const components = [
    {
      number: "01",
      title: "Lead Sourcing & Verification",
      description:
        "We source verified prospects that match your ideal client profile — daily and automatically.",
    },
    {
      number: "02",
      title: "Personalized Outreach",
      description:
        "Every message is personalized with real data to sound human, not automated.",
    },
    {
      number: "03",
      title: "Smart Reply Management",
      description:
        "Replies are sorted automatically. Warm leads are flagged instantly. You only jump in when there’s real interest.",
    },
  ];

  const workflow = [
    "Lead Discovery",
    "Personalization",
    "Email Delivery",
    "Reply Sorting",
    "Booked Call",
  ];

  return (
    <section className="three-components">
      <div className="components-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          A fully automated client-acquisition system in 3 steps.
        </p>

        <div className="components-grid">
          {components.map((comp, index) => (
            <div key={index} className="component-card">
              <div className="component-number">{comp.number}</div>
              <h3 className="component-title">{comp.title}</h3>
              <p className="component-description">{comp.description}</p>
            </div>
          ))}
        </div>

        <div className="workflow-section">
          <h3 className="workflow-title">Your Client Flow</h3>
          <div className="workflow-items">
            {workflow.map((step, index) => (
              <div key={index} className="workflow-item">
                <div className="workflow-step">{index + 1}</div>
                <div className="workflow-label">{step}</div>
                {index < workflow.length - 1 && (
                  <div className="workflow-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="workflow-conclusion">
          <p>
            From lead discovery to booked calls — everything runs automatically.
            You focus on closing deals, the system handles the rest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeComponents;
