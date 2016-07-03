import THREE from 'three';
import store from '../store.es6.js';
import state from '../state.es6.js';

export function noRenderer() {
  if (!state.renderer instanceof THREE.WebGLRenderer) {
    console.info(state.renderer instanceof THREE.WebGLRenderer, state.renderer);
    store.dispatch({ type: 'ERROR_NO_WEBGL_RENDERER '});
    return true;
  }
  return false;
}

// export function over() {
//   return noRenderer() ? false :
//   store.dispatch({ type: 'GAME_OVER' });
// }

// export function pause() {
//   return noRenderer() ? false :
//   store.dispatch({ type: 'GAME_PAUSE' });
// }

// export function resume() {
//   return noRenderer() ? false :
//   store.dispatch({ type: 'GAME_RESUME' });
// }

// export function run() {
//   return noRenderer() ? false :
//   store.dispatch({ type: 'GAME_RUN' });
// }

// export function stop() {
//   return noRenderer() ? false :
//   store.dispatch({ type: 'GAME_STOP' });
// }

// export function menu() {
//   return noRenderer() ? false :
//   store.dispatch({ type: 'GAME_MENU' });
// }
