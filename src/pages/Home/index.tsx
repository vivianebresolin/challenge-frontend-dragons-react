import '../../assets/styles/home.scss';
import { DragonsList } from '../../components/DragonsList';

export function Home() {
    return (
        <main id="main-home">
            <h1>Escolha seu dragão:</h1>

            <DragonsList />
        </main>
    );
}