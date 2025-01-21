import carouselcss from './carousel.module.css';

export function Carousel(props){

    const {images,imageIndex,setImageIndex,carousel,setCarousel}=props.value;

    const direction=(dir)=>{
        if(images.length>1){
            if(imageIndex==images.length-1){
                setImageIndex(dir=="next"?0:imageIndex-1);
            }
            else if(imageIndex==0){
                setImageIndex(dir=="next"?imageIndex+1:images.length-1);
            }
            else{
                setImageIndex(dir=="next"?imageIndex+1:imageIndex-1);
            }
       }
    }

   

    return (
        <>
        <div>
        <button className={carouselcss.close} onClick={()=>{setCarousel(false)}}>Close</button>
        {carousel && <div className={carouselcss.carousel}>
            <div className={carouselcss.arrow} onClick={()=>direction("previous")}>
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div>
                <img src={images[imageIndex].imageURL} alt="image"></img>
            </div>
            <div className={carouselcss.arrow} onClick={()=>direction("next")}>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        }
        </div>
        </>
    );
}