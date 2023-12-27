import React from "react";
import './search.css';

const SearchBox=({searchQuery, filteredData, selectSong})=>{

    return(
        <div className='container'>            
            <div className='row'>
                {searchQuery.trim() !== "" && (
                    <div>
                        {filteredData.map((item) => (
                            <div className='col-12'>
                                <div className="songItem" key={item.id} onClick={() => selectSong(item)}>
                                    {item.poster}
                                    <h5 style={{color:"whitesmoke"}}>{item.songName}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBox