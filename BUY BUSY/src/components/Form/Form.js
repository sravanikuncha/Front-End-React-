
import { useHomeContext } from "../Home/HomeContext"
import { useEffect , useState} from "react";

import formcss from './Form.module.css';

export function Form(){

    const {products,categoryList,filterProducts,filter}=useHomeContext();
    const [selectedCategory,setSelectedCategory]=useState([]);
    const [priceRange,setPriceRange]=useState();
    //distinct the categories to show in form

    let maxPrice=Number.MIN_VALUE;
    let minPrice=Number.MAX_VALUE;

    products.forEach((eachproduct)=>{
        if(maxPrice<eachproduct.price){
            maxPrice=Math.ceil(eachproduct.price);
         }
        if(minPrice>eachproduct.price){
            minPrice=Math.ceil(eachproduct.price);
        }
    });

   
    const appendCategory=(event)=>{
        const value=event.target.value;
        const checked=event.target.checked;
        if(checked){
          setSelectedCategory([...selectedCategory,value]);
        }else{
            const newCtageory=selectedCategory.filter((eachCategory)=>eachCategory!=value);
            setSelectedCategory(newCtageory);
        }
    }

    const handlePriceChange=(e)=>{
        setPriceRange(e.target.value);
    }

    useEffect(()=>{
        filterProducts(priceRange,selectedCategory);
    },[priceRange,selectedCategory])

  
    return (
        <>
            <h3 className={formcss.formHeading}>Filter</h3>
            <h4 className={formcss.formHeading}>Price: {priceRange}</h4>
            <input style={{marginLeft:"25%"}} type="range"  onChange={handlePriceChange} min={minPrice} max={maxPrice}/>
            <h3 className={formcss.formHeading} style={{marginTop:"-0.5%"}}>Category</h3>
            <div className={formcss.checkboxStyle}>
                {categoryList.map((eachCategory,index)=>(
                    <span key={index} className={formcss.formHeading}><input  type="checkbox" value={eachCategory} onChange={(e)=>appendCategory(e)}></input>&nbsp;{eachCategory}<br/></span>
                ))}
            </div>
        </>
    )
}