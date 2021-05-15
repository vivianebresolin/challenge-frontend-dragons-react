import { Link } from 'react-router-dom';
import '../../assets/styles/home.scss';
import { DragonsList } from '../../components/DragonsList';
import { Header } from '../../components/Header';

export function Home() {
    return (
        <>
            <Header />
            <main id="main-home">
                <div id="title">
                    <h1>Escolha seu dragão ou </h1>
                    <Link to='/register-dragon' style={{ textDecoration: 'none', fontSize: '1.3rem' }}>
                        <button type="button" className="addDragon">
                            adicione um novo dragão
                        </button>
                    </Link>
                </div>
                <DragonsList />
            </main>
        </>
    );
}