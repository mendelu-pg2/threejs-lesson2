import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

export default class Ground {
    constructor(parent) {
        this.parent = parent;

        this.initObject();
        this.loadTexture();
    }

    initObject() {
        const geometry = new THREE.PlaneGeometry( 1000, 1000 );
        const material = new THREE.MeshStandardMaterial({color: 0x706a54});
        this.object = new THREE.Mesh( geometry, material );
        this.object.receiveShadow = true;

        this.object.rotation.x = -Math.PI / 2;

        this.parent.add(this.object);
    }

    loadTexture() {
        const loader = new THREE.TextureLoader();
        loader.load(
            'textures/ground-texture.jpg',
            ( texture ) => {
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(100, 100);
                this.object.material = new THREE.MeshStandardMaterial({
                    map: texture
                });
            },
            function ( err ) {
                console.error( 'An error happened.' );
            }
        );
    }
}