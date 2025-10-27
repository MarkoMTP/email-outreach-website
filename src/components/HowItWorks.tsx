import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'AI Lead Engine',
      subtitle: 'Back-End Automation',
      description: 'The system analyzes your target niche and automatically scrapes verified contacts (names, roles, company data, emails). All leads are cleaned, verified, and enriched by AI before being sent to Instantly.',
      color: '#0066FF'
    },
    {
      number: '02',
      title: 'Campaign Setup in Instantly',
      subtitle: 'Smart Outreach',
      description: 'Leads are automatically uploaded into Instantly. Personalized email sequences are launched automatically. Each email is written to sound natural and tailored — no spam blasts.',
      color: '#00D4FF'
    },
    {
      number: '03',
      title: 'AI Inbox Management',
      subtitle: 'The Smart Brain',
      description: 'Instantly tracks every open, click, and reply. Replies are automatically categorized by AI as positive, neutral, or uninterested. The system prioritizes hot leads for you — no need to dig through your inbox.',
      color: '#00FF87'
    },
    {
      number: '04',
      title: 'You Get the Results',
      subtitle: 'Close More Deals',
      description: 'You only see what matters: interested prospects ready to talk. All messages are managed in a Gmail-like dashboard, where you can respond instantly or book a call in one click.',
      color: '#7C3AED'
    }
  ]

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="section-title">How the System Works</h2>
        <p className="section-subtitle">
          A visual flow from target to qualified reply — fully automated
        </p>

        <div className="steps-flow">
          {steps.map((step, index) => (
            <div key={index} className="step-wrapper">
              <div className="step-card" style={{ borderTopColor: step.color }}>
                <div className="step-number" style={{ color: step.color }}>
                  {step.number}
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-subtitle" style={{ color: step.color }}>
                    {step.subtitle}
                  </p>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M10 20H30M30 20L22 12M30 20L22 28"
                      stroke={step.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flow-diagram">
          <div className="flow-path">
            <div className="flow-node">Target</div>
            <div className="flow-connector"></div>
            <div className="flow-node">AI Lead Scraper</div>
            <div className="flow-connector"></div>
            <div className="flow-node">Data Enrichment</div>
            <div className="flow-connector"></div>
            <div className="flow-node">Instantly</div>
            <div className="flow-connector"></div>
            <div className="flow-node">Email Sequences</div>
            <div className="flow-connector"></div>
            <div className="flow-node">AI Sorting</div>
            <div className="flow-connector"></div>
            <div className="flow-node">Positive Replies</div>
            <div className="flow-connector"></div>
            <div className="flow-node highlight">You</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
