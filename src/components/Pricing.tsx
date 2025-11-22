import "./Pricing.css";

const Pricing = () => {
  const scrollToFeatures = () => {
    const el = document.getElementById("finalCTA");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          One powerful system. One simple price. The Email Outreach Engine™
          includes automated lead scraping, AI-personalized email creation, A/B
          testing, and smart reply sorting — everything you need to consistently
          book qualified calls.
        </p>

        <div className="pricing-card single">
          <div className="price-header">
            <div className="price-label">Full System Setup</div>
            <div className="price-amount">
              <span className="currency">€</span>
              <span className="amount">1,200</span>
            </div>
            <div className="period">One-Time Setup</div>
          </div>

          <div className="monthly-price">
            <span className="currency">€</span>
            <span className="amount">500</span>
            <span className="period">/month</span>
          </div>

          <div className="price-includes">
            <div className="include-title">Includes everything you need:</div>
            <ul className="include-list">
              <li>Automated LinkedIn lead scraping</li>
              <li>Personalized cold emails & follow-ups</li>
              <li>A/B testing & campaign optimization</li>
              <li>Automated reply sorting & CRM sync</li>
              <li>Deliverability setup & monitoring</li>
              <li>Weekly performance reports & strategy updates</li>
            </ul>
          </div>
        </div>

        <div className="pricing-note">
          <div className="note-icon">🔒</div>
          <p>
            <strong>Important:</strong> You retain full ownership of all data,
            accounts, and domains. Everything stays under your control.
          </p>
        </div>
      </div>

      <button onClick={scrollToFeatures} className="cta-button-large">
        Schedule a free consultation
      </button>
    </section>
  );
};

export default Pricing;
