const container = document.getElementById('container');
const cloudContainer = document.getElementById('cloud-container')
const movingImage1 = document.getElementById('moving-image1');
const movingImage2 = document.getElementById('moving-image2');
// const movingImage3 = document.getElementById('moving-image3');


container.addEventListener('animationiteration', () => {
    // Reset the animation to the initial position
    container.style.animation = 'none';
    container.offsetHeight; // Trigger a reflow
    container.style.animation = 'moveImages 30s linear infinite';
});


cloudContainer.addEventListener('animationiteration', () => {
    // Reset the animation to the initial position
    cloudContainer.style.animation = 'none';
    cloudContainer.offsetHeight; // Trigger a reflow
    cloudContainer.style.animation = 'moveImages 30s linear infinite';
});

// Handle resizing the window to maintain the seamless flow
window.addEventListener('resize', () => {
    movingImage1.style.height = `${window.innerHeight}px`;
    movingImage2.style.height = `${window.innerHeight}px`;
    // movingImage3.style.height = `${window.innerHeight}px`;
});

// Initial adjustment for image height
window.addEventListener('load', () => {
    movingImage1.style.height = `${window.innerHeight}px`;
    movingImage2.style.height = `${window.innerHeight}px`;
    // movingImage3.style.height = `${window.innerHeight}px`;
});



// Position Settings
TweenMax.set("#bird-container", {y:-80, x:250})
TweenMax.set("#bird-container-1", {y:-80, x:250})
TweenMax.set(".bird-body", {scaleY:1.2})
// Birds
TweenMax.to("#bird-container-1", 100, { x:-1000, ease:Linear.easeNone})
TweenMax.to("#bird-container", 100, { x:-1000, ease:Linear.easeNone})
// Bird Wings
flapWings()

function flapWings(){
  [
    "#wing-1",
    "#wing-2",
    "#wing-3",
    "#wing-4",
    "#wing-5",
    "#wing-6",
    "#wing-1-1",
    "#wing-2-1",
    "#wing-3-1",
    "#wing-4-1",
    "#wing-5-1",
    "#wing-6-1",
  ].forEach((wingId, index)=>
            {
    TweenMax.to(wingId, 1+ .1*index, {scaleY:-1.2, transformOrigin:"bottom center", yoyo:true, repeat:-1, ease: Sine.easeInOut})
  })
}