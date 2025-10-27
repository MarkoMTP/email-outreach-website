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
          Contact <span className="highlight">5,000+ qualified leads</span>{" "}
          every month — automatically.
        </h1>

        <p className="hero-subtitle">
          Email Outreach Engine™ finds, verifies, and contacts your ideal
          prospects with personalized emails, manages all replies through an
          intelligent dashboard, and filters the real opportunities for you — so
          you only focus on closing deals.
        </p>

        <button className="cta-button" onClick={handleCTAClick}>
          Book your free 15-minute consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
