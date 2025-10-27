import './SmartInbox.css'

const SmartInbox = () => {
  const replies = [
    {
      status: 'positive',
      sender: 'Sarah Johnson',
      company: 'TechFlow Inc.',
      subject: 'Re: Partnership opportunity',
      preview: "This sounds interesting! I'd love to schedule a call to discuss further...",
      time: '2m ago'
    },
    {
      status: 'positive',
      sender: 'Michael Chen',
      company: 'Growth Labs',
      subject: 'Re: Your outreach solution',
      preview: 'Can you send me more details? We are definitely looking for something like this...',
      time: '15m ago'
    },
    {
      status: 'neutral',
      sender: 'Emily Rodriguez',
      company: 'Scale Systems',
      subject: 'Re: Automation demo',
      preview: "Not sure if this fits our current needs, but I'm curious to learn more...",
      time: '1h ago'
    }
  ]

  return (
    <section className="smart-inbox">
      <div className="smart-inbox-container">
        <h2 className="section-title">The Smart Inbox</h2>
        <p className="section-subtitle">
          Your outreach inbox — fully automated.
        </p>
        <p className="section-description">
          Every reply is analyzed and sorted automatically: positive leads at the top, neutral ones queued for follow-up, uninterested contacts archived. You can view and reply directly inside the dashboard — just like Gmail, but smarter.
        </p>

        <div className="inbox-mockup">
          <div className="inbox-header">
            <div className="inbox-tabs">
              <div className="tab active">All Replies</div>
              <div className="tab">Positive</div>
              <div className="tab">Neutral</div>
              <div className="tab">Archive</div>
            </div>
            <div className="inbox-search">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search messages..." />
            </div>
          </div>

          <div className="inbox-list">
            {replies.map((reply, index) => (
              <div key={index} className={`inbox-item ${reply.status}`}>
                <div className={`status-indicator ${reply.status}`}></div>
                <div className="inbox-item-content">
                  <div className="inbox-item-header">
                    <div className="sender-info">
                      <span className="sender-name">{reply.sender}</span>
                      <span className="company-name">{reply.company}</span>
                    </div>
                    <span className="time">{reply.time}</span>
                  </div>
                  <div className="subject">{reply.subject}</div>
                  <div className="preview">{reply.preview}</div>
                  <div className="inbox-item-actions">
                    <button className="action-btn primary">Reply</button>
                    <button className="action-btn">Book Call</button>
                    <button className="action-btn">Archive</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="inbox-legend">
            <div className="legend-item">
              <div className="legend-dot positive"></div>
              <span>Positive - Ready to convert</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot neutral"></div>
              <span>Neutral - Needs follow-up</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot negative"></div>
              <span>Not interested - Auto-archived</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartInbox
