import Modal from 'react-modal';
import { useState } from 'react';
import '../../assets/styles/dragonDetails.scss';
import { DragonCard } from '../../components/DragonCard';
import { Header } from '../../components/Header';
import { EditDragonModal } from '../../components/EditDragonModal';

Modal.setAppElement('#root');

export function DragonDetails() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Header />
            <main id="main-dragon-details">
                <h1>Informações sobre o dragão:</h1>
                <DragonCard onOpenEditDragonModal={handleOpenModal} />
                <EditDragonModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
            </main>
        </>
    );
}