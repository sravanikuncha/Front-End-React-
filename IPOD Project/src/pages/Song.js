import { useState } from 'react';
import mirage from '../assets/mirage.mp3';
import songcss from './Song.module.css';

export function Song(props){

    const {isPlaying,setIsPlaying}=props.stateValue;

    return (
        <>
        <div className={songcss.song}>
            <audio controls>
                <source src={mirage} type="audio/mpeg">
                </source>
            </audio>
        </div>
        </>
    )
}