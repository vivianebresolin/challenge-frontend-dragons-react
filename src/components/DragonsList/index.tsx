import { useEffect, useState } from "react";
import { api } from "../../services/api";
import DragonHead from '../../assets/img/dragon-head.jpg';
import { Dragon } from '../../types';
import '../../assets/styles/dragonsList.scss';
import { orderListByName } from "../../utils/orderListbyName";

export function DragonsList() {
    const [dragons, setDragons] = useState<Dragon[]>([]);

    useEffect(() => {
        api.get<Dragon[]>('/')
            .then(response => setDragons(response.data));
    }, []);

    const dragonsOrderedByName = orderListByName([...dragons]);

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
                            <button type="button" className="edit">Ver/Editar</button>
                            <button type="button" className="delete">Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}