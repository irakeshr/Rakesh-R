import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  let nav_open = () => {
    document.querySelector(".nav_section").style.left = "50%";
    document.querySelector(".fa-bars").style.display = "none";
  };
  let nav_close = () => {
    document.querySelector(".nav_section").style.left = "100%";
    document.querySelector(".fa-bars").style.display = "block";
  };
  return (
    <div>
      <div className="Header">
        <div className="right_section">
          <div className="circle"></div>
          <Link to="/">
            <h2 className="header_h2" onClick={() => nav_close()}>
             
              Rakesh R
            </h2>
          </Link>
        </div>
        <div className="left_section">
          <Link to="/resume">
            <h4>Resume</h4>
          </Link>
          <h1 className="separater">|</h1>
          <Link to="/project">
            <h4>Project</h4>
          </Link>
          <h1 className="separater">|</h1>
          <Link to="/contact">
            <h4>Contact</h4>
          </Link>
        </div>

        <div className="nav_bar">
          <i
            className="fa-solid fa-bars fa-2xl"
            style={{ color: "#000000" }}
            onClick={() => nav_open()}
          ></i>
        </div>
        <div className="nav_section">
          <i
            className="fa-solid fa-xmark fa-2xl"
            style={{ color: "#000000" }}
            onClick={() => nav_close()}
          ></i>
          <div className="nav_lab">
             
             <Link to="/" onClick={() => nav_close()}>
               <h4 className="nav_h4">Home</h4>
             </Link>
           </div>
          <div className="nav_lab">
             
            <Link to="/resume" onClick={() => nav_close()}>
              <h4 className="nav_h4">Resume</h4>
            </Link>
          </div>
          <div className="nav_lab">
            
            <Link to="/project" onClick={() => nav_close()}>
              <h4 className="nav_h4">Project</h4>
            </Link>
          </div>
          <div className="nav_lab">
             
            <Link to="/contact" onClick={() => nav_close()}>
              <h4 className="nav_h4">Contact</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
