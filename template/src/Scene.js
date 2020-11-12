// import Triangle from './Triangle';
import Cube from './Cube';
import Lights from './Lights';
import Fighter from './Fighter';
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import Penguin from './Penguin';

export default class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );

        this.camera.position.x = 1;
        this.camera.position.y = 2;
        this.camera.position.z = 5;

        this.blackHole = new Cube(this.scene);
        this.lights = new Lights(this.scene);
        this.fighter = new Fighter(this.scene);
        this.penguin = new Penguin(this.scene);
    }

    animate(time) {
        requestAnimationFrame(() => this.animate());
        TWEEN.update(time);
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        this.animate();
    }

    startRotation() {
        this.blackHole.startRotation();
    }

    stopRotation() {
        this.blackHole.stopRotation();
    }

    showTexture() {
        this.blackHole.showTexture();
    }

    hideTexture() {
        this.blackHole.hideTexture();
    }
}
