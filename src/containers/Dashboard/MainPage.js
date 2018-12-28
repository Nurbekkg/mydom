import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './MainPage.css';
import  mainBlockImage from '../../assets/images/main-block-image.svg';

const styles = {
    root: {
        flexGrow: 1,
        padding: '0 30px',
        background: `url(${mainBlockImage}) right 0 no-repeat`
    },
    button: {
        borderRadius: '30px',
        boxShadow: '0px 4px 6px rgba(145, 145, 145, 0.16)',
        color: '#fff'
    },
    container1: {
        padding: '25px 0 220px'
    },
    h1: {
        margin: '0 0 40px'
    },
    p: {
        margin: '0 0 60px'
    },
    h2: {
        textAlign: 'center'
    },
    titleLine: {
        display: 'inline-block',
        paddingBottom: '15px',
        borderBottom: '2px solid #13BF49'
    }
};

class MainPage extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.container1}>
                    <Grid item lg={2} />
                    <Grid item lg={7}>
                        <div className="introduction-block">
                            <span className="my-house">Мой дом</span>

                            <Typography variant="h1" className={classes.h1}>
                                Сервис для жильцов и владельцев недвижимости
                            </Typography>

                            <Typography variant="body1" className={classes.p}>
                                Современный и удобный сервис который сделает проще ваше взаимодействие с коммунальными службами и ТСЖ!
                            </Typography>
                            <div className="link-buttons">
                                <Button variant="contained" color="primary" href="#" className={classes.button}>
                                    СКАЧАТЬ ДЛЯ ANDROID
                                </Button>
                                <Button variant="contained" color="primary" href="#" className={classes.button}>
                                    СКАЧАТЬ ДЛЯ IPHONE
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={3} />
                </Grid>

                <Grid container spacing={40}>
                    <Grid item lg={12}>
                        <Typography variant="h2" className={classes.h2}>
                            <span className={classes.titleLine}>О нас</span>
                        </Typography>
                    </Grid>

                    <Grid item lg={6}>
                        <div style={{height: '410px', backgroundColor: 'green'}} />
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="body2">
                            Сервис <span style={{color: '#13BF49'}}>mydom.</span> создан чтобы сделать легче взаимодействие с поставщиками услуг ЖКХ жителям и владельцам многоквартирных
                            и индивидуальных домов, многоэтажных
                            и административных зданий.
                        </Typography>
                        <Typography variant="body2">
                            С помощью нашего веб - сервиса и мобильного приложения вопросы обслуживания и управления услугами для вашей недвижимости вы можете решать онлайн.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

MainPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPage);