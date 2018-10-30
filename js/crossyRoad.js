// TODO: CAMBIAR FORMA DE LOS DIFRERENTES OBJETOS, INTERACCIONES CAMBIO DE SOLO UN CONSOLE LOG, SCORE Y RESTART.

var renderer = null,
scene = null,
camera = null,
root = null,
group = null,
car = null,
orbitControls = null,
chicken = null,
log = null,
tree = null,
move = null;
var duration = 20000; // ms
var currentTime = Date.now();
var canvas = null;
var key_pressed = false;
var cars = [];
var trees = [];
var logs = [];
var game = false;
var clock = new THREE.Clock();
var carCount = 0;
var score = 0;

function createSections() {
    // First section == grass
    geometry = new THREE.PlaneGeometry(200, 6, 50, 50);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:0x5fba51, side:THREE.DoubleSide}));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -.75;
    mesh.position.z = -2;
    mesh.tag = 'grass';
    group.add(mesh);

    for(var i = 0; i <= 15; i++) { /////// ******************** TREES
        var material = new THREE.MeshPhongMaterial({ color: 0x2F7610 });
        geometry = new THREE.CubeGeometry(1, 1, 1);
        tree = new THREE.Mesh(geometry, material);
        tree.position.x = Math.random() * (110 - -110) + -110;
        tree.position.y = 0;
        tree.position.z = Math.random() * (-2 - -4) + -4;
        tree.castShadow = true;
        tree. receiveShadow = true;
        trees.push(tree);
        scene.add(tree);
    }

    // Second section == road
    geometry = new THREE.PlaneGeometry(200, 6, 50, 50);
    mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:0xbbbbbb, side:THREE.DoubleSide}));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -.75;
    mesh.position.z = -8;
    mesh.tag = 'road';
    group.add(mesh);

    for(var i = 0; i <= 15; i++) {  /////// ******************** CARS
        var material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
        geometry = new THREE.CubeGeometry(1, 1, 1);
        car = new THREE.Mesh(geometry, material);
        car.position.x = Math.random() * (110 - -110) + -110;
        car.position.y = 0;
        car.position.z = Math.random() * (-8 - -5.5) + -5.5;
        car.castShadow = true;
        car. receiveShadow = true;
        cars.push(car);
        scene.add(car);
    }

    // Third section == water
    geometry = new THREE.PlaneGeometry(200, 6, 50, 50);
    var water = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:0x00ffff, side:THREE.DoubleSide}));
    water.rotation.x = -Math.PI / 2;
    water.position.y = -.75;
    water.position.z = -14;
    water.tag = 'water';
    group.add(water);

    for(var i = 0; i <= 15; i++) {  /////// ******************** LOGS
        var material = new THREE.MeshPhongMaterial({ color: 0x783F04 });
        geometry = new THREE.CubeGeometry(1, 1, 1);
        log = new THREE.Mesh(geometry, material);
        log.position.x = Math.random() * (110 - -110) + -110;
        log.position.y = 0;
        log.position.z = Math.random() * (-16.5 - -11.5) + -11.5;
        log.castShadow = true;
        log. receiveShadow = true;
        logs.push(log);
        scene.add(log);
    }

    // Fourth section == grass
    geometry = new THREE.PlaneGeometry(200, 6, 50, 50);
    mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:0x5fba51, side:THREE.DoubleSide}));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -.75;
    mesh.position.z = -20;
    mesh.tag = 'grass';
    group.add(mesh);

    for(var i = 0; i <= 15; i++) {  /////// ******************** TREES
        var material = new THREE.MeshPhongMaterial({ color: 0x2F7610 });
        geometry = new THREE.CubeGeometry(1, 1, 1);
        tree = new THREE.Mesh(geometry, material);
        tree.position.x = Math.random() * (110 - -110) + -110;
        tree.position.y = 0;
        tree.position.z = Math.random() * (-22 - -19.5) + -19.5;
        tree.castShadow = true;
        tree. receiveShadow = true;
        trees.push(tree);
        scene.add(tree);
    }

    // Fifth section == water
    geometry = new THREE.PlaneGeometry(200, 6, 50, 50);
    water = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:0x00ffff, side:THREE.DoubleSide}));
    water.rotation.x = -Math.PI / 2;
    water.position.y = -.75;
    water.position.z = -26;
    water.tag = 'water';
    group.add(water);

    for(var i = 0; i <= 15; i++) { /////// ******************** LOGS
        var material = new THREE.MeshPhongMaterial({ color: 0x783F04 });
        geometry = new THREE.CubeGeometry(1, 1, 1);
        log = new THREE.Mesh(geometry, material);
        log.position.x = Math.random() * (110 - -110) + -110;
        log.position.y = 0;
        log.position.z = Math.random() * (-27 - -23.5) + -23.5;
        log.castShadow = true;
        log. receiveShadow = true;
        logs.push(log);
        scene.add(log);
    }

    // Sixth section == road
    geometry = new THREE.PlaneGeometry(200, 6, 50, 50);
    mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:0xbbbbbb, side:THREE.DoubleSide}));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -.75;
    mesh.position.z = -32;
    mesh.tag = 'road';
    group.add(mesh);

    for(var i = 0; i <= 15; i++) {  /////// ******************** CARS
        material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
        geometry = new THREE.CubeGeometry(1, 1, 1);
        car = new THREE.Mesh(geometry, material);
        car.position.x = Math.random() * (100 - -100) + -100;
        car.position.y = 0;
        car.position.z = Math.random() * (-34 - -30) + -30;
        car.castShadow = true;
        car. receiveShadow = true;
        cars.push(car);
        scene.add(car);
    }

    // Last section == grass
    geometry = new THREE.PlaneGeometry(200, 6, 50, 50);
    mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:0x5fba51, side:THREE.DoubleSide}));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -.75;
    mesh.position.z = -38;
    mesh.tag = 'grass';
    group.add(mesh);

    for(var i = 0; i <= 15; i++) {  /////// ******************** TREES
        var material = new THREE.MeshPhongMaterial({ color: 0x2F7610 });
        geometry = new THREE.CubeGeometry(1, 1, 1);
        tree = new THREE.Mesh(geometry, material);
        tree.position.x = Math.random() * (110 - -110) + -110;
        tree.position.y = 0;
        tree.position.z = Math.random() * (-40 - -37) + -37;
        tree.castShadow = true;
        tree. receiveShadow = true;
        trees.push(tree);
        scene.add(tree);
    }
}

