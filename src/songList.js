import React from 'react';
import './songlist.css'

const SongList = ({selectSong, selectedSongs}) => {
  return (
    <div className='container'>
      <div className='row'>
        {selectedSongs.map((item) => (
          <div className='col-8'  onClick={() => selectSong(item)}>
            <li className="songItem" key={item.id}>
              {item.poster}
              <h5 onClick={() => selectSong(item)}>{item.songName}</h5>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SongList;