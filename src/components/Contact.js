import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
