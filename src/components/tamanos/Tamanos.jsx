import { useLocation, useNavigate } from "react-router-dom";

export default function Tamanos(){
    const location = useLocation();
    const modo = location.state?.modo;
    const navigate = useNavigate();

    return (
        <div className="card">
            <h2>Tamaño del tablero</h2>
            <div className='container-botones'>
                <button className='boton-jugar' onClick={() => navigate(`/${modo}`, {state: {tamano: 4}})}>4x4</button>
                <button className='boton-jugar' onClick={() => navigate(`/${modo}`, {state: {tamano: 6}})}>6x6</button>
            </div>
        </div>
    )
}