import './App.css';
import Carro from './components/Carros'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Footer />
        <Routes>
          <Route path='/'        element={<Home />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
