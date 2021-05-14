import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';

import '../../assets/styles/header.scss';


export function Header() {
    return (
        <header>
            <div id="user">
                <h2>Olá, Fulano!</h2>
            </div>
            <div>
                <button type="button" className="exit">
                    <Link to='/login' style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}>Sair</Link>
                    <MdExitToApp style={{ color: 'white', fontSize: '1.5rem' }} />
                </button>
            </div>
        </header>
    );
}