import { Link } from 'react-router-dom';
import { useDragon } from '../../hooks/useDragon';
import DragonHead from '../../assets/img/dragon-head.jpg';
import '../../assets/styles/dragonsList.scss';
import { orderListByName } from "../../utils/orderListbyName";

export function DragonsList() {
    const { dragons, showDragon } = useDragon();

    const dragonsOrderedByName = orderListByName([...dragons]);

    function handleShowDragon(dragonId: string) {
        showDragon(dragonId);
    }

    return (
        <div id="dragons-list">
            <ul>
                {dragonsOrderedByName.map(dragon => (
                    <li key={dragon.id}>
                        <div id="dragon-name">
                            <img src={DragonHead} id="dragon-head" alt="Cabeça de um dragão" />
                            {dragon.name}
                        </div>
                        <div id="buttons-list">
                            <button type="button" className="edit" onClick={() => handleShowDragon(dragon.id)}>
                                <Link to='/dragon-details' style={{ textDecoration: 'none', color: 'white' }}>Ver/Editar</Link>
                            </button>
                            <button type="button" className="delete">Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}