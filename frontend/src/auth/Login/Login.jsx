import "./LoginPages.css";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaGooglePlus,
  FaEnvelope,
} from "react-icons/fa";
import paseando from "../../assets/images/perro-paseando.png";
import reves from "../../assets/images/reves.png";


function Login(){
    return(
        <>
            <div className="container">
                <div className="forms-container">
                <div className="signin-signup">
                    {/* Inicio de el formulario */}
                    <form className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    {/* Input de el nombre de usuario */}
                    <div className="input-field">
                        <FaUser />
                        <input type="text" placeholder="Username" />
                    </div>
                    {/* Input de la contraseña */}
                    <div className="input-field">
                        <FaLock />
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" className="button solid" />

                    {/* Texto de las redes sociales */}

                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                        <FaGooglePlus />
                        </a>
                        <a href="#" className="social-icon">
                        <FaFacebook />
                        </a>
                    </div>
                    </form>

                    {/* Formulario signUp */}

                    <form className="sign-up-form">
                    <h2 className="title">Sign Up</h2>
                    {/* Input de el nombre de usuario */}
                    <div className="input-field">
                        <FaUser />
                        <input type="text" placeholder="Username" />
                    </div>
                    {/* Input de Correo */}
                    <div className="input-field">
                        <FaEnvelope />
                        <input type="text" placeholder="Email" />
                    </div>

                    {/* Input de la contraseña */}
                    <div className="input-field">
                        <FaLock />
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Sign up" className="button solid" />

                    {/* Texto de las redes sociales */}

                    <p className="social-text">Or Sign up with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                        <FaGooglePlus />
                        </a>
                        <a href="#" className="social-icon">
                        <FaFacebook />
                        </a>
                    </div>
                    </form>
                </div>
                </div>

                <div className="panels-container">
                {/* Panel Izquierdo */}
                <div className="panel left-panel">
                    <div className="content">
                    <h3>New Here?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className="button transparent" id="sign-up-btn">
                        Sign up
                    </button>
                    </div>
                    <img src={paseando} className="image" />
                </div>

                {/* Panel Derecho */}
                <div className="panel right-panel">
                    <div className="content">
                    <h3>One of us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className="button transparent" id="sign-in-btn">
                        Sign in
                    </button>
                    </div>
                    <img src={reves} className="image" />
                </div>
                </div>
            </div>
        </>
    )
}


export default Login;