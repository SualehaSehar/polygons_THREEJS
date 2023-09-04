var scene = new THREE.Scene();
scene.background = new THREE.Color( '#ffffff');
var camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight,0.5, 1000);

camera.position.z = 10;

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// toroidal 

let points = [];
var x;
var y;
for (let i = 0; i <= 40 ; i += 0.1) {
    let t = 2*(Math.PI/40) * i;
    a = 2
    b=5
    c= 15
    x = (a*Math.sin(c*t)+b)*Math.cos(t)
    y =(a*Math.sin(c*t)+b)*Math.sin(t)
    z=a * Math.cos(c*t)
    points.push( new THREE.Vector3(x, y, z) );
}

var material = new THREE.LineBasicMaterial( { color: 'blue'} );
var geometry = new THREE.Geometry().setFromPoints( points );
var toroidal = new THREE.Line( geometry, material );

scene.add(toroidal);
toroidal.rotation.x += 2.8;
function render(){       
    requestAnimationFrame(render);
    
    renderer.render(scene, camera);
}

render();
