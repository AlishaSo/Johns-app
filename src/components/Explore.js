import {useEffect, useState} from 'react'
import {getArtistByGenre,getAllGenres,getArt} from '../API/artistSearch'
import * as React from 'react';
import Button from '@mui/material/Button';

function Explore(){
const [artists,setArtists] = useState([])
const [list,setList] = useState([])
// async function handleButton(id){
//     setGenre( await ( getArtistByGenre(id)))
//    }

async function handleButton(id){
try{
console.log(id)
const results= ((await getArtistByGenre(id)))
console.log(results)
const promises = results.map(result=>getArt(result.id))
const images = await Promise.all(promises)
console.log(images)
const mappedResults = (results.map(async(result,index)=>{
    // const image = images[index].data.images[0].url
    
    // console.log(image)
    console.log(result)
    return (
        <div>  
    {/* <img src={image} alt=''></img> */}
    <h3>{result.name}</h3>
    <p>{result.blurbs}</p>

    </div>
    )
}))
console.log(mappedResults)
setArtists(mappedResults)
}catch(error){
    console.log(error)
}
}




async function displayGenres(){
const allGenres =  await getAllGenres()
console.log(allGenres)
const mappedGenres = allGenres.map((genre,index)=>{
    
    return (
    
        <Button  size="large" variant="contained" key={index} onClick={()=>{

        console.log(genre.id)
        handleButton(genre.id)
        }}>{genre.name}</Button>
    
    )

   
})
 setList(mappedGenres)
}
useEffect(()=>{
  displayGenres()  
},[])


console.log(list)





    return(
        <div>

            
            {list}
            
            
            {artists}
            

            

        </div>
    )
}

export default Explore