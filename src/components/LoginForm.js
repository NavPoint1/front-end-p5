import React, { useEffect } from 'react'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { Link as RouteLink, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { login, clearErrors } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const URL = "http://localhost:3000/"

const CWL_YELLOW = "#f2aa27"
const CWL_PURPLE = "#2d192d"

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://classicwow.live/" target="_blank">
        CWL Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: CWL_YELLOW
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
    color: CWL_YELLOW
  },
  root: {
      "& .MuiFilledInput-root": {
          background: CWL_PURPLE
      }
  },
  text: {
      color: CWL_YELLOW,
  },
  notchedOutline: {
      // borderWidth: '1px',
      borderColor: CWL_YELLOW + " !important"
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.loggedInUser);
  const errors = useSelector(state => state.errors);

  useEffect(() => {
    return dispatch(clearErrors());
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  
    // let username = event.target.username.value
    let email = event.target.email.value
    let password = event.target.password.value
  
    let user = {
      // username,
      email,
      password
    }
  
    fetch(URL + "login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if(data.id) {
          // store loggedInUser in state
          dispatch(login(data))
          // redirect to home
        }
        else {
          // print error message
          dispatch({
            type: "ERROR",
            payload: data
          })
          console.log(data)
        }
      })
  }

  return (
    Object.keys(loggedInUser).length !== 0
      ?
        <Redirect to="/" />
      :
        <div className="login-page-container">
          <div className="flex-container">
            <div className="login-form-wrapper">
              <div className="login-form-inner-wrapper">
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        InputLabelProps={{
                          classes: {
                              root: classes.label,
                              focused: classes.focusedLabel,
                          }
                        }} 
                        InputProps={{ 
                            classes: {
                                root: classes.text,
                                notchedOutline: classes.notchedOutline,
                            }
                        }}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputLabelProps={{
                          classes: {
                              root: classes.label,
                              focused: classes.focusedLabel,
                          }
                        }} 
                        InputProps={{ 
                            classes: {
                                root: classes.text,
                                notchedOutline: classes.notchedOutline,
                            }
                        }}
                      />
                      <div
                        className="login-errors"
                      >
                        {errors}
                      </div>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign In
                      </Button>
                      <Grid container>
                        {/* <Grid item xs>
                          <Link href="#" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid> */}
                        <Grid item>
                          <RouteLink className={"login-signup-redirect"} to="/register" variant="body2">
                            <Typography
                              className={classes.text}
                            >
                              Don't have an account? Sign Up
                            </Typography>
                          </RouteLink>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                  <Box mt={8}>
                    <Copyright />
                  </Box>
                </Container>
              </div>
            </div>
          </div>
        </div>
  );
}