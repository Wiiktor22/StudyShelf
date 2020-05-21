import React from 'react';
import SingIn from './views/SingIn';
import GlobalStyles from './themes/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import setAuthToken from './redux/setAutkToken';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/auth';
import { store } from './index';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, [])
    
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Route path='/' component={SingIn} />
                <Route path='/notes' component={SingIn} />
            </Switch>
        </BrowserRouter>
    );
}
 
export default App;