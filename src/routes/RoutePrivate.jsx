import { Route, Redirect } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

export default function RoutePrivate({ component: Component, ...rest }) {
    const { isLogged } = useLogin();

    return (
        <Route
            {...rest}
            render={props =>
                isLogged ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
            }
        />
    );
}