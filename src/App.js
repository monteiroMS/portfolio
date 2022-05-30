import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/projects" component={ Projects } />
      <Route path="/contact" component={ Contact } />
      <Route path="/404" component={ NotFound } />
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
