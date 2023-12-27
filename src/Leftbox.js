import React from "react";
import SongList from "./songList";
import './Leftbox.css'
const Leftbox=({selectSong, selectedSongs})=>{
    return(
        <div class="left">
            <h1>PlayList</h1>
            <div class="playlist">
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i>PlayList</h4>
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i>Last Listening</h4>
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i>Recomended</h4>
            </div>
            <h1>Recently Played</h1>
            <div class="boxsong">
                <SongList selectSong={selectSong} selectedSongs={selectedSongs}/>
            </div>
        </div>
    );
};
export default Leftbox;