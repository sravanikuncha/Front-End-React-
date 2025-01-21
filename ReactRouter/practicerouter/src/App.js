import './App.css';
import { Home } from './Home';
import { Home1 } from './Home1';
import {useState} from 'react'
import {createBrowserRouter,Link,RouterProvider, Routes} from 'react-router-dom'
import { Navbar } from './Navbar';
import { ItemDetails } from './ItemDetails';
import { NotFound } from './NotFound';



function App() {
  const [page,setPage]=useState("Home");

  // const router=createBrowserRouter([
  //   // {path:"",element:<><h1>Pages</h1> <Link to="/home">Home Page</Link><br/><Link to="/home1">Home1 Page</Link></>},
  //   {path:"",element:<><h1>Pages</h1><Navbar/></>},
  //   {path:"/home",element:<Home/>},
  //   {path:"/home1",element:<Home1></Home1>}
  // ])

  // Nested Routes

  const router=createBrowserRouter([
    {path:"/",element:<Navbar/>,errorElement:<NotFound/>,children:[
      {path:"",element:<><h1>Pages</h1></>},
      {path:"home",element:<Home/>},
      {path:"home1",element:<Home1></Home1>,children:[
       {path:'home1-1',element:<h1>Home1 children page</h1>}
      ]},
      {path:"items/:itemID",element:<ItemDetails/>}
    ]}
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <button onClick={()=>{setPage("Home")}}>Home</button>
      <button onClick={()=>{setPage("Home1")}}>Home1</button>
      <br/>
      {page=="Home" && <Home/>}
      {page=="Home1" && <Home1/>} */}
    </div>
  );
}

export default App;
