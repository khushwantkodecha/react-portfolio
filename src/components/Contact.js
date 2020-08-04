import React, { useState } from "react";
import "../css/Contact.css";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function Contact() {
  const [data, setData] = useState({ loading: false });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const templateId = "template_B8SdY0ur";
    if (!data.name || !data.email || !data.message) {
      NotificationManager.warning("Please fill all the fields", "Warning!");
    } else {
      sendMessage(templateId, {
        message_html: data.message,
        from_name: data.name,
        reply_to: data.email,
        from_email: data.email,
      });
    }
  };

  const sendMessage = (templateId, payload) => {
    setData({ ...data, loading: true });
    window.emailjs
      .send("gmail", templateId, payload)
      .then(() => {
        resetForm();
        NotificationManager.success(
          "",
          "Message sent successfully to Khushwant"
        );
      })
      .catch(() => {
        resetForm();
        NotificationManager.error("Something went wrong...", "Oops!");
      });
  };

  const resetForm = () => {
    setData({ name: "", email: "", message: "", loading: false });
  };
  console.log(data.name);
  return (
    <React.Fragment>
      <div className="contact" id="contact">
        <h2>GET IN TOUCH</h2>
        <div className="contact__form__content">
          <NotificationContainer />

          <div className="contact__form">
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <input
                    name="name"
                    value={data.name}
                    className="form-control"
                    placeholder="Your Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    onChange={handleChange}
                    autoComplete={false}
                    value={data.email}
                  />
                </div>
              </div>
              <textarea
                rows="10"
                name="message"
                className="form-control my-3"
                placeholder="Message"
                onChange={handleChange}
                value={data.message}
              />
              <button
                className="contact__button btn"
                onClick={!data.loading && handleClick}
              >
                {data.loading ? "Sending" : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
