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

const URL = "http://localhost:3000"

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

const ThemePreview = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Box
            className="slide-form"
            bgcolor={CWL_PURPLE}
            style={{
                backgroundImage: `url(${props.backgroundImage})`,
                backgroundSize: 'cover'
            }}
            m={2}
            p={0} 
            marginTop={1}
            height="73.5vh"
        >
            {props.topBorder
                ?
                    <div
                        style={{
                            backgroundImage: `url(${props.topBorder})`,
                            backgroundRepeat: 'round',
                            backgroundSize: 'auto 100%',
                            width: '100%',
                            height: '6%',
                        }}
                    />
                :
                    <Box
                        style={{
                            height: '6%',
                            // marginBottom: "4px"
                        }}
                    />
            }
            <Grid 
                container
                alignItems="center"
                spacing={0}
            >
                <Grid item xs={12} sm={1}>
                    <div className="slide-form-watermark-container"
                        style={{
                            position: 'relative',
                            width: '60%',
                            height: '100%',
                            paddingLeft: '10px',
                        }}
                    >
                        <img 
                            src={props.watermarkImage}
                            style={{
                                transform: 'scale(1.2)',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                zIndex: '5',
                                // position: 'absolute',
                                // right: '0',
                                // top: '0',
                                marginTop: '-40%',
                                marginBottom: '-20%',
                                marginLeft: '37%'
                            }}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div
                        className="slide-form-display slide-form-header"
                    >
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}
                    style={{
                        paddingLeft: '2%'
                    }}
                >
                    <div 
                        className="flex-container"
                        style={{
                            height: '59.5vh'
                        }}
                    >
                        <img
                            className={"slide-form-display slide-form-media "}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}
                    style={{
                        paddingRight: '2%'
                    }}
                >
                    <div 
                        className="slide-form-display slide-form-content"
                    >
                    </div>
                </Grid>
            </Grid>
            {props.bottomBorder
                ?
                    <div
                        style={{
                            backgroundImage: `url(${props.bottomBorder})`,
                            backgroundRepeat: 'round',
                            backgroundSize: 'auto 100%',
                            width: '100%',
                            height: '7%',
                        }}
                    />
                :
                    null
            }
        </Box>
    )
}

export default ThemePreview