import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { useLogin } from '../../hooks/useLogin';
import '../../assets/styles/login.scss';
import { useHistory } from 'react-router-dom';

export function Login() {
    const { authenticate, setIsLogged, isLogged } = useLogin();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        const isAuthenticated = authenticate({ email, password });
        console.log('isAuthenticated ', isAuthenticated);

        if (isAuthenticated) {
            console.log('login - entrou no if');
            setIsLogged(true);
            console.log('isLogged ', isLogged);
            history.push('/');
        }
    }

    return (
        <>
            <main id="main-login">
                <div className="greeting">
                    <h1>Bem-vindo(a) ao <strong>Mundo dos Dragões!</strong></h1>
                    <h2>Faça o seu login e entre nesse mundo mágico</h2>
                </div>

                <div className="login-container">
                    <p>Login</p>

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />

                    <button type="button" onClick={handleLogin}>Entrar</button>
                </div>
            </main>
            <Footer />
        </>
    );
}