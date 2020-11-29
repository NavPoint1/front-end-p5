import React, { useState, useEffect } from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { loadGuides, clearGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import GuideTile from '../components/GuideTile'

const GuidesIndex = () => {
    const dispatch = useDispatch();
    const guides = useSelector(state => state.guides);
    const guide = useSelector(state => state.guide);

    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(clearGuide())
        if (guides.length === 0) {
            dispatch(loadGuides())
            // dispatch(loadGuides(currentPage))
        }
    },[])

    return (
        <div className="default-container">
            <div className="guides-index">
                Index
                <Grid container spacing={2}>
                    {guides.map(guide => <GuideTile key={guide.id} guide={guide} /> )}
                </Grid>
            </div>
        </div>
    )
}

export default GuidesIndex