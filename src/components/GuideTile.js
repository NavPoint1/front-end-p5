import React from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom'

const URL = "http://localhost:3000"

const GuideTile = (props) => {

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <Link to={"guides/" + props.guide.id}>
                    <div>{props.guide.title}</div>
                    <div className="flex-container">
                        <img className="guide-show-thumbnail" src={URL + props.guide.thumbnail_url} />
                    </div>
                </Link>
            </Card>
        </Grid>
    )
}

export default GuideTile