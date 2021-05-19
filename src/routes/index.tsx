import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { DragonDetails } from '../pages/DragonDetails';
import { RegisterDragon } from '../pages/RegisterDragon';
import RoutePrivate from './RoutePrivate';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <RoutePrivate exact path="/" component={Home} />
                <RoutePrivate exact path="/dragon-details" component={DragonDetails} />
                <RoutePrivate exact path="/register-dragon" component={RegisterDragon} />
            </Switch>
        </BrowserRouter>
    );
}