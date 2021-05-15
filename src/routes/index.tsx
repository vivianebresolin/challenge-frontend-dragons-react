import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { DragonDetails } from '../pages/DragonDetails';
import { RegisterDragon } from '../pages/RegisterDragon';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/dragon-details" exact component={DragonDetails} />
                <Route path="/register-dragon" exact component={RegisterDragon} />
            </Switch>
        </BrowserRouter>
    );
}