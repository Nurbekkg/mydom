import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import './Header.css';
import logo from '../../../assets/images/logo.svg';

const styles = {
    appBar: {
        height: '80px',
        backgroundColor: '#fff'
    },
    grow: {
        flexGrow: 1,
    },
    logoutBtn: {
        fontFamily: '"Rubik", sans-serif',
        fontSize: '14px',
        color: '#2B2A29',
        fontWeight: 500
    }
};

function LandingHeader(props) {
    const { classes } = props;

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <div className={classes.grow}>
                    <img src={logo} alt="logotype"/>
                </div>

                <Button variant="outlined" color="primary" href="#outlined-buttons">
                    Личный кабинет
                </Button>
            </Toolbar>
        </AppBar>
    )
}

LandingHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingHeader);