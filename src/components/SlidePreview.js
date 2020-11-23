import React, { useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteSlide, updateSlideHeader, updateSlideContent, setCurrentSlide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"
const CWL_LIGHT_GRAY = "#808080"

const SlidePreview = (props) => {
    const dispatch = useDispatch();
    const currentSlide = useSelector(state => state.currentSlide)

    return (
        <Box
            onClick={() => dispatch(setCurrentSlide(props.slide.slideNumber - 1))}
            border={1}
            borderColor={props.slide.slideNumber - 1 == currentSlide ? CWL_YELLOW : CWL_LIGHT_GRAY}
            bgcolor={CWL_PURPLE}
            p={0} 
            marginLeft={1}
            width="85%"
            overflow="hidden"
            style={{
                fontSize: "3px"
            }}
        >
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div>{props.slide.header}</div>
                </Grid>
                <div>{props.slide.content}</div>
            </Grid>
        </Box>
    )
}

export default SlidePreview