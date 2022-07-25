import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Search from './components/Search'
import Home from './components/Home';
import About from './components/About';
import Lyrics from './components/Lyrics';
import NotFound from './components/NotFound';
import Explore from './components/Explore';
import Similar from './components/Similar';
import Trending from './components/Trending'

function App() {
  return (
    <div className="App">

    <NavBar></NavBar>
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/lyrics' element={<Lyrics/>} />
      <Route path='/explore' element={<Explore/>} />
      <Route path='/similar' element={<Similar/>} />
      <Route path='/trending' element={<Trending/>} />


      <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>  
    
    </div>
  );
}

export default App;
