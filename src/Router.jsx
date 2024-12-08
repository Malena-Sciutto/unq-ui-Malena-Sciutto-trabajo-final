import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Juego from './components/Juego/Juego';

const Router = () => (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/juego' element={<Juego />} />
    </Routes>
)

export default Router;