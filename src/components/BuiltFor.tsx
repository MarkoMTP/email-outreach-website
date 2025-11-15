import React from "react";
import "./BuiltForSection.css";

export default function BuiltForSection() {
  return (
    <section className="built-for">
      <div className="built-for__container">
        <div className="built-for__content">
          <h2 className="built-for__headline">
            ⚡ Built for <span>B2B Agencies</span>, <span>SaaS</span> &{" "}
            <span>Service Providers</span>
          </h2>

          <p className="built-for__subtext">
            What You Get —{" "}
            <strong>Without Hiring SDRs or Writing Cold Emails:</strong>
          </p>

          <ul className="built-for__benefits">
            <li>
              <span className="check">✓</span> Verified, hand-picked leads
              scraped daily
            </li>
            <li>
              <span className="check">✓</span> Hyper-personalized cold emails
              that actually get replies
            </li>
            <li>
              <span className="check">✓</span> AI sorts and flags warm leads —
              you just show up to the calls
            </li>
            <li>
              <span className="check">✓</span> Entire system set up &amp;
              managed for you
            </li>
          </ul>

          <p className="built-for__guarantee">
            🚀 <strong>Book 100+ calls in 90 days.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
