
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                {/* LOGO */}
                <div className="logo">
                    <img src="/img/ninja.png" alt="Logo Ninja"/>
                </div>
                {/*OPCIONES DEL MENU*/}
                <ul className="navlinks">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

export {Navbar};
