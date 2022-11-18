import { Routes , Route ,NavLink } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        {/* <Route path="Slider/:id" element={<Slider />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
