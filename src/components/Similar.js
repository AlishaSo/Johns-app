import { useState } from "react"
import {getArtist,getSimilar,getArt} from '../API/artistSearch'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

   
        <div className='SearchBar'>
            <h4>Give me artists that sound like: </h4>
           <TextField id="outlined-basic" label="Artist" variant="outlined" type='text' value={word} onChange ={ e =>{
            let input = e.target.value
            setWord(input)
        }} ></TextField>
        
            <Button size="large" variant="contained" onClick={()=>{
            handleClick(word)
            // art(results.id)
            }}>CLICK ME</Button>
        </div>
            {similar}
        
        
    </div>
    ) 
}

export default Similar