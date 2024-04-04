import React from "react";
 import './Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="footer_divider"></div>
      <div className="all_footer">
        <div className="footer_content">
          <h2 className="phone">Phone</h2> 
          <p className="phone_no">+916282972147</p>
        </div>
        <div className="footer_content">
          <h2 className="email">Email</h2>
          <p className="email_id">rakurakesh396@gmail.com</p>
        </div>
        <div className="footer_content">
          <h2 className="media">Follow Me</h2>
          <i className="fa-brands fa-instagram fa-lg"></i>
         <i className="fa-brands fa-linkedin fa-lg"></i>
           
        </div>
        <div className="footer_content">
           
          <p className="copy_Right">© 2024 By Rakesh R.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
