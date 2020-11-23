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

const Preview = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);
    const slides = useSelector(state => state.slides);

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (Object.keys(guide).length !== 0) {
            dispatch(clearGuide())
        }
        setLoaded(true)
    },[])

    const handleSubmit = (event) => {
        // event.preventDefault()

        // // build guide
        // let title = event.target.title.value
        // let user_id = loggedInUser.id

        // let newGuide = {
        //     title,
        //     user_id,
        //     // attach slides
        //     slides
        // }

        // // dispatch to state
        // dispatch(createGuide(newGuide))
    }

    return (
        <div id="preview">
            <Box border={1} margin="auto" p={1} width="100%">

            </Box>
        </div>
    )
}

export default Preview