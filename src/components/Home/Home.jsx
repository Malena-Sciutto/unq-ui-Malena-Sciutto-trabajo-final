import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home(){
    const navigate = useNavigate()
    return (
        <div className="card">
            <h2>UNQ-UI Memotest!</h2>
            <div className='container-botones'>
                <div className='jugar'>JUGAR</div>
                <button className='boton-jugar' onClick={() => navigate('/tamanos', {state: {modo: 'individual'}})}>Individual</button>
                <button className='boton-jugar' onClick={() => navigate('/tamanos', {state: {modo: '1vs1'}})}>1 vs 1</button>
            </div>
        </div>
    )
} 

export default Home;