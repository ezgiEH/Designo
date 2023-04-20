import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Service from './pages/Service';

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services/:id" element={<Service />}></Route>
      <Route path="/location" element={<Location />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
   </Router>
  );
}

export default App;
