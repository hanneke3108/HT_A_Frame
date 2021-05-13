// changing individual properties with code and using setInterval
var rotationSpeed = -0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	var rotationAxis = myOtherBox.object3D.rotation.x + myOtherBox.object3D.rotation.y + myOtherBox.object3D.rotation.z += rotationSpeed;
	console.log(rotationAxis);
}

setInterval(spin, 16); //equivalent to 60 fps