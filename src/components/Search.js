import {useState} from 'react'
import {useEffect} from 'react'
import {getArtist,getArt,getTopTracks,getGenreName} from '../API/artistSearch'


function Search(props){
const [results,setResults] = useState([])
const [word,setWord] = useState('')
const [albumArt,setAlbumArt] = useState([])
const [facts,setFacts] = useState('')
const [topTracks, setTopTracks] = useState(null)
const [genres, setGenres] = useState([])

async function handleClick(word){
    if (word===''){
        return null
    }else{
const artist = await getArtist(word)
const result = artist.data.search.data.artists[0]
const art = await getArt(result.id)
const blurbs = result.blurbs
const tracks = (await getTopTracks(result.id)).data.tracks.map((track,index)=>{
    return <p>{index+1}: {track.name}</p>
})

/////////needs fixed/////////
const genre = result.links.genres.ids
const mappedGenre = genre.map( async (genre,index)=>{
    let results = await getGenreName(genre)
    console.log(results)
    return <p>{results.data.genres[0].name}</p>
})

console.log(result)
console.log(tracks)
console.log(genre)
console.log(mappedGenre)


setResults(result)
setAlbumArt(art.data.images[0].url)
setFacts(blurbs)
setTopTracks(tracks)
setGenres(mappedGenre)
console.log(genres)


    }
}




// console.log(results)
// useEffect(()=>{
// handleClick()
// art()

// },[])
// console.log(word)


return(
    <div>
        <input type='text' value={word} onChange ={ e =>{
            let input = e.target.value
            setWord(input)
        }} ></input>
        <button onClick={()=>{
            handleClick(word)
            // art(results.id)
            }}>CLICK ME</button>
        <div>
            <img src={albumArt} alt=''></img>
            <h1> {results.name}</h1>
                {/* {genres} */}
            <p> {facts}</p>
             {
               
                topTracks ? (
                    <> 
                        <h3>Top Tracks</h3>
                        {topTracks}
                        </>     
                    ) : null
                // topTracks && (
                //     <> 
                //     <h3>Top Tracks</h3>
                //     {topTracks}
                //     </>     
                // )      
            }
         
            
        </div>
    </div>
)
}
export default Search