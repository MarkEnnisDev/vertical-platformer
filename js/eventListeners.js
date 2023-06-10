window.addEventListener('keydown', (e) => {
    
    switch (e.key) {

        case 'w':
            if (player.velocity.y === 0 && canJump) {
                  player.velocity.y = -20;
                  canJump = false;
                
            }
            break
        case 'a':
            // move left
            keys.a.pressed = true;
            break
        case 'd':
            // move right
            keys.d.pressed = true;
            break
    }
})
window.addEventListener('keyup', (e) => {
    
    switch (e.key) {

        case 'w':
            canJump = true;
            break
        case 'a':
            // move left
            keys.a.pressed = false;
            break
        case 'd':
            // move right
            keys.d.pressed = false;
            break
    }
})