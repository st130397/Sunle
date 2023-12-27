import React from "react";
import './songItem.css'

const SongItem = ({selectSong, Songs}) => {
  return (
    <div className="List" style={{display:"flex"}}>
      {Songs.map((item) => (
        <li key={item.id} className="songItem1" onClick={() => selectSong(item)}>
          <div className="imgPlay">
            {item.poster}
          </div>
          <h5>{item.songName}</h5><br/>
          <div className="subtitle">{item.id}</div>
        </li>
      ))}
    </div>
  );
}
export default SongItem;