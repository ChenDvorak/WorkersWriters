import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import config from '../settings.js'

const useStyles = makeStyles({
    root: {
        'text-align': 'center',
        'text-shadow': '2px 3px 5px rgba(0, 0, 0, 0.2), 2px 5px 15px rgba(0, 0, 0, 0.1)'
    }
});

export function LogoLarge() {

    const classes = useStyles();

    return (
    <Box className={classes.root} 
        component='h1'
        color="primary.main" 
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