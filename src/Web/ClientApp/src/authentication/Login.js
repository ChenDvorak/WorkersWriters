import React, { useState } from 'react';
import { Box, Button, Container, TextField, makeStyles, Grid, IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';
import { LogoLarge } from '../components/Logo'
import './Login.css';

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

export default function Login(props) {
    const classes = useStyles();

    const [step, setStep] = useState(LOGIN_STEP.InputAccount)

    function confirmAccount(e) {
        setStep(LOGIN_STEP.InputPassword);
    }

    function back() {
        setStep(LOGIN_STEP.InputAccount);
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
                    step === LOGIN_STEP.InputAccount
                    ? <AccountBox nextStepEvent={confirmAccount} />
                    : <PasswordBox backEvent={back} />
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
        if (!account.value.trim()) {
            e.preventDefault();
            setIsValid(false);
            account.focus();
            return;
        }
        props.nextStepEvent();
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

    function handleConfirmPassword(e) {
        e.preventDefault();
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
