
import React from 'react';
import '../styles.css';
import '../ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us-page">
      <div className="contact-us-details">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Reach out to us using the form below or
          through our contact information.
        </p>
        <div className="contact-info">
          <h3>Contact Information:</h3>
          <p>Email: contact@moviewebsite.com</p>
          <p>Phone: +783794374397</p>
          <p>Address: Hadapsar, Pune, India</p>
        </div>
        <form className="contact-form">
          <h3>Send Us a Message:</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
