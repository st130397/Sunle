import React,{useState} from "react";
import Artist from "./Artist";
import SongItem from "./songItem";
import './Rightbox.css';
import om from './om1.ico';
import SearchBox from "./searchbox";
  
const Rightbox=({selectSong, Songs, PlaySongs})=>{
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(Songs);
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        const filteredResults = Songs.filter((data) =>
            data.songName.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredData(filteredResults);
    };
    const popSong = document.getElementsByClassName('popSong')[0];
    const handleScroll = () => {
        popSong.scrollLeft+=330;
    }
    const handleScroll1=()=>{
        popSong.scrollLeft-=330;
    }
    const artistBox = document.getElementsByClassName('artistBox')[0];
    const handleScroll3 = () => {
        artistBox.scrollLeft+=330;
    }
    const handleScroll2=()=>{
        artistBox.scrollLeft-=330;
    }
    return(
        <div className="Right">
            <div className="RightTop">
                <nav>
                    <ul>
                        <li>Discover</li>
                        <li>My Library</li>
                        <li>Radio</li>
                    </ul>
                    <div className="search">
                        <i className="fa-sharp fa-solid fa-magnifying-glass" style={{paddingLeft:"5px"}}></i>{" "}
                        <inpucdt 
                            type="text" 
                            placeholder="Search Music..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <div className="searchResult">
                            <SearchBox selectSong={selectSong} searchQuery={searchQuery} filteredData={filteredData}/>
                        </div>
                    </div>
                    <div className="user">
                        <img src={om} alt=""/>
                    </div>
                </nav>
                <div className="content">
                    <h1>{PlaySongs?.songName||"Adiyogi"}</h1>
                    <p>Listen & Enjoy<br/> by Artist...</p>
                    <div className="buttons">
                        <button>Play</button>{"  "}
                        <button>Follow</button>
                    </div>
                </div>
            </div>
            <div className="popularSong">
                <div className="h4">
                    <h4>Popular Song</h4>
                    <div className="btnS">
                        <i className="fa-sharp fa-solid fa-backward" id="popLeft" onClick={handleScroll1}></i>{" "}
                        <i className="fa-sharp fa-solid fa-forward" id="popRight" onClick={handleScroll}></i>
                    </div>
                </div>
                <div className="popSong">
                    <SongItem selectSong={selectSong} Songs={Songs}/>
                </div>
            </div>
            <div className="popularArtists">
                <div className="h4">
                    <h4>Popular Artists</h4>
                    <div className="btnS">
                        <i className="fa-sharp fa-solid fa-backward" id="popLeft" onClick={handleScroll2}></i>{" "}
                        <i className="fa-sharp fa-solid fa-forward"id="popRight" onClick={handleScroll3}></i>
                    </div>
                </div>
                <div className="artistBox">
                    <Artist/>
                </div>
            </div>
        </div>
    );
};

export default Rightbox;