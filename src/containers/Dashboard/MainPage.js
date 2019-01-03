import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './MainPage.css';
import mainBlockImage from '../../assets/images/main-block-image.svg';
import platformsBg from '../../assets/images/platforms-bg.svg';
import laptop from '../../assets/images/laptop-image.svg';
import phones from '../../assets/images/phones-images.svg';
import advantage1 from '../../assets/images/advantage1.svg';
import advantage2 from '../../assets/images/advantage2.svg';
import advantage3 from '../../assets/images/advantage3.svg';
import appBg from '../../assets/images/app-bg.svg';
import appPhones from '../../assets/images/app-phones.svg';
import serviceBg from '../../assets/images/service-bg.svg';

const styles = {
    root: {
        flexGrow: 1,
        padding: '0 30px 0 120px',
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
    alignCenter: {
        textAlign: 'center'
    },
    titleLine: {
        display: 'inline-block',
        paddingBottom: '15px',
        borderBottom: '2px solid #13BF49'
    },
    padding: {
        padding: '0 90px 0 50px'
    },
    aboutUs: {
        paddingBottom: '90px'
    },
    platformsContainer: {
        padding: '90px 0'
    },
    platformsBg: {
        background: `url(${platformsBg}) 0 0 no-repeat`,
        backgroundSize: 'cover',
        padding: '55px 80px 45px'
    },
    platformText: {
        maxWidth: '510px',
        width: '100%',
        margin: '0 auto',
        fontFamily: '"Rubik", sans-serif',
        color: '#fff',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '28px',
        padding: '40px 0 45px'
    },
    platformImages: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 200px 30px 0'
    },
    phonesImage: {
        position: 'absolute',
        right: '0',
        bottom: '0'
    },
    opportunityBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    opportunityText: {
        maxWidth: '320px',
        width: '100%'
    },
    appContainer: {
        background: `url(${appBg}) 0 0 no-repeat`,
        backgroundSize: 'cover',
        padding: '45px 80px 50px 100px'
    },
    appImage: {
        position: 'absolute',
        top: '-100px',
        right: '0'
    },
    btnBlock: {
        padding: '40px 0 0 100px'
    },
    serviceContainer: {
        background: `url(${serviceBg}) 0 0 no-repeat`,
    }
};

