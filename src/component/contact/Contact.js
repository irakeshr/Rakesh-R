import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  // let values;
  // let mess;
  // contact submission
  const [state, handleSubmit] = useForm("xvoewjlg");
  if (state.succeeded) {
    return (
      <div className="submission_return">
        <p>
        "I just received your message. Thank you very much for writing to us.
        I working on your request and will get in touch as soon as
        possible"
      </p>
      <i class="fa-solid fa-check fa-shake fa-2xl"></i>
      </div>
      
    );
  }
  // contact submission end
  // let handleForm = (event) => {
  //   event.preventDefault();
  //   values = document.querySelectorAll("input");
  //   values.forEach((element) => {
  //     element.value = "";
  //   });
  //   mess = document.querySelector("textarea");
  //   mess.value = "";
  // };

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      key={"contact"}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0, transition: { duration: 0.3, delay: 0 } }}
      transition={{ duration: 0.3, delay: 0.6 }}
    >
      <div className="contact">
        <div className="contact_details">
          <div className="left_section_contact">
            <div className="left_sub">
              <h1 className="contact_head">Contact</h1>
              <p>Looking forward to hearing from you.</p>
              <h3>phone</h3>
              <p>+916282972147</p>
              <h3>Email</h3>
              <p>rakurakesh396@gmail.com</p>
            </div>
          </div>
          <div className="right_section_contact">
            <form onSubmit={handleSubmit}>
              <div className="name">
                <label htmlFor="FirstName">First Name</label> <br />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="fname"
                  required
                />
                  <ValidationError 
        prefix="FirstName" 
        field="firstName"
        errors={state.errors}
      />
              </div>
              <div className="email_address">
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input type="text" name="lastName" id="lastName" required />
                <ValidationError 
        prefix="LastName" 
        field="lastName"
        errors={state.errors}
      />
              </div>
              <div className="email_address">
                <label htmlFor="email">Email *</label>
                <br />
                <input type="email" name="email" id="email" required />
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
              </div>
              <div className="email_address">
                <label htmlFor="subject">Subject</label>
                <br />
                <input type="text" name="subject"  id="subject" required/>
                <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
              </div>
              <div className="mess">
                <div className="message_form">
                  <label htmlFor="">Message</label>
                  <br />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                  <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                </div>
                
                <button type="submit" disabled={state.submitting}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
