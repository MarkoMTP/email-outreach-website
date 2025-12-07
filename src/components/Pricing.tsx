import "./Pricing.css";

const FEATURES = [
  "Automated LinkedIn lead scraping",
  "AI-personalized outreach & follow-ups",
  "A/B testing & campaign optimization",
  "Smart reply classification & CRM syncing",
  "Deliverability setup & domain warm-up",
  "Weekly performance reports & strategy guidance",
];

const Pricing = () => {
  const scrollToCTA = () => {
    const el = document.getElementById("finalCTA");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Simple, Transparent Pricing</h2>
        <p className="pricing-subtitle">
          Get a fully automated outreach engine that books qualified calls for
          you, without hiring a team or writing a single email.
        </p>

        <div className="pricing-card">
          <div className="price-header">
            <h3 className="plan-name">Email Outreach Engine™</h3>

            <div className="price-line">
              <span className="currency">€</span>
              <span className="amount">700</span>
              <span className="per">/ month</span>
            </div>

            <div className="performance-fee">
              + 5%–15% performance fee per closed client
            </div>
          </div>

          <div className="divider" />

          <ul className="feature-list">
            {FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <button className="pricing-cta" onClick={scrollToCTA}>
            Book a Free Consultation
          </button>

          <p className="guarantee">
            🔒 No long-term contracts. You retain full ownership of all accounts
            & data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
