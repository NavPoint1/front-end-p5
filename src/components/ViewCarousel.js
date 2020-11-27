import React, { useState } from 'react'

import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import Button from '@material-ui/core/Button';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

import { useSelector } from 'react-redux';

import CarouselSlide from '../components/CarouselSlide'

const { red, blue, green } = require('@material-ui/core/colors');

const ViewCarousel = () => {
    const guide = useSelector(state => state.guide);

    const [open, setOpen] = useState(false)
    
    return (
        // <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <div
            className="flex-container"
        >
            <Button
                className="open-carousel-button"
                onClick={() => setOpen(true)}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ViewCarouselIcon />}
            >
                View Guide
            </Button>
            <AutoRotatingCarousel
                label='Get started'
                open={open}
                onClose={() => setOpen(false)}
                onStart={() => setOpen(false)}
                mobile
                autoplay={false}
                style={{ position: 'absolute' }}
            >
                {guide.slides.map(slide => 
                    <CarouselSlide
                        key={slide.id}
                        media={slide.media}
                        mediaBackgroundStyle={{ backgroundColor: red[400] }}
                        style={{ backgroundColor: red[600] }}
                        header={slide.header}
                        content={slide.content}
                    />
                )}
            </AutoRotatingCarousel>
        </div>
    )
}

export default ViewCarousel