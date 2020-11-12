import React, { Component } from 'react';
import { Box, Button } from '@material-ui/core'

export class Login extends Component {
    render() {
        return ( <div>
            login box
            <Box component='div' color='text.primary' clone>
                <Button variant='contained'>按钮</Button>
            </Box> 
            </div>
        );
    }
}