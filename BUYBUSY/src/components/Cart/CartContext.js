import { createContext,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { busybuydb} from "../../firebaseConfig"
import { getDocs } from "firebase/firestore";
import { doc,updateDoc,collection,deleteDoc,addDoc } from "firebase/firestore";

const cartContext=createContext();

export const useCartContext=()=>{
    const  value=useContext(cartContext);
    return value;
}

export function CartContext({children}){
    const [cartData,setCartData]=useState([]);
    const [priceTotal,setPriceTotal]=useState(0);

    const navigate=useNavigate();

    useEffect(()=>{
        const getCartData=async ()=>{
            const result = await getDocs(collection(busybuydb, "cart"));
            const cartItems=[];
            let price=0;
            result.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              const product=doc.data();
              product.cartId=doc.id;
              cartItems.push(product);
              price+=Number(doc.data().price);
            });
            setCartData(cartItems)
            setPriceTotal(Math.ceil(price));
        }   

        getCartData();
    },[])

    useEffect(()=>{
        const value=cartData.reduce((acc,eachCart)=>eachCart.quantity*eachCart.price+acc,0);
        setPriceTotal(Math.ceil(value));
    },[cartData])

   
    const decrease=async (index)=>{
        if(cartData[index].quantity==1){
            removeCart(index);
        }else{
            cartData[index].quantity-=1;
            await updateDoc(doc(busybuydb, "cart", cartData[index].cartId), cartData[index]);
            setCartData([...cartData]);
        }
    }

    const placeOrder=async ()=>{
        
        const order={
            placedOn:new Date().toLocaleDateString(),
            priceTotal,
            orderArr:[]
        };
        cartData.forEach(async(eachCart)=>{
            order.orderArr.push(eachCart);
            await deleteDoc(doc(busybuydb,"cart",eachCart.cartId));
        })
        await addDoc(collection(busybuydb,"orders"),order);
        setCartData([]);
       
        navigate("/orders")
    }


    const increase=async (index)=>{
        cartData[index].quantity+=1;
        await updateDoc(doc(busybuydb, "cart", cartData[index].cartId), cartData[index]);
        setCartData([...cartData]);
    }

    const removeCart=async(index)=>{
        await deleteDoc(doc(busybuydb, "cart", cartData[index].cartId));
        cartData.splice(index,1);
        setCartData([...cartData])
    }

    return (
        <cartContext.Provider value={{cartData,priceTotal,increase,decrease,removeCart,placeOrder}}>
            {children}
        </cartContext.Provider>
    )
}