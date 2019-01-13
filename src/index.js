import "./main.scss";
import * as THREE from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 1;
const FAR = 10000;

const container = document.querySelector("#container");

const renderer = new THREE.WebGLRenderer({
  alpha: true
});
const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

const scene = new THREE.Scene();
scene.add(camera);

// renderer.setSize(WIDTH, HEIGHT);
// renderer.setClearColorHex(0x000000, 1);

// container.appendChild(renderer.domElement);

document.body.appendChild(renderer.domElement);

// var camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   1,
//   10000
// );
// camera.position.set(0, 0, 100);
// camera.lookAt(new THREE.Vector3(0, 0, 0));

/*
 * ADD ASSETS
 */

// var material = new THREE.MeshNormalMaterial();
// var geometry = new THREE.BoxGeometry( 50, 50, 50 );
// var mesh = new THREE.Mesh( geometry, material );

// // Add cube to scene
// scene.add(mesh);

var cubes = [];

for (var i = 0; i < 100; i++) {
  var material = new THREE.MeshNormalMaterial();
  var geometry = new THREE.BoxGeometry(50, 50, 50);
  var mesh = new THREE.Mesh(geometry, material);

  // Give each cube a random position
  mesh.position.x = Math.random() * 1000 - 500;
  mesh.position.y = Math.random() * 1000 - 500;
  mesh.position.z = Math.random() * 1000 - 500;

  scene.add(mesh);

  // Store each mesh in array
  cubes.push(mesh);
}

/*
 * ANIMATE
 */

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  for (var i = 0; i < cubes.length; i++) {
    cubes[i].rotation.x += 0.01;
    cubes[i].rotation.y += 0.02;
  }

  renderer.render(scene, camera);
}
animate();
