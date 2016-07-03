import { createStore } from 'redux';
import defaultState from './state.es6.js';
import stateUpdater from './reducer.es6.js';

let store = createStore(stateUpdater);

export default store;
