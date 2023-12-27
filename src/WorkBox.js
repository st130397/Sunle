import React,{useState, useEffect, useRef} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "react-h5-audio-player/lib/styles.less";
import './WorkBox.css'

const WorkBox = ({PlaySongs, Songs, setPlaySongs, isPlaying, setIsPlaying}) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const wave = document.getElementById("wave");
  const audioRef = useRef(null);
  const MusicPlay=audioRef.current;
  useEffect(() => {
    const updateCurrentTime = () => {
      if (MusicPlay) {
        setCurrentTime(MusicPlay.audio.current.currentTime);
      }
    };
    if (MusicPlay) {
      MusicPlay.audio.current.addEventListener('timeupdate', updateCurrentTime);
    }
    return () => {
      if (MusicPlay) {
        MusicPlay.audio.current.removeEventListener('timeupdate', updateCurrentTime);
      }
    };
  }, [MusicPlay]);  
  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (MusicPlay) {
        setDuration(MusicPlay.audio.current.duration);
      }
    };
    if (MusicPlay) {
      MusicPlay.audio.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }
    return () => {
      if (MusicPlay) {
        MusicPlay.audio.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [MusicPlay]);
  useEffect(() => {
    const updateProgress = () => {
      if (MusicPlay) {
        setProgress(MusicPlay.audio.current.currentTime);
      }
    };
    if (MusicPlay) {
      MusicPlay.audio.current.addEventListener('timeupdate', updateProgress);
    }
    return () => {
      if (MusicPlay) {
        MusicPlay.audio.current.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, [MusicPlay]);
  const playpause = () => {    
      if (isPlaying===true && MusicPlay) {
        MusicPlay.audio.current.pause();
        wave.classList.remove('active1');
      } else {
        wave.classList.add('active1');
        MusicPlay.audio.current.play();
      }
      setIsPlaying(!isPlaying);
  };
  const nextplay = () => {
      setIsPlaying(true);
      const next= PlaySongs.id+1
      console.log("value",next);
      const nextSong = Songs.find((item) => item.id === next);
      if (nextSong) {
          setPlaySongs(nextSong);
      }
  };
  const preplay = () => {
      setIsPlaying(true);
      const pre= PlaySongs.id-1
      console.log("value",pre);
      const nextSong = Songs.find((item) => item.id === pre);
      if (nextSong) {
          setPlaySongs(nextSong);
      }
  };
  const downloadSong = () => {
      if (PlaySongs) {
        const link = document.createElement('a');
        link.href = PlaySongs.singing;
        link.download = `${PlaySongs.songName}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  }
  const formatTime = (timeInSeconds) => {
    const min1 = Math.floor(timeInSeconds / 60);
    const sec1 = Math.floor(timeInSeconds % 60);
    return `${String(min1).padStart(2, '0')}:${String(sec1).padStart(2, '0')}`;
  };
  const formatduration = (timeInSeconds) => {
    const min2 = Math.floor(timeInSeconds / 60);
    const sec2 = Math.floor(timeInSeconds % 60);
    return `${String(min2).padStart(2, '0')}:${String(sec2).padStart(2, '0')}`;
  };
  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);

    if (MusicPlay) {
      MusicPlay.audio.current.currentTime = newProgress;
    }
  };
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (MusicPlay) {
      MusicPlay.audio.current.volume = newVolume;
    }
  };
    return(
        <div className="work">
          <script src="https://kit.fontawesome.com/805b1f1339.js" crossorigin="anonymous"></script>
            <div className="wave" id="wave">
                <div className="wave1"></div>
                <div className="wave1"></div>
                <div className="wave1"></div>
            </div>
            <div className="display1">
              {PlaySongs?.poster||""}
              <h5 id="title">
                {PlaySongs?.songName||""}
              </h5><br/>
            </div>
            <AudioPlayer autoPlay={false} ref={audioRef} id="song" src={PlaySongs?.singing||""} onPlay={() => console.log("onPlay")} onPause={() => console.log("onPause")} style={{display:"none"}}/>
            <div className="icon">
              <div classNam
              e="ki">
                <i className="fa-sharp fa-solid fa-music"></i>
              </div> 
              <div className="ki" onClick={preplay}>
                <i className="fa-sharp fa-solid fa-backward-step"></i>
              </div>
              <div className="ki" onClick={playpause}>
                <i className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"} id="ctrlIcon"></i>
              </div>
              <div className="ki" onClick={nextplay}>
                <i className="fa-sharp fa-solid fa-forward-step"></i>
              </div>
              <div className="ki" onClick={downloadSong}>
                <i className="fa-solid fa-cloud-arrow-down"></i>
              </div>
            </div>
            <span id="currentStart">{formatTime(currentTime)}</span>
            <div className="bar">
              <input type="range" min="0" max={MusicPlay?.audio.current?.duration || 100} step="0.01" value={progress} onChange={handleProgressChange} />
            </div>
            <span id="currentEnd">{formatduration(duration)}</span>
            <div className="vol">
              <div className="ki">
                <i className="fa-thin fa-volume"></i>
              </div>
              <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
            </div>
        </div>
    );
};
export default WorkBox;