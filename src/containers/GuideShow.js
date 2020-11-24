import React, { useEffect } from 'react'

import Button from '@material-ui/core/Button';

import { Redirect, useParams } from 'react-router-dom'

// import { editGuide } from '../actions';
import { loadGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import NotFound from '../components/NotFound'

const URL = "http://localhost:3000"

const GuideShow = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);

    useEffect(() => {
        console.log(id)
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
                    <div className="guide-show">
                        Guide Show
                        <div>{guide.title}</div>
                        <div>by {guide.user.username}</div>
                        <img src={guide.thumbnail_url ? URL + guide.thumbnail_url : "https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"}/>
                    </div>
                </>
    )
}

export default GuideShow