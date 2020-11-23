import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';

import { Redirect } from 'react-router-dom'

import { createGuide, clearGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import SlideBuilder from './SlideBuilder'
import SlidePreview from '../components/SlidePreview'

const Preview = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide)

    return (
        <Box 
            border={1} 
            borderColor={"#808080"}
            mx={0} 
            px={0.5}
            paddingTop={0.5} 
            width="12%" 
            style={{
                overflowY: "scroll",
                overflowX: "hidden"
            }}
        >
            {slides.map((slide) => 
                <Box 
                    display="flex" 
                    bgcolor={slide.slideNumber - 1 == currentSlide ? "#808080" : null}
                    minHeight="14%"
                    maxHeight="14%"
                    my={0}
                    py={0.5}
                    // mx={0.5}
                >
                    <div className="preview-number">{slide.slideNumber}</div>
                    <SlidePreview 
                        key={slide.slideNumber}
                        slide={slide}
                    />
                </Box>
            )}
        </Box>
    )
}

export default Preview