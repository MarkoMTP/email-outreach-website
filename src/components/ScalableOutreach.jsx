import React from "react";
import "./ScalableOutreach.css";

const ScalableOutreach = () => {
  return (
    <section className="scalable-outreach">
      <div className="so-container">
        <div className="so-icon">🔁</div>
        <h2 className="so-heading">
          Scalable Outreach — Your Pace, Your Control
        </h2>
        <h3 className="so-subheading">Scale Up or Slow Down — Instantly.</h3>

        <p className="so-text">
          Your outreach volume adapts to your capacity. <br />
          If you’re fully booked, we can{" "}
          <strong>lower daily send limits</strong> to pause new leads. <br />
          When you’re ready to grow again, we{" "}
          <strong>increase outreach instantly</strong> to fill your calendar
          again.
        </p>

        <p className="so-subline">Always in control. Always predictable.</p>
      </div>
    </section>
  );
};

export default ScalableOutreach;
