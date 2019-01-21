import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import 'react-notifications/lib/notifications.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from "../../components/UI/Toolbar/Header";
import { logoutUser } from "../../store/actions/users";


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
        h3: {
            fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
            fontSize: '28px',
            fontWeight: '500',
            color: '#2B2A29',
            lineHeight: '28px'
        },
        h4: {
            fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
            fontSize: '24px',
            fontWeight: '500',
            color: '#2B2A29',
            lineHeight: '28px'
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
    spacing: {
        unit: 10
    }
});

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        height: '120px'
    },
    content: {
        flexGrow: 1
    },
});


const Layout = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            {props.user && <Header/>}
            {props.user && (
                <MuiThemeProvider theme={theme}>
                    <Sidebar/>
                </MuiThemeProvider>
            )}
            <main className={classes.content}>
                <div className={classes.toolbar}/>

                <MuiThemeProvider theme={theme}>
                    {props.children}
                </MuiThemeProvider>
            </main>
        </div>
    )
};

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

Layout.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));