'use client'
import { useEffect, useState } from "react";
import { ListaFichas } from "../../assets/lista";
import './Juego.css'
import { Ficha } from "./Fichas/Ficha";
import { useLocation, useNavigate } from "react-router-dom";

const mezclarFichas = (fichas) => {
    const fichasDesordenadas = [...fichas];
    for (let i = fichasDesordenadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fichasDesordenadas[i], fichasDesordenadas[j]] = [fichasDesordenadas[j], fichasDesordenadas[i]];
    }
    return fichasDesordenadas;
}

export function Juego ({tamano, revisarTriunfo, pasarTurno}) {
    const [fichas, setFichas] = useState([]);
    const [fichaVolteada, setFichaVolteada] = useState(null);
    const [volteando, setVolteando] = useState(false);

    useEffect(() => {
        const fichasIniciales = ListaFichas.slice(0, (tamano * tamano) / 2);
        const fichasMezcladas = mezclarFichas(fichasIniciales.concat(fichasIniciales));
        setFichas(fichasMezcladas.map((ficha, i) => ({
            ...ficha,
            flipped: false,
            indice: i
        })))
    }, []);

    const voltearFicha = (ficha) => {
        const fichasActualizadas = [...fichas];
        fichasActualizadas.splice(ficha.indice, 1, {...ficha, flipped: true})
        setFichas(fichasActualizadas);
        if (!fichaVolteada){
            setFichaVolteada(ficha);
        } else if (fichaVolteada.nombre === ficha.nombre) {
            setFichaVolteada(null);
            revisarTriunfo(fichasActualizadas)
        } else {
            setVolteando(true);
            setTimeout(() => {
                fichasActualizadas.splice(ficha.indice, 1, ficha);
                fichasActualizadas.splice(fichaVolteada.indice, 1, {...fichaVolteada, flipped: false});
                setFichaVolteada(null);
                setFichas(fichasActualizadas);
                setVolteando(false);
            }, 1000);
            pasarTurno();
        }
    }

    const tableroStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${tamano}, 1fr)`,
        gap: '10px',
        maxWidth: '60vw',
        width: '100%'
    };

    return (
        <div style={tableroStyle}>
            {fichas.map((ficha, index) => (
                <Ficha ficha={ficha} key={index} voltearFicha={voltearFicha} volteando={volteando}/>
            ))}
        </div>
    )
}