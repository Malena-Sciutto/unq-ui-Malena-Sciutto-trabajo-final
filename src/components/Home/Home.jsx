import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home(){
    const navigate = useNavigate()
    return (
        <div className="home-dialog">
            <h2>UNQ-UI Memotest!</h2>
            <button className='boton-jugar' onClick={() => navigate('/juego')}>JUGAR</button>
        </div>
    )
} 

export default Home;