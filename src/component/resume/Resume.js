import React from "react";
import { delay, motion } from "framer-motion";
import "./Resume.css";

function Resume() {
  let whileview;
  let scaleval;

  let windo = window.innerWidth;
  if (windo <= 400) {
    whileview = "0px";
    scaleval = "0";
  } else {
    whileview = "500px";
    scaleval = "1";
  }
  console.log(whileview);

  return (
    <motion.div
      className="resume_main"
      initial={{ width: "0px" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2, delay: 0.5 } }}
    >
      <motion.div
        className="resume"
        key={"resume"}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, transition: { duration: 0.3, delay: 0 } }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className="resume_main_head">
          <h1 className="resume_name">Resume</h1>
        </div>

        <motion.div className="summery"
        key={"summery"}
        initial={{scale:scaleval,x:whileview}}
        whileInView={{scale:1,x:"0px"}}
        
        exit={{opacity:0}}
        transition={{ duration:.3 }}>
          <div className="sum_head">
            <h2>Summary</h2>
          </div>
          <div className="summery_info">
            <p>
              Enthusiastic Computer Science graduate with a strong foundation in
              web development technologies like HTML5, CSS3, JavaScript (ES6+),
              and React.js. Eager to leverage my skills and problem-solving
              abilities to contribute to a creative and collaborative team
              environment.
            </p>
          </div>
        </motion.div>
        <div className="divider"></div>
        <motion.div
          className="education"
          key={"eduation"}
          initial={{ scale: scaleval, x: whileview }}
          whileInView={{ scale: 1, x: "0px" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="education_head">
            <h2>Education</h2>
          </div>
          <div className="education_info">
            <p>
              Bachelor of Science in Computer Science
              <br /> Calicut university
              <br />
              2025
            </p>
          </div>
        </motion.div>
        <div className="divider"></div>

        <motion.div
          className="skills"
          key={"skill"}
          initial={{ scale: scaleval, x: whileview }}
          whileInView={{ scale: 1, x: "0px" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="skill_head">
            <h2>Skills</h2>
          </div>
          <div className="skill_info">
            <p>
              <h3>Technical Skills</h3> HTML5 CSS3 (including preprocessors like
              Sass/LESS) JavaScript (including ES6+) React.js Git (Version
              Control)
            </p>
            <br />
            <p>
              <h3>Soft Skills</h3> Problem-Solving Teamwork Communication Time
              Management Adaptability
            </p>
          </div>
        </motion.div>
        <div className="divider"></div>

        <motion.div
          className="projects"
          key={"project"}
          initial={{ scale: scaleval, x: whileview }}
          whileInView={{ scale: 1, x: "0px" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project_head">
            <h2>Projects</h2>
          </div>
          <div className="project_info">
            <p>
              <h3>College Website</h3> Developed a visually appealing college
              website with HTML, CSS, and JavaScript, demonstrating proficiency
              in web development fundamentals.
              <h3>Todo App</h3>
              Implemented a dynamic to-do list application using React.js to
              manage tasks and improve personal organization.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Resume;
