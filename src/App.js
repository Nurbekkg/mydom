import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Layout from "./containers/Layout/Layout";
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <Layout>
                <Routes user={this.props.user}/>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
   user: state.users.user
});

export default withRouter(connect(mapStateToProps)(App));
