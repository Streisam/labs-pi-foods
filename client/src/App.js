import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import CreationForm from './components/CreationForm/CreationForm';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/recipes/:id' component={RecipeDetails}/>
          <Route exact path='/create' component={CreationForm}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
