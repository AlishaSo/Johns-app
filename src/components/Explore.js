import {useEffect, useState} from 'react'
import {getArtistByGenre,getAllGenres,getArt} from '../API/artistSearch'
function Explore(){
const [artists,setArtists] = useState([])
const [list,setList] = useState([])
// async function handleButton(id){
//     setGenre( await ( getArtistByGenre(id)))
//    }

async function handleButton(id){
console.log(id)
const results= ((await getArtistByGenre(id)))
console.log(results)
const mappedResults = (results.map((result,index)=>{
    // const art = getArt(result.id)
    // // const image = art.data.images[0].url
    // console.log(art)
    // // console.log(image)
    // console.log(result)
    return (
        <div>  
    <h3>{result.name}</h3>
    <p>{result.blurbs}</p>
    </div>
    )
}))
setArtists(mappedResults)
}




async function displayGenres(){
const allGenres =  await getAllGenres()
console.log(allGenres)
const mappedGenres = allGenres.map((genre,index)=>{
    return <button key={index} onClick={()=>{

        console.log(genre.id)
        handleButton(genre.id)
    }}>{genre.name}</button>

   
})
 setList(mappedGenres)
}
useEffect(()=>{
  displayGenres()  
},[])


console.log(list)





    return(
        <div>
           {/* <input type='text' value={genre} placeholder='' onChange ={ e =>{
            let input = e.target.value
            setGenre(input)
        }} ></input>
         <button onClick={()=>{
            handleClick(genre)
            }}>Click ME</button> */}
            {list}
            {artists}

            {/* {mappedGenres} */}

        </div>
    )
}

export default Explore