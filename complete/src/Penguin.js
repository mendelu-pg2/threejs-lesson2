import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { removeLights } from "./utils"

export default class Penguin {
    constructor(parent) {
        this.parent = parent;
        this.object = null;
        this.torch = null;
        this.penguin = null;

        this.moveZAnimation = null;
        this.moveXAnimation = null;

        this.initCharacter();
    }

    initCharacter() {
        this.object = new THREE.Group();
        this.object.position.set(2, 0, 2);

        this.initTorch();

        this.loadObject(() => {
            this.parent.add(this.object);
        });
    }

    initTorch() {
        this.torch = new THREE.SpotLight(0x00ffff, 5, 7, Math.PI / 4, 0.5, 1);
        this.torch.castShadow = true;

        this.torch.position.set(0, 1, 0);
        this.torch.target.position.set(0, 1, -1);

        this.object.add(this.torch);
        this.object.add(this.torch.target);
    }

    loadObject(onLoad = () => {}) {
        const loader = new GLTFLoader();

        loader.load('models/penguin/badtz.gltf', gltf => {
            removeLights(gltf.scene);
            this.penguin = gltf.scene;

            this.penguin.scale.set(0.2, 0.2, 0.2);
            this.penguin.position.set(0, 0, 0);
            this.penguin.rotation.y = Math.PI;

            this.object.add(this.penguin);
            onLoad();

        }, undefined, error => {
            console.error(error);
        });
    }

    moveX(direction) {
        if (this.moveXAnimation) {
            this.moveXAnimation.stop();
        }

        const data = {x: this.object.position.x};
        const target = {x: this.object.position.x + direction}

        this.moveXAnimation = new TWEEN.Tween(data)
            .to(target, 500)
            .onUpdate(() => {
                this.object.position.x = data.x;
            })
            .start();
    }

    moveZ(direction) {
        if (this.moveZAnimation) {
            this.moveZAnimation.stop();
        }

        const data = {z: this.object.position.z};
        const target = {z: this.object.position.z + direction}

        this.moveZAnimation = new TWEEN.Tween(data)
            .to(target, 500)
            .onUpdate(() => this.object.position.z = data.z)
            .start();
    }

    moveForward() {
        this.moveZ(-1);
    }

    moveBackward() {
        this.moveZ(1);
    }

    moveLeft() {
        this.moveX(-1);
    }

    moveRight() {
        this.moveX(1);
    }

    stop() {
        if (this.moveXAnimation) {
            this.moveXAnimation.stop();
        }
    }

}