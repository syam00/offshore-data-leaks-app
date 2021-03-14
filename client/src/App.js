import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './components/home';


function App() {
  return (
    <BrowserRouter basename="/">
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
