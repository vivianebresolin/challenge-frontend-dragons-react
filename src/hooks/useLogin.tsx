import { createContext, ReactNode, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import loginApi from '../services/loginApi';
import { User } from '../types';

interface LoginProviderProps {
    children: ReactNode;
}

interface LoginContextData {
    isLogged: boolean;
    authenticate: ({ email, password }: User) => boolean;
    setIsLogged: (state: boolean) => void;
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps): JSX.Element {
    const [isLogged, setIsLogged] = useState(false);

    function authenticate({ email, password }: User) {
        const response = loginApi.verifyCredentials(email, password);
        console.log('useLogin - authenticate ', response);

        if (response) {
            localStorage.setItem('logged', email);

            return true;
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'E-mail e/ou Senha inválidos.',
            });
            return false;
        }
    }

    return (
        <LoginContext.Provider
            value={{ isLogged, authenticate, setIsLogged }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export function useLogin(): LoginContextData {
    const context = useContext(LoginContext);

    return context;
}

