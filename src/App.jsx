import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Illustrations from './pages/Illustrations';
import ConceptArt from './pages/ConceptArt';
import MattePainting from './pages/MattePainting';
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/concept-art" element={<ConceptArt />} />
        <Route path="/matte-painting" element={<MattePainting />} />
      </Routes>
    </Router>
  );
}

export default App;
