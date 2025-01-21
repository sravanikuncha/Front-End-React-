import { useEffect, useState } from "react";
import { useHomeContext } from "../Home/HomeContext"
import productcss from './ProductList.module.css';
import { useNavigate } from "react-router-dom";

export function ProductList(){

    const {filterProductsList,handleCart,cart}=useHomeContext();
    const [email,setEmail]=useState("")
    const navigate=useNavigate();

    useEffect(()=>{
        setEmail(sessionStorage.getItem("email"))
    },[])

    const addCart=(index)=>{
        console.log("Addtocart")
        console.log(email);
        if(email){
            handleCart(index);
        }
        else{
            navigate("/signIn");
        }
    }

    return(
        <>
        {filterProductsList.map((eachproduct,index)=>{
            const cartIndex=cart.findIndex((eachCart)=>eachCart.id==eachproduct.id);
           return <div className={productcss.productCard} key={index}>
                <img className={productcss.imageProduct} src={eachproduct.image}  alt="image"></img>
                <p className={productcss.imageDesc}>{eachproduct.title}</p>
                <p><i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;{eachproduct.price}</p>
                {cartIndex==-1 && <button className={productcss.addTocart} onClick={()=>addCart(index)}>Add To Cart</button>}
                {cartIndex!=-1 && <button className={productcss.addTocart} disabled>Added To Cart</button>}
            </div>
            }
        )}
        </>
    )
}