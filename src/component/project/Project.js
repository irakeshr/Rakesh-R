import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

function Project() {
  let whileview;
  let scaleval;

  let windo = window.innerWidth;
  if (windo <= 400) {
    whileview = "0px";
    scaleval = "0";
  } else {
    whileview = "700px";
    scaleval = "1";
  }
  console.log(whileview, scaleval);

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      key={"project"}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0, transition: { duration: 0.3, delay: 0 } }}
      transition={{ duration: 0.3, delay: 0.6 }}
    >
      <div className="project">
        <div className="project_main_head">
          <h1>Projects</h1>
        </div>
        <div className="project_details">
          {/* project-1 */}
          <div className="project1">
            <div className="div1">
              <h2 className="project_name">College Website</h2>
              <div className="project1_details">
                <p>
                  This project showcases my ability to create interactive
                  websites with HTML, CSS, and JavaScript. Explore my college
                  website design!
                </p>
              </div>

              <motion.div
                className="project1_link"
                key={"project1_link"}
                // whileHover={{scale:.9}}
                whileTap={{ scale: 1.2, top: "20px" }}
                exit={{ y: "0deg" }}
              >
                <a href="https://irakeshr.github.io/collegeweb/index.html">
                  Explore
                </a>
              </motion.div>
            </div>
            <div className="div2 project1_image"> </div>
          </div>
          <div className="divider"></div>
          {/* project-2 */}
          <motion.div
            className="project2"
            initial={{ x: whileview, scale: scaleval }}
            whileInView={{ x: "0px", scale: 1 }}
            transition={{ duration: ".5" }}
          >
            <div className="div3">
              <h2 className="project_name">Random Color Picker</h2>
              <div className="project1_details">
                <p>
                  This project showcases my skills in HTML, CSS, and JavaScript
                  by creating a user-friendly random color picker. With a single
                  click, generate a fresh burst of color inspiration, perfect
                  for web design, illustrations, or simply exploring the vast
                  spectrum of color possibilities.
                </p>
              </div>

              <motion.div
                className="project1_link"
                key={"project1_link"}
                // whileHover={{scale:.9}}
                whileTap={{ scale: 1.2, top: "20px" }}
                exit={{ y: "0deg" }}
              >
                <a href="https://irakeshr.github.io/randomcolor/">Explore</a>
              </motion.div>
            </div>
            <div className="div4 project2_image"></div>
          </motion.div>
          <div className="divider"></div>
          {/* project-3*/}
          <motion.div
            className="project3"
            initial={{ x: whileview, scale: scaleval }}
            whileInView={{ x: "0px", scale: 1 }}
            transition={{ duration: ".5" }}
          >
            <div className="div5">
              <h2 className="project_name">Todo App</h2>
              <div className="project1_details">
                <p>
                  Created a user-friendly Todo app with React JS. This project
                  showcases my ability to build intuitive and functional web
                  applications.
                </p>
              </div>

              <motion.div
                className="project1_link"
                key={"project1_link"}
                // whileHover={{scale:.9}}
                whileTap={{ scale: 1.2, top: "20px" }}
                exit={{ y: "0deg" }}
              >
                <a href="https://irakeshr.github.io/TodoApp/">Explore</a>
              </motion.div>
            </div>
            <div className="div6 project3_image"></div>
          </motion.div>
          {/* project-4*/}
          <div className="divider"></div>
          <motion.div
            className="project4"
            initial={{ x: whileview, scale: scaleval }}
            whileInView={{ x: "0px", scale: 1 }}
            transition={{ duration: ".5" }}
          >
            <div className="div7">
              <h2 className="project_name">Calculator</h2>
              <div className="project1_details">
                <p>
                  This project demonstrates my solid understanding of web
                  development fundamentals. It showcases how basic building
                  blocks can be combined to create a user-friendly and
                  interactive tool for everyday calculations.
                </p>
              </div>

              <motion.div
                className="project1_link"
                key={"project1_link"}
                // whileHover={{scale:.9}}
                whileTap={{ scale: 1.2, top: "20px" }}
                exit={{ y: "0deg" }}
              >
                <a href="https://irakeshr.github.io/calculator/">Explore</a>
              </motion.div>
            </div>
            <div className="div8 project4_image"></div>
          </motion.div>
          {/* <project-5 */}
          <div className="divider"></div>
          <motion.div
            className="project5"
            initial={{ x: whileview, scale: scaleval }}
            whileInView={{ x: "0px", scale: 1 }}
            transition={{ duration: ".5" }}
          >
            <div className="div9">
              <h2 className="project_name">Piano</h2>
              <div className="project1_details">
                <p>
                  Developed a playable virtual piano using HTML, CSS, and
                  JavaScript. This project showcases my ability to create
                  interactive experiences that combine web development with
                  musical creativity. Explore different notes and chords, or
                  simply have fun experimenting with sounds!
                </p>
              </div>

              <motion.div
                className="project1_link"
                key={"project1_link"}
                // whileHover={{scale:.9}}
                whileTap={{ scale: 1.2, top: "20px" }}
                exit={{ y: "0deg" }}
              >
                <a href="https://irakeshr.github.io/piano/">Explore</a>
              </motion.div>
            </div>
            <div className="div10 project5_image"></div>
          </motion.div>
        </div>
        {/* project-detail end */}
      </div>
    </motion.div>
  );
}

export default Project;
