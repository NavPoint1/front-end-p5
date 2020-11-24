import React from 'react'
// import React, { useState, useEffect } from 'react'

import { /* useDispatch, */ useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';

import SlidePreview from '../components/SlidePreview'

const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"
const CWL_LIGHT_GRAY = "#808080"

const Preview = () => {
    // const dispatch = useDispatch();
    // const loggedInUser = useSelector(state => state.loggedInUser);
    // const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide)

    return (
        <Box 
            border={1} 
            borderColor={CWL_LIGHT_GRAY}
            mx={0} 
            px={0.5}
            paddingTop={0.5} 
            width="200px"
            minWidth="200px"
            style={{
                overflowY: "scroll",
                overflowX: "hidden"
            }}
        >
            {slides.length > 0 ? slides.map((slide) => 
                <Box 
                    display="flex" 
                    bgcolor={slide.slideNumber - 1 === currentSlide ? CWL_LIGHT_GRAY : null}
                    minHeight="14%"
                    maxHeight="14%"
                    my={0}
                    py={0.5}
                    // mx={0.5}
                >
                    <div
                        className="preview-number"
                        style={{
                            color: slide.slideNumber - 1 === currentSlide ? CWL_YELLOW : "#FFF"
                        }}
                    >
                        {slide.slideNumber}
                    </div>
                    <SlidePreview 
                        key={slide.slideNumber}
                        slide={slide}
                    />
                </Box>
            ) : null}
        </Box>
    )
}

export default Preview