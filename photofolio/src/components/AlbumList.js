import { useEffect, useState } from "react";
import { AlbumForm } from "./AlbumForm";
import classNames from 'classnames'; 
import albumlistcss from './albumList.module.css';
import { db } from "../firebase.config";
import { addDoc, collection,getDocs } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AlbumList(props){

    const {albumImg,setAlbumImg,openImage}=props.value;
    const [addAlbum,setAddAlbum]=useState(true);
    const [albums,setAlbums]=useState([]);

    const buttonClass=classNames(
        albumlistcss.albumListStyle,
        {
            [albumlistcss.cancelStyle]:addAlbum==false,
            [albumlistcss.addAlbumStyle]:addAlbum==true
        }
    );
    const handleAddAlbum=()=>{
        setAddAlbum(!addAlbum);
    }

    const createAlbum=async (newAlbum)=>{
        const albumName=newAlbum;
        const albumRef=await addDoc(collection(db,"albums"),newAlbum);
        newAlbum.album=albumName;
        setAlbums([...albums,newAlbum]);
        toast.success("Album added successfully.");
    }

    useEffect(()=>{

        const getAlbums=async()=>{
            const result = await getDocs(collection(db, "albums"));
            const albumDoc=[];
            result.forEach((doc) => {
                console.log(doc.id)
                // doc.data() is never undefined for query doc snapshots
                const data={id:doc.id,album:doc.data()};
                albumDoc.push(data);
            });
            setAlbums(albumDoc);
        }

        getAlbums();
    },[]);


    return (
        <>
        <div> 
            <h3>Albums</h3>
            {!addAlbum && <AlbumForm value={createAlbum}/>}
            <button className={buttonClass} onClick={handleAddAlbum}>{addAlbum?"Add Album" :"Cancel"}</button>
            <div className={albumlistcss.multiplecard}>
                {albums.map((eachAlbum,index)=>
                    <div key={index} onClick={()=>openImage(eachAlbum)} className={albumlistcss.albumcard}>
                     <img className={albumlistcss.albumcardimage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODeLKQrAlwCAtsjPgEWg371923wVu10V20A&s" alt="album"></img>
                    <p className={albumlistcss.albumname}>{eachAlbum.album.albumName}</p>
                </div>)}
            </div>
        </div>
        </>
    )

}