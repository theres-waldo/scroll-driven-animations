document.addEventListener("DOMContentLoaded", ()=>{
  let scrollable = document.documentElement;
  let progress = document.getElementById("progress");

  let animation = progress.getAnimations()[0];
  animation.ready.then(()=>{
    let timeline = new ScrollTimeline({
      scrollSource: scrollable, 
      orientation: "vertical",
      fillMode: "forwards"  // Should this be required?
    });
    animation.timeline = timeline;
    animation.startTime = 0;
    animation.play();
  });
});
