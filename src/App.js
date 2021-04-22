import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Notes from './pages/Notes';
import Create from './pages/Create';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact component={Notes} />
          <Route path='/create' component={Create} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
