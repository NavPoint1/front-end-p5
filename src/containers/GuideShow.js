import React, { useEffect } from 'react'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { Redirect, useParams } from 'react-router-dom'

// import { editGuide } from '../actions';
import { loadGuide, likeGuide, clearGuides } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import NotFound from '../components/NotFound'
import ViewCarousel from '../components/ViewCarousel'

const URL = "http://localhost:3000"

const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"

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
                <div className="default-container guide-show-container">
                    {guide.user.id === loggedInUser.id
                        ?
                            <div className="guide-show-edit-container">
                                <Button
                                    className="guide-show-edit-button"
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                >
                                    Edit this guide
                                </Button>
                            </div>
                        :
                            null
                    }
                    {guide.user.id !== loggedInUser.id && Object.keys(loggedInUser).length > 0
                        ?
                        <>
                            <div className="guide-show-like-container">
                                <IconButton
                                    onClick={() => dispatch(likeGuide(id, loggedInUser.id))}
                                    variant="contained"
                                    color={guide.likes.filter(like => like.user_id === loggedInUser.id).length > 0 ? "secondary" : "primary"}
                                    children={<ThumbUpIcon />}
                                    size="medium"
                                    edge="end"
                                    style={{
                                        backgroundColor: guide.likes.filter(like => like.user_id === loggedInUser.id).length > 0 ? CWL_YELLOW : CWL_PURPLE
                                    }}
                                />
                                <div className="guide-show-likes-text">
                                    {guide.likes.length}
                                </div>
                            </div>
                        </>
                        :
                            <div className="guide-show-like-container">
                                <ThumbUpIcon
                                    color="white"
                                />
                                <div className="guide-show-likes-text">
                                    {guide.likes.length}
                                </div>
                            </div>
                    }
                    <div className="guide-show-main-container">
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
                        <div className="guide-show-views-container">
                            <div className="guide-show-views">
                                {guide.views} views
                            </div>
                        </div>
                        <div className="flex-container">
                            <img
                                className="guide-show-thumbnail"
                                src={guide.thumbnail_url ? URL + guide.thumbnail_url : "https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"}
                            />
                        </div>
                        <ViewCarousel />
                    </div>
                </div>
    )
}

export default GuideShow