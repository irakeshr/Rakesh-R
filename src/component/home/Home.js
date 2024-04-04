import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Home() {
  
  return (
    <motion.div
      className="home"
      key={"home"}
      initial={{ height: "0px",scale:0 }}
      animate={{ minHeight: "680px",scale:1 }}
      exit={{ y: window.innerHeight,scale:0,transition:{duration: 0.3,delay:0} }}
      transition={{ duration: 0.3,delay:0.6 }}
    >
       
        <div className="upper_right_sect">
        <h1 className="main_head">Hello</h1>
        <h3>A Bit About Me</h3>
        <p className="about_me">
          I'm Rakesh R, a computer science enthusiast currently pursuing a
          Bachelor of Science in Computer Science. My fascination with
          technology and programming fuels my drive to learn and create.
        </p>
        <div className="bottom_nav">
          <Link to={"/resume"}>
            {" "}
            <div className="bottom_nav_info main circul_1">
              <div className="sec_main_1 small">
                <h2 className="content">Resume</h2>
              </div>
            </div>
          </Link>
          <Link to={"/project"}>
            <div className="bottom_nav_info main circul_2">
              <div className="sec_main_2 small">
                <h2 className="content">Project</h2>
              </div>
            </div>
          </Link>
          <Link to={"/contact"}>
            <div className="bottom_nav_info main circul_3">
              <div className="sec_main_3 small">
                <h2 className="content">Contact</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="profile">
        <div className="left_sect"></div>
      </div>

      <div className="right_sect">
        <h1 className="main_head">Hello</h1>

        <h3 className="about_head">A Bit About Me</h3>
        <p className="about_me">
          I'm Rakesh R, a computer science enthusiast currently pursuing a
          Bachelor of Science in Computer Science. My fascination with
          technology and programming fuels my drive to learn and create.
        </p>
        <div className="bottom_nav">
          <Link to={"/resume"}>
            <div className="bottom_nav_info main circul_1">
              <div className="sec_main_1 small">
                <h2 className="content">Resume</h2>
              </div>
            </div>
          </Link>
          <Link to={"/project"}>
            <div className="bottom_nav_info main circul_2">
              <div className="sec_main_2 small">
                <h2 className="content">Project</h2>
              </div>
            </div>
          </Link>
          <Link to={"/contact"}>
            <div className="bottom_nav_info main circul_3">
              <div className="sec_main_3 small">
                <h2 className="content">Contact</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
       
      
    </motion.div>
  );
}
