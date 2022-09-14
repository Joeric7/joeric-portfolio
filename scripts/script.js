const arrowBack = document.getElementById('arrow-back');
const arrowForward = document.getElementById('arrow-forward');
const imgContainer = document.querySelector('.img-container');
const slide = {
    node: document.getElementById('toggle-slide'),
    child: document.querySelector('#toggle-slide > div'),
    ball: document.querySelector('#toggle-slide > div > span'),
    state: true
}


let imgList = document.querySelectorAll('.img-container img');

const blockButtons = () => {
    arrowBack.disabled = true;
    arrowForward.disabled = true;
}

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

const animateForward = () => {
    imgList[0].style.animation = '';
    imgList[0].style.animation = 'fw 1s';
    setTimeout(slideForward, 900);
};

const animateBackward = () => {
    imgList[0].style.animation = '';
    imgList[0].style.animation = 'bw 1s';
    setTimeout(slideBackward, 900);
};

let autoSlide = setInterval(animateForward, 5000);

const toggleAutoSlide = () => {
    if (slide.state === true) {
        slide.ball.style.translate = '0';
        clearInterval(autoSlide);
        slide.state = false;
    } else {
        autoSlide = setInterval(animateForward, 5000);
        slide.ball.style.translate = '100%';
        slide.state = true;
    }
    console.log(slide.state)
    console.log(slide.node)
    console.log(autoSlide)
}

const resetInterval = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(animateForward, 5000);
};

arrowBack.addEventListener('click', () => {
    animateBackward();
    if (slide.state === true) {
        resetInterval();
    }
});

slide.node.addEventListener('click', toggleAutoSlide)

arrowForward.addEventListener('click', () => {
    animateForward();
    if (slide.state === true) {
        resetInterval();
    }  
});

for (let i of imgList) {
    i.addEventListener('animationend', activateButtons);
    i.addEventListener('animationstart', blockButtons);
};
