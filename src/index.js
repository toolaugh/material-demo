import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import { render, ReactDOM  } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import reducers from './reducers';
import sagas from './sagas';
import configs from './configs';

const enhencer = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const history = createBrowserHistory({
    basename: configs.BASE_URL,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    enhencer(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);
sagaMiddleware.run(sagas);

render (
    <Provider store={store}>
        <IntlProvider locale="en">
            <ConnectedRouter  history={history}>
                <div id="uGDgEhWIBl0N4Av2x"><App /></div>
            </ConnectedRouter>
        </IntlProvider>
    </Provider>,
    document.getElementById('root'),
);

//ReactDOM.render(<App />, document.getElementById('root'));
