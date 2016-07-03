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

export function attach() {
  return noRenderer() ? false :
  store.dispatch({ type: 'RENDERER_ATTACH' });
}

export function clear() {
  return noRenderer() ? false :
  store.dispatch({ type: 'RENDERER_CLEAR' });
}

export function enableShadowMap() {
  return noRenderer() ? false :
  store.dispatch({ type: 'RENDERER_ENABLE_SHADOW_MAP' });
}

export function init() {
  store.dispatch({ type: 'RENDERER_INIT' });
}

export function resize() {
  return noRenderer() ? false :
  store.dispatch({ type: 'RENDERER_SET_SIZE' });
}

export function render() {
  return noRenderer() ? false :
  store.dispatch({ type: 'RENDERER_RENDER' });
}
