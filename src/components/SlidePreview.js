import React from 'react'
// import React, { useEffect } from 'react'

// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { setCurrentSlide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

// const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"
// const CWL_LIGHT_GRAY = "#808080"

const SlidePreview = (props) => {
    const dispatch = useDispatch();
    const currentSlide = useSelector(state => state.currentSlide)

    return (
        <Box
            onClick={() => dispatch(setCurrentSlide(props.slide.slideNumber - 1))}
            // border={1}
            className={props.slide.slideNumber - 1 === currentSlide ? "preview-slide-highlighted" : "preview-slide"}
            bgcolor={CWL_PURPLE}
            p={0} 
            // mx={1}
            width="170px"
            height="95.625px"
            // overflow="hidden"
        >
            <Grid container spacing={0}>
                <Grid item xs={12} sm={8}>
                    <div className="slide-preview slide-preview-header">{props.slide.header}</div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div></div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className="flex-container">
                        <img className="slide-preview slide-preview-media" src={props.slide.media} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="slide-preview">{props.slide.content}</div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SlidePreview