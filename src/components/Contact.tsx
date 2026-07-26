import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-grid">
          
          <div>
            <p className="contact-desc">
              I'm currently open to full-time roles, internships, and freelance collaborations. 
              If you have a problem worth solving, let's build something great together.
            </p>
            <ul className="contact-list">
              <li>
                <span className="contact-key"><i className="fa-solid fa-envelope"></i> Email</span>
                <a href="mailto:prashanthnemadi@gmail.com">prashanthnemadi@gmail.com</a>
              </li>
              <li>
                <span className="contact-key"><i className="fa-solid fa-phone"></i> Phone</span>
                <span>+91 81470 70249</span>
              </li>
              <li>
                <span className="contact-key"><i className="fa-brands fa-github"></i> GitHub</span>
                <a href="https://github.com/prashanthnemadi18" target="_blank" rel="noopener noreferrer">
                  github.com/prashanthnemadi18
                </a>
              </li>
              <li>
                <span className="contact-key"><i className="fa-brands fa-linkedin"></i> LinkedIn</span>
                <a href="https://linkedin.com/in/prashanth-nemadi" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/prashanth-nemadi
                </a>
              </li>
              <li>
                <span className="contact-key"><i className="fa-solid fa-location-dot"></i> Location</span>
                <span>Bengaluru, Karnataka, India</span>
              </li>
            </ul>
          </div>

          <div className="contact-form-box">
            <h3>Send a Message</h3>
            <form 
              className="contact-form" 
              action="https://formspree.io/f/xwpkwqpo"
              method="POST"
            >
              <div className="form-row">
                <label>
                  Name 
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  Email 
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </label>
              </div>
              <label>
                Subject 
                <input 
                  type="text" 
                  name="subject"
                  placeholder="What's this about?"
                  required
                />
              </label>
              <label>
                Message 
                <textarea 
                  name="message"
                  placeholder="Your message..."
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary">Send Message &rarr;</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
