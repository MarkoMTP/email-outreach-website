import React, { useState } from "react";
import "./MainForm.css";

const MainForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    goalClients: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(process.env.REACT_APP_MAKE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          goalClients: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="interested-form">
      <div className="form-container">
        <h2 className="form-title">Let’s Build Your Outreach Engine</h2>
        <p className="form-subtitle">
          Fill out the short form below so we can understand your goals and see
          if the Email Outreach Engine™ is a good fit for your business.
        </p>

        <form onSubmit={handleSubmit} className="form-fields">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company Name*</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                How many new clients would you like to acquire monthly?
              </label>
              <select
                name="goalClients"
                value={formData.goalClients}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="1-3">1–3 clients</option>
                <option value="4-6">4–6 clients</option>
                <option value="7-10">7–10 clients</option>
                <option value="10+">10+ clients</option>
              </select>
            </div>

            <div className="form-group">
              <label>Monthly Marketing Budget (Approx.)</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="under1000">Under €1,000</option>
                <option value="1000-3000">€1,000–€3,000</option>
                <option value="3000-6000">€3,000–€6,000</option>
                <option value="6000+">€6,000+</option>
              </select>
            </div>
          </div>

          <div className="form-group full">
            <label>Tell us about your business or goals</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Briefly describe your services, clients, and goals..."
            />
          </div>

          <button
            type="submit"
            className="form-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>

        {status === "success" && (
          <div className="form-success">
            ✅ Thanks! Your information has been sent successfully. We’ll be in
            touch soon to schedule your consultation.
          </div>
        )}

        {status === "error" && (
          <div className="form-error">
            ❌ Something went wrong. Please try again later.
          </div>
        )}
      </div>
    </section>
  );
};

export default MainForm;
