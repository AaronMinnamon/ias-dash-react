import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';

import team from './data/team';

const defaultState = {
    team,
};

const store = createStore(rootReducer, defaultState);

export default store;
