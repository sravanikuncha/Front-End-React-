import {useState} from 'react';
import { Navbar } from './components/Navbar';
import { AlbumList } from './components/AlbumList';
import appcss from './App.module.css';
import { ImageList } from './components/ImageList';

function App() {

  const [albumImg,setAlbumImg]=useState("album");
  const [imageList,setImageList]=useState();

  const openImage=(album)=>{
    setAlbumImg("image");
    console.log(album);
    setImageList(album);
 }
  
  return (
   <>
      {/* navbar */}
      <Navbar/>
      <div className={appcss.app}>
        {/* Album Display */}
        {albumImg=="album" && <AlbumList value={{albumImg,setAlbumImg,openImage}}/>}

        {/* ImageList Display */}
        {albumImg=="image" && <ImageList value={{imageList,setImageList,setAlbumImg}}/>}
      </div>
      </>
  );
}

export default App;
