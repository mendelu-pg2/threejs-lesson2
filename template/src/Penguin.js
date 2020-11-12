import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Penguin {
    constructor(scene) {
        this.scene = scene;
        this.object = null;

        this.loadObject();
    }

    loadObject() {
        const loader = new GLTFLoader();

        loader.load('models/penguin/badtz.gltf', gltf => {
            this.object = gltf.scene;

            this.object.scale.set(0.4, 0.4, 0.4);
            this.object.position.set(3, -1, 0);

            this.scene.add(this.object);

        }, undefined, error => {
            console.error(error);
        });
    }
}