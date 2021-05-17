import { useDragon } from '../../hooks/useDragon';
import { Link } from 'react-router-dom';
import imgDragon from '../../assets/img/dragon-card.jpg';
import '../../assets/styles/dragonCard.scss';

interface DragonCardProps {
    onOpenEditDragonModal: () => void;
}

export function DragonCard({ onOpenEditDragonModal }: DragonCardProps) {
    const { dragon } = useDragon();

    return (
        <>
            <div id="card">
                <img src={imgDragon} alt="Dragão" />
                <div id="details">
                    <div>
                        <h2>Nome:</h2>
                        <p>{dragon.name}</p>
                    </div>
                    <div>
                        <h2>Tipo:</h2>
                        <p>{dragon.type}</p>
                    </div>
                    <div>
                        <h2>Histórias:</h2>
                        <p>{dragon.histories}</p>
                    </div>
                    <div>
                        <h2>Data de criação:</h2>
                        <p>{dragon.dateFormatted}</p>
                    </div>
                </div>
            </div>
            <div id="buttons">
                <button type="button" className="back">
                    <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>Voltar</Link>
                </button>
                <button type="button" className="edit" onClick={onOpenEditDragonModal}>Editar</button>
            </div>
        </>
    );
}