function onKeyDown(event){
    if (!key_pressed) {
        //console.log(event.keyCode);
        switch(event.keyCode){
            case 38:
                chicken.position.z -= 1;
                score++;
                break;
            case 37:
                chicken.position.x -= 1;
                score++;
                break;
            case 39:
                chicken.position.x += 1;
                score++;
                break;
            // case 40:
            //     chicken.position.z += 1;
            //     score++;
            //     break;
        }
        key_pressed = true;
        // console.log(score);
    }
}

function onKeyUp(event){
    key_pressed = false;
}

function run() {
    requestAnimationFrame(function() { run(); });
    // Render the scene
    renderer.render( scene, camera );

    // Update the animations
    KF.update();

    // Update the camera controller
    orbitControls.update();

    if(game){
        moveObjects();
        checkCollisions(); // Check for colisions
    }
}

function moveObjects(){
    var delta = clock.getDelta();

    for (car of cars) {
        if(car.position.x > 100){
            car.position.x = -100;
        } else {
            car.translateX(delta * 5);
        }
    }

    for (log of logs) {
        if(log.position.x < -100){
            log.position.x = 100;
        } else {
            log.translateX(-(delta * 5));
        }
    }
    document.getElementById("score").innerHTML = "Score: " + score;
}

function checkCollisions(){
    // console.log("Collisions");

    var chickenBox = new THREE.Box3().setFromObject(chicken);

    for (var i = 0; i < cars.length; i++) {
        var carBox = new THREE.Box3().setFromObject(cars[i]);
        if (chickenBox.intersectsBox(carBox)){
          console.log('COLLISION WITH CAR');
          chicken.position.z = 0;
          chicken.position.x = 0;
        }
    }

    for (var j = 0; j < logs.length; j++) {
        var logBox = new THREE.Box3().setFromObject(logs[j]);
        if (chickenBox.intersectsBox(logBox)){
          console.log('COLLISION WITH LOG');
        }
    }

    for (var k = 0; k < trees.length; k++) {
        var treeBox = new THREE.Box3().setFromObject(trees[k]);
        if (chickenBox.intersectsBox(treeBox)){
          console.log('COLLISION WITH TREE');
        }
    }
}

function setLightColor(light, r, g, b){
    r /= 255;
    g /= 255;
    b /= 255;

    light.color.setRGB(r, g, b);
}

var directionalLight = null;
var spotLight = null;
var ambientLight = null;
var mapUrl = "images/Green-grass.jpg";

var SHADOW_MAP_WIDTH = 2048, SHADOW_MAP_HEIGHT = 2048;

function createScene(canvas) {

    this.canvas = canvas;

    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);

    // Turn on shadows
    renderer.shadowMap.enabled = true;
    // Options are THREE.BasicShadowMap, THREE.PCFShadowMap, PCFSoftShadowMap
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.set(0, 6, 10);
    scene.add(camera);

    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

    // Create a group to hold all the objects
    root = new THREE.Object3D;

    spotLight = new THREE.SpotLight (0xffffff);
    spotLight.position.set(-50, 15, -25);
    spotLight.target.position.set(-2, 0, -2);
    root.add(spotLight);

    spotLight.castShadow = true;

    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 200;
    spotLight.shadow.camera.fov = 45;

    spotLight.shadow.mapSize.width = SHADOW_MAP_WIDTH;
    spotLight.shadow.mapSize.height = SHADOW_MAP_HEIGHT;

    ambientLight = new THREE.AmbientLight ( 0x888888 );
    root.add(ambientLight);

    // Create the objects
    // loadFBX();
    /*geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
    var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
    scene.add(object);*/

    // Create a group to hold the objects
    group = new THREE.Object3D;
    root.add(group);

    // Create a texture map
    var map = new THREE.TextureLoader().load(mapUrl);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(8, 8);

    var color = 0xffffff;

    // Put in a ground plane to show off the lighting
    geometry = new THREE.PlaneGeometry(200, 200, 50, 50);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:color, map:map, side:THREE.DoubleSide}));

    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -1;

    // Add the mesh to our group
    group.add( mesh );
    mesh.castShadow = false;
    mesh.receiveShadow = true;

    var material = new THREE.MeshPhongMaterial({ color: 0xE69138 });
    geometry = new THREE.CubeGeometry(1, 1, 1);

    // And put the geometry and material together into a mesh
    chicken = new THREE.Mesh(geometry, material);
    group.add(chicken);

    createSections();

    // Now add the group to our scene
    scene.add( root );

    game = true;
}
