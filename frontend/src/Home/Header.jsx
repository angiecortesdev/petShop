import header from './header.css';
import logo from '../assets/images/omegapetshop.png'
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowRight } from "react-icons/fa";

function Header(){
    return(
        <>
            <header>
                <div className="container__header">
                    <div className="logo">
                        <img src={logo} alt="Logo-Petshop" />
                    </div>
                    <div className="search">
                        <FaSearch />
                        <input type="search" placeholder="Search" className="search__space" />
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <Link to="/accesories">Accesories</Link>
                                <Link to="/farmacy">Farmacy</Link>
                                <Link to="/clothes">Clothes</Link>
                                <Link to="/toys">Toys</Link>
                                <Link to="/productos">Productos</Link>

                            </ul>
                        </nav>
                    </div>
                    <div className="header__register">
                        <FaArrowRight />
                        <button type="button" className="buton__header-login">
                            <Link to="/login">Sign In</Link>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header;