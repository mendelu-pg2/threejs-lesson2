import * as THREE from "three";

export default class Lights {
    constructor(scene) {
        this.scene = scene;
        this.initAmbientLight();
        this.initDirectionalLight();
    }

    initAmbientLight() {
        this.ambient = new THREE.AmbientLight(0x404040, 0.3); // soft white light
        this.scene.add(this.ambient);
    }

    initDirectionalLight() {
        this.directional = new THREE.DirectionalLight(0xffffff, 0.8);
        this.directional.position.x = -1;
        this.directional.position.y = 1;
        this.directional.position.z = 2;
        this.scene.add( this.directional );
    }
}
