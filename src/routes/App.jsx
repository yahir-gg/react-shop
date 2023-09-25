import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../styles/global.css';
import Layout from '../containers/Layout';
import RecoveryPassword from '../pages/RecoveryPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import AppContext from '../context/AppContext';
import useInitialState from '../hoocks/useInitialState';
const App = () =>{
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/recovery-password" component={RecoveryPassword}/>
                        <Route exact path="/send-email" component={SendEmail}/>
                        <Route exact path="/new-password" component={NewPassword} />
                        <Route exact path="/account" component={MyAccount} />
                        <Route exact path="/signup" component={CreateAccount} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/orders" component={Orders} />
                        <Route exact path="*" component={NotFound}/>
                </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;