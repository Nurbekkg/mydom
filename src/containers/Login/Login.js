import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { loginUser } from '../../store/actions/users';


const styles = {
    loginForm: {
        width: '100%',
        maxWidth: '460px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        backgroundColor: '#fff',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.09)',
        padding: '20px 90px 55px',
        borderRadius: '4px',
        boxSizing: 'border-box'
    },
    loginBtn: {
        width: '100%',
        borderRadius: '25px',
        textTransform: 'capitalize',
        borderWidth: '2px',
        lineHeight: '2',
        '&:hover': {
            borderWidth: '2px'
        }
    }
};

class Login extends Component {
    state = {
        phone: '',
        password: '',
        version: 'v2',
        api_locale: 'ru'
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();

        this.props.loginUser(this.state);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <form className={classes.loginForm} onSubmit={this.submitFormHandler}>
                    <Typography variant="h3">
                        Вход
                    </Typography>

                    <TextField
                        id="phone"
                        name="phone"
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+996</InputAdornment>
                        }}
                        onChange={this.inputChangeHandler}
                    />

                    <TextField
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        margin="normal"
                        variant="outlined"
                        onChange={this.inputChangeHandler}
                        style={{width: '100%'}}
                    />

                    <Typography variant="body1" style={{fontSize: '14px', textAlign: 'center', padding: '24px 0', lineHeight: '22px'}}>
                        Для авторизации укажите пожалуйста номер телефона
                    </Typography>

                    <div style={{width: '100%'}}>
                        <Button variant="outlined" color="primary" className={classes.loginBtn}>
                            Продолжить
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));