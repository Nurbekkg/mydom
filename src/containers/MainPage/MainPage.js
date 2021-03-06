import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './MainPage.css';
import logo from '../../assets/images/logo.svg';
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
import service1 from '../../assets/images/service1.svg';
import service2 from '../../assets/images/service2.svg';
import service3 from '../../assets/images/service3.svg';
import partnerImage from '../../assets/images/partner-image.svg';
import contactsBg from '../../assets/images/contacts-bg.svg';
import contactsBorder from '../../assets/images/contact-border.svg';
import footerLogo from '../../assets/images/footer-logo.svg';
import googlePlay from '../../assets/images/google-play.svg';
import appStore from '../../assets/images/app-store.svg';
import videoPreview from '../../assets/images/video-preview.svg';
import elsom from '../../assets/images/elsom.svg';
import demir from '../../assets/images/demir.svg';
import bank from '../../assets/images/bank.svg';

const styles = {
    appBar: {
        height: '120px',
        backgroundColor: '#fff',
        boxShadow: 'none',
        transition: 'all .3s ease-in'
    },
    sticky: {
        height: '80px',
        boxShadow: '0 4px 8px rgba(82, 82, 82, 0.2)'
    },
    grow: {
        flexGrow: 1,
    },
    nav: {
        height: '100%',
        display: 'flex'
    },
    navLink: {
        fontFamily: '"Rubik", sans-serif',
        fontWeight: '400',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
        marginRight: '20px',
        fontSize: '14px',
        color: '#2B2A29',
        boxSizing: 'border-box',
        textDecoration: 'none',
        borderBottom: '4px solid transparent',
        transition: 'all .2s ease-in',
        '&:hover': {
            borderColor: '#13BF49'
        }
    },
    linkBtn: {
        fontSize: '12px',
        borderRadius: '30px',
        boxShadow: '0px 4px 6px rgba(145, 145, 145, 0.16)',
        borderWidth: '2px',
        '&:hover': {
            borderWidth: '2px'
        }
    },
    root: {
        flexGrow: 1,
        padding: '0 30px 0 120px',
        background: `url(${mainBlockImage}) right 40px no-repeat`
    },
    button: {
        borderRadius: '30px',
        boxShadow: '0px 4px 6px rgba(145, 145, 145, 0.16)',
        color: '#fff'
    },
    container1: {
        padding: '50px 0 220px'
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
        background: `url(${serviceBg}) right 0 no-repeat`
    },
    serviceCard: {
        position: 'relative',
        height: '100%',
        background: '#FFFFFF',
        boxShadow: '0px 6px 16px rgba(145, 145, 145, 0.16)',
        borderRadius: '2px',
        padding: '20px 45px',
        overflow: 'hidden'
    },
    matchHeight: {
        flex: '1'
    },
    serviceImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110px',
        paddingBottom: '24px'
    },
    serviceTitle: {
        minHeight: '66px',
        paddingBottom: '12px'
    },
    tape: {
        fontFamily: '"Rubik", sans-serif',
        fontSize: '18px',
        color: '#fff',
        textTransform: 'uppercase',
        backgroundColor: '#13BF49',
        width: '130px',
        height: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        right: '-32px',
        bottom: '15px'
    },
    partnersImgBlock: {
        width: '190px',
        height: '65px',
        padding: '20px 25px',
        background: '#FFFFFF',
        boxShadow: '0px 6px 8px rgba(145, 145, 145, 0.16)',
        borderRadius: '3px'
    },
    partnersImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    contactsContainer: {
        padding: '90px 0 100px'
    },
    contactsBlock: {
        width: '325px',
        background: `url(${contactsBorder}) center 0 no-repeat`,
        padding: '50px 50px 75px',
        boxSizing: 'border-box'
    },
    contactsPadding: {
        background: `url(${contactsBg}) right 22px no-repeat`,
        padding: '60px 0 370px 140px'
    },
    footer: {
        backgroundColor: '#13BF49',
        padding: '55px 120px 0'
    },
    footerParagraph: {
        fontWeight: 500,
        color: '#fff',
        lineHeight: '20px',
        paddingBottom: '20px'
    },
    footerLink: {
        textDecoration: 'none',
        color: '#fff'
    }
};

