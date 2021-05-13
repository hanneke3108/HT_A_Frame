// changing individual properties with code and using setInterval
var rotationSpeed = -0.01;
var myOtherBox = document.getElementById('myOtherBox');
var axis = new THREE.Vector3(4, 0, 7);

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotationOnAxis(axis, rotationSpeed));
}

setInterval(spin, 16); //equivalent to 60 fps