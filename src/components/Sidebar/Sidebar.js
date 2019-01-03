import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import './Sidebar.css';

const drawerWidth = 285;

const styles = {
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        borderRight: 0,
        boxShadow: '3px 3px 14px rgba(0, 0, 0, 0.06)',
        height: 'auto',
        minHeight: '770px'
    }
};

class Sidebar extends Component {

    render() {
        const { classes } = this.props;
        const menuItems = [
            {title: 'Начисления', route: '/accruals'},
            {title: 'Расходы', route: '/expenses'},
            {title: 'Платежи', route: '/payments'},
            {title: 'Баланс', route: '/balance'},
            {title: 'Счета', route: '/accounts'},
            {title: 'Инфо', route: '/info'}
        ];

        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <div style={{display: 'flex', alignItems: 'center', height: '90px', padding: '0 20px'}}>
                    <div>
                        <Typography variant="body1" style={{fontSize: '16px', fontWeight: '500', lineHeight: '17px'}}>
                            Avtandilov Nurbek
                        </Typography>
                        <Typography variant="body1" style={{fontSize: '14px', fontWeight: '500', lineHeight: '17px'}} color="primary">
                            <Link to="/profile" className="profile-link">Профиль</Link>
                        </Typography>
                    </div>
                </div>

                <div className="personal-account">
                    <Typography variant="body1" style={{fontSize: '14px', lineHeight: '17px'}}>
                        Лицевой счет
                    </Typography>
                    <Typography variant="h4">
                        12213098
                    </Typography>
                    <Typography variant="body1" style={{fontSize: '14px', lineHeight: '17px'}}>
                        Ахунбаева 186/5 кв 77
                    </Typography>
                </div>

                <div className="menu-items">
                    {menuItems.map(item => (
                        <Link to={item.route} key={item.route} className="menu">
                            <Typography variant="body1" style={{fontSize: '14px', fontWeight: '500', lineHeight: '17px'}}>
                                {item.title}
                            </Typography>
                        </Link>
                    ))}
                </div>
            </Drawer>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);