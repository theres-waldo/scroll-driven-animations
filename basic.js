document.addEventListener("DOMContentLoaded", ()=>{
  let scrollable = document.getElementById("scrollable");
  let target = document.getElementById("target");
  target.style.animation = "rotateAnim 1000ms linear paused";
  
  let animation = target.getAnimations()[0];
  animation.ready.then(()=>{
    let timeline = new ScrollTimeline({
      scrollSource: scrollable,
      orientation: "vertical"
    });
    animation.timeline = timeline;
    animation.play();
  });
});
