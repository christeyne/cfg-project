// FLOATING NAVBAR
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', function(){stickyFunction()});

function stickyFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

// CONTENT OPACITY
const contentText = document.getElementById('content-text');

window.addEventListener('scroll', function(){ 
    let valueY = window.pageYOffset;
    contentText.style.opacity = valueY * 0.075 + '%';

    // console.log('pageYOffset value: ' + valueY);
    // console.log('content opacity: '+ content.style.opacity)
});


// PARALLAX
const mtnBack = document.getElementById('mtn-back');
const mtnFront = document.getElementById('mtn-front');
const forest = document.getElementById('forest');
const titleText = document.querySelector('.title-text');
const target = document.getElementById('content');

// alternative
//     window.addEventListener('scroll', function(){
//     let value = window.scrollY; 
//     mtnBack.style.bottom = value * 0.5 + 'px';
//     mtnFront.style.bottom = value * 0.3 + 'px';
//     forest.style.left = -(value * 0.1) + 'px';

// })
window.addEventListener('scroll', function(){parallaxOn()});

function parallaxOn(){
    let valueY = window.pageYOffset; 
    mtnBack.style.bottom = valueY * 0.5 + 'px';
    mtnFront.style.left = valueY * 0.25 + 'px';
    forest.style.right = valueY * 0.05 + 'px';
    titleText.style.marginTop = (valueY * 0.79999999999) +  'px';

    // console.log(valueY);
// console.log(mtnBack.style.bottom)

    // //STOP TITLE PARALLAX AT CONTENT?
    // let contentY = valueY + document.querySelector('#content').getBoundingClientRect().top;

    // if (titleText.style.marginTop <= (contentY - 100 + 'px')) {
    //     titleText.style.marginTop = (valueY/0.8) + 'px';
    // } else {
    //     titleText.style.marginTop = (valueY * 1.2) + 'px';
    // };


    // console.log('content top Y value: '+ contentY);
    // console.log('title Y value: '+titleText.style.marginTop);
};

// AUDIO TRIGGER

const epilogue = document.getElementsByClassName('epilogue')[0];
const audio = document.getElementsByClassName('audio')[0];
const audioNoLoop = document.getElementById('no-loop');

window.addEventListener('scroll', function audioTrigger(){
    let valueY = window.pageYOffset;
    if (valueY >= epilogue.scrollHeight) {
        audio.play() == true;
    } else {
        audio.pause() == true;
    };
    audio.loop = true;
    audioNoLoop.loop = false;
    // check for height values
    // console.log('y val:' + valueY);
    // console.log('epilogue: ' + epilogue.scrollHeight)
});

// MUTE BUTTON??

const muteButton = document.getElementById('mute-button');
const unmuteButton = document.getElementById('unmute-button');


muteButton.addEventListener('click', function mute(){
    audio.muted = false;
    muteButton.style.visibility= 'hidden';
    unmuteButton.style.visibility= 'visible';
}); 

unmuteButton.addEventListener('click', function unmute(){
    audio.muted = true;
    muteButton.style.visibility= 'visible';
    unmuteButton.style.visibility= 'hidden';
});
