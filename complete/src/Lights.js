import * as THREE from "three";

export default class Lights {
    constructor(scene) {
        this.scene = scene;
        this.initDirectionalLight();
    }

    initDirectionalLight() {
        this.directional = new THREE.DirectionalLight(0x5073bf, 1); // blue Moon light
        this.directional.position.x = -10;
        this.directional.position.y = 10;
        this.directional.position.z = 20;
        this.directional.castShadow = true;
        this.scene.add( this.directional );
    }

}
