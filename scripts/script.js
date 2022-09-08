const arrowBack = document.getElementById('arrow-back');
const arrowForward = document.getElementById('arrow-forward');
const imgContainer = document.querySelector('.img-container');


let imgList = document.querySelectorAll('.img-container img');
let isActive = true;

let autoSlide;

const checkState = () => {
    console.log('a;sdasda');

    if (isActive) {
        autoSlide = setInterval(() => {
            animateForward(slideForward);
        }, 3000);
        console.log(autoSlide);
    } else {
        console.log('detenido');
        console.log(autoSlide);
        clearInterval(autoSlide);
    }
}

const blockButtons = () => {
    arrowBack.disabled = true;
    arrowForward.disabled = true;
}

// blockButtons();
const activateButtons = () => {
    arrowBack.disabled = false;
    arrowForward.disabled = false;
}


const slideForward = () => {
    imgList[0].style.animation = '';
    imgContainer.appendChild(imgList[0]);
    imgList = document.querySelectorAll('.img-container img');
    imgList[0].style.animation = 'forward 1s';
};

const slideBackward = () => {
    imgList[0].style.animation = '';
    imgContainer.insertBefore(imgList[imgList.length - 1], imgList[0]);
    imgList = document.querySelectorAll('.img-container img');
    imgList[0].style.animation = 'backward 1s';
};

const animateForward = (func) => {
    blockButtons();
    imgList[0].style.animation = '';
    imgList[0].style.animation = 'fw 1s';
    setTimeout(func, 900);
    setTimeout(activateButtons, 2000);
};

const animateBackward = (func) => {
    blockButtons();
    imgList[0].style.animation = '';
    imgList[0].style.animation = 'bw 1s';
    setTimeout(func, 900);
    setTimeout(activateButtons, 2000);
};

checkState();

arrowBack.addEventListener('click', () => {
    isActive = false;
    checkState();
    animateBackward(slideBackward)
    egg = setTimeout(() => {
        isActive = true
        checkState();
    }, 3000)
    console.log(checkState);
    
});

arrowForward.addEventListener('click', () => {
    animateForward(slideForward);
});