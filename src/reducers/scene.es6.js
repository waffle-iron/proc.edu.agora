import THREE from 'three';
import defaultState from '../state.es6.js';

export function init(state, action) {
  const scene = new THREE.Scene();
  return Object.assign({}, state, { scene });
}

// export function remove(state, action) {
//   const scene = Object.assign({}, state.scene);
//   scene.remove(action.name);
//   return Object.assign({}, state, { scene });
// }

// export function up(state, action) {
// }

export function reduce(state = defaultState, action) {
  switch (action.type) {
    case 'SCENE_INIT':
      return init(state, action);
    // case 'SCENE_REMOVE':
    //   return remove(state, action);
    // case 'SCENE_UP':
    //   return up(state, action);
    default:
      return state;
  }
}
