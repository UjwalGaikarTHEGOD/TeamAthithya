import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Sign';
import Login from './components/Login';
import AboutPage from './components/AboutPage';
import Home from './components/Home';
import Detect from './components/Detect';
import Dashboard from './components/Dashboard';



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/detect' element={<Detect />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;