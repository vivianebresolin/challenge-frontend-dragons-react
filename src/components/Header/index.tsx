import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import { useLogin } from '../../hooks/useLogin';
import '../../assets/styles/header.scss';

export function Header() {
    const { setIsLogged } = useLogin();

    function handleLogout() {
        localStorage.removeItem('logged');
        setIsLogged(false);
    }

    return (
        <header>
            <div id="greeting">
                <h2>Bem-Vindo!</h2>
            </div>
            <div>
                <Link to='/' style={{ textDecoration: 'none', fontSize: '1.3rem' }}>
                    <button
                        type="button"
                        className="exit"
                        onClick={handleLogout}
                    >
                        Sair
                        <MdExitToApp style={{ color: 'white', fontSize: '1.5rem' }} />
                    </button>
                </Link>
            </div>
        </header>
    );
}