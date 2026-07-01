import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import DoctorDetail from './pages/DoctorDetail';
import './index.css';
import Contacts from './pages/Contacts';
import AboutClinic from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:doctorId" element={<DoctorDetail />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<AboutClinic/>} />
      </Routes>
    </Router>
  );
}

export default App;
