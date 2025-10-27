import './Problem.css'

const Problem = () => {
  const problems = [
    {
      icon: '⏰',
      text: 'Endless time wasted searching for leads manually'
    },
    {
      icon: '📉',
      text: 'Low reply rates, emails going to spam'
    },
    {
      icon: '🔍',
      text: 'No visibility on who replied or why'
    },
    {
      icon: '📬',
      text: 'A cluttered inbox with no organization'
    }
  ]

  return (
    <section className="problem">
      <div className="problem-container">
        <h2 className="problem-title">The typical B2B outreach nightmare</h2>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <p className="problem-text">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="problem-transition">
          <div className="transition-line"></div>
          <p className="transition-text">
            We turned all of that into a single automated engine that runs on autopilot.
          </p>
          <div className="transition-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Problem
