import React, { useEffect, useState } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteSlide, updateSlideHeader, updateSlideContent, setCurrentSlide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

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
        color: CWL_YELLOW
    },
    notchedOutline: {
        // borderWidth: '1px',
        borderColor: CWL_YELLOW + " !important"
    },
  }))

const SlideForm = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide)

    const [editing, setEditing] = useState("")

    return (
        <Box
            border={1}
            m={2}
            p={2} 
            paddingTop={1}
            marginTop={1}
            // height="89%"
        >
            <Grid container spacing={0}>
                {/* <Grid item xs={12}>
                    <div>{slides[currentSlide].slideNumber}</div>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                    {editing !== "header" 
                        ?
                            <div
                                onClick={() => setEditing("header")}
                                className="slide-form-field slide-form-header"
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
                                id="slide-header-field"
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
                <Grid item xs={12} sm={6}>
                    <Button
                        onClick={() => {
                            dispatch(deleteSlide(slides[currentSlide].slideNumber))
                            dispatch(setCurrentSlide(currentSlide - 1 > 0 ? currentSlide - 1 : 0))
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
                <Grid item xs={12}>
                    {editing !== "content" 
                            ?
                                <div 
                                    onClick={() => setEditing("content")}
                                    className="slide-form-field slide-form-content"
                                >
                                    {slides[currentSlide].content}
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
                                    style={{
                                        marginTop: "0.8%",
                                        marginBottom: "-0.1%"
                                    }}
                                    fullWidth
                                    id="slide-text-field"
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
                                        }
                                    }}
                                />
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default SlideForm