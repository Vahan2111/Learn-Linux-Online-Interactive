const images = [
    'd4c694be.png',
    //'image2.jpg',
    //'image3.jpg',
];

let tmp = 0;
const slider = document.getElementById('slider');

function Slide(index) {
    if (index < 0) {
        tmp = images.length - 1;
    } else if (index >= images.length) {
        tmp = 0;
    } else {
        tmp = index;
    }

    const Value = -tmp * 100 + '%';
    slider.style.transform = 'translateX(' + Value + ')';
}

function prev() {
    Slide(tmp - 1);
}

function next() {
    Slide(tmp + 1);
}

const sliderContainer = document.getElementById('slider');
images.forEach(imageURL => {
    const imgElement = document.createElement('PNG');
    imgElement.src = imageURL;
    sliderContainer.appendChild(imgElement);
});
Slide(tmp);