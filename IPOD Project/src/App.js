import appcss from './App.module.css';
import { Menu } from './pages/Menu';
import {useState} from 'react';
import { Music } from './pages/Music';
import { Games } from './pages/Games';
import { CoverFlow } from './pages/CoverFlow';
import { Settings } from './pages/Settings';

const menuOptions=["coverflow","music","games","settings"];
const musicOptions=["AllSongs","Artists","Albums"];


function App() {

  const [option,setOption]=useState("coverflow");
  const [musicOption,setMusicOption]=useState("AllSongs");
  const [song,setSong]=useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [screen,setScreen]=useState("menu");

  const handleMouseMove=(e)=>{
    if(screen=="music"){
      const index=musicOptions.findIndex((eachOption)=>eachOption==musicOption);
      if(index==2){
        setMusicOption(musicOptions[0]);
      }
      else{
        setMusicOption(musicOptions[index+1]);
      }
    }
    else{
      const index=menuOptions.findIndex((eachOption)=>eachOption==option);
      if(index==3){
        setOption(menuOptions[0]);
      }
      else{
        setOption(menuOptions[index+1]);
      }
   }
  }

  const handleScreen=(value)=>{
    console.log("clicked")
    if(screen=="music"){
      setSong(!song);
    }
    else if(value=="menu"){
      setScreen(value);
    }
    else{
      setScreen(option);
    }
  }

  const handlePlay=()=>{
    setIsPlaying(!isPlaying);
  }

  return (
    <div className={appcss.ipod}>
      <div className={appcss.outerScreen}>
      <div className={appcss.screen}>
        {screen=="menu" &&  
        <>
          <div className={appcss.menubg}>
            <Menu value={option}/>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s" alt="ipoimage"></img>
          </div>
          </>
       }
        
        {screen=="music" && <Music value={{musicOption,song,setSong,isPlaying,setIsPlaying}}/>}
        {screen=="games" && <Games/>}
        {screen=="coverflow" && <CoverFlow/>}
        {screen=="settings" && <Settings/>}
        </div>
       </div>
       <div className={appcss.keypad}>
          <div className={appcss.buttons} >
            <div></div>
            <div onClick={()=>handleScreen("menu")}><span>Menu</span></div>
            <div></div>
            <div onMouseMove={handleMouseMove}><span ><i class="fa-solid fa-backward-fast"></i></span></div>
            <div></div>
            <div onMouseMove={handleMouseMove}><span><i class="fa-solid fa-forward-fast"></i></span></div>
            <div></div>
            <div onClick={handlePlay}> <span><i class="fa-solid fa-play"></i><i class="fa-solid fa-pause"></i></span></div>
            <div></div>
            <div className={appcss.enter} onClick={handleScreen}>
            </div>
          </div>
       </div>
    </div>
  );
}

export default App;
