import { useState } from "react";
import "./Story.css";

interface Case {
  id: number;
  name: string;
  industry: string;
  headcount: string;
  service: string;
  summary: string;
  results: {
    calls: string;
    value: string;
    potential: string;
  };
}

const caseStudies: Case[] = [
  {
    id: 1,
    name: "Alta Frequenza Marketing (Internal Project)",
    industry: "Digital Marketing Agency",
    headcount: "10–15 employees",
    service: "Automated B2B Lead Generation System",
    summary:
      "Our internal prototype that evolved into the Email Outreach Engine™. Used to automate client acquisition and replace manual outreach entirely.",
    results: {
      calls: "20–30 qualified calls/month",
      value: "€10,000 average client value",
      potential: "€600K–€900K in potential monthly pipeline",
    },
  },
  {
    id: 2,
    name: "Confidential Marketing Agency",
    industry: "Performance Marketing & Paid Media",
    headcount: "80–100 employees",
    service: "Multi-Niche Outreach Automation + AI Lead Scoring",
    summary:
      "(Name withheld for client confidentiality) — A full-service marketing agency operating in multiple verticals. They needed scalable outreach across industries while maintaining personalization and high-quality targeting.",
    results: {
      calls: "35–45 qualified calls/month",
      value: "€9,000 average deal value",
      potential: "€1M–€1.3M in potential monthly pipeline",
    },
  },
  {
    id: 3,
    name: "Confidential Consulting Firm",
    industry: "B2B Management Consulting",
    headcount: "50–60 employees",
    service: "Full Automation Setup + Multi-Domain Outreach",
    summary:
      "(Name withheld for client confidentiality) — A European consulting firm seeking a predictable, high-value lead flow. We built a multi-domain outreach system targeting senior decision-makers across finance, HR, and operations.",
    results: {
      calls: "30–35 qualified calls/month",
      value: "€12,000 average deal value",
      potential: "€840K–€1.1M in potential monthly pipeline",
    },
  },
  {
    id: 4,
    name: "Confidential IT Solutions Provider",
    industry: "Software Development & IT Services",
    headcount: "30–40 employees",
    service: "Automated Outbound & Lead Qualification System",
    summary:
      "(Name withheld for client confidentiality) — A European IT services company that relied heavily on referrals. We implemented automated targeting and lead qualification, improving predictability and reducing cost per lead by 55%.",
    results: {
      calls: "25–35 discovery calls/month",
      value: "€20,000 average project value",
      potential: "€1M–€1.5M in potential monthly pipeline",
    },
  },
  {
    id: 5,
    name: "Confidential Recruitment Agency",
    industry: "Recruitment & Staffing",
    headcount: "40–50 employees",
    service: "Automated Client & Candidate Outreach",
    summary:
      "(Name withheld for client confidentiality) — A recruitment firm using the system to target both hiring managers and high-value candidates. Their consultants now focus only on warm conversations — not manual sourcing.",
    results: {
      calls: "30–45 qualified calls/month",
      value: "€6,000 average placement fee",
      potential: "€380K–€570K in potential monthly pipeline",
    },
  },
];
export default function Story() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));

  const currentCase = caseStudies[current];

  return (
    <section className="case-carousel">
      <div className="carousel-container">
        <h2 className="carousel-title">Case Studies & Results</h2>
        <p className="carousel-subtitle">
          Real systems. Real impact. Proven across industries.
        </p>

        <div className="case-card">
          <div className="case-meta">
            <div>
              <strong>Client:</strong> {currentCase.name}
            </div>
            <div>
              <strong>Industry:</strong> {currentCase.industry}
            </div>
            <div>
              <strong>Headcount:</strong> {currentCase.headcount}
            </div>
            <div>
              <strong>Service:</strong> {currentCase.service}
            </div>
          </div>

          <p className="case-summary">{currentCase.summary}</p>

          <div className="case-results">
            <div className="result-item">
              <span className="result-label">📞 Calls Booked / Month:</span>
              <span className="result-value">{currentCase.results.calls}</span>
            </div>
            <div className="result-item">
              <span className="result-label">💰 Value per Lead:</span>
              <span className="result-value">{currentCase.results.value}</span>
            </div>
            <div className="result-item">
              <span className="result-label">📊 Potential Pipeline:</span>
              <span className="result-value">
                {currentCase.results.potential}
              </span>
            </div>
          </div>
        </div>

        <div className="carousel-controls">
          <button onClick={prevSlide}>&larr; Prev</button>
          <div className="carousel-index">
            {current + 1} / {caseStudies.length}
          </div>
          <button onClick={nextSlide}>Next &rarr;</button>
        </div>
      </div>
    </section>
  );
}
