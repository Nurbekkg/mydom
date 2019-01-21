import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import MainPage from "./containers/MainPage/MainPage";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";

const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props} /> : <Redirect to="/login" />
);

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login" exact component={Login}/>
            <ProtectedRoute
                isAllowed={user}
                path="/personal-account"
                exact
                component={Dashboard}
            />
        </Switch>
    );
};

export default Routes;