import { useState } from "react";
interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  goalClients: string;
  budget: string;
  message: string;
}
import "./MainForm.css";

const MainForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    goalClients: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(import.meta.env.VITE_MAKE_API as string, {
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

          <div className="form-group full">
            <label>Tell us about your business or goals</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
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
