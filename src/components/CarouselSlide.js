import React from 'react'

// import { withStyles } from '@material-ui/core/styles';
// import { Slide } from 'material-auto-rotating-carousel';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

// const CWL_YELLOW = "#f2aa27"
// const CWL_PURPLE = "#2d192d"

const CarouselSlide = (props) => {

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
                        <img src={props.media} className="slide-form-display carousel-slide-media" alt="carousel-slide-media"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="slide-form-display carousel-slide-content">
                        <ReactMarkdown plugins={[gfm]} children={props.content} />
                    </div>
                </Grid>
            </Grid>        
        </Box>
    )
}

export default CarouselSlide