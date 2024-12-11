import { useLocation, useNavigate } from "react-router-dom";
import { Juego } from "../Juego/Juego";
import { useState } from "react";
import './UnoVsUno.css'

export default function UnoVsUno(){
    const [jugando, setJugando] = useState(0);
    const [puntos, setPuntos] = useState([0, 0])
    const location = useLocation();
    const tamano = location.state?.tamano;
    const navigate = useNavigate();

    const pasarTurno = () => {
        if (jugando === 0){
            setJugando(1);
        } else {
            setJugando(0);
        }
    }

    const sumarPuntos = () => {
        const nuevosPuntos = [...puntos];
        nuevosPuntos[jugando]++;
        setPuntos(nuevosPuntos);
        console.log(puntos)
    }

    const revisarTriunfo = (fichasActualizadas) => {
        const nuevosPuntos = [...puntos];
        nuevosPuntos[jugando]++;
        setPuntos(nuevosPuntos);
        if (fichasActualizadas.every((f) => f.flipped)){
            setTimeout(() => navigate('/finUnoVsUno', {state: {puntos: nuevosPuntos}}), 1000);
        } else {
            pasarTurno()
        }
    }

    return (
        <div className="container-1vs1">
            <div className="puntaje">
                <div className="puntos">{puntos[0]}</div>
                <div className="jugador"> Jugador 1</div>
            </div>
            <Juego 
                pasarTurno={pasarTurno}
                tamano={tamano}
                revisarTriunfo={revisarTriunfo}
            />
            <div className="puntaje">
                <div className="puntos">{puntos[1]}</div>
                <div className="jugador"> Jugador 2 </div>
            </div>
        </div>
    )
}