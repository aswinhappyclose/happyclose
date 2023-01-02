import React, { useState } from "react";
import Header from "../header/Index.js";
import "./Index.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScheduleDemo = () => {
  const [scheduled, setScheduled] = useState({
    firstName: "",
    email: "",
    nameOfOrganization: "",
    Contact: "",
    Message: "",
  });

  const Validate = () => {
    var letters = /[A-Za-z]/;
    const emailRegex = /^[a-z]+\S+@\S+\.\S+/;
    if (scheduled.firstName === "") {
      toast.error("Enter the FirstName");
    } else if (!scheduled.firstName.match(letters)) {
      toast.error("Enter the valid FirstName");
    } else if (scheduled.email === "") {
      toast.error("Enter the email-ID");
    } else if (!scheduled.email.match(emailRegex)) {
      toast.error("Enter the valid email-ID");
    } else toast.success("Scheduled Demo Successfully!!!");
  };

  return (
    <>
      <Header />
      <div className="scheduleDemoMainContainer">
        <div className="scheduleDemoMainContant">
          <p className="scheduleDemoHeader">Contact Us</p>
          <p className="scheduleDemoText">
            Happy Close is growing rapidly at the moment to ensure book close to
            financial reporting are seamlessly integrated. The automation of
            such routine key accounting processes saves time and helps us focus
            more on data driven decision making.
          </p>
          <p className="scheduleDemoText">
            Interested to know more?? Drop in your details and lets connect for
            a customized demo
          </p>
          <div className="scheduleDemoContectUs">
            <p className="scheduleDemoText">Email:</p>
            <p className="scheduleDemoText">
              <span className="happycloseFoundersMail">
                arjun@happyclose.net
              </span>{" "}
              or{" "}
              <span className="happycloseFoundersMail">rjn@happyclose.net</span>
            </p>
          </div>
        </div>
        <div className="scheduleDemoContent">
          <p className="scheduleDemoContentText">Let's connect for a demo</p>
          <div className="scheduleDemoContentTextInputFeild">
            <input
              type="text"
              className="scheduleDemoContentTextInput"
              placeholder="Full Name *"
              name="firstName"
              value={scheduled.firstName}
              onChange={(e) =>
                setScheduled({
                  ...scheduled,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="scheduleDemoContentTextInputFeild">
            <input
              type="email"
              className="scheduleDemoContentTextInput"
              placeholder="Email ID *"
              name="email"
              value={scheduled.email}
              onChange={(e) =>
                setScheduled({
                  ...scheduled,
                  email: e.target.value,
                })
              }
              required
            />
          </div>{" "}
          <div className="scheduleDemoContentTextInputFeild">
            <input
              type="text"
              className="scheduleDemoContentTextInput"
              placeholder="Name of the organization"
              name="nameOfOrganization"
              value={scheduled.nameOfOrganization}
              onChange={(e) =>
                setScheduled({
                  ...scheduled,
                  nameOfOrganization: e.target.value,
                })
              }
            />
          </div>{" "}
          <div className="scheduleDemoContentTextInputFeild">
            <input
              type="text"
              className="scheduleDemoContentTextInput"
              placeholder="Contact"
              name="Contact"
              value={scheduled.Contact}
              onChange={(e) =>
                setScheduled({
                  ...scheduled,
                  Contact: e.target.value,
                })
              }
            />
          </div>
          <div className="scheduleDemoContentTextInputFeild">
            <textarea
              type="text"
              className="scheduleDemoContentTextInputMessage"
              placeholder="Share additional information, if any"
              name="Message"
              value={scheduled.Message}
              onChange={(e) =>
                setScheduled({
                  ...scheduled,
                  Message: e.target.value,
                })
              }
            />
          </div>
          <div className="scheduleDemoSubmitButton">
            <button className="scheduleDemoButton" onClick={Validate}>
             Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScheduleDemo;
