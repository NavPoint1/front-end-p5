import React, { useEffect } from 'react'

import Button from '@material-ui/core/Button';

import { Redirect, useParams } from 'react-router-dom'

// import { editGuide } from '../actions';
import { loadGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import NotFound from '../components/NotFound'
import ViewCarousel from '../components/ViewCarousel'

const URL = "http://localhost:3000"

const GuideShow = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);

    useEffect(() => {
        if (Object.keys(guide).length === 0) {
            dispatch(loadGuide(id))
        }
    },[])

    return (
        Object.keys(guide).length === 0
            ?
                <NotFound />
            :
                <>
                    {guide.user.id === loggedInUser.id
                        ?
                            <Button>
                                Edit
                            </Button>
                        :
                            null
                    }
                    <div className="default-container guide-show-container">
                        <div>
                            <div
                                className="guide-show-title"
                            >
                                {guide.title}
                            </div>
                            <div
                                className="guide-show-author"
                            >
                                by {guide.user.username.charAt(0).toUpperCase() + guide.user.username.slice(1)}
                            </div>
                            <div
                                className="flex-container"
                            >
                                <img
                                    className="guide-show-thumbnail"
                                    src={guide.thumbnail_url ? URL + guide.thumbnail_url : "https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"}
                                />
                            </div>
                            <ViewCarousel />
                        </div>
                    </div>
                </>
    )
}

export default GuideShow