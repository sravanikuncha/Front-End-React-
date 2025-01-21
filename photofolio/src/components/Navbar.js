import navcss from './navbar.module.css';

export function Navbar(){
    return (
        <>
        <nav className={navcss.navStyle}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTak6eEwKuMKF0_HaASw9k0M3BxCK5dekYUoA&s" alt="PhotoFolio" width="30" height="24"></img>
                <span>Photo Folio</span>
            </div>
        </nav>
        </>
    )
}