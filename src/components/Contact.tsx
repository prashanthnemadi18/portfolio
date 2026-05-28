import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can add email service integration here)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name 
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Email 
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message 
                <textarea 
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
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
