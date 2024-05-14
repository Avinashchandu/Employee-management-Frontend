import './App.css';
import Home from './pages/Home'; 
import { Accordion } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Registration from './pages/registration';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Update from './pages/Update';
import DeleteButton from './pages/Delete';

function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
<Route path='/registration' element={<Registration />} />
<Route path='/table' element={<Home />} />
<Route path='/update' element={<Update />} />
<Route path='/delete' element={<DeleteButton />} />

      </Routes>
    </Router>
  
    
  
  );
}

export default App;
