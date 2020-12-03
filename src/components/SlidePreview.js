import React from 'react'
// import React, { useEffect } from 'react'

// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { setCurrentSlide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const URL = "http://localhost:3000"

// const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"
// const CWL_LIGHT_GRAY = "#808080"

const SlidePreview = (props) => {
    const dispatch = useDispatch();
    const currentSlide = useSelector(state => state.currentSlide)
    const currentTheme = useSelector(state => state.currentTheme);

    return (
        <Box
            onMouseDown={() => dispatch(setCurrentSlide(props.slide.slideNumber - 1))}
            // border={1}
            className={props.slide.slideNumber - 1 === currentSlide ? "preview-slide-highlighted" : "preview-slide"}
            bgcolor={CWL_PURPLE}
            style={{
                backgroundImage: Object.keys(currentTheme).length >= 0 ? `url(${URL + currentTheme.background_url})` : "",
                backgroundSize: 'cover',
                overflow: "hidden"
            }}
            p={0} 
            // mx={1}
            width="170px"
            height="95.625px"
        >
            {currentTheme.top_border_url
                ?
                    <div
                        style={{
                            backgroundImage: `url(${URL + currentTheme.top_border_url})`,
                            backgroundRepeat: 'round',
                            backgroundSize: 'auto 100%',
                            width: '100%',
                            height: '6%',
                        }}
                    />
                :
                    <Box
                        style={{
                            height: currentTheme.top_border_url ? '0' : '6%',
                            // marginBottom: "4px"
                        }}
                    />
            }
            <Grid container alignItems="center" spacing={0}>
                <Grid item xs={12} sm={1}>
                    {currentTheme.watermark_url
                        ?
                            <div className="slide-form-watermark-container"
                                style={{
                                    position: 'relative',
                                    width: '60%',
                                    height: '100%',
                                    paddingLeft: '7px',
                                    marginTop: '-10px',
                                    marginBottom: '-7px',
                                }}
                            >
                            <img 
                                src={URL + currentTheme.watermark_url}
                                style={{
                                    transform: 'scale(1.2)',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    zIndex: '5',
                                    // position: 'absolute',
                                    // right: '0',
                                    // top: '0',
                                    // marginBottom: '-20%',
                                    // marginLeft: '37%'
                                }}
                            />
                            </div>
                        :
                            null
                    }
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div className="slide-preview slide-preview-header">{props.slide.header}</div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div></div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className="flex-container">
                        <img className="slide-preview slide-preview-media" src={props.slide.media} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="slide-preview slide-preview-content">{props.slide.content}</div>
                </Grid>
            </Grid>
            {currentTheme.bottom_border_url
                ?
                    <div
                        style={{
                            backgroundImage: `url(${URL + currentTheme.bottom_border_url})`,
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

export default SlidePreview