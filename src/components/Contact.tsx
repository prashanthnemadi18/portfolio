import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '953adbe4-545e-41f7-a488-f54eb800a1c9',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: 'prashanthnemadi@gmail.com'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send message. Please email me directly at prashanthnemadi@gmail.com');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Failed to send message. Please email me directly at prashanthnemadi@gmail.com');
    }
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
              {status && (
                <p style={{ 
                  marginTop: '1rem', 
                  padding: '0.75rem', 
                  borderRadius: '4px',
                  backgroundColor: status.includes('success') ? '#d4edda' : '#f8d7da',
                  color: status.includes('success') ? '#155724' : '#721c24',
                  border: `1px solid ${status.includes('success') ? '#c3e6cb' : '#f5c6cb'}`
                }}>
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
