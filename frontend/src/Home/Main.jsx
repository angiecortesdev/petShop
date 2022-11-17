
import main from './main.css';
import perros from '../assets/images/cuatroMascotas.png';


const Main = () => {
    return(
        <>
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

export default Main;