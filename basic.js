document.addEventListener("DOMContentLoaded", ()=>{
  let scrollContainer = document.getElementById("scrollContainer");
  let target = document.getElementById("target");
  target.style.animation = "rotateAnim 1000ms linear paused";
  
  let animation = target.getAnimations()[0];
  animation.ready.then(()=>{
    let timeline = new ScrollTimeline(scrollContainer, "vertical");
    animation.timeline = timeline;
    animation.play();
  });
});
