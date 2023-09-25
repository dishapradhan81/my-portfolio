import React, { useRef } from "react";
import "../Styles/Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfk1j6p",
        "template_imdh7bm",
        form.current,
        "4cjsyaChT9qOARWC3PYfY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            text="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            text="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
