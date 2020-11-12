import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@material-ui/core'

import './Login.css';

export function Login(props) {

    const [step, setStep] = useState(LOGIN_STEP.InputAccount)

    return (
        <Container maxWidth='xs'>
            <div className='logo'>
                Workers Writers
            </div>
            {
                step === LOGIN_STEP.InputAccount 
                ? <AccountBox nextStepEvent={() => {setStep(LOGIN_STEP.InputPassword)}} />
                : <TextField label='Password' type='password' fullWidth margin='normal' />
            }
            
            
        </Container>
    );
}

function AccountBox(props) {

    return (
        <Box>
            <TextField label='Account' fullWidth margin='normal' />
                <Button 
                    variant='contained' color='primary'
                    onClick={() => {props.nextStepEvent()}}>按钮</Button>
        </Box> 
    );
}

const LOGIN_STEP = {
    InputAccount: 0,
    InputPassword: 1
};