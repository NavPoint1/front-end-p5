import React, { useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import { borders } from '@material-ui/system';

import SaveIcon from '@material-ui/icons/Save';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

import { Redirect } from 'react-router-dom'

import { createGuide, clearGuide, clearErrors, loadSlides, clearGuideBuilder, updateGuide, deleteGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideBuilder from './SlideBuilder'

const URL = "http://localhost:3000"

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
    notchedOutline: {
        // borderWidth: '1px',
        borderColor: CWL_YELLOW + " !important"
        // borderColor: "#ffffff !important"
    },
  }))

const GuideCreator = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);
    const errors = useSelector(state => state.errors);

    useEffect(() => {
        dispatch(clearErrors())
        if(props.edit === "false") {
            if (Object.keys(guide).length !== 0) {
                dispatch(clearGuide())
            }
        }
        else {
            if (Object.keys(guide).length !== 0) {
                dispatch(loadSlides(guide))
            }
        }
        return handleUnmount;
    },[])

    const handleUnmount = () => {
        dispatch(clearErrors());
        if (props.edit === "true") {
            dispatch(clearGuideBuilder())
        }
    }

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

        if (props.edit === "false") {
            dispatch(createGuide(newGuide))
        }
        else {
            newGuide.id = guide.id
            dispatch(updateGuide(newGuide))
        }
    }

    const determineUrl = () => {
        return guide.thumbnail_url ? URL + guide.thumbnail_url : null
    }

    return (
        Object.keys(loggedInUser).length === 0
              ?
                <Redirect to="/" />
              :
                <div id="guide-creator-container">
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
                        {props.edit === "true"
                            ?
                                <Button
                                    onClick={() => dispatch(deleteGuide(guide.id))}
                                    startIcon={<DeleteIcon />}
                                    id="edit-guide-delete-button"
                                    name="delete"
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                >
                                    Delete Guide
                                </Button>
                            :
                                null
                        }
                        <Container component="main" maxWidth="sm" >
                            <form onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            defaultValue={props.edit === "true" ? guide.title : null}
                                            variant="outlined"
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
                                        <TextField
                                            defaultValue={props.edit === "true" ? determineUrl() : null}
                                            variant="outlined"
                                            margin="dense"
                                            fullWidth
                                            id="guide-thumbnail-field"
                                            label="Thumbnail Image"
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
                                    <Grid item xs={12}>
                                            <div className="guide-creator-errors">
                                                {errors} 
                                            </div>
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