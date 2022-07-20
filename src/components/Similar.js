import { useState } from "react"
import {getArtist,getSimilar,getArt} from '../API/artistSearch'

function Similar(){
const [word,setWord] = useState()
const [similar,setSimilar] = useState()

async function handleClick(word){
 const artist = (await getArtist(word)).data.search.data.artists[0].id
 console.log(artist)
 const list = (await(getSimilar(artist)))
 console.log(list)
 const mappedList = list.map((result,index)=>{

    ///// NEEDS FIXED//////
    // const art=(((getArt(result.id))).data.images[0].url)
    // console.log(art)
    
    return(
        
        <div>
            {/* <img src={art} alt=''></img> */}
           
        <h3>{result.name}</h3>
        <p>{result.blurbs}</p>
        </div>
        

    ) 
    
 })
 setSimilar(mappedList)

//  const mappedGenre = genre.map( async (genre,index)=>{
//     let results = await getGenreName(genre)
//     console.log(results)
//     return <p>{results.data.genres[0].name}</p>
// })
 
}


    return (<div>

   
        <div className='Similar'>
            <h4>Give me artists that sound like: </h4>
           <input type='text' placeholder="Artist" value={word} onChange ={ e =>{
            let input = e.target.value
            setWord(input)
        }} ></input>
        
            <button onClick={()=>{
            handleClick(word)
            // art(results.id)
            }}>CLICK ME</button>
        </div>
            {similar}
        
        
    </div>
    ) 
}

export default Similar