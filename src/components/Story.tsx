import './Story.css'

const Story = () => {
  return (
    <section className="story">
      <div className="story-container">
        <div className="story-content">
          <div className="story-label">Built by a developer who gets marketing</div>
          <h2 className="story-title">From Internal Tool to Your Growth Engine</h2>

          <div className="story-text">
            <p>
              I'm <strong>Marko Matković</strong>, software developer and marketing expert. I first built Email Outreach Engine™ for my own agency, <strong>Alta Frequenza Marketing</strong>, to automate our lead generation.
            </p>
            <p>
              What started as an internal tool became a complete game-changer — turning manual prospecting into a predictable, automated system that contacts thousands of qualified leads every month and keeps our inbox organized like never before.
            </p>
            <p>
              After seeing the results, I started offering this system to other B2B companies that want to scale without hiring SDRs or spending hours on LinkedIn.
            </p>
          </div>

          <div className="credentials">
            <div className="credential-item">
              <div className="credential-icon">⚡</div>
              <div className="credential-text">
                <strong>Software Developer</strong>
                <span>Technical automation expert</span>
              </div>
            </div>
            <div className="credential-item">
              <div className="credential-icon">📈</div>
              <div className="credential-text">
                <strong>Marketing Expert</strong>
                <span>Founder of Alta Frequenza Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
