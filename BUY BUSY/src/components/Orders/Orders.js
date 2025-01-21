import { useEffect, useState } from "react"
import { busybuydb} from "../../firebaseConfig"
import { getDocs } from "firebase/firestore";
import { doc,updateDoc,collection,deleteDoc,addDoc } from "firebase/firestore";
import { Table } from "./Table";

export function Orders(){

    const [orders,setOrders]=useState([]);

    useEffect(()=>{
        const getOrders=async ()=>{
            const result = await getDocs(collection(busybuydb, "orders"));
            const orderItems=[];
            result.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              orderItems.push(doc.data());
            });
            setOrders(orderItems);
        }   

        getOrders();
    },[])

    return (
        <>
        {orders.length==0 && <h1  style={{marginLeft:"40%",marginTop:"10%",color:"green"}}>No Orders</h1>}
        {orders.length>0 && <h1  style={{marginLeft:"40%",color:"green"}}>Your Orders</h1>}
        {orders.map((eachOrder)=>{
          return <div>
            <h2 style={{marginLeft:"38%",marginTop:"2%",color:"black",fontFamily:"cursive"}}>Ordered On: &nbsp;{eachOrder.placedOn}</h2>
            <Table orderData={eachOrder.orderArr} priceTotal={eachOrder.priceTotal}/>
            </div>
            })}
        
        </>
    )
}