class MainPage extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.container1}>
                    <Grid item lg={1}/>
                    <Grid item lg={7}>
                        <div className="introduction-block">
                            <span className="my-house">Мой дом</span>

                            <Typography variant="h1" className={classes.h1}>
                                Сервис для жильцов и владельцев недвижимости
                            </Typography>

                            <Typography variant="body1" className={classes.p}>
                                Современный и удобный сервис который сделает проще ваше взаимодействие с коммунальными
                                службами и ТСЖ!
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
                    <Grid item lg={4}/>
                </Grid>

                <Grid container spacing={40} className={classes.aboutUs}>
                    <Grid item lg={12}>
                        <Typography variant="h2" className={classes.alignCenter}>
                            <span className={classes.titleLine}>О нас</span>
                        </Typography>
                    </Grid>

                    <Grid item lg={6}>
                        <div style={{ height: '410px', backgroundColor: 'green' }}/>
                    </Grid>
                    <Grid item lg={6}>
                        <div className={classes.padding}>
                            <Typography variant="body2" className={classes.p}>
                                Сервис <span style={{ color: '#13BF49' }}>mydom.</span> создан чтобы сделать легче
                                взаимодействие с поставщиками услуг ЖКХ жителям и владельцам многоквартирных
                                и индивидуальных домов, многоэтажных
                                и административных зданий.
                            </Typography>
                            <Typography variant="body2">
                                С помощью нашего веб - сервиса и мобильного приложения вопросы обслуживания и управления
                                услугами для вашей недвижимости вы можете решать онлайн.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>

                <div className={classes.platformsContainer}>
                    <div className={classes.platformsBg}>
                        <Typography variant="h2" className={classes.alignCenter}>
                            <span className={classes.titleLine} style={{ color: '#fff', borderColor: '#fff' }}>Все платформы</span>
                        </Typography>

                        <p className={classes.platformText}>
                            Вы можете с легкостью пользоваться сервисом через браузер или установив приложение на свой
                            смартфон!
                        </p>

                        <div className={classes.platformImages}>
                            <img src={laptop} alt="laptop"/>
                            <img src={phones} className={classes.phonesImage} alt="phones"/>
                        </div>
                    </div>
                </div>

                <Grid container spacing={40}
                      direction="row"
                      alignItems="center"
                      className={classes.platformsContainer}>
                    <Grid item lg={12}>
                        <Typography variant="h2" className={classes.alignCenter}>
                            <span className={classes.titleLine}>Возможности</span>
                        </Typography>

                        <Typography variant="body2" className={classes.platformText}
                                    style={{ color: '#525252', fontWeight: '400' }}>
                            Просматривайте и оплачивайте счета за комммунальные услуги, учавствуйте в опросах вашего ТСЖ
                            и контролируйте расходы
                        </Typography>
                    </Grid>

                    <Grid item lg={6}>
                        <div className={classes.opportunityBlock} style={{ marginBottom: '100px' }}>
                            <img src={advantage1} alt="opportunity"/>
                            <div className={classes.opportunityText}>
                                <Typography variant="h4" style={{ marginBottom: '15px' }}>
                                    <span className={classes.titleLine} style={{ paddingBottom: '10px' }}>Просмотр и оплата счетов</span>
                                </Typography>
                                <Typography variant="body2">
                                    Просматривайте и оплачивайте счета,
                                    а так же передавайте показания счетчиков в одном приложении!
                                </Typography>
                            </div>
                        </div>

                        <div className={classes.opportunityBlock}>
                            <img src={advantage3} alt="opportunity"/>
                            <div className={classes.opportunityText}>
                                <Typography variant="h4" style={{ marginBottom: '15px' }}>
                                    <span className={classes.titleLine} style={{ paddingBottom: '10px' }}>Передача показаний счетчиков</span>
                                </Typography>
                                <Typography variant="body2">
                                    Передавайте показания измерительных приборов прямо
                                    в коммунальные службы
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <div className={classes.opportunityBlock}>
                            <img src={advantage2} alt="opportunity"/>
                            <div className={classes.opportunityText}>
                                <Typography variant="h4" style={{ marginBottom: '15px' }}>
                                    <span className={classes.titleLine} style={{ paddingBottom: '10px' }}>Участие в опросах</span>
                                </Typography>
                                <Typography variant="body2">
                                    Делайте свою жизнь и жизнь своих близких лучше, активно учавствуя
                                    в опросах и голосовании
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <div className={classes.platformsContainer}>
                    <Grid container className={classes.appContainer}>
                        <Grid item lg={7}>
                            <Typography variant="h2" style={{ paddingBottom: '20px' }}>
                                <span className={classes.titleLine}
                                      style={{ color: '#fff', borderColor: '#fff' }}>Скачивайте <br/> приложение!</span>
                            </Typography>

                            <p className={classes.platformText} style={{ margin: '0', padding: '0' }}>
                                Установите приложение на свой смартфон и с легкостью пользуйтесь всеми функциями сервиса
                                mydom!
                            </p>
                        </Grid>

                        <Grid item lg={5} style={{ position: 'relative' }}>
                            <img src={appPhones} className={classes.appImage} alt="phones"/>
                        </Grid>
                    </Grid>

                    <div className={classes.btnBlock}>
                        <div className="link-buttons">
                            <Button variant="contained" color="primary" href="#" className={classes.button}>
                                СКАЧАТЬ ДЛЯ ANDROID
                            </Button>
                            <Button variant="contained" color="primary" href="#" className={classes.button}>
                                СКАЧАТЬ ДЛЯ IPHONE
                            </Button>
                        </div>
                    </div>
                </div>

                <div>
                    

                    <Grid spacing={40} container
                          direction="row"
                          justify="space-between">

                        <Grid item lg={3}>
                        </Grid>

                        <Grid item lg={3}>
                        </Grid>

                        <Grid item lg={3}>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

MainPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPage);