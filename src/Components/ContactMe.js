import React, { useState } from "react";
import contactImage from "../Assets/contact-me.png";

const ContactMe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
      <section className="contactme-section container-fluid row p-3 box-area m-0" id="contactme-section"> 
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column bg-dark" style={{backgroundColor: "var(--dark)"}}>
          <img
            src={contactImage}
            alt="contactmeimage"
            className="img-fluid "
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-6 right-box p-lg-5 p-sm-3 mt-4">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2 className="section-heading-me text-white">Contact Me</h2>
              <p className="text-white">Get in touch with me by filling out the form below. I can't wait to hear from you!</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-md-3 g-lg-3 ">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email"
                />
              </div>

              <div className="input-group mb-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Message..."
                />
              </div>

              <div className="input-group mb-3 mt-5">
                <button
                  type="submit"
                  className="btn btn-lg w-100 fs-6 btn-submit fw-bold">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
};

export default ContactMe;
