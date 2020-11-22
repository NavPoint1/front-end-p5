import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';

import { Redirect } from 'react-router-dom'

import { createGuide, clearGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideBuilder from './SlideBuilder'

const GuideCreator = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (Object.keys(guide).length !== 0) {
            dispatch(clearGuide())
        }
        setLoaded(true)
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()

        let title = event.target.title.value
        let user_id = loggedInUser.id

        let newGuide = {
            title,
            user_id
        }

        // dispatch to state to trigger redirect
        dispatch(createGuide(newGuide))
    }

    return (
        Object.keys(loggedInUser).length === 0
              ?
                <Redirect to="/" />
              :
              Object.keys(guide).length !== 0 && loaded === true
                ?
                    <Redirect to={"/guides/" + guide.id} />
                :
                    <div className="guide-creator">
                    <Box border={1} margin="auto" width="100%">
                        <Container component="main" maxWidth="sm" >
                            <form onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="guide-title-field"
                                            label="Title"
                                            name="title"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                        >
                                            Submit Guide
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                            </Container>
                        </Box>
                        <SlideBuilder />
                    </div>
    )
}

export default GuideCreator