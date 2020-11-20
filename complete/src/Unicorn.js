import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { removeLights, setUpShadowsRecursively } from "./utils"

export default class Unicorn {
    constructor(parent, onLoad = () => {}) {
        this.parent = parent;
        this.object = null;
        this.movingAnimation = null;

        this.onLoad = onLoad;

        this.loadObject();
    }

    loadObject() {
        const loader = new GLTFLoader();

        loader.load('models/unicorn/Unicorn_01.gltf', gltf => {
            removeLights(gltf.scene);
            setUpShadowsRecursively(gltf.scene);

            this.object = gltf.scene;

            this.object.scale.set(0.1, 0.1, 0.1);
            this.object.position.set(1, 0, 0);
            this.object.rotation.y = -3 * Math.PI / 4;

            this.parent.add(this.object);
            this.onLoad();

        }, undefined, error => {
            console.error(error);
        });
    }

    move() {
        const data = {
            x: this.object.position.x,
            z: this.object.position.z,
            rotationY: this.object.rotation.y,
        };

        const target = {
            x: [-3, -3, this.object.position.x, this.object.position.x],
            z: [-3, -3, this.object.position.z, this.object.position.z],
            rotationY: [-3 * Math.PI / 4, Math.PI / 4, Math.PI / 4, -3 * Math.PI / 4]
        };

        this.movingAnimation = new TWEEN.Tween(data)
            .to(target, 5000)
            .onUpdate(() => {
                this.object.position.x = data.x;
                this.object.position.z = data.z;
                this.object.rotation.y = data.rotationY;
            })
            .repeat(Infinity)
            .start();
    }

}