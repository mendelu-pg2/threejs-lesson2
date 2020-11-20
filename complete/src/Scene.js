// import Triangle from './Triangle';
import Lights from './Lights';
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import Penguin from './Penguin';
import Forest from './Forest';
import Ground from './Ground';
import Unicorn from './Unicorn';

export default class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild( this.renderer.domElement );

        this.camera.position.x = 0;
        this.camera.position.y = 6;
        this.camera.position.z = 6;

        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.lights = new Lights(this.scene);
        this.penguin = new Penguin(this.scene);
        this.forest = new Forest(this.scene, 3);
        this.ground = new Ground(this.scene);
        this.unicorn = new Unicorn(this.scene, () => {
            this.unicorn.move();
        });
    }

    animate(time) {
        requestAnimationFrame(() => this.animate());
        TWEEN.update(time);
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        this.animate();
    }

}
