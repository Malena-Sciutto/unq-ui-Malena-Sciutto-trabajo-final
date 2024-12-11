import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Tamanos from './components/tamanos/Tamanos';
import Individual from './components/individual/Individual';
import UnoVsUno from './components/UnoVsUno/UnoVsUno';
import FinIndividual from './components/Fin/FinIndividual'
import FinUnoVsUno from './components/Fin/FinUnoVsUno';

const Router = () => (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/finIndividual' element={<FinIndividual />} />
        <Route path='/finUnoVsUno' element={<FinUnoVsUno />} />
        <Route path='/tamanos' element={<Tamanos />} />
        <Route path='/1vs1' element={<UnoVsUno />} />
        <Route path='/individual' element={<Individual />} />
    </Routes>
)

export default Router;