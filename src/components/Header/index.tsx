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
                <Link to='/' style={{ textDecoration: 'none', fontSize: '1.3rem' }}>
                    <button type="button" className="exit">
                        Sair
                        <MdExitToApp style={{ color: 'white', fontSize: '1.5rem' }} />
                    </button>
                </Link>
            </div>
        </header>
    );
}