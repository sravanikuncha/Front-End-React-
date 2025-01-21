
import cartcss from './Cart.module.css'
import { useCartContext } from './CartContext';

export function Cart(){

    const {cartData,priceTotal,increase,decrease,removeCart,placeOrder}=useCartContext();

   
    return (
        <>
        {cartData.length==0 && <h1 style={{marginLeft:"40%",marginTop:"10%",color:"green"}}>Cart is Empty</h1>}
         {cartData.length>0 && <div className={cartcss.cartStyle}>
            <div className={cartcss.checkoutCart}>
                <h2 style={{marginLeft:"20%"}}>Price: {priceTotal}</h2>
                <button className={cartcss.purchaseStyle} onClick={placeOrder}>Purchase</button>
            </div>
            <div className={cartcss.cartList}>
            {cartData.map((eachCart,index)=>{
               return <div key={index} className={cartcss.productCard}>
                <img className={cartcss.imageProduct} src={eachCart.image}  alt="image"></img>
                <p className={cartcss.imageDesc}>{eachCart.title}</p>
                <p><i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;{eachCart.price} 
                <i style={{marginLeft:"40%",border:"2px solid green",borderRadius:"50%"}} onClick={()=>{decrease(index)}} class="fa-solid fa-minus"></i> {eachCart.quantity}<i onClick={()=>{increase(index)}} style={{marginLeft:"2%",border:"2px solid green",borderRadius:"50%"}} class="fa-solid fa-plus"></i></p>
                <button className={cartcss.addTocart} onClick={()=>removeCart(index)} >Remove From Cart</button>
            </div>
            })}
            </div>
         </div>}
        </>
    )
}