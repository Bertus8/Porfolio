import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Projects" element={<Projects/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
