import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#04B6B9',
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: '#626262',
    },
    text: {
      primary: '#626262'
    },
  },
  spacing: 10,
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
