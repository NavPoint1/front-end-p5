import React from 'react'

import { useDispatch, useSelector } from 'react-redux';

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUser);

    return (
        <div className="default-container profile-container">
            Profile
            {loggedInUser.username}
            {loggedInUser.id}
            {loggedInUser.email}
        </div>
    )
}

export default ProfileContainer