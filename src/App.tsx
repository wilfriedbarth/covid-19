import React from 'react';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Provider } from 'jotai';
import { Page1 } from 'pages/Page1';
import { Page2 } from 'pages/Page2';
import { globalScope } from 'appState';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <ReactQueryCacheProvider queryCache={new QueryCache()}>
      <ReactQueryDevtools />
      <Provider scope={globalScope}>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/page1">Page1</Link>
              </li>
              <li>
                <Link to="/page2">Page2</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ReactQueryCacheProvider>
  );
}

export default App;
