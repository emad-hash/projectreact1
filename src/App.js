import { Routes , Route ,NavLink } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/Movie';


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
        <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
