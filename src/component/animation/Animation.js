import React from 'react';
import Home from '../home/Home';
import { Routes,Route,useLocation } from 'react-router-dom';
 import {AnimatePresence} from "framer-motion";
import Resume from '../resume/Resume';
import Project from '../project/Project';
import Contact from '../contact/Contact';
function Animation() {
    const location=useLocation();
  return (
   <AnimatePresence>
<Routes location={location} key={location.pathname}>
         <Route exact path="/" element={<Home/>} />
         <Route  path="/resume" element={<Resume/>} />
         <Route  path="/project" element={<Project/>} />
         <Route  path="/contact" element={<Contact/>} />
    </Routes>
    </AnimatePresence>
   
    
    
     
       
     
  )
}

export default Animation
