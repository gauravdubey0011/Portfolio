import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./MessageStyles.css";
 

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4euu6dq',     // <-- replace this
      'template_hoyo9bv',    // <-- replace this
      form.current,
      '1DDMJsuUSHUMuP0fK'      // <-- replace this
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );

    e.target.reset(); // Clear form after sending
  };

  return (
    <div className="contact-section">
      <h2>Commit a message for me!</h2>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <p>Prayagraj, Uttar Pradesh - India</p>
        <a href="mailto:gauravdubey4755@gmail.com">gauravdubey4755@gmail.com</a>
      </div>
    </div>
  );
};

export default Form;
