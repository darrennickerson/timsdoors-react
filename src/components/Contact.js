import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { BsFillPhoneFill, BsFillChatTextFill } from "react-icons/bs";
const { REACT_APP_EMAIL_JS } = process.env;
const Contact = () => {
  const form = useRef();
  const formContainer = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [divHeight, setDivHeight] = useState(200);

  useEffect(() => {
    setDivHeight(formContainer.current.clientHeight);
    console.log(formContainer.current.clientHeight);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ajs7nf",
        "template_z0serpi",
        form.current,
        REACT_APP_EMAIL_JS
      )
      .then(
        (result) => {
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-6 contact-container"
            style={{ height: divHeight }}
          >
            <h2>Contact Us</h2>
            {isSubmitted ? (
              <div>
                <h3>Submitted</h3>
                <p>
                  Thank you for reaching out to us. You will hear back from us
                  soon
                </p>
              </div>
            ) : (
              <div ref={formContainer} className="form-container">
                <span className="required-text">
                  Fields Marked with <i className="required">*</i> are required.
                </span>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">
                      Your Name <i className="required">*</i>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_name"
                      name="user_name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_phone"
                      name="user_phone"
                      placeholder="(555)-555-5555"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_email" className="form-label">
                      Email address <i className="required">*</i>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="user_email"
                      name="user_email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <h3>Address</h3>
                  <div className="mb-3">
                    <label htmlFor="user_city" className="form-label">
                      City <i className="required">*</i>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_city"
                      name="user_city"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_street" className="form-label">
                      Street <i className="required">*</i>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_street"
                      name="user_street"
                      placeholder="124 Your St."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_postal" className="form-label">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_postal"
                      name="user_postal"
                      placeholder="A1B 2C3"
                    />
                  </div>
                  <h3>Message</h3>
                  <div className="mb-3">
                    <label htmlFor="user_message" className="form-label">
                      Message <i className="required">*</i>
                    </label>
                    <textarea
                      className="form-control"
                      id="user_message"
                      name="user_message"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="col-6">
            <p></p>
            <div className="address">
              <span>Tims Overhead Doors</span>
              <p>1329 Millboro Rd</p> <p>North Wiltshire, PE</p> <p>C0A 1Y0</p>
              <p>
                <BsFillPhoneFill />
                <a href="tel:902-218-2427">(902)-218-2427</a>
              </p>
              <p>
                <BsFillChatTextFill />
                <a href="timcrabbe@timsdoors.com">timcrabbe@timsdoors.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31843.68947419167!2d-63.32186783334307!3d46.34359545378234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x999156d4440fb200!2sTim&#39;s%20Overhead%20Doors!5e0!3m2!1sen!2sca!4v1635946305722!5m2!1sen!2sca"
          width="1000"
          height="200"
          title="Tims Overhead Doors"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
