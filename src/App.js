import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:username/profile" exact>
           <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
