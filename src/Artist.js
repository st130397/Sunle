import React from "react";
import './Artist.css'
import background from './image/1.jpg'
import background1 from './image/background.jpg'
import wallpaper from './image/wallpaper.jpg'
import wallpaper1 from './image/wallpaper1.jpg'
import music from './image/music.jpg'
import mobile from './image/mobile.jpg'
import kids from './image/kids.png'
import game from './image/game.jpg'
const Songs = [
    {id: '1', songName: 'Uska Hi bana', poster:<img src={background1} alt=""/>},
    {id: '2', songName: 'Birthday Bash', poster:<img src={background} alt=""/>},
    {id: '3', songName: 'Aarambh Hai', poster:<img src={background} alt=""/>},
    {id: '4', songName: 'Aur Ho', poster:<img src={background} alt=""/>},
    {id: '5', songName: 'Aaj bhi', poster:<img src={background} alt=""/>},
    {id: '6', songName: 'Aaja We Mahiya', poster:<img src={background1} alt=""/>},
    {id: '7', songName: 'Shera Di Kaum', poster:<img src={background} alt=""/>},
    {id: '8', songName: 'Faasle', poster:<img src={wallpaper} alt=""/>},
    {id: '9', songName: 'Bounce Billo', poster:<img src={wallpaper1} alt=""/>},
    {id: '10', songName: 'Bye', poster:<img src={music} alt=""/>},
    {id: '11', songName: 'Bring Me Back', poster:<img src={mobile} alt=""/>},
    {id: '12', songName: 'Call Aundi', poster:<img src={kids} alt=""/>},
    {id: '13', songName: 'CasaNova', poster:<img src={game} alt=""/>},
    {id: '14', songName: 'Daftar Ki Girl', poster:<img src={kids} alt=""/>},
    {id: '15', songName: 'Imaginary Girl', poster:<img src={mobile} alt=""/>},
    {id: '16', songName: 'Jingle Bell', poster:<img src={music} alt=""/>},
    {id: '17', songName: 'Jiye Kyu', poster:<img src={background1} alt=""/>},
    {id: '18', songName: 'Mitti De Tibbe', poster:<img src={game} alt=""/>},
    {id: '19', songName: 'Kalank', poster:<img src={wallpaper} alt=""/>},
    {id: '20', songName: 'KK Mashup', poster:<img src={music} alt=""/>},
    {id: '21', songName: 'Mi Amor', poster:<img src={game} alt=""/>},
    {id: '22', songName: 'Desi Kalakar', poster:<img src={wallpaper} alt=""/>},
    {id: '23', songName: 'One Thousand Miles', poster:<img src={background1} alt=""/>},
    {id: '24', songName: 'Pata Chalgea', poster:<img src={music} alt=""/>},
    {id: '25', songName: 'Pehli Waar', poster:<img src={wallpaper} alt=""/>},
    {id: '26', songName: 'Raat Jashan Di', poster:<img src={wallpaper1} alt=""/>},
    {id: '27', songName: 'Rab Ka Shukrana', poster:<img src={wallpaper} alt=""/>},
    {id: '28', songName: 'Ramta Jogi', poster:<img src={music} alt=""/>},
    {id: '29', songName: 'Maalem', poster:<img src={wallpaper1} alt=""/>},
    {id: '30', songName: 'Shaamat', poster:<img src={background1} alt=""/>},
    {id: '31', songName: 'Siftaan', poster:<img src={wallpaper1} alt=""/>},
    {id: '32', songName: 'Te Amo', poster:<img src={wallpaper} alt=""/>},
    {id: '33', songName: 'Tum Mile Dil Khile', poster:<img src={music} alt=""/>},
    {id: '34', songName: 'Urvashi', poster:<img src={wallpaper1} alt=""/>},
    {id: '35', songName: 'Chidiya', poster:<img src={game} alt=""/>},
    {id: '36', songName: 'Yaar Bathere', poster:<img src={background1} alt=""/>},
    {id: '37', songName: 'Zara Zara', poster:<img src={game} alt=""/>},
    {id: '38', songName: 'Yai Re', poster:<img src={music} alt=""/>},
    {id: '39', songName: 'Loca', poster:<img src={wallpaper} alt=""/>},
    {id: '40', songName: 'Makhna', poster:<img src={game} alt=""/>},
  ];
  const Artist = () => {
    return (<div className="List"  style={{display:"flex"}}>
    {Songs.map((item) => (
      <li className="Artist">{item.poster}</li>
    ))}
  </div>
);
}
export default Artist;