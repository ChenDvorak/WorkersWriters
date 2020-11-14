import React, { useState } from 'react';
import { Box, Button, Container, TextField, makeStyles, Grid, IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';
import { LogoLarge } from '../components/Logo'

const LOGIN_STEP = {
    InputAccount: 0,
    InputPassword: 1
};

const useStyles = makeStyles({
    loginTitle: {
        'text-align': 'center',
        'font-size': '1.2rem'
    },
    logo: {
        'text-decoration': 'none'
    }
});

const loginInfo = {
    account: '',
    password: '',
    step: LOGIN_STEP.InputAccount
};

export default function Login(props) {
    const classes = useStyles();

    const [loginModel, setLoginModel] = useState(loginInfo)

    function confirmAccount(accountValue) {
        const newLogin = {
            account: accountValue,
            step: LOGIN_STEP.InputPassword
        };
        setLoginModel(newLogin);
    }

    function back() {
        const newLogin = {
            account: loginModel.account,
            password: '',
            step: LOGIN_STEP.InputAccount
        };
        setLoginModel(newLogin);
    }

    function handleSubmit(passwordValue) {
        const postLogin = {
            account: loginModel.account,
            password: passwordValue
        }
        console.log(postLogin.account + '==' + postLogin.password);
        window.location.href = '/';
    }

    return (
        <div className='background'>
        <Container maxWidth='xs'>
            <Box mt={20}>
                <a href='/' className={classes.logo}><LogoLarge /></a>
                <Box className={classes.loginTitle}
                    color='primary.main'>
                    Login
                </Box>
                {
                    loginModel.step === LOGIN_STEP.InputAccount
                    ? <AccountBox nextStepEvent={confirmAccount} value={loginModel.account} />
                    : <PasswordBox backEvent={back} submitEvent={handleSubmit} />
                }
            </Box>
        </Container>
        </div>
    );
}

function AccountBox(props) {
    const [isValid, setIsValid] = useState(true);

    function handleConfirm(e) {
        const account = document.getElementById('txt_account');
        if (!account.value || !account.value.trim()) {
            setIsValid(false);
            account.focus();
            e.preventDefault();
            return;
        }
        props.nextStepEvent(account.value.trim());
    }

    function handleAccountValueChanged(event) {
        if (!event.target.value.trim()) {
            setIsValid(false);
            return;
        }
    }

    return (
        <Box m={2}>
            <form onSubmit={handleConfirm}>
                <TextField id='txt_account'
                    label='Input Account'
                    error={!isValid} variant='outlined' margin='normal'
                    fullWidth required autoFocus
                    defaultValue={props.value}
                    helperText="can't be empty" onChange={handleAccountValueChanged}
                />
            </form>
            <Box display='flex' flexDirection='row-reverse'>
                <Box ml={1}>
                    <Button
                        variant='contained' color='primary'
                        onClick={handleConfirm}>confirm</Button>
                </Box>
                <Button variant='outlined' color='primary'
                    href='/register'>Register</Button>
            </Box>
        </Box>
    );
}

function PasswordBox(props) {

    const [isValid, setIsValid] = useState(true);

    function handleConfirmPassword(e) {
        const password = document.getElementById('txt_password');
        if (!password.value || !password.value.trim()) {
            setIsValid(false);
            e.preventDefault();
            password.focus();
            return;
        }
        e.preventDefault();
        props.submitEvent(password.value.trim());
    }

    function handlePasswordChanged() {
        const password = document.getElementById('txt_password');
        if (!password.value || !password.value.trim()) {
            setIsValid(false);
        } else if (!isValid) {
            setIsValid(true);
        }
    }

    return (
        <Box m={2}>
            <Box>
                <IconButton color='primary' onClick={props.backEvent}>
                    <ArrowBack />
                </IconButton>
            </Box>
            <Box component='form' my={1}
                onSubmit={handleConfirmPassword}>
                <TextField id='txt_password' type='password'
                    label='Input Password' variant='outlined' 
                    fullWidth autoFocus required
                    error={!isValid} onChange={handlePasswordChanged}
                    helperText="can't be empty" />
            </Box>
            <Grid container justify='flex-end' spacing={1}>
                <Grid item>
                <Button color='primary' variant='outlined'>Forgot</Button>
                </Grid>
                <Grid item>
                <Button
                    variant='contained' color='primary'
                    onClick={handleConfirmPassword}>Submit</Button>    
                </Grid>
            </Grid>
        </Box>
    );
}
