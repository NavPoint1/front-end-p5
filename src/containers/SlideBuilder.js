import React from 'react'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import AddIcon from '@material-ui/icons/Add';

import { updateSlideLayout, createSlide, setCurrentSlide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideForm from '../components/SlideForm'
import Preview from './Preview'

const CWL_LIGHT_GRAY = "#808080"

const SlideBuilder = () => {
    const dispatch = useDispatch();
    // const loggedInUser = useSelector(state => state.loggedInUser);
    // const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide)

    const createNewSlide = (event) => {
        event.preventDefault()
        dispatch(createSlide({
            header: "",
            content: "",
            media: "",
            layout: 0
        }))
        dispatch(setCurrentSlide(slides.length))
    }

    const changeSlides = (event) => {
        let newSlideIndex = 0

        if(event.deltaY < 0) {
            // up
            newSlideIndex = currentSlide - 1
            if(newSlideIndex < 0) {
                newSlideIndex = slides.length - 1
            }
        }
        else {
            // down
            if(currentSlide < slides.length - 1) {
                newSlideIndex = currentSlide + 1
            }
        }

        dispatch(setCurrentSlide(newSlideIndex))
    }

    return (
        <Box 
            p={1} 
            width="99%" 
            display="flex"
            id="slide-builder-container"
            height="83%"
        >
            <Preview />
            <Box 
                onWheel={changeSlides}
                border={1} 
                borderColor={CWL_LIGHT_GRAY}
                mx={0}
                marginLeft={1}
                py={1} 
                width="90%" 
                height="79.7vh"
            >
            <Container component="main" maxWidth="xl">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={8}>
                        <Button
                            startIcon={<AddIcon />}
                            onClick={createNewSlide}
                            variant="contained"
                            color="primary"
                        >
                            Add Slide
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {slides.length > 0
                            ?
                                <RadioGroup
                                    row
                                    defaultValue="0"
                                    onChange={(e) => {
                                        dispatch(updateSlideLayout({
                                            slideNumber: slides[currentSlide].slideNumber,
                                            layout: e.target.value
                                        }))
                                    }}
                                >
                                    <Radio
                                        size="small"
                                        color="primary"
                                        value="0"
                                        // checked={slides[currentSlide].layout == 0 ? true : false}
                                        // onClick={slides[currentSlide].layout === 0 ? null : () => {
                                        //     dispatch(updateSlideLayout({
                                        //         slideNumber: slides[currentSlide].slideNumber,
                                        //         layout: 0
                                        //     }))
                                        // }}
                                    />
                                    <Radio
                                        size="small"
                                        color="primary"
                                        value="1"
                                        // checked={slides[currentSlide].layout == 1 ? true : false}
                                        // onClick={slides[currentSlide].layout === 1 ? null : () => {
                                        //     dispatch(updateSlideLayout({
                                        //         slideNumber: slides[currentSlide].slideNumber,
                                        //         layout: 1
                                        //     }))
                                        // }}
                                    />
                                    <Radio
                                        size="small"
                                        color="primary"
                                        value="2"
                                        // checked={slides[currentSlide].layout == 2 ? true : false}
                                        // onClick={slides[currentSlide].layout === 2 ? null : () => {
                                        //     dispatch(updateSlideLayout({
                                        //         slideNumber: slides[currentSlide].slideNumber,
                                        //         layout: 2
                                        //     }))
                                        // }}
                                    />
                                </RadioGroup>
                            :
                                null
                        }
                    </Grid>
                    <Grid item xs={12}>
                        {slides[currentSlide] 
                            ?
                                <SlideForm />
                            :
                                null
                        }
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </Box>
    )
}

export default SlideBuilder