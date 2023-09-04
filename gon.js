var scene = new THREE.Scene();
scene.background = new THREE.Color('0xffffff');
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.5, 1000);

camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

sides = 3

radius = 1;
cx = 0;
cy = 0;
var f=4;
//startangle = Math.PI / 2;
//startangle = 0;

for (let j = 0; j < 12; j++) {
    vertices=[];
    for (let i = 0; i <= sides; i++) {
        if(j%2!=0){startangle=Math.PI / f;}
        else{startangle = 0;}
        
        radian = i * ((2.0 * Math.PI) / sides) + startangle;

        let points = new THREE.Vector3(
            radius * Math.cos(radian) + cx,
            radius * Math.sin(radian) + cy,
            0

        )
        vertices.push(points);
    }
    sides++;
    radius+=0.2;
    cx+=0.22;
    f+=0.5;
    

    var geometry = new THREE.Geometry().setFromPoints(vertices);
    var material = new THREE.LineBasicMaterial({ color: 'red' });
    var polygon = new THREE.Line(geometry, material);
    scene.add(polygon);

}

renderer.render(scene, camera);