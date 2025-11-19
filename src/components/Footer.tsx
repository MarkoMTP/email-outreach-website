import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Email Outreach Engine™</h3>
            <p className="footer-tagline">
              Automate your B2B lead generation with intelligent AI-powered
              outreach.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li>
                  <a
                    href="https://altafrequenzamarketing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alta Frequenza Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li>
                  <a
                    href="https://calendly.com/contact-altafrequenzamarketing/email-outreach-system-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@altafrequenzamarketing.com">
                    Email Us
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/marko-matkovic-6b6b0535a/">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div></div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Email Outreach Engine™. Built by Marko Matković.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
