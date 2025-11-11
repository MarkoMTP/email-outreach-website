import "./ManualProspectingProblem.css";

const ManualProspectingProblem = () => {
  return (
    <section className="manual-prospecting-problem">
      <div className="problem-container">
        <h3 className="subsection-title">Why Manual Prospecting Fails</h3>
        <p className="subsection-intro">
          Before we explore the solution, it's essential to understand precisely
          why the traditional approach to client acquisition consistently
          underdelivers. The problems aren't just inconvenient—they're
          systematically destroying your agency's growth potential and
          profitability.
        </p>

        <div className="reasons-grid">
          <div className="reason-card">
            <div className="reason-title">Time Wastage</div>
            <p className="reason-text">
              Hours spent manually searching LinkedIn, scraping databases, and
              building prospect lists that could be automated in minutes. Your
              most valuable resource—time—is being squandered on repetitive
              tasks.
            </p>
          </div>

          <div className="reason-card">
            <div className="reason-title">Deliverability Crisis</div>
            <p className="reason-text">
              Emails sent from unverified domains with poor infrastructure land
              straight in spam folders. Without proper technical setup, your
              carefully crafted messages never reach decision-makers.
            </p>
          </div>

          <div className="reason-card">
            <div className="reason-title">Inconsistent Follow-up</div>
            <p className="reason-text">
              Manual outreach means prospects slip through the cracks. You send
              one email, get busy with client work, and forget to follow
              up—losing deals to competitors who persist.
            </p>
          </div>

          <div className="reason-card">
            <div className="reason-title">No Performance Data</div>
            <p className="reason-text">
              Without systematic tracking, you have no idea which messages
              convert, which industries respond best, or how to optimise your
              approach. You're flying blind.
            </p>
          </div>
        </div>
        <div className="problem-transition">
          <div className="transition-line"></div>
          <p className="transition-text">
            We turned all of that into a single automated engine that runs on
            autopilot.
          </p>
          <div className="transition-line"></div>
        </div>
      </div>
    </section>
  );
};

export default ManualProspectingProblem;
