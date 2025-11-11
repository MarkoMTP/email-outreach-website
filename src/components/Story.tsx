import "./Story.css";

const Story = () => {
  return (
    <section className="story">
      <div className="story-container">
        <div className="story-content">
          <div className="story-label">
            Built by a developer who gets marketing
          </div>
          <h2 className="story-title">
            From Internal Tool to Proven Growth Engine
          </h2>

          <div className="story-text">
            <p>
              I'm <strong>Marko Matković</strong>, software developer and
              marketing expert. I first built{" "}
              <strong>Email Outreach Engine™</strong> for my own agency,{" "}
              <strong>Alta Frequenza Marketing</strong>, to automate our client
              acquisition.
            </p>
            <p>
              What started as an internal tool quickly became a{" "}
              <strong>revenue-driving system</strong> — reaching over{" "}
              <strong>10,000 targeted leads</strong> in less than three months,
              generating <strong>50+ qualified calls</strong>, and closing{" "}
              <strong>5 new clients</strong> worth more than{" "}
              <strong>€20,000</strong> in total revenue.
            </p>
            <p>
              My agency is just a small example of what’s possible. Now, I help
              other B2B companies implement the same automated outreach
              infrastructure — so they can scale predictably without hiring SDRs
              or wasting hours on manual prospecting.
            </p>
          </div>

          <div className="credentials">
            <div className="credential-item">
              <div className="credential-icon">⚡</div>
              <div className="credential-text">
                <strong>Software Developer</strong>
                <span>Specialized in automation & AI workflows</span>
              </div>
            </div>
            <div className="credential-item">
              <div className="credential-icon">📈</div>
              <div className="credential-text">
                <strong>Marketing Expert</strong>
                <span>Founder of Alta Frequenza Marketing</span>
              </div>
            </div>
            <div className="credential-item">
              <div className="credential-icon">💰</div>
              <div className="credential-text">
                <strong>Proven Results</strong>
                <span>€20K+ generated in 90 days with 10K leads contacted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
