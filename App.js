import './App.css';
 import ReactDOM from "react-dom/client";
 import {BrowserRouter, Route, Routes,Link } from 'react-router-dom';
 import Home from './Components/Home.js';
 import Contact from './Components/Contact.js';
 import About from './Components/About.js';
 function App() {
 return (
  <>
  <div className ="container">
      <h1> Osiris Medical Company</h1>
      <p>We are dedicated to providing high-quality healthcare services to our patients.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to improve the health and well-being of the communities we serve through compassionate, high-quality healthcare.</p>
      <h2>Our Services</h2>
      <p>We offer a wide range of medical services, including primary care, specialty care, and diagnostic testing.</p>
      <h2>Contact Us</h2>
      <p>To learn more about our company and services, please contact us at:</p>
      <ul>
        <li>Phone: +1-858-275-3535, +1-214-600-2592</li>
        <li>Email: <a href="mailto:[email protected]">[email protected]</a></li>
        <li>Skype: hiren.k.sanghvi</li>
      </ul>
 <BrowserRouter>
 <nav>
    <ul>
     <li><Link to ="/Home">Home</Link></li>
     <li><Link to ="/About">About</Link></li>
     <li><Link to ="/Contact">Contact</Link></li>
     
    </ul>
   </nav>
 <Routes>
 <Route path= "/Home" element={<Home title ="This is Personal Page"/>}/>
 <Route path= "/About" element={<About/>}/>
 <Route path= "/Contact" element={<Contact/>}/>
 </Routes>
 </BrowserRouter>
 </div>
 </>
 );
 }
 export default App;
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);