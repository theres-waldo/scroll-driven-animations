document.addEventListener("DOMContentLoaded", ()=>{
  let scrollable = document.documentElement;
  let spinner = document.getElementById("spinner");

  let animation = spinner.getAnimations()[0];
  animation.ready.then(()=>{
    let timeline = new ScrollTimeline({
      scrollSource: scrollable, 
      orientation: "vertical",
      timeRange: 300,
      startScrollOffset: "1000px",
      endScrollOffset: "1600px"
    });
    animation.timeline = timeline;
    animation.startTime = 0;
    animation.play();
  });
});
