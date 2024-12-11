import { useLocation, useNavigate } from "react-router-dom";

export default function FinUnoVsUno(){
    const navigate = useNavigate();
    const location = useLocation();
    const puntos = location.state?.puntos;

    console.log(puntos)

    return (
        <div className='card'>
            <div className="resultado">
                <h2>
                    {
                        `¡Felicitaciones${
                            puntos[0] > puntos[1]
                            ? " Jugador 1!"
                            : puntos[1] > puntos[0]
                                ? " Jugador 2!"
                                : ", fue un empate!"
                        }`
                    }
                </h2>
                <h3>Puntaje final:</h3>
                <p className="puntaje-jugador">
                    <h4>Jugador 1:</h4> 
                    <p>{puntos[0]}</p>
                </p>
                <p className="puntaje-jugador">
                    <h4>Jugador 2:</h4> 
                    <p>{puntos[1]}</p>
                </p>
            </div>
            <button className='boton-jugar' onClick={()=> navigate('/')}>Jugar de nuevo</button>
        </div>
    )
}