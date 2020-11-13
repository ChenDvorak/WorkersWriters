import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@material-ui/core'
import { LogoLarge, LogoMedium } from '../components/Logo'
import './Login.css';

export function Login(props) {

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
                <LogoLarge />
                <LogoMedium />
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

    return (
        <Box m={2}>
            <TextField label='Account' variant='outlined' fullWidth margin='normal' />
            <Box className='actions-row'>
                <Box ml={1}>
                    <Button
                        variant='contained' color='primary'
                        onClick={() => {props.nextStepEvent()}}>confirm</Button>
                </Box>
                <Button variant='outlined' color='primary'>Register</Button>
            </Box>
        </Box>
    );
}

function PasswordBox(props) {
    return (
        <Box m={2}>
            <TextField label='Password' variant='outlined' fullWidth margin='normal' />
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