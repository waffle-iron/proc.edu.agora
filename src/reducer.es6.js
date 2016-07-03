import defaultState from './state.es6.js';
import * as scene from './reducers/scene.es6.js';
import * as renderer from './reducers/renderer.es6.js';

const defaultActionType = 'NULL_ACTION';

const reducers = {
  scene, renderer
};

function camelCase(str) {
  if (str.length === 1) {{
    return str[0].toLowerCase();
  }}

  return str[0].toLowerCase() +
  str.slice(1)
  .map(bit => {
    return `${bit.substr(0, 1).toUpperCase()+bit.substr(1).toLowerCase()}`;
  }).join('');
}

export default function stateUpdater(
  state = defaultState,
  action = { type: defaultActionType }
) {
  //We got an error, stop everything
  if (action.type.indexOf('ERROR') === 0) {
    const errors = Object.assign({}, state.errors).concat([action.type]);
    console.error(errors);
    return Object.assign({}, state, { running: false, errors });
  }

  //Redux private stuff, we don't mind but we don't care
  if (action.type.indexOf('@@redux') === 0) {
    return state;
  }

  const splitted = action.type.split('_');
  const reducer = splitted[0].toLowerCase();
  const fn = camelCase(splitted.slice(1));

  if (reducers[reducer]) {
    if (reducers[reducer][fn]) {
      return reducers[reducer][fn](state, action);
    } else if (reducers[reducer].reduce) {
      return reducers[reducer].reduce(state, action);
    }
  }

  //Sadly, we didn't find what we were looking for, we must be cautious
  console.warn(`no reducer found for action "${action.type}"`, action, reducers, fn);

  return state;
}
