import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Album from './components/pages/Album';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
  
function App() {
  
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
      </Routes>
      <Footer/>
    </Router>

  );
}


export default App;