class MainPage extends Component {
    state = {
        avtiveClass: ''
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            this.setState({
                activeClass: 'sticky'
            })
        } else {
            this.setState({
                activeClass: ''
            })
        }
    };

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    scrollTo = () => {
        scroll.scrollTo(100);
    };

    scrollMore = () => {
        scroll.scrollMore(100);
    };

    handleSetActive = (to) => {
        console.log(to);
    };


    navigationHandle = event => {
        console.log(event.target.href);
    };


    render() {
        const { classes } = this.props;
        console.log(this.state);

        return (
            <Fragment>
                <AppBar position="fixed" className={`${classes.appBar} ${classes[this.state.activeClass]}`}>
                    <Toolbar style={{height: '100%'}}>
                        <div className={classes.grow}>
                            <img src={logo} alt="logotype"/>
                        </div>

                        <nav className={classes.nav}>
                            <Link  className={classes.navLink} to="about"  spy={true}
                                   smooth={true} offset={-100} duration={500}>О нас</Link>
                            <Link className={classes.navLink} to="advantages" spy={true}
                                  smooth={true} offset={-40} duration={500}>Возможности</Link>
                            <Link className={classes.navLink} to="services" spy={true}
                                  smooth={true}  offset={-40} duration={500}>Услуги и сервисы</Link>
                            <Link className={classes.navLink} to="contacts" spy={true}
                                  smooth={true}  offset={-40} duration={500}>Контакты</Link>
                        </nav>

                        {/*<Button variant="outlined" color="primary"*/}
                                {/*className={classes.linkBtn} href="/login">*/}
                            {/*Личный кабинет*/}
                        {/*</Button>*/}
                    </Toolbar>
                </AppBar>

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

                    <Grid container spacing={40} className={classes.aboutUs} name="about">
                        <Grid item lg={12}>
                            <Typography variant="h2" className={classes.alignCenter}>
                                <span className={classes.titleLine}>О нас</span>
                            </Typography>
                        </Grid>

                        <Grid item lg={6}>
                            <img src={videoPreview} style={{width: '100%'}} alt="video-preview"/>
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
                          className={classes.platformsContainer} name="advantages">
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

                    <div className={classes.platformsContainer} name="services">
                        <div>
                            <Typography variant="h2" className={classes.alignCenter}>
                                <span className={classes.titleLine}>Услуги и сервисы</span>
                            </Typography>

                            <Typography variant="body2" className={classes.platformText}
                                        style={{ color: '#4F4F4F', fontWeight: 400, maxWidth: '590px' }}>
                                С помощью компании Мой дом вы можете вызвать нужного специалиста, продать или найти
                                недвижимость, а так же найти нажежную управляющую компанию для вашего ТСЖ
                            </Typography>
                        </div>

                        <Grid spacing={40} container
                              direction="row"
                              justify="space-between"
                              wrap="wrap"
                              className={classes.serviceContainer}>

                            <Grid item lg={3} className={classes.matchHeight}>
                                <div className={classes.serviceCard}>
                                    <div className={classes.serviceImg}>
                                        <img src={service1} alt="service"/>
                                    </div>
                                    <Typography variant="h4" className={classes.serviceTitle}>
                                        Услуги исполнителей
                                    </Typography>
                                    <Typography variant="body2" style={{ paddingBottom: '15px' }}>
                                        Создавайте задания
                                        и приглашайте проверенных специалистов в любой сфере!
                                    </Typography>
                                    <Button variant="contained" color="primary" href="#" className={classes.button}>
                                        Подробнее
                                    </Button>
                                </div>
                            </Grid>

                            <Grid item lg={3} className={classes.matchHeight}>
                                <div className={classes.serviceCard}>
                                    <div className={classes.serviceImg}>
                                        <img src={service2} alt="service"/>
                                    </div>
                                    <Typography variant="h4" className={classes.serviceTitle}>
                                        Недвижимость
                                    </Typography>
                                    <Typography variant="body2" style={{ paddingBottom: '15px' }}>
                                        Поиск, подбор, аренда
                                        и продажа недвижимости без посредников или только от проверенных агенств!
                                    </Typography>

                                    <span className={classes.tape}>Скоро</span>
                                </div>
                            </Grid>

                            <Grid item lg={3} className={classes.matchHeight}>
                                <div className={classes.serviceCard}>
                                    <div className={classes.serviceImg}>
                                        <img src={service3} alt="service"/>
                                    </div>
                                    <Typography variant="h4" className={classes.serviceTitle}>
                                        Управляющие компании
                                    </Typography>
                                    <Typography variant="body2" style={{ paddingBottom: '15px' }}>
                                        Вы можете доверить управление своим ТСЖ проверенным и надежным управляющим
                                        компаниям.
                                    </Typography>

                                    <span className={classes.tape}>Скоро</span>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.platformsContainer}>
                        <div>
                            <Typography variant="h2" className={classes.alignCenter}>
                                <span className={classes.titleLine}>Партнеры</span>
                            </Typography>

                            <Typography variant="body2" className={classes.platformText}
                                        style={{ color: '#4F4F4F', fontWeight: 400, maxWidth: '590px' }}>
                                Тесная интеграция с самыми популярными и успешными партнерами позволяет вам пользоваться
                                безналичной оплатой, вызывать такси,
                                и многое другое.
                            </Typography>
                        </div>

                        <Grid spacing={40} container
                              direction="row"
                              justify="space-between"
                              wrap="wrap">

                            <Grid item lg={3}>
                                <div className={classes.partnersImgBlock}>
                                    <img src={partnerImage} className={classes.partnersImg} alt="partner"/>
                                </div>
                            </Grid>

                            <Grid item lg={3}>
                                <div className={classes.partnersImgBlock}>
                                    <img src={elsom} className={classes.partnersImg} alt="partner"/>
                                </div>
                            </Grid>

                            <Grid item lg={3}>
                                <div className={classes.partnersImgBlock}>
                                    <img src={demir} className={classes.partnersImg} alt="partner"/>
                                </div>
                            </Grid>

                            <Grid item lg={3}>
                                <div className={classes.partnersImgBlock}>
                                    <img src={bank} className={classes.partnersImg} alt="partner"/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.contactsContainer}>
                        <Typography variant="h2" className={classes.alignCenter}>
                            <span className={classes.titleLine}>Контакты</span>
                        </Typography>

                        <div className={classes.contactsPadding}>
                            <div className={classes.contactsBlock}>
                                <Typography variant="body1" className={classes.alignCenter}>
                                    +996  (775)  488 388
                                </Typography>
                                <Typography variant="body1" className={classes.alignCenter}>
                                    +996  (702)  488 388
                                </Typography>
                                <Typography variant="body1" className={classes.alignCenter}>
                                    +996  (555)  488 388
                                </Typography>
                                <Typography variant="body1" className={classes.alignCenter} color="primary">
                                    support@mydom.kg
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className={classes.footer} name="contacts">
                    <Grid container spacing={40}>
                        <Grid item lg={3}>
                            <Link to="#">
                                <img src={footerLogo} alt="logotype"/>
                            </Link>
                        </Grid>
                        <Grid item lg={3}>
                            <Typography variant="body1" className={classes.footerParagraph}>
                                Скачивайте мобильное приложение:
                            </Typography>

                            <Link to="#" style={{marginRight: '20px'}}>
                                <img src={appStore} alt="app-store"/>
                            </Link>
                            <Link to="#">
                                <img src={googlePlay} alt="google-play"/>
                            </Link>
                        </Grid>
                        <Grid item lg={3}>
                            <Typography variant="body1" className={classes.footerParagraph}>
                                <Link to="#" className={classes.footerLink}>О нас</Link>
                            </Typography>
                            <Typography variant="body1" className={classes.footerParagraph}>
                                <Link to="#" className={classes.footerLink}>Возможности</Link>
                            </Typography>
                            <Typography variant="body1" className={classes.footerParagraph}>
                                <Link to="#" className={classes.footerLink}>Услуги и сервисы</Link>
                            </Typography>
                        </Grid>
                        <Grid item lg={3}>
                            <Typography variant="body1" className={classes.footerParagraph}>
                                <a href="tel:+996775488388" className={classes.footerLink}>+996  (775)  488 388</a>
                            </Typography>
                            <Typography variant="body1" className={classes.footerParagraph}>
                                <a href="tel:+996555488388" className={classes.footerLink}>+996  (555)  488 388</a>
                            </Typography>
                            <Typography variant="body1" className={classes.footerParagraph}>
                                <a href="tel:+996702488388" className={classes.footerLink}>+996  (702)  488 388</a>
                            </Typography>
                            <Typography variant="body1" className={classes.footerParagraph}>
                                support@mydom.kg
                            </Typography>
                        </Grid>
                        <Grid item lg={12}>
                            <Typography variant="body1" style={{fontSize: '16px', color: '#fff', textAlign: 'center'}}>
                                mydom 2019
                            </Typography>
                        </Grid>
                    </Grid>
                </footer>
            </Fragment>
        )
    }
}

MainPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPage);