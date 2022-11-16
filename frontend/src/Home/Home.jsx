import estilosHome from './home.css'
import logo from '/images/omegapetshop.png'
import perros from '/images/cuatroMascotas.png'
import {
    FaSearch,
    FaArrowRight
  } from "react-icons/fa";


function Home(){
  return (
    <>
      <header>
        <div className="container__header">
            <div className="logo">
                <img src={logo} alt="Logo-Petshop" />
            </div>
            <div className="search">
                <FaSearch />
                <input type="text" placeholder="Search" className="search__space" />
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="#"></a>Accesories</li>
                        <li><a href="#"></a>Farmacy</li>
                        <li><a href="#"></a>Clothes</li>
                        <li><a href="#"></a>Toys</li>
                    </ul>
                </nav>
            </div>
            <div className="header__register">
                <FaArrowRight />
                <input type="button" className="btn__header-register" value="Sign In"  />
            </div>
        </div>
    </header>


      <main>
          <div className="cover">
              <div className="text__information-cover">
                  <h1>All products for the care of your pets</h1>
              </div>

              <div className="media">
                  <div className="cian"></div>
                  <img className="mascotas" src={perros} alt="Imagen de cuatro perros" />
              </div>
          </div>
          <div className="circle">
          </div>
      </main>
    </>
  )
}

export default Home;