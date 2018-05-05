import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { darkBaseTheme } from 'material-ui/styles';
import { AppBar } from 'material-ui';

var muiTheme = getMuiTheme(darkBaseTheme)
muiTheme.userAgent = (typeof navigator !== 'undefined' && navigator.userAgent) || 'all'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar showMenuIconButton={false} title="SomeTitle"/>
        <MyAwesomeReactComponent/>
      </MuiThemeProvider>
    );
  }
}

export default App;
