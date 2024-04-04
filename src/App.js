                      
import './App.css';
import Header from './component/header/Header';
import {BrowserRouter as Router } from 'react-router-dom';
import Animation from './component/animation/Animation';
import Footer from './component/footer/Footer';
 

function App() {
  return (
    <>
    <Router>
         <Header/>
       
       <Animation/>
       <Footer/>
       
    </Router>
    
    
    </>
  );
}

export default App;
