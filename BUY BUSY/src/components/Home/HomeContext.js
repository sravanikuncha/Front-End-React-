import { createContext ,useContext, useEffect, useState} from "react";
import { busybuydb } from "../../firebaseConfig";
import { addDoc, collection,setDoc } from "firebase/firestore";


const homeContext=createContext();

export const useHomeContext=()=>{
    const value=useContext(homeContext);
    return value;
}
export function HomeContext({children}){

    const [products,setProducts]=useState([]);
    const [categoryList,setCategoryList]=useState([]);
    const [cart,setCart]=useState([]);
    const [filterProductsList,setFilterProductsList]=useState([]);
    const [filter,setFilter]=useState({});

    useEffect(()=>{
        async function getProducts(){
            const productsData=await fetch("https://fakestoreapi.com/products");
            const productsList=await productsData.json();

            setProducts(productsList);
            setFilterProductsList(productsList)
        } 
        getProducts();


        const getCategories=async()=>{
            const categories=await fetch("https://fakestoreapi.com/products/categories");
            const categoriesList=await categories.json();

            setCategoryList(categoriesList);
        }

        getCategories();

    },[])


    const filterProducts=(priceRange,categoryList)=>{
        const filteredProductsList=products.filter((eachproduct)=>{
            if(eachproduct.price<=priceRange &&(categoryList.length==0 || categoryList.includes(eachproduct.category))){
                return eachproduct;
            }
        });
        setFilter({priceRange,categoryList});
        setFilterProductsList(filteredProductsList);
    }

    const handleCart=async (index)=>{
        const cartItem=filterProductsList[index];
        console.log(cartItem)
        cartItem.quantity=1;
        const addToCart=await addDoc(collection(busybuydb,"cart"),cartItem);
        setCart([...cart,cartItem]);
    }

    const searchByName=(name)=>{
        const {priceRange,categoryList}=filter;
        const filteredProductsList=products.filter((eachproduct)=>{
            if(eachproduct.price<=priceRange &&(categoryList.length==0 || categoryList.includes(eachproduct.category))){
                return eachproduct;
            }
        });
        const nameFilter=filteredProductsList.filter((eachproduct)=>{
                const desc=eachproduct.title.toLowerCase();
                return desc.includes(name.toLowerCase());
        });
            setFilterProductsList(nameFilter);
    }

    return (
        <homeContext.Provider value={{products,categoryList,filterProducts,handleCart,filterProductsList,cart,searchByName,filter}}>
            {children}
        </homeContext.Provider>
    )
}