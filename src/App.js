import './App.css';
import ResponsiveAppBar from './component/Appbar';
import Contact from './component/Contact';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './component/Home';
import Projects from './component/Projects';
import { Container } from '@mui/material';
import About from './component/About'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
  <>
  <Router>
  <Container maxWidth={false}>
  <ResponsiveAppBar/>
  
</Container>
    <Routes>
    <Route path = "/" element ={<Home/>}></Route>
    <Route path = "/About" element={<About/>}></Route>
    <Route path = "/Contact" element ={<Contact/>}></Route>
    <Route path = "/Home" element ={<Home/>}></Route>
    <Route path = "/Projects" element= {<Projects/>}></Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;

