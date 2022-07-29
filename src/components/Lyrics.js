import { useState } from "react"
import {getLyrics} from '../API/artistSearch'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Lyrics(){
const [word1,setWord1] = useState()
const [word2,setWord2] = useState()
const [lyrics,SetLyrics] = useState(null)

async function handleClick(word1,word2){

const results = await getLyrics(word1,word2)
console.log(results)
if(!results.data.mus){
    SetLyrics(null)
    alert("Please check your spelling")
}else{
SetLyrics(results.data.mus[0].text)
console.log(lyrics)
}
}


    return(<div className="Lyrics-div">  {/* added class name */}
        <div className="SearchBar"> 
            <h4> Gimmie lyrics for </h4>
            <TextField id="outlined-basic" label="Song" variant="outlined" type='text' value={word2} onChange ={ e =>{
            let input = e.target.value
            setWord2(input)
        }} ></TextField>
            <h4>By: </h4>

            <TextField id="outlined-basic" label="Artist" variant="outlined" type='text' value={word1} onChange ={ e =>{
            let input = e.target.value
            setWord1(input)
        }} ></TextField>

        <div>
            <Button size="large" variant="contained" onClick={()=>{
            handleClick(word1,word2)
            }}>Click ME</Button> 
        </div>
        </div>
       
       <div className="SearchResults">

       
        {
            lyrics ? (
                        <> 
                        <h3> {word2.toUpperCase()} By: {word1.toUpperCase()}</h3>
                        {lyrics}
                        </>     
                    ) : null
        }
         </div>   

            

        
    </div>
            
        
           
    )
}

export default Lyrics