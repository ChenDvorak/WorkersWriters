import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import config from '../settings.js'

const useStyles = makeStyles({
    root: {
        'display': 'block',
        'text-align': 'center',
        'text-shadow': '2px 3px 5px rgba(0, 0, 0, 0.2), 2px 5px 15px rgba(0, 0, 0, 0.1)',
        'text-decoration': 'none'
    }
});

export function LogoLarge() {

    const classes = useStyles();

    return (
    <Box href='/' my={3} className={classes.root} 
        fontSize='h4.fontSize' fontWeight='fontWeightBold'
        component='a' color="primary.main" 
    >
        {config.title}
    </Box>
    );
}

export function LogoMedium() {

    const classes = useStyles();

    return (
    <Box className={classes.root} 
        component='h2' 
        color="primary.main" 
        >
        {config.title}
    </Box>
    );
}