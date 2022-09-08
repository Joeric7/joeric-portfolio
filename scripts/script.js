const arrowBack = document.getElementById('arrow-back');
const arrowForward = document.getElementById('arrow-forward');
const imgContainer = document.querySelector('.img-container');

let imgList = document.querySelectorAll('.img-container img');
let counter = 0;
let activeImg = imgList[counter];


const slideForward = () => {
    imgList[0].style.animation = '';
    imgContainer.appendChild(imgList[0]);
    imgList = document.querySelectorAll('.img-container img');
    imgList[0].style.animation = 'forward 1s';
}

const slideBackward = () => {
    imgList[0].style.animation = '';
    imgContainer.insertBefore(imgList[imgList.length - 1], imgList[0]);
    imgList = document.querySelectorAll('.img-container img');
    imgList[0].style.animation = 'backward 1s';
}

setInterval(slideForward, 2000);

arrowBack.addEventListener('click', slideBackward);
arrowForward.addEventListener('click', slideForward);