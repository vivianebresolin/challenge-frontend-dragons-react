import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import imgClose from '../../assets/img/close.svg';
import { useDragon } from '../../hooks/useDragon';
import '../../assets/styles/editDragonModal.scss';

interface EditDragonModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function EditDragonModal({ isOpen, onRequestClose }: EditDragonModalProps) {
    const { dragon, updateDragon } = useDragon();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [histories, setHistories] = useState('');

    useEffect(() => {
        setName(dragon.name);
        setType(dragon.type);
        setHistories(dragon.histories);
    }, [dragon]);

    async function handleEditDragon() {

        if (name === dragon.name) {
            if (type === dragon.type) {
                if (histories === dragon.histories) {
                    Swal.fire(
                        'Não há alterações para salvar.',
                        '',
                        'warning'
                    );
                    return;
                }
            }
        }

        await updateDragon({
            id: dragon.id,
            name,
            type,
            histories
        });

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <div className="modal-container">
                <div
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <img src={imgClose} alt="Fechar modal" />
                </div>

                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <label htmlFor="type">Tipo:</label>
                <input
                    type="text"
                    value={type}
                    onChange={event => setType(event.target.value)}
                />

                <label htmlFor="histories">Histórias:</label>
                <textarea
                    rows={3}
                    value={histories}
                    onChange={event => setHistories(event.target.value)}
                />

                <button onClick={handleEditDragon}>Salvar</button>
            </div>
        </Modal>
    );
}