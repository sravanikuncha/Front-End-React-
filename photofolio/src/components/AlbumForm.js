import albumFormcss from './albumForm.module.css';
import { useRef } from 'react';

export function AlbumForm(props){

    const createAlbum=props.value;
    const albumRef=useRef("");

    const clearForm=(event)=>{
        event.preventDefault();
        albumRef.current.value="";
    }

    const createAlbumName=(event)=>{
        event.preventDefault();
        const albumName=albumRef.current.value;
        const newAlbum={
            "albumName":albumName
        }
        albumRef.current.value="";
        createAlbum(newAlbum);
    }

    return (
        <>
        <div className={albumFormcss.albumFormStyle}>
            <h3>Create An Album</h3>
            <form>
                <div>
                 <input ref={albumRef} type="text" placeholder="Album Name"></input>
                 <button onClick={(e)=>clearForm(e)} className={albumFormcss.clear}>Clear</button>
                 <button onClick={(e)=>createAlbumName(e)} className={albumFormcss.create}>Create</button>
                </div>
            </form>
        </div>
        </>
    )
}