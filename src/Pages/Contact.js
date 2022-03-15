import React from "react";

export const Contact = () => {
  return (
    <section className="contact-form-container">
      <h1 className="title">Contact us</h1>
      <form
        className="contact-form"
        action="https://formshow.systementor.se"
        method="post"
      >
        <input
          className="form-name"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className="form-email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="form-errand"
          type="text"
          name="errand"
          placeholder="Errand"
        />
        <textarea
          className="form-message"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="form-submit">Submit</button>
      </form>
    </section>
  );
};
