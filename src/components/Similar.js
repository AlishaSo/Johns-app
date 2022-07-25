import { useState } from "react"
import {getArtist,getSimilar} from '../API/artistSearch'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Similar(){
const [word,setWord] = useState()
const [results, setResults] = useState([])


async function handleClick(word){
//ussing the givin word to get back artist details
 const artist = (await getArtist(word)).data.search.data.artists[0].id

 //gets the list of similar artist 
 const list = (await(getSimilar(artist)))
 setResults(list)
}

const mappedList = results.map((result,index)=>{

   
   return(
       
       <div className="SearchResults" key={index}>
          
       <h3>{result.name}</h3>
       <p>{result.blurbs}</p>
       </div>
       

   ) 
   
})


    return (<div>

   
        <div className='SearchBar'>
            <h4>Gimmie artists that sound like: </h4>
           <TextField id="outlined-basic" label="Artist" variant="outlined" type='text' value={word} onChange ={ e =>{
            let input = e.target.value
            setWord(input)
        }} ></TextField>
        
            <Button size="large" variant="contained" onClick={()=>{
            handleClick(word)
            // art(results.id)
            }}>CLICK ME</Button>
        </div>
            {mappedList}
        
        
    </div>
    ) 
}

export default Similar