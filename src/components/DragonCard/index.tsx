import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useDragon } from '../../hooks/useDragon';
import { EditDragonModal } from '../../components/EditDragonModal';
import imgDragon from '../../assets/img/dragon-card.jpg';
import '../../assets/styles/dragonCard.scss';

export function DragonCard() {
    const { dragon, showDragon, removeDragon } = useDragon();
    const history = useHistory();

    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
        showDragon(dragon.id);
    }

    function returnToHome() {
        history.push('home');
    }

    function handleDeleteDragon(dragonId: string) {
        Swal.fire({
            title: 'Você tem certeza que quer excluir?',
            text: "Você não poderá desfazer essa ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, exclua o dragão!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                removeDragon(dragonId);
                returnToHome();
            }
        });
    }

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
                <Link to='/' className="back" style={{ textDecoration: 'none', color: 'white' }}>Voltar</Link>
                <button type="button" className="edit" onClick={handleOpenModal} >Editar</button>
                <button type="button" className="delete" onClick={() => handleDeleteDragon(dragon.id)}>Excluir</button>
            </div>

            <EditDragonModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
        </>
    );
}