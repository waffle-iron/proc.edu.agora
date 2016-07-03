import 'babel-polyfill';
import state from './state.es6.js';

import * as scene from './actions/scene.es6.js';
import * as renderer from './actions/renderer.es6.js';
// import * as camera from './actions/camera.es6.js';

function update(){
  if (state.running) {
    renderer.clear();
    requestAnimationFrame(update);
    renderer.render();
  }
}

scene.init();
renderer.init();
renderer.enableShadowMap();
renderer.resize();
renderer.attach();

// update();
