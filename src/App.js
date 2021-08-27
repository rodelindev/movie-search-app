import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/detail/:movieid'} component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
