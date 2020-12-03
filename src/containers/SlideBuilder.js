import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';

import { updateSlideLayout, createSlide, setCurrentSlide, loadThemes, setCurrentTheme, loadGuideTheme } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideForm from '../components/SlideForm'
import Preview from './Preview'

const CWL_LIGHT_GRAY = "#808080"
const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"

const useStyles = makeStyles((styleTheme) => ({
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
    select: {
        '&:before': {
            borderColor: CWL_YELLOW,
        },
        '&:after': {
            borderColor: CWL_YELLOW,
        },
        '&:hover:not(.Mui-disabled):before': {
            borderColor: CWL_YELLOW,
        }
    },
    icon: {
        fill: CWL_YELLOW,
    },
  }))

const SlideBuilder = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    // const loggedInUser = useSelector(state => state.loggedInUser);
    // const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide)
    const themes = useSelector(state => state.themes);
    const currentTheme = useSelector(state => state.currentTheme);
    const guide = useSelector(state => state.guide);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(loadThemes())
        if (Object.keys(guide).length > 0) {
            if (guide.theme) {
                dispatch(loadGuideTheme(guide.theme))
            }
        }
    },[])

    const handleChange = (event) => {
        dispatch(setCurrentTheme(event.target.value));
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

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
                                <FormControl>
                                    {/* <InputLabel id="theme-select-label">
                                        Choose a theme:
                                    </InputLabel> */}
                                    <Select
                                        labelId="theme-select-label"
                                        id="theme-select-menu"
                                        variant="standard"
                                        defaultValue={guide ? guide.theme ? guide.theme.id : "Choose a theme:" : "Choose a theme:"}
                                        // size="small"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={currentTheme ? currentTheme.id : ""}
                                        onChange={handleChange}
                                        className={classes.select}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.label,
                                                focused: classes.focusedLabel,
                                            }
                                        }} 
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                            },
                                        }}
                                    >
                                        <MenuItem value="Choose a theme:">
                                            <em>Choose a theme:</em>
                                        </MenuItem>
                                        {themes.map(theme => <MenuItem value={theme.id} key={theme.id}>
                                            {theme.name}
                                        </MenuItem>)}
                                    </Select>
                                </FormControl>
                            :
                                null
                        }
                        {/* {slides.length > 0
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
                                    />
                                    <Radio
                                        size="small"
                                        color="primary"
                                        value="1"
                                    />
                                    <Radio
                                        size="small"
                                        color="primary"
                                        value="2"
                                    />
                                </RadioGroup>
                            :
                                null
                        } */}
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