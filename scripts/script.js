const arrowBack = document.getElementById('arrow-back');
const arrowForward = document.getElementById('arrow-forward');
const imgContainer = document.querySelector('.img-container');


let imgList = document.querySelectorAll('.img-container img');

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
    imgList[0].style.animation = '';
    imgList[0].style.animation = 'fw 1s';
    setTimeout(func, 900);
};

const animateBackward = (func) => {
    imgList[0].style.animation = '';
    imgList[0].style.animation = 'bw 1s';
    setTimeout(func, 900);
};



arrowBack.addEventListener('click', () => {
    animateBackward(slideBackward)
});

arrowForward.addEventListener('click', () => {
    animateForward(slideForward);
    const imgContainer = document.querySelector('.img-container');
    
});

for (let i of imgList) {
    i.addEventListener('animationend', activateButtons);
    i.addEventListener('animationstart', blockButtons);
};
