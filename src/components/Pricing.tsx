import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Everything you need to automate your B2B outreach
        </p>

        <div className="pricing-cards">
          <div className="pricing-card setup">
            <div className="price-header">
              <div className="price-label">One-Time Setup</div>
              <div className="price-amount">
                <span className="currency">€</span>
                <span className="amount">1,500</span>
              </div>
            </div>

            <div className="price-includes">
              <div className="include-title">What's included:</div>
              <ul className="include-list">
                <li>Custom automation build</li>
                <li>Domain setup & deliverability configuration</li>
                <li>Lead scraping strategy</li>
                <li>Email sequence creation</li>
                <li>Full system integration</li>
              </ul>
            </div>
          </div>

          <div className="pricing-card monthly featured">
            <div className="price-header">
              <div className="price-label">Monthly Management</div>
              <div className="price-amount">
                <span className="currency">€</span>
                <span className="amount">500</span>
                <span className="period">/month</span>
              </div>
            </div>

            <div className="price-includes">
              <div className="include-title">What's included:</div>
              <ul className="include-list">
                <li>Hosting on Make, subscriptions</li>
                <li>Deliverability monitoring</li>
                <li>Campaign optimization</li>
                <li>Ongoing support & reporting</li>
                <li>Performance tracking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pricing-note">
          <div className="note-icon">🔒</div>
          <p>
            <strong>Important:</strong> All data, accounts, and domains remain
            your property. You have full ownership and control of your
            infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
