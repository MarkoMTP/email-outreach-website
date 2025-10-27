import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Email Outreach Engine™</h3>
            <p className="footer-tagline">
              Automate your B2B lead generation with intelligent AI-powered outreach.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-list">
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><a href="#story">About</a></li>
                <li><a href="https://altafrequenzamarketing.com" target="_blank" rel="noopener noreferrer">Alta Frequenza Marketing</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li><a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Book a Demo</a></li>
                <li><a href="mailto:info@example.com">Email Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Email Outreach Engine™. Built by Marko Matković.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">·</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
