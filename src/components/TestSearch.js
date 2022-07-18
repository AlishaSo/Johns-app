// import {useState} from 'react'
// import {useEffect} from 'react'
// import {getArtist,getArt} from '../API/artistSearch'

// function Search(props){
// const [results,setResults] = useState([])
// const [word,setWord] = useState('')
// const [albumArt,setAlbumArt] = useState('')
// // console.log()
// // console.log(word)
// // let art;
// async function art(id){
//     const response = (await getArt(id))
//     // console.log(response.data.images[0].url)
//     // return response 
//     setAlbumArt(response.data.images[0].url)

// }




// async function handleClick(word){
//     if (word===''){
//         return null
//     }else{
// const artist = await getArtist(word)
// console.log(artist)
// // console.log(word)
//     // console.log(artist)
// // const artist = await getArtist(word)
// setResults(artist.data.search.data.artists[0])
// //  console.log(artist.id)
// // console.log(results.data.search.data)

//     }
// }
// console.log(results)
// // useEffect(()=>{
// art(results.id)

// // },[])
// // console.log(word)


// return(
//     <div>
//         <input type='text' value={word} onChange ={ e =>{
//             let input = e.target.value
//             setWord(input)
//         }} ></input>
//         <button onClick={()=>{handleClick(word)}}>CLICK ME</button>
//         <div>
//             <img src={albumArt} alt=''/>
//             <h3>{results.name} </h3>
//         </div>
//     </div>
// )
// }
// export default Search