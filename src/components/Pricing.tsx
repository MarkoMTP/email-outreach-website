import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Every plan includes the full Email Outreach Engine™ — automated lead
          scraping, AI-personalized email creation, A/B testing, and smart reply
          sorting. The difference is how far you want to scale.
        </p>

        <div className="pricing-cards">
          {/* Tier 1 */}
          <div className="pricing-card">
            <div className="price-header">
              <div className="price-label">Growth Starter</div>
              <div className="price-amount">
                <span className="currency">€</span>
                <span className="amount">1,800</span>
              </div>
              <div className="period">One-Time Setup</div>
            </div>

            <div className="monthly-price">
              <span className="currency">€</span>
              <span className="amount">600</span>
              <span className="period">/month</span>
            </div>

            <div className="price-includes">
              <div className="include-title">Includes:</div>
              <ul className="include-list">
                <li>
                  Automated LinkedIn lead scraping (up to 5,000 leads/month)
                </li>
                <li>AI-personalized email creation & follow-ups</li>
                <li>A/B testing of campaigns inside Instantly</li>
                <li>Automated reply sorting & tracking</li>
                <li>Deliverability setup & monitoring</li>
                <li>Weekly performance summaries</li>
              </ul>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="pricing-card featured">
            <div className="price-header">
              <div className="price-label">Growth Pro</div>
              <div className="price-amount">
                <span className="currency">€</span>
                <span className="amount">3,000</span>
              </div>
              <div className="period">One-Time Setup</div>
            </div>

            <div className="monthly-price">
              <span className="currency">€</span>
              <span className="amount">1,000</span>
              <span className="period">/month</span>
            </div>

            <div className="price-includes">
              <div className="include-title">
                Includes everything from Growth Starter, plus:
              </div>
              <ul className="include-list">
                <li>Up to 15,000 verified leads scraped & contacted monthly</li>
                <li>Campaign strategy & offer optimization support</li>
                <li>Ongoing copy review & email tone adjustments</li>
                <li>Priority support & faster iteration cycles</li>
                <li>Monthly performance review call</li>
              </ul>
            </div>

            <div className="badge">Most Popular</div>
          </div>

          {/* Tier 3 */}
          <div className="pricing-card">
            <div className="price-header">
              <div className="price-label">Growth Partner</div>
              <div className="price-amount">
                <span className="currency">€</span>
                <span className="amount">5,000</span>
              </div>
              <div className="period">One-Time Setup</div>
            </div>

            <div className="monthly-price">
              <span className="currency">€</span>
              <span className="amount">1,800</span>
              <span className="period">/month</span>
            </div>

            <div className="price-includes">
              <div className="include-title">
                Includes everything from Growth Pro, plus:
              </div>
              <ul className="include-list">
                <li>Up to 30,000+ leads sourced & contacted monthly</li>
                <li>Dedicated account manager for campaign scaling</li>
                <li>
                  Advanced multi-offer campaign setups (services, regions, or
                  languages)
                </li>
                <li>
                  Marketing strategy consulting for offers, angles & positioning
                </li>
                <li>Optional CRM integration (HubSpot, Pipedrive, Airtable)</li>
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
