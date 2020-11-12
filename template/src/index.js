import Scene from './Scene';

let scene;

window.onload = () => {

    // init the scene
    
    scene = new Scene();
    scene.render();


    // connect HTML elements to JS code

    document.getElementById('start-game').addEventListener('click', () => {
        scene.startRotation();
    });

    document.getElementById('stop-game').addEventListener('click', () => {
        scene.stopRotation();
    });

    const toggleTextureButton = document.getElementById('toggle-texture');
    toggleTextureButton.addEventListener('click', () => {
        if (scene.blackHole.isTextureVisible) {
            scene.hideTexture();
            toggleTextureButton.innerText = "Show texture";
        } else {
            scene.showTexture();
            toggleTextureButton.innerText = "Hide texture";
        }
    });

    document.getElementById('move-cube-up').addEventListener('click', () => {
        scene.blackHole.moveUp();
    });


    // key bindings

    window.addEventListener('keyup', event => { // called once per press (e.g. toggle texture)
        console.log('pressed key ' + event.key);

        if (event.key == 't') {
            if (scene.blackHole.isTextureVisible) {
                scene.hideTexture();
                toggleTextureButton.innerText = "Show texture";
            } else {
                scene.showTexture();
                toggleTextureButton.innerText = "Hide texture";
            }
        }
    });

    window.addEventListener('keydown', event => { // call repeatedly (e.g. move character continuously forward)
        console.log('holding down key ' + event.key);

        if (event.key == 'r') {
            scene.blackHole.rotateY(1);
        }
    });
};
