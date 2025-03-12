import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import Pacientes from './pages/Pacientes'
import Relatorio from './pages/Relatorio'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/'        element={<Home />} />
          <Route path='/Pacientes' element={<Pacientes />} />
          <Route path='/Relatorio' element={<Relatorio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
