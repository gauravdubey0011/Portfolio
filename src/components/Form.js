import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './FormStyles.css';

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
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Type your message here" required />

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
