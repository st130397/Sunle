import React, { useState } from 'react';
import Leftbox from "./Leftbox";
import Rightbox from "./Rightbox";
import WorkBox from "./WorkBox";
import './musicpayer.css'
import background from './image/1.jpg'
import background1 from './image/background.jpg'
import wallpaper from './image/wallpaper.jpg'
import wallpaper1 from './image/wallpaper1.jpg'
import music from './image/music.jpg'
import aud1 from './audio/1.mp3'
import aud2 from './audio/2.mp3'
import aud3 from './audio/3.mp3'
import aud4 from './audio/4.mp3'
import aud5 from './audio/5.mp3'
import aud6 from './audio/6.mp3'
import aud7 from './audio/7.mp3'
import aud8 from './audio/8.mp3'
import aud9 from './audio/9.mp3'
import aud10 from './audio/10.mp3'

const Songs = [
  {id: 1, songName: 'Uska Hi bana', poster:<img src={background1} alt=""/>, singing: aud1 },
  {id: 2, songName: 'Birthday Bash', poster:<img src={background} alt=""/>, singing: aud2 },
  {id: 3, songName: 'Aarambh Hai', poster:<img src={background} alt=""/>, singing: aud3 },
  {id: 4, songName: 'Aur Ho', poster:<img src={background} alt=""/>, singing: aud4 },
  {id: 5, songName: 'Aaj bhi', poster:<img src={background} alt=""/>, singing: aud5 },
  {id: 6, songName: 'Aaja We Mahiya', poster:<img src={background1} alt=""/>, singing: aud6 },
  {id: 7, songName: 'Shera Di Kaum', poster:<img src={background} alt=""/>, singing: aud7 },
  {id: 8, songName: 'Faasle', poster:<img src={wallpaper} alt=""/>, singing: aud8 },
  {id: 9, songName: 'Bounce Billo', poster:<img src={wallpaper1} alt=""/>, singing: aud9 },
  {id: 10, songName: 'Bye', poster:<img src={music} alt=""/>, singing: aud10 },
];
const MusicPlayer=()=>{
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [PlaySongs, setPlaySongs] = useState({id: 1, songName: 'Uska Hi bana', poster:<img src={background1} alt=""/>, singing: aud1 },);
  const wave = document.getElementById("wave");
  const selectSong = (item) => {
      setIsPlaying(true);
      wave.classList.add('active1');
      setPlaySongs(item)
      console.log(item);
      setSelectedSongs([...selectedSongs,item])
      console.log("Item added to cart:",selectedSongs);
    }
    return(
        <div className="Player">       
            <div className="Leftbox">
                <Leftbox selectSong={selectSong} selectedSongs={selectedSongs}/>
            </div>
            <div className="Rightbox">
                <Rightbox selectSong={selectSong} Songs={Songs}/>
            </div>
            <div className="Workbox">
                <WorkBox isPlaying={isPlaying} setIsPlaying={setIsPlaying} setPlaySongs={setPlaySongs} PlaySongs={PlaySongs} Songs={Songs}/>
            </div>
            <script src="app.js"></script>
        </div>
    );
};
export default MusicPlayer;