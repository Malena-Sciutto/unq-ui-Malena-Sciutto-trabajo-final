'use client'
import { useEffect, useState } from "react";
import { JuegoFacil } from "../../assets/4x4list";
import './Juego.css'
import { Ficha } from "./Fichas/Ficha";

const mezclarFichas = (fichas) => {
    const fichasDesordenadas = [...fichas];
    for (let i = fichasDesordenadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fichasDesordenadas[i], fichasDesordenadas[j]] = [fichasDesordenadas[j], fichasDesordenadas[i]];
    }
    return fichasDesordenadas;
}

function Juego(){
    const [fichas, setFichas] = useState([]);

    useEffect(() => {
        const fichasMezcladas = mezclarFichas(JuegoFacil.concat(JuegoFacil));
        setFichas(fichasMezcladas.map((ficha) => ({
            ...ficha,
            flipped: false
        })))
    }, []);

    return (
        <div className="tablero">
            {fichas.map((ficha, index) => (
                <Ficha data={ficha} key={index}/>
            ))}
        </div>
    )
}

export default Juego;