const arrowBack = document.getElementById('arrow-back');
const arrowForward = document.getElementById('arrow-forward');
const imgContainer = document.querySelector('.img-container');

let imgList = document.querySelectorAll('.img-container img');
let counter = 0;
let activeImg = imgList[counter];


const slideForward = () => {
    imgContainer.appendChild(imgList[0]);
    imgList = document.querySelectorAll('.img-container img')
}


const slideBackward = () => {
    imgContainer.insertBefore(imgList[imgList.length - 1], imgList[0]);
    imgList = document.querySelectorAll('.img-container img');
}

// setInterval(slideForward, 5000);

arrowBack.addEventListener('click', slideBackward);
arrowForward.addEventListener('click', slideForward);