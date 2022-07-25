import {useState} from 'react';
import { ArtistDetails, TopSongs } from '../API/MusicAPI';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Search(props){
const [results,setResults] = useState()
const [word,setWord] = useState('')
const [songs,setSongs] = useState(null)

async function handleClick(word){
    if (word===''){
         alert('Please enter an artist')
    }else{
setSongs(null)
const artist = await (await ArtistDetails(word)).data.artists[0]
console.log(artist)
setResults(artist)
const top = await (await TopSongs(word)).data.track
console.log(top)
const mappedTop = top.map((song,index)=>{
    return <p>{index + 1}:{song.strTrack}</p>
})
setSongs(mappedTop)



    }
}




// console.log(results)
// useEffect(()=>{
// handleClick()
// art()

// },[])
// console.log(word)


return(
    <div className='SearchContainer'>
        <div className='SearchBar'>

       
        <TextField id="outlined-basic" label="Artist" variant="outlined" type='text' value={word} onChange ={ e =>{
            let input = e.target.value
            setWord(input)
        }} ></TextField>
        <Button size="large" variant="contained" onClick={()=>{
            handleClick(word)
            // art(results.id)
            }}>CLICK ME</Button>
        </div>

       
            { 
                results ? (
                    
                        
                        <div className='Search'>
                            <div className='TopTracks'>
                        <img className='SearchImage' src={results.strArtistThumb} alt=''></img>
                        <h3>Top Tracks:</h3>
                        {songs}   
                         </div>
                        <div className='SearchResults'>
                        <h1> {results.strArtist}</h1>   
                       {
                       results.intDiedYear===null ? <h2>Active from {results.intFormedYear} to Present</h2> : <h2>Active from {results.intFormedYear} to {results.intDiedYear}</h2> 
                        
                        
                        }
                       <h3>Genre:{results.strGenre}</h3>
                        <p>{results.strBiographyEN}</p>
                       </div>  
                       </div>  
                    ) : null
            }
            
            </div>
     
)
}
export default Search