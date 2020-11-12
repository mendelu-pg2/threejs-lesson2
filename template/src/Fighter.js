import * as THREE from "three";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";

export default class Fighter {
    constructor(scene) {
        this.scene = scene;
        this.object = null;
        this.materials = null;

        this.loadMaterials(() => this.loadObject());
    }

    loadMaterials(onComplete) {
        const mtlLoader = new MTLLoader();
        mtlLoader.load(
            'models/fighter/materials.mtl',
            ( materials ) => {
                materials.preload();
                this.materials = materials;
                onComplete();
            },
            // called when loading is in progresses
            ( xhr ) => {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            ( error ) => {
                console.log( 'An error happened' );
            }
        );
    }

    loadObject() {
        // instantiate a loader
        const loader = new OBJLoader();

        loader.setMaterials( this.materials );

        // load a resource
        loader.load(
            // resource URL
            'models/fighter/model.obj',
            // called when resource is loaded
            ( object ) => {
                this.object = object;

                this.object.position.x = 2;
                this.object.position.y = 3.5;
                this.object.position.z = 0;

                this.object.scale.x = 3;
                this.object.scale.y = 3;
                this.object.scale.z = 3;

                this.scene.add( object );
            },
            // called when loading is in progresses
            ( xhr ) => {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            ( error ) => {
                console.log( 'An error happened' );
            }
        );
    }
}