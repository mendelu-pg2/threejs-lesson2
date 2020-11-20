import Scene from './Scene';

let scene;

window.onload = () => {

    // init the scene
    
    scene = new Scene();
    scene.render();


    // connect HTML elements to JS code



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
        } else if (['w', 'a', 's', 'd'].includes(event.key)) {
            scene.penguin.stop();
        }
    });

    window.addEventListener('keydown', event => { // call repeatedly (e.g. move character continuously forward)
        console.log('holding down key ' + event.key);

        if (event.key == 'r') {
            scene.blackHole.rotateY(1);
        } else if (event.key == 'w') {
            scene.penguin.moveForward();
        } else if (event.key == 's') {
            scene.penguin.moveBackward();
        } else if (event.key == 'a') {
            scene.penguin.moveLeft();
        } else if (event.key == 'd') {
            scene.penguin.moveRight();
        }
    });
};
