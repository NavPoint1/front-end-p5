import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import AddIcon from '@material-ui/icons/Add';

import { saveSlide, createSlide, setCurrentSlide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideForm from '../components/SlideForm'
import Preview from './Preview'

const SlideBuilder = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide)

    const handleSubmit = (event) => {
        event.preventDefault()

        let header = event.target.header.value
        let user_id = loggedInUser.id

        let newSlide = {
            header,
            user_id
        }

        // dispatch to state
        dispatch(saveSlide(newSlide))
    }

    const createNewSlide = (event) => {
        event.preventDefault()
        dispatch(createSlide({}))
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
            border={1} 
            p={1} 
            width="100%" 
            display="flex"
            id="slide-builder-container"
            height="83%"
        >
            <Preview />
            <Box 
                onWheel={changeSlides}
                border={1} 
                mx={1} 
                py={1} 
                width="85%" 
                // height="97.7%"
            >
            <Container component="main" maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button
                            startIcon={<AddIcon />}
                            onClick={createNewSlide}
                            variant="contained"
                            color="primary"
                        >
                            Add Slide
                        </Button>
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