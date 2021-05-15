//import { Link } from 'react-router-dom';
import { useDragon } from '../../hooks/useDragon';
import '../../assets/styles/registerDragon.scss';
import { Header } from '../../components/Header';
import { useState } from 'react';

export function RegisterDragon() {
    const { addDragon } = useDragon();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [histories, setHistories] = useState('');

    async function handleRegisterDragon() {
        await addDragon({
            name,
            type,
            histories
        });

        setName('');
        setType('');
        setHistories('');
    }

    return (
        <>
            <Header />
            <main id="main-register">
                <h1>Cadastre seu dragão:</h1>
                <div className="register-container">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)} />

                    <label htmlFor="type">Tipo:</label>
                    <input
                        type="text"
                        value={type}
                        onChange={event => setType(event.target.value)} />

                    <label htmlFor="histories">Histórias:</label>
                    <textarea
                        rows={3}
                        value={histories}
                        onChange={event => setHistories(event.target.value)} />

                    <button onClick={handleRegisterDragon}>Cadastrar</button>
                </div>
            </main>
        </>
    );
}