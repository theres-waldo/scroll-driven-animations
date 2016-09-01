document.addEventListener("DOMContentLoaded", ()=>{
  let scrollable = document.documentElement;
  let spinner = document.getElementById("spinner");
  let effect = new KeyframeEffect(
    spinner,
    [{ transform: 'rotate(0.25turn)' },
     { transform: 'rotate(0.75turn)' }],
    { duration: 300,
      fill: 'both',
      iterations: Infinity,
      easing: 'linear' });
  let timeline = new ScrollTimeline({
    scrollSource: scrollable, 
    orientation: "vertical",
    timeRange: 300,
    startScrollOffset: "1000px",
    endScrollOffset: "1600px",
  });
  let animation = new Animation(effect, timeline);
  animation.play();
});
