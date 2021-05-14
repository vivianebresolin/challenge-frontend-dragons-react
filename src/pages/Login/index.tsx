import { Footer } from '../../components/Footer';

import '../../assets/styles/login.scss';

export function Login() {
    return (
        <>
            <main id="main-login">
                <div className="greeting">
                    <h1>Bem-vindo(a) ao <strong>Mundo dos Dragões!</strong></h1>
                    <h2>Faça o seu login e entre nesse mundo mágico</h2>
                </div>

                <div className="login-container">
                    <p>Login</p>
                    <input placeholder="E-mail"></input>
                    <input placeholder="Senha"></input>
                    <button>Entrar</button>
                </div>
            </main>
            <Footer />
        </>
    );
}