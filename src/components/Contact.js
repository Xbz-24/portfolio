import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <p>You can reach me on Discord: xbz#9077</p>
      <p>My GitHub: <a href="https://github.com/Xbz-24"></a>https://github.com/Xbz-24</p>
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
