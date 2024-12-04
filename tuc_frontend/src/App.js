
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Programmering from './pages/produkter/programmering'
import LoginSignup from './pages/LoginSignup/LoginSignup';

function App() {
  return (

  <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
         <Route path="/navbar" element={<Navbar/>} />
         <Route path="/programmering" element={<Programmering />} />
         <Route path='/login' element={<LoginSignup />} />
      </Routes>
  </Router> 

  );
}

export default App;