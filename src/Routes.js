import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import MainPage from "./containers/Dashboard/MainPage";
import Login from "./containers/Login/Login";

const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props} /> : <Redirect to="/login" />
);

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login" exact component={Login}/>
            {/*<ProtectedRoute*/}
                {/*isAllowed={user}*/}
                {/*path="/new-photo"*/}
                {/*exact*/}
                {/*component={NewPhoto}*/}
            {/*/>*/}
        </Switch>
    );
};

export default Routes;