import THREE from 'three';
import defaultState from '../state.es6.js';

export function attach(state, action) {
  document.body.appendChild(
    state.renderer.domElement
  );
  return state;
}

export function clear(state, action) {
  state.renderer.clear();
  return state;
}

export function enableShadowMap(state, action) {
  const rendererESM = Object.assign({}, state.renderer);
  rendererESM.shadowMap.enabled = true;
  return Object.assign({}, state, {
    renderer: rendererESM
  });
}

export function init(state, action) {
  return Object.assign({}, state, {
    renderer: new THREE.WebGLRenderer()
  });
}

export function render(state, action) {
  state.renderer.render(
    state.scene,
    state.camera
  );
  return state;
}

export function setSize(state, action) {
    state.renderer.setSize(
      state.w * state.zoom,
      state.h * state.zoom
    );
    return state;
}
