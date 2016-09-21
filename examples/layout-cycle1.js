function reportThings() {
  let offset = document.getElementById("offset");
  let scrollOffset = document.documentElement.scrollTop;
  offset.textContent = "The scroll offset is " + scrollOffset;
  
  let time = document.getElementById("time");
  let animation = document.getElementById("top").getAnimations()[0];
  if (animation) {
    let currentTime = animation.currentTime;
    time.textContent = "The animation's current time is " + Math.round(currentTime);
  } else {
    time.textContent = "There is no animation";
  }
}

window.addEventListener("scroll", reportThings);
document.addEventListener("DOMContentLoaded", ()=>{
  let scrollable = document.documentElement;
  let top = document.getElementById("top");
  let effect = new KeyframeEffect(
    top,
    [
      { height: '10000px' },
      { height: '20000px' },
      { height: '10000px' }
    ],
    {
      duration: 5000,
      fill: 'both',
      iterations: Infinity,
      easing: 'linear'
    }
  );
  let timeline = new ScrollTimeline({
    scrollSource: scrollable,
    orientation: "vertical",
    timeRange: 5000
  });
  let animation = new Animation(effect, timeline);
  animation.play();
  reportThings();
});
