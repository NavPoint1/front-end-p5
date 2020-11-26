import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import { borders } from '@material-ui/system';

import SaveIcon from '@material-ui/icons/Save';
import PublishIcon from '@material-ui/icons/Publish';

import { makeStyles } from '@material-ui/core/styles';

import { Redirect, useHistory } from 'react-router-dom'

import { createGuide, clearGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideBuilder from './SlideBuilder'

const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"

const useStyles = makeStyles((theme) => ({
    label: {
        color: CWL_YELLOW
    },
    root: {
        "& .MuiFilledInput-root": {
            background: CWL_PURPLE
        }
    },
    text: {
        // color: CWL_YELLOW
        color: "#ffffff"
    },
    // notchedOutline: {
    //     // borderWidth: '1px',
    //     // borderColor: CWL_YELLOW + " !important"
    //     borderColor: "#ffffff !important"
    // },
  }))

const GuideCreator = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
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
        let thumbnail = event.target.thumbnail.value
        let user_id = loggedInUser.id

        let newGuide = {
            title,
            user_id,
            thumbnail,
            // attach slides
            slides
        }

        // dispatch to state
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
                    <div id="guide-creator">
                        <Box 
                            // border={1} 
                            p={1} 
                            paddingTop={0}
                            paddingBottom={2} 
                            width="99%"
                            height="9%"
                            // maxHeight="50%"
                            // overflow="hidden"
                        >
                            <Container component="main" maxWidth="sm" >
                                <form onSubmit={handleSubmit} noValidate>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="filled"
                                                margin="dense"
                                                fullWidth
                                                id="guide-title-field"
                                                label="Title"
                                                name="title"
                                                autoFocus
                                                size="small"
                                                className={classes.root}
                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.label,
                                                        focused: classes.focusedLabel,
                                                    }
                                                }} 
                                                InputProps={{ 
                                                    classes: {
                                                        root: classes.text,
                                                        notchedOutline: classes.notchedOutline,
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            {/* <div className="flex-container">
                                                <Button
                                                    startIcon={<SaveIcon />}
                                                    name="save"
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    style={{
                                                        float: "right"
                                                    }}
                                                >
                                                    Thumbnail
                                                </Button>
                                            </div> */}
                                            <TextField
                                                variant="filled"
                                                margin="dense"
                                                fullWidth
                                                id="guide-thumbnail-field"
                                                label="Thumbnail"
                                                name="thumbnail"
                                                size="small"
                                                className={classes.root}
                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.label,
                                                        focused: classes.focusedLabel,
                                                    }
                                                }} 
                                                InputProps={{ 
                                                    classes: {
                                                        root: classes.text,
                                                        notchedOutline: classes.notchedOutline,
                                                    }
                                                }}
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
                                            <div className="author-preview">
                                                by {loggedInUser.username.charAt(0).toUpperCase() + loggedInUser.username.slice(1)}
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Button
                                                startIcon={<PublishIcon />}
                                                name="publish"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                style={{
                                                    float: "right"
                                                }}
                                            >
                                                PUBLISH
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