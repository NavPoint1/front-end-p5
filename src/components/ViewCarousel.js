import React, { useState } from 'react'

import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';

import CarouselSlide from '../components/CarouselSlide'

const { red, blue, green } = require('@material-ui/core/colors');

const ViewCarousel = () => {
    const guide = useSelector(state => state.guide);

    const [open, setOpen] = useState(false)
    
    return (
        <div style={{ position: 'relative', width: '100%', height: 500 }}>
            <Button onClick={() => setOpen(true)}>
                Open carousel
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
                        media={<img src={slide.media} />}
                        mediaBackgroundStyle={{ backgroundColor: red[400] }}
                        style={{ backgroundColor: red[600] }}
                        title={slide.header}
                        subtitle={slide.content}
                    />
                )}
                {/* <CarouselSlide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
                mediaBackgroundStyle={{ backgroundColor: red[400] }}
                style={{ backgroundColor: red[600] }}
                title='This is a very cool feature'
                subtitle='Just using this will blow your mind.'
                />
                <CarouselSlide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
                mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                style={{ backgroundColor: blue[600] }}
                title='Ever wanted to be popular?'
                subtitle='Well just mix two colors and your are good to go!'
                />
                <CarouselSlide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
                mediaBackgroundStyle={{ backgroundColor: green[400] }}
                style={{ backgroundColor: green[600] }}
                title='May the force be with you'
                subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
                /> */}
            </AutoRotatingCarousel>
        </div>
    )
}

export default ViewCarousel