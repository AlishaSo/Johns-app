import { useState } from "react"
import {getLyrics} from '../API/artistSearch'
function Lyrics(){
const [word1,setWord1] = useState()
const [word2,setWord2] = useState()
const [lyrics,SetLyrics] = useState(null)

async function handleClick(word1,word2){

const results = await getLyrics(word1,word2)
console.log(results)
SetLyrics(results.data.mus[0].text)
console.log(lyrics)

}


    return(
        <div className="Lyrics"> 
            <h4> Give me the lyrics for </h4>
            <input type='text' value={word2} placeholder='Song' onChange ={ e =>{
            let input = e.target.value
            setWord2(input)
        }} ></input>
            <h4>By: </h4>

            <input type='text' value={word1} placeholder='Artist' onChange ={ e =>{
            let input = e.target.value
            setWord1(input)
        }} ></input>


        <button onClick={()=>{
            handleClick(word1,word2)
            }}>Click ME</button>
        {
            lyrics ? (
                        <> 
                        <h3> {word2.toUpperCase()} By: {word1.toUpperCase()}</h3>
                        {lyrics}
                        </>     
                    ) : null
        }
            

            

        </div>
            
        
           
    )
}

export default Lyrics