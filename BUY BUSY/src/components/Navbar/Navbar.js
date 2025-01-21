import { Link, Outlet } from "react-router-dom";
import { useSignInContext } from "../SignIn/SignInContext";
import navbarcss from './Navbar.module.css';

export function Navbar(){


    const {user,handleLogout}=useSignInContext();

    return (
        <>  
         <div className={navbarcss.navdivStyle}>
            <div className={navbarcss.navdivs}>
                <Link className={navbarcss.logoStyle} to="/">Busy Buy</Link>
            </div>
            <div className={navbarcss.linkDivs}>
                <Link className={navbarcss.linkStyle}  to="/"><i class="fa-solid fa-house"></i>Home</Link>
                {user.email && <Link className={navbarcss.linkStyle}  to="/orders"><i class="fa-solid fa-basket-shopping"></i>MyOrders</Link>}
                {user.email && <Link className={navbarcss.linkStyle}  to="/carts"><i class="fa-solid fa-cart-shopping"></i>Cart</Link>}
                {user.email && <Link className={navbarcss.linkStyle}  onClick={handleLogout}>Logout<i class="fa-solid fa-arrow-right-from-bracket"></i></Link>}
                {!user.email && <Link className={navbarcss.linkStyle} to="/signIn">SignIn</Link>}
            </div>
         </div>
          
        <Outlet/>
        </>
    );
}

  {/* <Link class="navbar-brand" to="/">Buy Busy-1</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                {user.email && <li class="nav-item">
                <Link class="nav-link" >My Orders</Link>
                </li>}
                {user.email &&<li class="nav-item">
                <Link class="nav-link" >Cart</Link>
                </li>}
                {!user.email && <li class="nav-item">
                <Link class="nav-link" to="/signIn">SignIn</Link>
                </li>}
                {user.email && <li class="nav-item">
                <Link class="nav-link" onClick={handleLogout}>Logout</Link>
                </li>}
            </ul>
            </div>
        </div>
        </nav> */}