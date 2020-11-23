import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
// import { makeStyles } from '@material-ui/core/styles';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import reducers from './reducers'; // implicitly knows to look in index.js

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, composeEnhancers(
    applyMiddleware(thunk)
));

const theme = createMuiTheme({
  palette: {
    primary:  {
      main: '#f2aa27'
      // main: '#2d192d'
    },
    secondary: {
      // main: '#f2aa27'
      main: '#2d192d'
    },
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

// const CWL_YELLOW = "#f2aa27"
// const CWL_PURPLE = "#2d192d"

// const useStyles = makeStyles((theme) => ({
//     label: {
//         color: CWL_YELLOW
//     },
//     root: {
//         "& .MuiFilledInput-root": {
//             background: CWL_PURPLE
//         }
//     },
//     text: {
//         color: CWL_YELLOW
//     },
//     notchedOutline: {
//         // borderWidth: '1px',
//         borderColor: CWL_YELLOW + " !important"
//     },
//   }))

//   const classes = useStyles();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root')
);
