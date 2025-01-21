import { useState } from 'react';
import musiccss from './Music.module.css';
import { Song } from './Song';

export function Music(props){


    const {musicOption,song,setSong,isPlaying,setIsPlaying}=props.value;
    const selectedMenu=musicOption;

    const playSong=()=>{
        setSong(!song);
    }

    return (
        <>
        {!song &&
            <>
            <div className={musiccss.musicmenu}>
                <div style={{marginTop:'1rem',marginLeft:'0.7rem'}}><span style={{fontSize:'2rem'}}>Music</span></div>
                <div className={selectedMenu=="AllSongs"?musiccss.selectedmenu:""} onClick={playSong}>
                    <span>All Songs</span>
                    <span className={selectedMenu=="AllSongs"?musiccss.visible:musiccss.hide}><i class="fa-solid fa-greater-than"></i></span>
                </div>
                <div className={selectedMenu=="Artists"?musiccss.selectedmenu:""} >
                    <span>Artists</span>
                    <span className={selectedMenu=="Artists"?musiccss.visible:musiccss.hide}><i class="fa-solid fa-greater-than"></i></span>
                </div>
                <div className={selectedMenu=="Albums"?musiccss.selectedmenu:""}>
                    <span>Albums</span>
                    <span className={selectedMenu=="Albums"?musiccss.visible:musiccss.hide}><i class="fa-solid fa-greater-than"></i></span>
                </div>
            </div>
            <div>
                <img style={{borderTopRightRadius: `8px`,borderBottomRightRadius: `8px`}} src="https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg" alt="music"></img>
            </div>
            </>
        }
        {song && 
           <Song stateValue={{song,setSong,isPlaying,setIsPlaying}}/>
        }
        </>
    )
}