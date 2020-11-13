import React, { useState } from 'react';
import { Box, Button, Container, TextField, makeStyles } from '@material-ui/core'
import { LogoLarge } from '../components/Logo'
import './Login.css';

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

    function confirmPassword() {

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
                    : <PasswordBox confirmPasswordEvent={confirmPassword}/>
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
            <Box className='actions-row'>
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
    return (
        <Box m={2}>
            <TextField label='Input Password' variant='outlined' fullWidth margin='normal' />
            <Box className='actions-row'>
                <Box m={1}>
                    <Button 
                        variant='contained' color='primary'
                        onClick={() => {props.confirmPasswordEvent()}}>Submit</Button>
                    </Box>
                <Box m={1}>
                    <Button color='primary' variant='outlined'>Forgot</Button>
                </Box>
            </Box>
        </Box>
    );
}

const LOGIN_STEP = {
    InputAccount: 0,
    InputPassword: 1
};