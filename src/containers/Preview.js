import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import { moveSlide, setCurrentSlide } from '../actions';

import SlidePreview from '../components/SlidePreview'

// const CWL_YELLOW = "#f2aa27"
// const CWL_PURPLE = "#2d192d"
const CWL_LIGHT_GRAY = "#808080"

const Preview = () => {
    const dispatch = useDispatch();
    // const loggedInUser = useSelector(state => state.loggedInUser);
    // const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);
    const currentSlide = useSelector(state => state.currentSlide)

    const [draggedSlide, setDraggedSlide] = useState(null)
    const [mouseY, setMouseY] = useState(null)

    return (
        <Box 
            onMouseMove={(e) => setMouseY(e.clientY)}
            onMouseUp={() => {
                if(draggedSlide) {
                    let newPos = 1 + Math.floor((mouseY - 174 + (109 / 2)) / 109)
                    if (newPos > draggedSlide) {
                        newPos--
                    }
                    if (newPos > slides.length) {
                        newPos = slides.length
                    }
                    dispatch(moveSlide(draggedSlide, newPos))
                    dispatch(setCurrentSlide(newPos - 1))
                    setDraggedSlide(null)
                }
            }}
            onMouseLeave={() => setDraggedSlide(null)}
            border={1} 
            borderColor={CWL_LIGHT_GRAY}
            mx={0} 
            px={0.5}
            paddingTop={0.5} 
            width="200px"
            minWidth="200px"
            maxHeight="81vh"
            style={{
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            {draggedSlide
                ?
                    <div
                        className="preview-drag-line"
                        color="primary"
                        style={{
                            left: 19,
                            width: "180px",
                            // bottom: mouseY ? 800 + mouseY : 800
                            bottom: 956 - mouseY
                        }}
                    />
                :
                    null
            }
            {slides.length > 0 ? slides.map((slide) => 
                <Box 
                    onMouseDown={(e) => {
                        e.preventDefault()
                        setDraggedSlide(slide.slideNumber)
                    }}
                    key={slide.slideNumber}
                    display="flex" 
                    bgcolor={slide.slideNumber - 1 === currentSlide ? CWL_LIGHT_GRAY : null}
                    minHeight="100px"
                    maxHeight="100px"
                    my={0}
                    py={0.5}
                    // mx={0.5}
                >
                    <div
                        className={"preview-number " + (slide.slideNumber - 1 === currentSlide ? "preview-number-highlighted" : "")}
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