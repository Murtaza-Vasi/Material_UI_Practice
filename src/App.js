import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Notes from './pages/Notes';
import Create from './pages/Create';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Notes} />
          <Route path='/create' component={Create} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
