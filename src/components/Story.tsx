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
    name: "Confidential Consulting Firm (Europe)",
    industry: "B2B Management Consulting",
    headcount: "50–60 employees",
    service: "Full Automation Setup + Multi-Domain Outreach",
    summary:
      "(Name withheld for confidentiality) — A European consulting firm needing predictable high-quality lead flow. We built a multi-domain outreach engine targeting senior decision-makers across finance, HR, and operations.",
    results: {
      calls: "30–35 qualified calls/month",
      value: "€25,000 average project value",
      potential: "€75K–€130K/mo in realistic pipeline (10–15% close rate)",
    },
  },
  {
    id: 2,
    name: "American Strategy Consulting Group",
    industry: "Corporate Strategy & Advisory (US)",
    headcount: "100+ consultants",
    service: "AI-Powered Outreach & Predictive Targeting System",
    summary:
      "A U.S. consulting group in corporate strategy and M&A advisory. We built an AI engine that identified C-suite prospects by deal intent, accelerating pipeline velocity and increasing ROI.",
    results: {
      calls: "40–50 strategy calls/month",
      value: "$30,000 average project value",
      potential: "$120K–$225K/mo in realistic pipeline",
    },
  },
  {
    id: 3,
    name: "Alta Frequenza Marketing (Internal Project)",
    industry: "Digital Marketing Agency",
    headcount: "10–15 employees",
    service: "Automated B2B Lead Generation System",
    summary:
      "Our internal prototype that later evolved into the Email Outreach Engine™ — built to automate client acquisition and eliminate manual outreach.",
    results: {
      calls: "20–30 qualified calls/month",
      value: "€12,000 average project value",
      potential: "€24K–€54K/mo in realistic pipeline",
    },
  },
  {
    id: 4,
    name: "Confidential Marketing Agency",
    industry: "Performance Marketing & Paid Media",
    headcount: "80–100 employees",
    service: "Multi-Niche Outreach Automation + AI Lead Scoring",
    summary:
      "(Name withheld for confidentiality) — A multi-vertical performance marketing agency requiring scalable outreach without compromising personalization or targeting quality.",
    results: {
      calls: "35–45 qualified calls/month",
      value: "€15,000 average project value",
      potential: "€52K–€100K/mo in realistic pipeline",
    },
  },
  {
    id: 5,
    name: "Confidential IT Solutions Provider",
    industry: "Software Development & IT Services",
    headcount: "30–40 employees",
    service: "Automated Outbound & Lead Qualification System",
    summary:
      "A European IT services provider previously relying on referrals. We deployed automated targeting + qualification, increasing predictability and reducing CPL by 55%.",
    results: {
      calls: "25–35 discovery calls/month",
      value: "€40,000 average project value",
      potential: "€100K–€210K/mo in realistic pipeline",
    },
  },
  {
    id: 6,
    name: "Confidential Recruitment Agency",
    industry: "Recruitment & Staffing",
    headcount: "40–50 employees",
    service: "Automated Client & Candidate Outreach",
    summary:
      "A recruitment agency using automated outreach for both hiring managers and high-value candidates. Consultants now spend their time exclusively on warm conversations.",
    results: {
      calls: "30–45 qualified calls/month",
      value: "€8,500 average project value",
      potential: "€25K–€57K/mo in realistic pipeline",
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
        <h2 className="carousel-title">Case Studies &amp; Results</h2>
        <p className="carousel-subtitle">
          Real systems. Real impact. Proven across industries.
        </p>

        <div className="case-card">
          {/* NEW: visual header row */}
          <div className="case-header-row">
            <div className="case-header-text">
              <div className="case-header-name">{currentCase.name}</div>
              <div className="case-header-meta">
                {currentCase.industry} • {currentCase.headcount}
              </div>
            </div>
            <div className="case-header-pill">
              <span>↑ {currentCase.results.calls}</span>
            </div>
          </div>

          {/* meta grid */}
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

          {/* summary */}
          <p className="case-summary">{currentCase.summary}</p>

          {/* NEW: visual + numbers split */}
          <div className="case-bottom-row">
            <div className="case-results">
              <div className="result-item">
                <span className="result-label">📞 Calls / Month</span>
                <span className="result-value">
                  {currentCase.results.calls}
                </span>
                <div className="result-bar">
                  <div className="bar-fill bar-fill-1" />
                </div>
              </div>
              <div className="result-item">
                <span className="result-label">💰 Value per Client</span>
                <span className="result-value">
                  {currentCase.results.value}
                </span>
                <div className="result-bar">
                  <div className="bar-fill bar-fill-2" />
                </div>
              </div>
              <div className="result-item">
                <span className="result-label">📊 Potential Pipeline</span>
                <span className="result-value">
                  {currentCase.results.potential}
                </span>
                <div className="result-bar">
                  <div className="bar-fill bar-fill-3" />
                </div>
              </div>
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
