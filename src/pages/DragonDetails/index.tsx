import '../../assets/styles/dragonDetails.scss';
import { DragonCard } from '../../components/DragonCard';
import { Header } from '../../components/Header';

export function DragonDetails() {
    return (
        <>
            <Header />
            <main id="main-dragon-details">
                <h1>Informações sobre o dragão:</h1>
                <DragonCard />
            </main>
        </>
    );
}