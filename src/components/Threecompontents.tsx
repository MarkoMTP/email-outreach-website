import "./ThreeComponents.css";

const ThreeComponents = () => {
  const components = [
    {
      number: "01",
      title: "Lead Sourcing & Verification",
      description:
        "Advanced AI tools scrape thousands of highly targeted leads daily from LinkedIn, industry directories, and company databases. Every email address is automatically verified for deliverability, ensuring you only contact real people at active inboxes. This eliminates the guesswork and manual labour of traditional prospecting.",
    },
    {
      number: "02",
      title: "Personalised Outreach",
      description:
        "Each email is customised automatically with the prospect's name, company details, industry-specific pain points, and relevant case studies. The system uses AI to analyse each company's online presence and craft messaging that resonates. It's personalisation at scale—something impossible with manual outreach.",
    },
    {
      number: "03",
      title: "Reply Sorting & Follow-up",
      description:
        "The moment a prospect responds, intelligent algorithms categorise the reply as positive, neutral, or negative. Interested leads are flagged immediately for your sales team, whilst objections trigger pre-programmed follow-up sequences. Cold leads receive additional nurture emails automatically. Nothing falls through the cracks.",
    },
  ];

  const workflow = [
    {
      step: "1",
      label: "Lead Discovery",
      description: "AI identifies ideal prospects",
    },
    {
      step: "2",
      label: "Personalisation",
      description: "Custom messaging created",
    },
    {
      step: "3",
      label: "Email Delivery",
      description: "Messages sent at optimal times",
    },
    {
      step: "4",
      label: "Reply Management",
      description: "Responses sorted and routed",
    },
    { step: "5", label: "Sales Call", description: "Qualified leads convert" },
  ];

  return (
    <section className="three-components">
      <div className="components-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          A truly effective automated client acquisition system isn't just one
          tool—it's an integrated ecosystem of three distinct components working
          in perfect harmony. Each element plays a critical role, and when
          properly configured, they create a perpetual lead generation engine
          that operates whilst you sleep.
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
          <h3 className="workflow-title">The Complete Workflow</h3>
          <div className="workflow-items">
            {workflow.map((item, index) => (
              <div key={index} className="workflow-item">
                <div className="workflow-step">{item.step}</div>
                <div className="workflow-label">{item.label}</div>
                <div className="workflow-description">{item.description}</div>
                {index < workflow.length - 1 && (
                  <div className="workflow-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="workflow-conclusion">
          <p>
            This seamless flow transforms the chaotic, manual prospecting
            process into a predictable, data-driven system. Each component feeds
            into the next, creating a virtuous cycle where every campaign
            generates insights that improve future performance.{" "}
            <strong>
              The result? A steady stream of qualified leads appearing in your
              inbox every single week, without you lifting a finger.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeComponents;
