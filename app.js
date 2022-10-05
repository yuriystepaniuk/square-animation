let button = document.querySelector('button');

function animation(){
    let square = document.querySelector('.square');
    let position = 0;
    let id = setInterval(move, 1);

    function move() {
        if(position === 250) {
            clearInterval(id);
        } else {
            position++;
            square.style.left = position + "px";
            square.style.top = position + "px";
        }
    }
}

button.addEventListener("click", animation);