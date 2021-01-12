import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
// import { borders } from '@material-ui/system';

import SaveIcon from '@material-ui/icons/Save';

import { makeStyles } from '@material-ui/core/styles';

import { Redirect } from 'react-router-dom'

import { createTheme } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import ThemePreview from '../components/ThemePreview'

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
  }))


const ThemeCreator = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const errors = useSelector(state => state.errors);

    const [topBorder, setTopBorder] = useState(null)
    const [bottomBorder, setBottomBorder] = useState(null)
    const [backgroundImage, setBackgroundImage] = useState(null)
    const [watermarkImage, setWatermarkImage] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        // build theme
        let name = event.target.name.value
        let top_border = event.target.topBorder.value
        let bottom_border = event.target.bottomBorder.value
        let background = event.target.background.value
        let watermark = event.target.watermark.value
        let user_id = loggedInUser.id

        let newTheme = {
            name,
            user_id,
            // images: {
                top_border,
                bottom_border,
                background,
                watermark
            // }
        }

        dispatch(createTheme(newTheme))
    }

    return (
        Object.keys(loggedInUser).length === 0
        ?
          <Redirect to="/" />
        :
        <div className="default-container theme-creator-container">
            <Container component="main" maxWidth="sm" >
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                id="theme-name-field"
                                label="Theme Name"
                                name="name"
                                autoFocus
                                size="medium"
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
                        <Grid item xs={12}>
                            <div className="author-preview">
                                by {loggedInUser.username.charAt(0).toUpperCase() + loggedInUser.username.slice(1)}
                            </div>
                        </Grid>
                        <Divider />
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={(event) => setTopBorder(event.target.value)}
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                id="theme-top-border-field"
                                label="Top Border Image URL"
                                name="topBorder"
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
                                onChange={(event) => setBottomBorder(event.target.value)}
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                id="theme-bottom-border-field"
                                label="Bottom Border Image URL"
                                name="bottomBorder"
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
                                onChange={(event) => setBackgroundImage(event.target.value)}
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                id="theme-background-field"
                                label="Background Image URL"
                                name="background"
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
                                onChange={(event) => setWatermarkImage(event.target.value)}
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                id="theme-watermark-field"
                                label="Watermark Image URL"
                                name="watermark"
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
                        <Grid item xs={12}>
                            <div className="theme-creator-errors">
                                {errors} 
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                startIcon={<SaveIcon />}
                                name="submit"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <ThemePreview
                topBorder={topBorder}
                bottomBorder={bottomBorder}
                backgroundImage={backgroundImage}
                watermarkImage={watermarkImage}
            />
        </div>
    )
}

export default ThemeCreator