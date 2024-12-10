import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Juego from './components/Juego/Juego';
import Fin from './components/Fin/Fin';

const Router = () => (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/juego' element={<Juego/>} />
        <Route path='/fin' element={<Fin />} />
    </Routes>
)

export default Router;