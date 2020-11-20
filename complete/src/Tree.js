import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { removeLights, setUpShadowsRecursively } from "./utils"

export default class Tree {
    constructor(parent, onLoad = () => {}) {
        this.parent = parent;
        this.object = null;

        this.onLoad = onLoad;

        this.loadObject();
    }

    loadObject() {
        const loader = new GLTFLoader();

        loader.load('models/tree/model.gltf', gltf => {
            removeLights(gltf.scene);
            setUpShadowsRecursively(gltf.scene);

            this.object = gltf.scene;

            this.object.scale.set(1.5, 1.5, 1.5);
            this.object.position.y = -0.5;

            this.parent.add(this.object);

            this.onLoad();

        }, undefined, error => {
            console.error(error);
        });
    }

    shake() {
        const data = {
            rotationX: this.object.rotation.x,
            rotationZ: this.object.rotation.z
        };

        const target = {
            rotationX: Math.random() * 0.2 - 0.1,
            rotationZ: Math.random() * 0.2 - 0.1
        };

        this.shakingAnimation = new TWEEN.Tween(data)
            .to(target, 500)
            .onUpdate(() => {
                this.object.rotation.x = data.rotationX;
                this.object.rotation.z = data.rotationZ;
            })
            .start()
            .onComplete(() => this.shake());
    }

}