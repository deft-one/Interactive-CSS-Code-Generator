let inputWidth = document.getElementById('inputWidth');
let inputHeight = document.getElementById('inputHeight');
let inputX = document.getElementById('inputX');
let inputY = document.getElementById('inputY');
let inputRotate = document.getElementById('inputRotate');
let inputBorderRadius = document.getElementById('inputBorderRadius');
let box = document.getElementById('box');
let error = document.getElementById('error');
let valid = new RegExp('[0-9]');
let container2 = document.getElementById('container2');
let yPos = document.getElementById('yPos');
let xPos = document.getElementById('xPos');
let width = document.getElementById('width');
let height = document.getElementById('height');
let rotate = document.getElementById('rotate');
let bordRad = document.getElementById('bordRad');

function checkDimensions(e, dim) {
    if (Number(e.target.value) <= 375 && dim == 'width') {
        box.style.width = e.target.value + 'px';
        width.innerText = e.target.value + 'px';
    } else if (Number(e.target.value) <= 375 && dim == 'height') {
        box.style.height = e.target.value + 'px';
        height.innerText = e.target.value + 'px';
    }
    error.innerText = '';
    if (Number(e.target.value) > 375) {
        error.innerText = 'Max ' + dim + ' is 375px';
    }
}

document.addEventListener('keyup', function(e) {
    setTimeout(() => {
        if (valid.test(Number(e.target.value))) {
            if (e.target === inputWidth) {
                let dim = 'width';
                checkDimensions(e, dim);
            } else if (e.target === inputHeight) {
                let dim = 'height';
                checkDimensions(e, dim);
            } else if (e.target === inputX) {
                box.style.left = inputX.value + '%';
                xPos.innerText = e.target.value + '%';
            } else if (e.target === inputY) {
                box.style.top = inputY.value + '%';
                yPos.innerText = e.target.value + '%';
            } else if (e.target === inputRotate) {
                box.style.transform = 'rotate(' + inputRotate.value + 'deg)';
                rotate.innerText = e.target.value + 'deg';
            } else if (e.target === inputBorderRadius) {
                box.style.borderRadius = inputBorderRadius.value + 'px';
                bordRad.innerText = e.target.value + 'px';
            }
        } else {
            error.innerText = 'Numbers Only!';
        }
    },500);
});