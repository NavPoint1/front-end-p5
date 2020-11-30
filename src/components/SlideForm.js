import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

import { deleteSlide, updateSlideHeader, updateSlideContent, updateSlideMedia, setCurrentSlide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"

const useStyles = makeStyles((theme) => ({
    label: {
        color: CWL_YELLOW
    },
    // root: {
    //     "& .MuiFilledInput-root": {
    //         background: CWL_PURPLE
    //     }
    // },
    text: {
        // color: CWL_YELLOW
        color: "#ffffff"
    },
    notchedOutline: {
        // borderWidth: '1px',
        borderColor: CWL_YELLOW + " !important"
        // borderColor: "#ffffff" + " !important"
    },
  }))

const SlideForm = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide);

    const [editing, setEditing] = useState("")

    return (
        <Box
            className="slide-form"
            bgcolor={CWL_PURPLE}
            m={2}
            p={2} 
            paddingTop={1}
            paddingBottom={1}
            marginTop={1}
            height="73.5vh"
        >
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>
                    {editing !== "header" 
                        ?
                            <div
                                onClick={() => setEditing("header")}
                                className="slide-form-display slide-form-header"
                            >
                                {slides[currentSlide].header}
                            </div>
                        :
                            <TextField
                                defaultValue={slides[currentSlide].header}
                                onBlur={() => setEditing("")}
                                onChange={(e) => dispatch(updateSlideHeader({
                                    slideNumber: slides[currentSlide].slideNumber,
                                    header: e.target.value
                                }))}
                                variant="outlined"
                                margin="none"
                                fullWidth
                                id="slide-field-header"
                                className="slide-form-field"
                                label="Header"
                                name="header"
                                size="small"
                                autoFocus
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
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button
                        onClick={() => {
                            let newCurrentSlide = (currentSlide === slides.length - 1 ? currentSlide - 1 : currentSlide)
                            dispatch(deleteSlide(slides[currentSlide].slideNumber))
                            dispatch(setCurrentSlide(newCurrentSlide))
                        }}
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
                <Grid item xs={12} sm={8}>
                    {editing !== "media" 
                        ?
                            <div 
                                className="flex-container"
                                onClick={() => setEditing("media")}
                            >
                                <img
                                    src={slides[currentSlide].media}
                                    className={"slide-form-display slide-form-media " + (slides[currentSlide].media === "" ? "empty-media" : "")}
                                    alt="slide-form-media"
                                />
                            </div>
                        :
                            <TextField
                                defaultValue={slides[currentSlide].media}
                                onBlur={() => setEditing("")}
                                onChange={(e) => dispatch(updateSlideMedia({
                                    slideNumber: slides[currentSlide].slideNumber,
                                    media: e.target.value
                                }))}
                                variant="outlined"
                                margin="none"
                                fullWidth
                                id="slide-field-media"
                                className="slide-form-field"
                                label="Image URL"
                                name="media"
                                autoFocus
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
                                    },
                                }}
                            />
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    {editing !== "content" 
                            ?
                                <div 
                                    onClick={() => setEditing("content")}
                                    className="slide-form-display slide-form-content"
                                >
                                    <ReactMarkdown plugins={[gfm]} children={slides[currentSlide].content} />
                                </div>
                            :
                                <TextField
                                    defaultValue={slides[currentSlide].content}
                                    onBlur={() => setEditing("")}
                                    onChange={(e) => dispatch(updateSlideContent({
                                        slideNumber: slides[currentSlide].slideNumber,
                                        content: e.target.value
                                    }))}
                                    autoFocus
                                    variant="outlined"
                                    margin="none"
                                    fullWidth
                                    id="slide-field-content"
                                    className="slide-form-field"
                                    label="Text Content"
                                    name="content"
                                    multiline
                                    rows={31}
                                    rowsMax={31}
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
                                        },
                                    }}
                                />
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default SlideForm