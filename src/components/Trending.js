import { useEffect,useState } from "react"
import {GetTrending} from '../API/MusicAPI'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




function Trending(){
const [albumList,setAlbumList] = useState('')
const [singleList,setSingleList] = useState('')



async function displayAlbums(word){
const albums =  await (await GetTrending(word)).data.trending
const mappedAlbums = albums.map((result,index)=>{
    return(
        <div key={index} className="Card">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={result.strAlbumThumb}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {result.strAlbum}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             by: {result.strArtist}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    )
})
setAlbumList(mappedAlbums)
} 



async function displaySingles(word){
    const singles =  await (await GetTrending(word)).data.trending
    console.log(singles)
    const mappedSingles = singles.map((result,index)=>{
        return(
            <div key={index} className="Card">
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={result.strTrackThumb}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {result.strTrack}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 by: {result.strArtist}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        )
    })
    setSingleList(mappedSingles)
}

// const albumList = displayAlbums("albums")

useEffect(()=>{
displayAlbums('albums')
displaySingles('singles')
  },[])


    return(
      <div className="Trending-div">  {/* added class name */}
         <div className="Current-trending-div">  {/* added class name */}
          <h1>Current trending albums </h1>       
          <div className="CardContainer">
          {albumList}
        </div> 
    </div>
    <div>
        <h1>Current trending singles </h1>       
        <div className="CardContainer">
        {singleList}
        </div>
    </div>


</div>
    )
}

export default Trending