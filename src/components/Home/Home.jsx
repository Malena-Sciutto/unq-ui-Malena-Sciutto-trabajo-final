import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home(){
    const navigate = useNavigate()
    return (
        <div className="card">
            <h2>UNQ-UI Memotest!</h2>
            <div className='container'>
                <div className='jugar'>JUGAR</div>
                <button className='boton-jugar' onClick={() => navigate('/juego', {state: {tamano: 8}})}>4x4</button>
                <button className='boton-jugar' onClick={() => navigate('/juego', {state: {tamano: 18}})}>6x6</button>
            </div>
        </div>
    )
} 

export default Home;