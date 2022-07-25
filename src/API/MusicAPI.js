import axios from "axios"
const BASE_URL =  'https://theaudiodb.com/api/v1/json/'
const API_KEY = '523532'
//theaudiodb.com/api/v1/json/2/search.php?s=coldplay
//theaudiodb.com/api/v1/json/523532/search.php?s=coldplay

export async function ArtistDetails(word){
 const response = await axios.get(`${BASE_URL}${API_KEY}/search.php?s=${word}`)
 console.log(response)
 return response
}

//theaudiodb.com/api/v1/json/{APIKEY}/track-top10.php?s=(artistname}
// https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=coldplay
export async function TopSongs(word){
    const response = await axios.get(`${BASE_URL}${API_KEY}/track-top10.php?s=${word}`)
    console.log(response)
    return response
   }

// theaudiodb.com/api/v1/json/2/trending.php?country=us&type=itunes&format=albums
export async function GetTrending(word){
    const response = await axios.get(`${BASE_URL}${API_KEY}/trending.php?country=us&type=itunes&format=${word}`)
    console.log(response)
    return response
   }
