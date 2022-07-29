import {useEffect, useState} from 'react'
import {getArtistByGenre,getAllGenres} from '../API/artistSearch'
import * as React from 'react';
import Button from '@mui/material/Button';

function Explore(){
const [artists,setArtists] = useState([])
const [list,setList] = useState([])

async function handleButton(id){
try{

const results= ((await getArtistByGenre(id)))


const mappedResults = (results.map((result,index)=>{
   
    return (
        <div className='artists'>  {/* added class name */}
    
    <h3>{result.name}</h3>
    <p>{result.blurbs}</p>  {/* will need to map over these to join them */}

    </div>
    )
}))

setArtists(mappedResults)
}catch(error){
    
}
}





useEffect(()=>{
    async function displayGenres(){
        const allGenres =  await getAllGenres()
        const mappedGenres = allGenres.map((genre,index)=>{
            
            return (
            
                <Button  size="large" variant="contained" key={index} onClick={()=>{
        
               
                handleButton(genre.id)
                }}>{genre.name}</Button>
            
            )
        
           
        })
         setList(mappedGenres)
        }
    displayGenres()
},[])








    return(
        <div className='SearchResults'>    
            {list}
            {artists}
        </div>
    )
}

export default Explore