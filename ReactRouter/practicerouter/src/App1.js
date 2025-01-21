import './App.css';
import { Home } from './Home';
import { Home1 } from './Home1';
import {useState} from 'react'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'



function App1() {
  const [page,setPage]=useState("Home");


    const routes=createRoutesFromElements(
        <>
        <Route path="/" element={<h1>Pages</h1>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home1" element={<Home1/>}/>
        </>
    )

    const router=createBrowserRouter(routes);

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

export default App1;
