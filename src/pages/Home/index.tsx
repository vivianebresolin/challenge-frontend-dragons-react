import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import '../../assets/styles/home.scss';
import { DragonsList } from '../../components/DragonsList';
import { Header } from '../../components/Header';

export function Home() {
    return (
        <>
            <Header />
            <main id="main-home">
                <div id="title">
                    <h1>Escolha um dragão ou </h1>
                    <Link to='/register-dragon' style={{ textDecoration: 'none', fontSize: '1.3rem' }}>
                        <button type="button" className="addDragon">
                            crie um novo
                            <MdAdd />
                        </button>
                    </Link>
                </div>
                <DragonsList />
            </main>
        </>
    );
}