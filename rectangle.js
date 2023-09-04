var scene = new THREE.Scene();
scene.background = new THREE.Color('0xffffff');
var camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight,0.5, 1000);

camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

sides = 4
var geometry = new THREE.Geometry();
radius = 1;
var startangle=Math.PI/ 4;
cx=0;
cy=0;

for (let i = 0; i <= sides; i++) {


    radian = i * ((2*Math.PI) / sides)+startangle;

    let points = new THREE.Vector3(
        radius * Math.cos(radian)+cx,
        radius * Math.sin(radian)+cy,
        0

    )
    geometry.vertices.push(points);
}

var material = new THREE.LineBasicMaterial({ color: 'red' });
var polygon = new THREE.Line(geometry, material);
scene.add(polygon);

renderer.render(scene, camera);