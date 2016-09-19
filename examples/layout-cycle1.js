window.addEventListener("scroll", ()=>{
  let reporter = document.getElementById("offset");
  reporter.textContent = "The scroll offset is " + document.documentElement.scrollTop;
});

document.addEventListener("DOMContentLoaded", ()=>{
  let scrollable = document.documentElement;
  let top = document.getElementById("top");
  let effect = new KeyframeEffect(
    top,
    [
      { height: '1000px' },
      { height: '2000px' },
      { height: '1000px' }
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
});
