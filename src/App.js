import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>This is the home page</h1>
  </div>
);

const AlternatePage = () => (
  <div>
    <h1>This is an Alternate page</h1>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/alternate" component={AlternatePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
