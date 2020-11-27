import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Slide } from 'material-auto-rotating-carousel';

const CarouselSlide = (props) => {
    const { red } = require('@material-ui/core/colors');

    const styles = {
    root: {
        backgroundColor: red[600],
        // height: 400,
        // width: 800
    },
    media: {
        backgroundColor: red[400]
    }
    }

    const StyledSlide = withStyles(styles)(Slide);

    return(
        <StyledSlide
            media={props.media}
            title={props.title}
            subtitle={props.subtitle}
            mobile
            landscape
            ButtonProps="disabled"
        />
    )
    // return (
    //     <div>A</div>
    // )
}

export default CarouselSlide