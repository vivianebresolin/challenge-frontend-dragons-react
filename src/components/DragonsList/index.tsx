import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDragon } from '../../hooks/useDragon';
import imgDragonHead from '../../assets/img/dragon-head.jpg';
import '../../assets/styles/dragonsList.scss';
import { orderListByName } from "../../utils/orderListbyName";

export function DragonsList() {
    const { dragons, showDragon, removeDragon } = useDragon();

    const dragonsOrderedByName = orderListByName([...dragons]);

    function handleShowDragon(dragonId: string) {
        showDragon(dragonId);
    }

    function handleDeleteDragon(dragonId: string) {
        Swal.fire({
            title: 'Você tem certeza que quer deletar?',
            text: "Você não poderá desfazer essa ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, delete o dragão!'
        }).then((result) => {
            if (result.isConfirmed) {
                removeDragon(dragonId);
            }
        });
    }

    return (
        <div id="dragons-list">
            <ul>
                {dragonsOrderedByName.map(dragon => (
                    <li key={dragon.id}>
                        <div id="dragon-name">
                            <img src={imgDragonHead} id="dragon-head" alt="Cabeça de um dragão" />
                            {dragon.name}
                        </div>
                        <div id="buttons-list">
                            <button type="button" className="edit" onClick={() => handleShowDragon(dragon.id)}>
                                <Link to='/dragon-details' style={{ textDecoration: 'none', color: 'white' }}>Ver/Editar</Link>
                            </button>
                            <button type="button" className="delete" onClick={() => handleDeleteDragon(dragon.id)}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}