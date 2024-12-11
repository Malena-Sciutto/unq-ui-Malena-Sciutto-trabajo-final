import { useLocation, useNavigate } from "react-router-dom";
import { Juego } from "../Juego/Juego";

export default function Individual(){
    const location = useLocation();
    const tamano = location.state?.tamano;
    const navigate = useNavigate();

    const revisarTriunfo = (fichasActualizadas) => {
        if (fichasActualizadas.every((f) => f.flipped)){
            setTimeout(() => navigate('/finIndividual'), 1000)
        }
    }

    return (
        <Juego 
            tamano={tamano}
            revisarTriunfo={revisarTriunfo}
            pasarTurno={() => {}}
        />
    )
}