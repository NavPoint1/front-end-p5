import React, { useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteSlide, updateSlideHeader, updateSlideContent } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const SlideForm = (props) => {
    const dispatch = useDispatch();
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide)

    return (
        <Box
            border={1}
            m={2}
            p={2} 
            paddingTop={1} 
            width="100%"
        >
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div>{slides[currentSlide].slideNumber}</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        defaultValue={slides[currentSlide].header}
                        onChange={(e) => dispatch(updateSlideHeader({
                            slideNumber: slides[currentSlide].slideNumber,
                            header: e.target.value
                        }))}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="slide-header-field"
                        label="Header"
                        name="header"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        onClick={() => dispatch(deleteSlide(slides[currentSlide].slideNumber))}
                        startIcon={<DeleteIcon />}
                        variant="contained"
                        color="primary"
                        style={{
                            float: "right"
                        }}
                    >
                        Delete Slide
                    </Button>
                </Grid>
                <TextField
                    defaultValue={slides[currentSlide].content}
                    onChange={(e) => dispatch(updateSlideContent({
                        slideNumber: slides[currentSlide].slideNumber,
                        content: e.target.value
                    }))}
                    autoFocus
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="slide-text-field"
                    label="Text Content"
                    name="content"
                    multiline
                    rows={24}
                    rowsMax={24}
                />
            </Grid>
        </Box>
    )
}

export default SlideForm