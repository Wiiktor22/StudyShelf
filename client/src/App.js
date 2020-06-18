import React from 'react';
import SingIn from './views/SingIn';
import GlobalStyles from './themes/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import setAuthToken from './redux/setAutkToken';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/auth';
import { store } from './index';
import { connect } from 'react-redux';
import Loading from './views/Loading';
import MainWrapper from './components/molecules/MainWrapper';
import Notes from './views/Notes';
import { getUserData } from './redux/actions/userData';
import Sites from './views/Sites';
import Videos from './views/Videos';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = ({ isLoading }) => {
    useEffect(() => {
        store.dispatch(loadUser());
        store.dispatch(getUserData());
    }, [])
    
    const showLoading = () => { return <Loading /> };
    const showContent = () => {
        return (
            <Switch>
                <Route exact path='/' component={SingIn} />
                <MainWrapper>
                    <Route path='/notes' component={Notes} />
                    <Route path='/sites' component={Sites} />
                    <Route path='/videos' component={Videos} />
                </MainWrapper>
            </Switch>
        )
    }
    
    return (
        <BrowserRouter>
            <GlobalStyles />
            {isLoading ? showLoading() : showContent()}
        </BrowserRouter>
    );
}

const mapStateToProps = state => ({
    isLoading: state.userData.isLoading
})
 
export default connect(mapStateToProps)(App);