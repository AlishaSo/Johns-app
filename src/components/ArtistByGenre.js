import {useEffect, useState} from 'react'
import {getArtistByGenre,getAllGenres} from '../API/artistSearch'
function ArtistByGenre(){
const [genre,setGenre] = useState()
const [list,setList] = useState([])
// async function handleButton(id){
//     setGenre( await ( getArtistByGenre(id)))
//    }

async function handleButton(name){
 setGenre(name)
}




async function displayGenres(){
const allGenres =  await getAllGenres()
console.log(allGenres)
const mappedGenres = allGenres.map((genre,index)=>{
    return <button key={index} onClick={()=>{
        handleButton(genre.name)
    }}>{genre.name}</button>

   
})
 setList(mappedGenres)
}
useEffect(()=>{
  displayGenres()  
},[])


console.log(list)
console.log(genre)


async function handleClick(genre){
const results = await getArtistByGenre(genre)
console.log(results)



}

    return(
        <div>
           <input type='text' value={genre} placeholder='' onChange ={ e =>{
            let input = e.target.value
            setGenre(input)
        }} ></input>
         <button onClick={()=>{
            handleClick(genre)
            }}>Click ME</button>
            {list}
            {/* {mappedGenres} */}

        </div>
    )
}

export default ArtistByGenre