import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { SignInContext } from "./components/SignIn/SignInContext";
import { HomeContext } from "./components/Home/HomeContext";
import { Cart } from "./components/Cart/Cart";
import { CartContext } from "./components/Cart/CartContext";
import { Orders } from "./components/Orders/Orders";


function App() {
  const router=createBrowserRouter([
    {path:"/",
      element:<SignInContext><Navbar/></SignInContext>,
        children:[
          {path:"/",element:<HomeContext><Home/></HomeContext>},
          {path:"/signIn",element:<SignIn/>},
          {path:"/signUp",element:<SignUp/>},
          {path:"/carts",element:<CartContext><Cart/></CartContext>},
          {path:"/orders",element:<CartContext><Orders/></CartContext>}
        ]}
  ]);
  return (
    <><RouterProvider router={router}/></>
  );
}

export default App;
