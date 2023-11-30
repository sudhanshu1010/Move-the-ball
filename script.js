const ball = document.querySelector('.ball')

window.addEventListener('keydown', handleKey)

function handleKey(e){
    if(e.key == 'ArrowUp'){
        let pos = checkPosition()

        ball.style.top = pos[0] - 100 + 'px';

    } else if(e.key === 'ArrowDown'){
        let pos = checkPosition()

        ball.style.top = pos[0] + 100 + 'px'

    } else if(e.key === 'ArrowLeft'){
        let pos = checkPosition()

        ball.style.left = pos[1] - 100 + 'px'

    } else if(e.key === 'ArrowRight'){
        let pos = checkPosition()

        ball.style.left = pos[1] + 100 + 'px'

    }
}

function checkPosition() {
    let top = ball.offsetTop;
    let left = ball.offsetLeft;

    return [top, left];
}