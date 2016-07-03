import store from '../store.es6.js';
import noRenderer from './renderer.es6.js';

export function init() {
  store.dispatch({ type: 'SCENE_INIT' });
}

// export function remove(name) {
//   store.dispatch({ type: 'SCENE_REMOVE', name });
// }
//
// export function up() {
//   store.dispatch({ type: 'SCENE_UP' })
// }
