import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Redirect, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
// import routes from './routes';
import './style.scss';
import components from "./components/All"

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');

injectTapEventPlugin();
const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

$('body').find('[data-react-class]').each(function(i, el) {
  const name  = $(el).data('react-class');
  const props = $(el).data('react-props');

  const component = components[name];

  if (component) {
    ReactDOM.render(
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {React.createElement(component, props)}
        </MuiThemeProvider>
      </Provider>,
    el);
  } else {
    console.error("Can't find component ", name);
  }
});
