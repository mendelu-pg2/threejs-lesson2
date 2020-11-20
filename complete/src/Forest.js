import Tree from "./Tree";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

export default class Forest {
    constructor(parent) {
        this.parent = parent;
        this.object = new THREE.Group();

        const tree1 = new Tree(this.object, () => {
            tree1.object.position.x = -2;
            tree1.object.position.z = -1;
            tree1.shake();
        });

        const tree2 = new Tree(this.object, () => {
            tree2.object.position.x = 2;
            tree2.object.position.z = -3;
            tree2.shake();
        });

        this.parent.add(this.object);
    }

    
}