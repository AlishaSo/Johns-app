import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import {getArtist,getSimilar,getArtistByGenre, getGenreName, getLyrics, getAllGenres} from './API/artistSearch'
import Search from './components/Search'
import Home from './components/Home';
import About from './components/About';
import Lyrics from './components/Lyrics';
import NotFound from './components/NotFound';
import Explore from './components/Explore';
import Similar from './components/Similar';



// getSimilar('art.35104')
// getArtist('sum41')
// getSimilar('art.35104')
// getArtistByGenre('rock')
// 'g.115', 'g.5', 'g.33', 'g.394', 'g.112'
// getGenreName('g.115')
// getGenreName('g.5')
// getGenreName('g.33')
// getGenreName('g.394')
// getGenreName('g.112')
// getAllGenres()
getGenreName('g.10')


// let ranNum = Math.floor(Math.random()* 1000000).toString()
// let testNum = '28463069'
// let testNum2 = '35103'
// console.log(`the random number is ${ranNum}`)
// getRandomArtist(ranNum)
// getRandomArtist(testNum)
// getRandomArtist(testNum2)


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

      <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>  
    
    </div>
  );
}

export default App;
