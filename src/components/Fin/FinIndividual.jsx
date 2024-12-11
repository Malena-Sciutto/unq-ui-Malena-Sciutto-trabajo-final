import { useNavigate } from 'react-router-dom'
import './Fin.css'

export default function FinIndividual(){
    const navigate = useNavigate();

    return (
        <div className='card'>
            <h2>¡Felicitaciones, lo lograste!</h2>
            <button className='boton-jugar' onClick={()=> navigate('/')}>Jugar de nuevo</button>
        </div>
    )
}