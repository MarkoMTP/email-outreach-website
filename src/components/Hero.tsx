import "./Hero.css";

const Hero = () => {
  const handleCTAClick = () => {
    window.open(
      "https://calendly.com/contact-altafrequenzamarketing/email-outreach-system-meeting",
      "_blank"
    );
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badges">
          <span className="badge">Fully automated</span>
          <span className="badge">Proven system</span>
          <span className="badge">Built for real B2B growth</span>
        </div>

        <h1 className="hero-title">
          Automated Cold‑Email Outreach System That Finds New Clients On
          Autopilot
        </h1>

        <p className="hero-subtitle">
          For B2B companies who rely on outreach to fill their sales pipeline -
          We find, verifiy, and contact your ideal prospects with personalized
          emails, manage all replies through an intelligent dashboard, and
          filter the real opportunities for you — so you only focus on closing
          deals.
        </p>

        <button className="cta-button" onClick={handleCTAClick}>
          Book your free 15-minute consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
