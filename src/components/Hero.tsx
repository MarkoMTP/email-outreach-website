import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    window.open(
      "https://calendly.com/contact-altafrequenzamarketing/email-outreach-system-meeting",
      "_blank"
    );
  };

  const badges = [
    "Fully automated",
    "Proven system",
    "Built for real B2B growth",
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        {/* BADGES */}
        <div
          className="hero-badges"
          /* Inline fallback to beat any hostile global CSS */
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          {badges.map((label) => (
            <span
              key={label}
              className="hero-badge" // <-- renamed from "badge" to avoid collisions (e.g., DaisyUI/Tailwind)
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                flex: "0 0 auto",
                margin: 0, // keep spacing controlled by container gap
                padding: "8px 18px",
                borderRadius: 8,
                background: "#f0f2f5",
                color: "#222",
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h1 className="hero-title">
          Automated Lead Sourcing and Outreach That Actually Works
        </h1>

        {/* SUBTITLE (fixed typo: verify) */}
        <p className="hero-subtitle">
          Email Outreach Engine™ sources verified prospects, sends personalized
          emails, follows up automatically, and delivers warm replies straight
          to your inbox — so you focus only on closing.
        </p>

        {/* CTA */}
        <button className="cta-button" onClick={handleCTAClick}>
          Book your free 15-minute consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
