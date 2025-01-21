import imageFormcss from './imageForm.module.css';
import { useEffect, useRef } from 'react';

export function ImageForm(props){

    const {createImage,imageList,update,imageData,editImage,setAddImage,setUpdate,setImageData}=props.value;

    const imageTitleRef=useRef("");
    const imageURLRef=useRef("");

    useEffect(()=>{
        if(update){
            imageTitleRef.current.value=imageData.imageTitle;
            imageURLRef.current.value=imageData.imageURL;
        }
    },[])

    const clearForm=(event)=>{
        event.preventDefault();
        imageTitleRef.current.value="";
        imageURLRef.current.value="";
    }

    const createImageData=(event)=>{
        event.preventDefault();
        const imageTitle=imageTitleRef.current.value;
        const imageURL=imageURLRef.current.value;
        const newImage={
            "imageTitle":imageTitle,
            "imageURL":imageURL
        }
        imageTitleRef.current.value="";
        imageURLRef.current.value="";
        createImage(newImage);
    }

    const clearStates=()=>{
        setAddImage(true);
        setUpdate(false);
        setImageData({})
    }

    const editImageData=(event)=>{
        event.preventDefault();
        const imageTitle=imageTitleRef.current.value;
        const imageURL=imageURLRef.current.value;
        const newImage={
            "imageTitle":imageTitle,
            "imageURL":imageURL,
            "albumName":imageList.album.albumName
        }
        imageTitleRef.current.value="";
        imageURLRef.current.value="";
        clearStates();
        editImage(newImage,imageData.id);
    }

    return (
        <>
        <div className={imageFormcss.imageFormStyle}>
            <h3>{!update && `Add Image to ${imageList.album.albumName}`}</h3>
            <h3>{update && `Update Image  ${imageData.imageTitle}`}</h3>
            <form>
                <div>
                 <input ref={imageTitleRef} type="text"  placeholder="Title"></input>
                 <input ref={imageURLRef} type="text" placeholder="Image URL"></input>
                 <button onClick={(e)=>clearForm(e)} className={imageFormcss.clear}>Clear</button>
                 {!update && <button onClick={(e)=>createImageData(e)} className={imageFormcss.create}>Create</button>}
                 {/* <button onClick={(e)=>createImageData(e)} className={imageFormcss.create}>{update?"Update":"Create"}</button> */}
                 {update && <button onClick={(e)=>editImageData(e)} className={imageFormcss.create}>Update</button>}
                </div>
            </form>
        </div>
        </>
    )
}