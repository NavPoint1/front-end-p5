import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import { Slide } from 'material-auto-rotating-carousel';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"

const useStyles = makeStyles((theme) => ({
    label: {
        color: CWL_YELLOW
    },
    // root: {
    //     "& .MuiFilledInput-root": {
    //         background: CWL_PURPLE
    //     }
    // },
    text: {
        // color: CWL_YELLOW
        color: "#ffffff"
    },
    notchedOutline: {
        // borderWidth: '1px',
        borderColor: CWL_YELLOW + " !important"
        // borderColor: "#ffffff" + " !important"
    },
  }))

const CarouselSlide = (props) => {
    const classes = useStyles();
    // const { red } = require('@material-ui/core/colors');

    // const styles = {
    // root: {
    //     backgroundColor: red[600],
    //     // height: 400,
    //     // width: 800
    // },
    // media: {
    //     backgroundColor: red[400]
    // }
    // }

    // const StyledSlide = withStyles(styles)(Slide);

    return(

        <Box
            className="carousel-slide-container"
        >
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>
                    <div className="slide-form-display carousel-slide-header">
                        {props.header}
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className="flex-container">
                        <img src={props.media} className="slide-form-display carousel-slide-media"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="slide-form-display carousel-slide-content">
                        {props.content}
                    </div>
                </Grid>
            </Grid>        
        </Box>
        // <StyledSlide
        //     media={props.media}
        //     title={props.title}
        //     subtitle={props.subtitle}
        //     mobile
        //     landscape
        //     ButtonProps="disabled"
        // />
    )
}

export default CarouselSlide