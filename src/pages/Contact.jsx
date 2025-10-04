import { useState } from 'react';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return;
    }

    try {
      const params = {
        fname: formData.firstName,
        lname: formData.lastName,
        Email: formData.email,
        message: formData.message,
      };

      if (window.emailjs) {
        await window.emailjs.send('service_0ti6tap', 'template_5tey5xi', params);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <Header />

      <div className="c-2">
        <div className="c-3">
          <p>CONTACT US</p>
          <p>tesin96thomas@gmail.com</p>
          <p>Delhi,india</p>

          <div className="c-5">
            <a
              style={{ color: 'black' }}
              href="https://www.instagram.com/tesinthomas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              style={{ color: 'black' }}
              href="https://www.facebook.com/tesin.thomas.927?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              style={{ color: 'black' }}
              href="https://www.artstation.com/tesin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-artstation"></i>
            </a>
          </div>
        </div>

        <div className="c-4">
          <form onSubmit={handleSubmit} id="contactForm" autoComplete="on">
            {showAlert && (
              <div className="FormAlert">&nbsp;Your message sent&nbsp;</div>
            )}

            <div className="name" style={{ paddingBottom: 0, display: 'block', width: '100%' }}>
              <label htmlFor="firstName">Name*</label>
              <div style={{ display: 'flex', justifyContent: 'space-between', height: '41px' }}>
                <div style={{ height: 'auto' }}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div style={{ height: 'auto' }}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email">Email*</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
              <br />
            </div>

            <div>
              <label htmlFor="message">message*</label>
              <br />
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                cols="50"
                rows="5"
                required
              ></textarea>
            </div>

            <div id="send">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>

      <div className="c-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.9209838606!2d76.95314720104403!3d28.64431287838633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1678388696099!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Delhi Location"
        ></iframe>
      </div>

      <Newsletter />
    </>
  );
}

export default Contact;
