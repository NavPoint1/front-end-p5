import React, { /* useState, */ useEffect } from 'react'

import Grid from '@material-ui/core/Grid';

import { loadGuides, clearGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import GuideTile from '../components/GuideTile'
// import NotFound from '../components/NotFound'

const GuidesIndex = () => {
    const dispatch = useDispatch();
    const guides = useSelector(state => state.guides);

    // const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(clearGuide())
        // dispatch(clearGuides())
        dispatch(loadGuides())
    },[])

    return (
        <div className="default-container guides-index-page">
            <div className="flex-container guides-index-page-header">
                Index
            </div>
            <div className="guides-index-container">
                <Grid container spacing={2}>
                    {guides.length > 0 ? guides.map(guide => <GuideTile key={guide.id} guide={guide} /> ) : null}
                </Grid>
            </div>
        </div>
    )
}

export default GuidesIndex