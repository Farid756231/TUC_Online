import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Programmering from './pages/produkter/programmering'

function App() {
  return (
  <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
         <Route path="/navbar" element={<Navbar/>} />
         <Route path="/programmering" element={<Programmering />} />
      </Routes>
  </Router> 
  );
}

export default App;
