import React, {Fragment} from 'react';
import {connect} from "react-redux";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Toolbar from "../../components/UI/Toolbar/Toolbar";
import {logoutUser} from "../../store/actions/users";


const theme = createMuiTheme({
    palette: {
        primary: { main: '#13BF49' },
        secondary: { main: '#2B2A29' }
    },
    typography: {
        useNextVariants: true,
        fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
            fontSize: '64px',
            fontWeight: '700',
            color: '#2B2A29',
            lineHeight: '60px'
        },
        h2: {
            fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
            fontSize: '56px',
            fontWeight: '700',
            color: '#2B2A29',
            lineHeight: '52px'
        },
        body1: {
            fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '32px',
            color: '#2B2A29'
        },
        body2: {
            fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '32px',
            color: '#4F4F4F'
        }
    },
});


const Layout = props => {
    return (
        <Fragment>
            {/*<NotificationContainer/>*/}
            <Toolbar user={props.user} logout={props.logoutUser}/>
            <main>
                <MuiThemeProvider theme={theme}>
                    {props.children}
                </MuiThemeProvider>
            </main>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
   logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);