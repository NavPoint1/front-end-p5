import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom'

import { createGuide } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const GuideCreator = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);
    const guide = useSelector(state => state.guide);

    const handleSubmit = (event) => {
        event.preventDefault()

        let title = event.target.title.value
        let user_id = loggedInUser.id

        let newGuide = {
            title,
            user_id
        }

        // dispatch to state
            // why...? because we're about to redirect to its show page...?
            // dispatch guide to state will allow us to redirect to show page!
        dispatch(createGuide(newGuide))
    }

    return (
        Object.keys(loggedInUser).length === 0
              ?
                <Redirect to="/" />
              :
              Object.keys(guide).length !== 0
                ?
                    <Redirect to={"/guides/" + guide.id} />
                :
                    <div className="guide-creator">
                        <form onSubmit={handleSubmit} noValidate>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="guide-title-field"
                            label="Title"
                            name="title"
                            autoFocus
                            />
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                            Submit
                            </Button>
                        </form>
                    </div>
    )
}

export default GuideCreator