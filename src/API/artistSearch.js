import axios from "axios"

// https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=weezer&type=artist


const BASE_URL =  'https://api.napster.com/v2.2/'
const API_KEY = 'OTU0NmVkMzUtYmU4ZC00NTFmLTkyN2UtM2RiNzk4MTZjNDA1'

//gets information by searched artist
export async function getArtist(word){
    const response = await axios.get(`${BASE_URL}search?apikey=${API_KEY}&query=${word}&type=artist`)
    // console.log(response)
    return response
    }

//// https://api.napster.com/v2.2/artists/Art.28463069/similar?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4

// gets similar artist using ID
export async function getSimilar(id){
    const response = await axios.get(`${BASE_URL}artists/${id}/similar?apikey=${API_KEY}`)
    // console.log(response)
    return response
    }


// https://api.napster.com/v2.2/genres/g.397/artists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4

//get top artist by genre
export async function getArtistByGenre(genre){
    const response = await axios.get(`${BASE_URL}genres/${genre}/artists/top?apikey=${API_KEY}`)
    // console.log(response)
    return response
    }

// http://api.napster.com/v2.2/genres/g.397?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4

//get name of genre
export async function getGenreName(genre){
    const response = await axios.get(`${BASE_URL}genres/${genre}?apikey=${API_KEY}`)
    // console.log(response)
    return response
    }


// https://api.napster.com/v2.2/artists/Art.28463069/images?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4

//get album art
export async function getArt(id){
    const response = await axios.get(`${BASE_URL}artists/${id}/images?apikey=${API_KEY}`)
    // console.log(response)
    return response
    }


 // https://api.napster.com/v2.2/artists/Art.28463069/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4
 export async function getTopTracks(id){
    const response = await axios.get(`${BASE_URL}artists/${id}/tracks/top?apikey=${API_KEY}&limit=5`)
    // console.log(response)
    return response
    }



    

// https://api.napster.com/v2.2/artists/Art.28463069?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4
///////WORK IN PROGRESS////////
//get random artist
export async function getRandomArtist(ranNum){
    let randomNumber = ranNum.toString()
    const response = await axios.get(`${BASE_URL}artists/art.${randomNumber}?apikey=${API_KEY}`)
    console.log(` Random Artist Function ${response}`)
    // console.log(response)
    return response
    }



