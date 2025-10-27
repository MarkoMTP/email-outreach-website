import './FinalCTA.css'

const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open('https://calendly.com', '_blank')
  }

  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Automate your client acquisition.</h2>
          <p className="cta-subtitle">
            Stop spending hours on manual outreach. Let the system find, contact, and organize thousands of leads for you — automatically.
          </p>
          <button className="cta-button-large" onClick={handleCTAClick}>
            Book a free demo
          </button>
          <p className="cta-note">
            15-minute consultation · No commitment required
          </p>
        </div>

        <div className="cta-visual">
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="visual-circle circle-3"></div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
