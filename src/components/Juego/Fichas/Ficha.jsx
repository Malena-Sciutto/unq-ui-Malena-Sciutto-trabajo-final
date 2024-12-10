import './ficha.css'

export const Ficha = ({ficha, voltearFicha, volteando}) => {
    const voltear = () => {
        if (!ficha.flipped && !volteando){
            voltearFicha(ficha)
        }
    }

    return (
        <div className='memo-block' onClick={voltear}>
            <div className={`memo-block-interior ${ficha.flipped && 'memo-block-flipped'}`}>
                <div className="memo-block-dorso"></div>
                <div className="memo-block-frente">
                    <img src={ficha.src} className='imagen'/>
                </div>
            </div>
        </div>
    )
}