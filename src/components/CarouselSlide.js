import React from 'react'

// import { withStyles } from '@material-ui/core/styles';
// import { Slide } from 'material-auto-rotating-carousel';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

const URL = "http://localhost:3000"

// const CWL_YELLOW = "#f2aa27"
// const CWL_PURPLE = "#2d192d"

const CarouselSlide = (props) => {

    return(

        <Box
            className="carousel-slide-container"
            style={{
                backgroundImage: props.theme ? `url(${URL + props.theme.background_url})` : "",
                backgroundSize: 'cover'
            }}
        >
            {props.theme
                ?
                    <div
                        style={{
                            backgroundImage: `url(${URL + props.theme.top_border_url})`,
                            backgroundRepeat: 'round',
                            // backgroundSize: '100% 97%',
                            width: '100%',
                            height: '6%',
                        }}
                    />
                :
                    <Box
                        style={{
                            height: props.theme ? '0' : '6%',
                            // marginBottom: "4px"
                        }}
                    />
            }
            <Grid container spacing={0}
                style={{
                    marginTop: "1%"
                }}
            >
                <Grid item xs={12} sm={1}>
                    {props.theme
                        ?
                            <div className="slide-form-watermark-container"
                                style={{
                                    position: 'relative',
                                    width: '60%',
                                    height: '100%',
                                    paddingLeft: '10px',
                                }}
                            >
                            <img 
                                src={URL + props.theme.watermark_url}
                                style={{
                                    transform: 'scale(1.8)',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    zIndex: '5',
                                    // position: 'absolute',
                                    // right: '0',
                                    // top: '0',
                                    marginTop: '-18%',
                                    marginBottom: '-20%',
                                    marginLeft: '55%'
                                }}
                            />
                            </div>
                        :
                            null
                    }
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div className="slide-form-display carousel-slide-header">
                        {props.header}
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className="flex-container">
                        <img 
                            src={props.media} 
                            className="slide-form-display carousel-slide-media"
                            width={props.media === "" ? '100%' : 'auto' }
                            height={props.media === "" ? '100%' : 'auto' }
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="slide-form-display carousel-slide-content">
                        <ReactMarkdown plugins={[gfm]} children={props.content} />
                    </div>
                </Grid>
            </Grid>       
            {props.theme
                ?
                    <div
                        style={{
                            backgroundImage: `url(${URL + props.theme.bottom_border_url})`,
                            backgroundRepeat: 'round',
                            width: '100%',
                            height: '6%',
                            position: 'absolute',
                            bottom: '0'
                        }}
                    />
                :
                    null
            } 
        </Box>
    )
}

export default CarouselSlide