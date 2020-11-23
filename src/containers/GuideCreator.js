import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import SaveIcon from '@material-ui/icons/Save';
import PublishIcon from '@material-ui/icons/Publish';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';

import { Redirect } from 'react-router-dom'

import { createGuide, clearGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideBuilder from './SlideBuilder'

const GuideCreator = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (Object.keys(guide).length !== 0) {
            dispatch(clearGuide())
        }
        setLoaded(true)
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()

        // build guide
        let title = event.target.title.value
        let user_id = loggedInUser.id

        let newGuide = {
            title,
            user_id,
            // attach slides
            slides
        }

        // dispatch to state
        dispatch(createGuide(newGuide))
    }

    const theme = createMuiTheme({
        palette: {
          primary:  {
            main: '#f2aa27'
            // main: '#2d192d'
          },
          secondary: {
            // main: '#f2aa27'
            main: '#2d192d'
          },
          error: red,
          // Used by `getContrastText()` to maximize the contrast between the background and
          // the text.
          contrastThreshold: 3,
          // Used to shift a color's luminance by approximately
          // two indexes within its tonal palette.
          // E.g., shift from Red 500 to Red 300 or Red 700.
          tonalOffset: 0.2,
        },
      });

    return (
        Object.keys(loggedInUser).length === 0
              ?
                <Redirect to="/" />
              :
              Object.keys(guide).length !== 0 && loaded === true
                ?
                    <Redirect to={"/guides/" + guide.id} />
                :
                    <div id="guide-creator">
                        <ThemeProvider theme={theme}>
                        <Box border={1} margin="auto" p={1} width="100%">
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
                                        <Grid item xs={12} sm={4}>
                                            <Button
                                                startIcon={<SaveIcon />}
                                                name="save"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                SAVE
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <div>
                                                by {loggedInUser.username}
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Button
                                                startIcon={<PublishIcon />}
                                                name="publish"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                PUBLISH
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Container>
                        </Box>
                        </ThemeProvider>
                        <SlideBuilder />
                    </div>
    )
}

export default GuideCreator