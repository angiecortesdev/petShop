import { Routes, Route} from 'react-router-dom'
import Login from './auth/Login/Login.jsx';
import Home  from './Home/Home.jsx'
import Productos  from './Productos/productos.jsx'

function App(){
    return(
        <>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/productos' element={ <Productos /> } />
            </Routes>
        </>
    )
}

export default App;
