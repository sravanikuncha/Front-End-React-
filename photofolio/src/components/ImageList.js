import imagelistcss from './imageList.module.css';
import { ImageForm } from './ImageForm';
import { useState,useEffect } from 'react';
import { db} from '../firebase.config';
import { doc,addDoc, collection,getDocs,updateDoc,deleteDoc } from "firebase/firestore";
import classNames from 'classnames'; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from './Carousel';



export function ImageList(props){

    const {imageList,setImageList,setAlbumImg}=props.value;
    const [addImage,setAddImage]=useState(true);
    const [images,setImages]=useState([]);
    const [update,setUpdate]=useState(false);
    const [imageData,setImageData]=useState({});
    const [carousel,setCarousel]=useState(false);
    const [imageIndex,setImageIndex]=useState();

    const buttonClass=classNames(
        imagelistcss.imageListStyle,
        {
            [imagelistcss.cancelStyle]:addImage==false,
            [imagelistcss.addImageStyle]:addImage==true
        }
    );

    const handleAddImage=()=>{
        setAddImage(!addImage);
        setUpdate(false);
        setImageData({});
    }

    const createImage=async (newImage)=>{
        const {imageTitle,imageURL}=newImage;
        newImage.albumName=(imageList.album.albumName);
        const imagesRef=await addDoc(collection(db,"images"),newImage);
        // newImage.image={imageTitle,imageURL};
        newImage.id=imagesRef.id;
        setImages([...images,newImage]);
        handleAddImage();
    }

    useEffect(()=>{
        console.log(images);
    },[images])

    const editImage=async (imageData,id)=>{
        await updateDoc(doc(db, "images", id), imageData);
        // console.log(images);
        const updateIndex=images.findIndex((eachImage)=>eachImage.id==id);
        images[updateIndex].imageTitle=imageData.imageTitle;
        images[updateIndex].imageURL=imageData.imageURL;
        setImages([...images]);
    }

    const editImageDetails= (imageData)=>{
        setAddImage(false);
        setUpdate(true);
        setImageData(imageData);
    }

    const deleteImage=async (imageData)=>{
        const newImages=images.filter((eachImage)=>eachImage.id!=imageData.id);
        setImages(newImages);
        await deleteDoc(doc(db, "images", imageData.id));
        toast.success("Image Deleted Successfully")
    }

    const  openCarousel=(index)=>{
        setCarousel(true);
        setImageIndex(index)
    }

    useEffect(()=>{

        const getImages=async()=>{
            const result = await getDocs(collection(db, "images"));
            const imageDoc=[];
            result.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                if(doc.data().albumName==imageList.album.albumName){
                    const {imageTitle,imageURL}=doc.data()
                    const data={id:doc.id,imageTitle,imageURL};
                    imageDoc.push(data);
                }
            });
            setImages(imageDoc);
        }

        getImages();
    },[]);

    return (
        <>
        <div className={imagelistcss.imagelist}>
            <h2><i onClick={()=>setAlbumImg("album")} class="fa-solid fa-chevron-left"></i> &nbsp; &nbsp; Images in {imageList.album.albumName}</h2>
            {!addImage && <ImageForm value={{createImage,imageList,update,imageData,editImage,setAddImage,setUpdate,setImageData}}/>}
            <button className={buttonClass} onClick={handleAddImage}>{addImage?"Add Image" :"Cancel"}</button> 
            {!carousel && <div className={imagelistcss.multiplecard}>
                {images.map((eachImage,index)=>
                    <div key={index}  className={imagelistcss.imagecard}>
                     <img className={imagelistcss.cardImage} onClick={()=>openCarousel(index)} src={eachImage.imageURL} alt="album"></img>
                    <p className={imagelistcss.imageName}>{eachImage.imageTitle}</p>
                    <span className={imagelistcss.update} onClick={()=>editImageDetails(eachImage)}><i class="fa-solid fa-pen"></i></span> &nbsp;<i onClick={()=>deleteImage(eachImage)}class="fa-solid fa-trash"></i>
                </div>)}
            </div>}
            {carousel && <Carousel value={{images,imageIndex,setImageIndex,carousel,setCarousel}}/>}
         </div>
        </>
    );
}