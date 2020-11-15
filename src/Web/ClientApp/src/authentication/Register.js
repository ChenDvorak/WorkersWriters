import React from 'react'
import { Box, Container, Grid, Hidden, TextField } from '@material-ui/core'
import { LogoLarge } from '../components/Logo'

export default function Register(props) {

    return (
        <Grid container>
            <Grid item xs>
                <Container>
                <LogoLarge />
                <Box textAlign='center' color='primary.main' m={3} fontSize='h5.fontSize'>
                    Register
                </Box>
                    <Container maxWidth='xs'>
                        <Box textAlign='center'>
                            <TextField id='txt_email'
                                label='Input email' type='email'
                                fullWidth variant='outlined' margin='normal'
                                required autoFocus
                                helperText="Your email"
                            />
                        </Box>
                        <Box textAlign='center'>
                            <TextField id='txt_password'
                                label='Input password' type='password'
                                fullWidth variant='outlined' margin='normal'
                                required
                                helperText="Your password"
                            />
                        </Box>
                        <Box textAlign='center'>
                            <TextField id='txt_confirmPassword'
                                label='confirm password' type='password'
                                fullWidth variant='outlined' margin='normal'
                                required
                                helperText="Confirm your password"
                            />
                        </Box>
                    </Container>
                </Container>
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
