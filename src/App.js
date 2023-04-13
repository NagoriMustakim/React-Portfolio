import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './components/contact/Contact';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Project } from './components/Project/Project';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/project' element={<Project />}></Route>
    </Routes>

  );
}

export default App;
