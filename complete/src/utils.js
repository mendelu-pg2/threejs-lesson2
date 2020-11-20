import * as THREE from "three";

export const removeLights = (group) => {
    group.children = group.children.filter(child => 
        (child instanceof THREE.Light) === false
    );
    group.children.forEach(child => {
        if (child.children.length > 0) {
            removeLights(child);
        }
    })
};

export const setUpShadowsRecursively = (group) => {
    group.traverse((node) => {
        if (node.isMesh) { 
            node.castShadow = true;
            node.recievesShadow = true;
        }
    });
}