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
        width: `calc(100% - 285px)`,
        height: '90px',
        marginLeft: '285px',
        backgroundColor: '#fff',
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.06)'
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        height: '100%',
        padding: '0 55px'
    },
    logoutBtn: {
        fontFamily: '"Rubik", sans-serif',
        fontSize: '14px',
        color: '#2B2A29',
        fontWeight: 500
    }
};

function Header(props) {
    const { classes } = props;

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar  className={classes.toolbar}>
                <div className={classes.grow}>
                    <img src={logo} style={{ width: '78px' }} alt="logotype"/>
                </div>

                <Button className={classes.logoutBtn}>Выйти</Button>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);