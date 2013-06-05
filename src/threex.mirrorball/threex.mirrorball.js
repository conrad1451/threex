var THREEx	= THREEx || {};

THREEx.MirrorBall	= function(textureW){
	// handle parameter default
	textureW	= textureW || 1024;
		
	// create container
	var object	= new THREE.Object3D()
	this.object	= object

	// create the camera
	var camera	= new THREE.CubeCamera( 0.001, 1000, textureW );
	this.camera	= camera
	// to avoid flickering on the border of the sphere
	camera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
	object.add(camera)
	// create the ball itself
	var geometry	= new THREE.SphereGeometry(0.5, 32, 16)
	var material	= new THREE.MeshBasicMaterial()
	material.envMap	= camera.renderTarget
	material.color.set('gold')
	var sphere	= new THREE.Mesh(geometry, material)
	this.sphere	= sphere
	object.add(sphere)
}

THREEx.MirrorBall.prototype.update	= function(renderer, scene){
	this.sphere.visible	= false;	// *cough*
	this.camera.updateCubeMap(renderer, scene);
	this.sphere.visible	= true;		// *cough*	
}