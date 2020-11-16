import React, { useState } from 'react'
import { Box, Container, Grid, Hidden, TextField, Button } from '@material-ui/core'
import { LogoLarge } from '../components/Logo'

export default function Register(props) {

    const validationModel = {
        emailValid: true,
        passwordValid: true,
        confirmPasswordValid: true
    };


    const [validation, setValidation] = useState(validationModel);

    function handleEmailChanged() {
        const email = document.getElementById('txt_email');
        const currentValidation = {
            ...validation,
            emailValid: email.value
        };
        setValidation(currentValidation);
    }

    function handlePasswordChanged() {
        const password = document.getElementById('txt_password');
        const currentValidation = {
            ...validation,
            passwordValid: password.value
        };
        setValidation(currentValidation);
    }

    function handleConfirmPassordChanged() {
        const password = document.getElementById('txt_password');
        const confirmPassword = document.getElementById('txt_confirmPassword');
        
        const currentValidation = {
            ...validation,
            confirmPasswordValid: confirmPassword.value && confirmPassword.value === password.value
        };
        setValidation(currentValidation);
    }

    function handleRegister(e) {
        const email = document.getElementById('txt_email');
        const password = document.getElementById('txt_password');
        const confirmPassword = document.getElementById('txt_confirmPassword');

        const currentValidation = {
            ...validation
        }

        if (!email.value.trim()) {
            currentValidation.emailValid = false;
        }
        if (!password.value.trim()) {
            currentValidation.passwordValid = false;
        }
        if (!confirmPassword.value.trim()) {
            currentValidation.confirmPasswordValid = false;
        }
        if (!currentValidation.emailValid || !currentValidation.passwordValid || !currentValidation.confirmPasswordValid) {
            setValidation(currentValidation);
            return;
        }
        e.preventDefault();
    }

    return (
        <Grid container>
            <Grid item xs>
                <Box display='flex' flexDirection='column' 
                    justifyContent='center' pt={5}>
                <LogoLarge />
                <Box textAlign='center' color='primary.main' m={3} fontSize='h5.fontSize'>
                    Register
                </Box>
                    <Container maxWidth='xs'>
                        <Box textAlign='center'>
                            <TextField id='txt_email'
                                label='Input email' type='email'
                                fullWidth variant='outlined' margin='normal'
                                required autoFocus error={!validation.emailValid}
                                helperText="Your email"
                                onChange={handleEmailChanged}
                            />
                        </Box>
                        <Box textAlign='center'>
                            <TextField id='txt_password'
                                label='Input password' type='password'
                                fullWidth variant='outlined' margin='normal'
                                required error={!validation.passwordValid}
                                helperText="Your password"
                                onChange={handlePasswordChanged}
                            />
                        </Box>
                        <Box textAlign='center'>
                            <TextField id='txt_confirmPassword'
                                label='confirm password' type='password'
                                fullWidth variant='outlined' margin='normal'
                                required error={!validation.confirmPasswordValid}
                                helperText="Confirm your password, must same"
                                onChange={handleConfirmPassordChanged}
                            />
                        </Box>
                        <Grid container justify='flex-end' spacing={2}>
                            <Grid item>
                                <Button variant='outlined' color='primary' href='/login'>Go to Log In</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary' onClick={handleRegister}>Register</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
            <Hidden xsDown>
                <Grid item xs>
                    <Box>
                        right
                    </Box>
                </Grid>
            </Hidden>
        </Grid>
    );
}
