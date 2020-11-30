import React from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { Link } from 'react-router-dom'

const URL = "http://localhost:3000"

const useStyles = makeStyles({
    root: {
    //   maxHeight: 145,
        height: 280,
        backgroundColor: "#000"
    },
    media: {
      height: 140,
    },
    dividerColor: {
        backgroundColor: '#808080',
    },
  });

const GuideTile = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={2}>
            <Card className={classes.root}>
                <CardActionArea>
                    <Link 
                        className="index-tile-link"
                        to={"guides/" + props.guide.id}
                    >
                        <CardMedia
                            className={classes.media}
                            image={URL + props.guide.thumbnail_url}
                        />
                        <div className="index-tile-card-content">
                            <Typography 
                                component="p" 
                                className="index-tile-text index-tile-title"
                            >
                                {/* <div>{props.guide.title}</div> */}
                                {props.guide.title}
                            </Typography>
                            <Typography gutterBottom component="p" className="index-tile-text">
                                {/* <div>{props.guide.title}</div> */}
                                {props.guide.user.username.charAt(0).toUpperCase() + props.guide.user.username.slice(1)}
                            </Typography>
                            <CardContent className="index-tile-bottom-bar">
                                <Divider 
                                    className={classes.dividerColor} 
                                    variant="middle" 
                                    style={{
                                        marginLeft: '-10px',
                                        maxWidth: '95%'
                                    }}
                                />
                                <Grid
                                    container
                                    spacing={1}
                                    style={{
                                        paddingTop: '10px',
                                    }}
                                >
                                    <Grid item xs={12} sm={1}>
                                        <VisibilityIcon
                                            edge="end" 
                                            style={{
                                                marginTop: '-3px'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Typography 
                                            variant="body2" 
                                            color="white" 
                                            component="p"
                                            style={{
                                                paddingLeft: '2px'
                                            }}
                                        >
                                            {props.guide.views}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <ThumbUpIcon 
                                            // edge="end" 
                                            style={{
                                                marginTop: '-3px'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Typography 
                                            variant="body2" 
                                            color="white" 
                                            component="p"
                                            style={{
                                                paddingLeft: '4px'
                                            }}
                                        >
                                            {props.guide.likes.length}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </div>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default GuideTile