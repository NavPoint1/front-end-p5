import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import AddIcon from '@material-ui/icons/Add';

import { saveSlide, createSlide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideForm from '../components/SlideForm'
import Preview from './Preview'

const SlideBuilder = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);

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
    }

    return (
        <Box border={1} p={1} width="100%" display="flex">
            <Preview />
            <Box border={1} margin="auto" p={1} width="85%" height="100%">
            <Container component="main" maxWidth="lg">
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
                        {slides[0] 
                            ?
                                <SlideForm 
                                    key={slides[0].slideNumber}
                                    slide={slides[0]}
                                />
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