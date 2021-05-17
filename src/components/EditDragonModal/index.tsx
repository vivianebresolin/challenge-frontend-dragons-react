import { useState } from 'react';
import Modal from 'react-modal';
import { useDragon } from '../../hooks/useDragon';

interface EditDragonModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function EditDragonModal({ isOpen, onRequestClose }: EditDragonModalProps) {
    const { dragon, updateDragon } = useDragon();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [histories, setHistories] = useState('');

    async function handleEditDragon() {
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
        >
            <div className="register-container">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    value={name || dragon.name}
                    onChange={event => setName(event.target.value)} />

                <label htmlFor="type">Tipo:</label>
                <input
                    type="text"
                    value={type || dragon.type}
                    onChange={event => setType(event.target.value)} />

                <label htmlFor="histories">Histórias:</label>
                <textarea
                    rows={3}
                    value={histories || dragon.histories}
                    onChange={event => setHistories(event.target.value)} />

                <button onClick={handleEditDragon}>Salvar</button>
            </div>
        </Modal>
    );

}