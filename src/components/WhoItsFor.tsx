import './WhoItsFor.css'

const WhoItsFor = () => {
  const audiences = [
    {
      icon: '🎯',
      title: 'B2B Agencies',
      description: 'Who need consistent client flow without spending hours on manual outreach'
    },
    {
      icon: '📢',
      title: 'Marketing Agencies',
      description: 'Looking to scale lead generation for clients with proven automation'
    },
    {
      icon: '💻',
      title: 'SaaS Founders',
      description: 'Who want demos without hiring expensive SDRs or building sales teams'
    },
    {
      icon: '👔',
      title: 'Recruiting Firms',
      description: 'Tired of manual prospecting and want qualified candidates automatically'
    },
    {
      icon: '📊',
      title: 'Consultants & Service Providers',
      description: 'Who want qualified leads on autopilot to focus on delivery, not hunting'
    },
    {
      icon: '✨',
      title: 'And Many Others',
      description: 'Any B2B business that wants predictable, automated lead generation at scale'
    }
  ]

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
  )
}

export default WhoItsFor
