// FLOATING NAVBAR
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', function(){
  if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// CONTENT OPACITY
const contentText = document.getElementById('content-text');

window.addEventListener('scroll', function(){ 
    let valueY = window.pageYOffset;
    contentText.style.opacity = valueY * 0.075 + '%';
  
	// uncomment these to check values
	// console.log('pageYOffset value: ' + valueY);
    // console.log('content opacity: '+ content.style.opacity)
});

// PARALLAX
const mtnBack = document.getElementById('mtn-back');
const mtnFront = document.getElementById('mtn-front');
const forest = document.getElementById('forest');
const titleText = document.querySelector('.title-text');
const target = document.getElementById('content');

window.addEventListener('scroll', function(){
    let valueY = window.pageYOffset; 
    mtnBack.style.bottom = valueY * 0.5 + 'px';
    mtnFront.style.left = valueY * 0.25 + 'px';
    forest.style.right = valueY * 0.05 + 'px';
    titleText.style.marginTop = (valueY * 0.79999999999) +  'px';

    // //STOP TITLE PARALLAX AT CONTENT? NOT SURE ABOUT THIS CAUSE IT KEEPS FREAKING OUT WHEN IT GETS TO THE CONDITION POINT ON THE PAGE
    // let contentY = valueY + document.querySelector('#content').getBoundingClientRect().top;

    // if (titleText.style.marginTop <= (contentY - 100 + 'px')) {
    //     titleText.style.marginTop = (valueY/0.8) + 'px';
    // } else {
    //     titleText.style.marginTop = (valueY * 1.2) + 'px';
    // };
	// uncomment to check values
    // console.log('content top Y value: '+ contentY);
    // console.log('title Y value: '+titleText.style.marginTop);
}


