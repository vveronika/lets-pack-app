import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeScreen from './screens/Home';
import FormScreen from './screens/Form';
import UnderConstructionScreen from './screens/UnderConstruction';
import store from './redux/store';
import { createBrowserHistory } from 'history';
import TopBar from './components/TopBar';
import {AppContainer} from './style';
import Footer from './components/Footer';

const App = () => {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <AppContainer>
        <TopBar title="Let's pack!" subtitle="Get everything you need before your next journey" />
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              component={HomeScreen}
            />
            <Route
              exact
              path="/form"
              component={FormScreen}
            />
            <Route
              exact
              path="/under-construction"
              component={UnderConstructionScreen}
            />
          </Switch>
        </Router>
        <Footer />
      </AppContainer>
    </Provider>
  );
};

export default App;
