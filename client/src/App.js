import './App.scss';
import HomePage from './components/HomePage/HomePage'
import LandingPage from './components/LandingPage/LandingPage'
import CreateGamePage from './components/CreateGamePage/CreateGamePage'
import Page404 from './components/Page404/Page404'
// react-rouder-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailPage from './components/DetailPage/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="sr-only">THE GAMEROOM</h1>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/videogame/:id" component={DetailPage} />
          <Route exact path="/create-videogame" component={CreateGamePage} />
          <Route path="*" component={Page404} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
