import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';
import Home from './components/home/Home'; // ✅ Import the new Home component
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />         {/* ✅ Home route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
