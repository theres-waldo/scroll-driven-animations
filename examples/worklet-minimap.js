document.addEventListener("DOMContentLoaded", ()=>{
  let scroller = document.getElementById("master_scroller");
  
  let minimap = document.getElementById("preview_scrolled_content");
  minimap.style.willChange = 'transform';
  let maxTranslation = scroller.scrollTopMax;
  let effect = new KeyframeEffect(
    minimap,
    [
      {
        transform: 'translate(0px, 0px)'
      },
      {
        transform: 'translate(0px, -' + maxTranslation + 'px)'
      }
    ],
    {
      duration: 1000,
      fill: 'both',
      easing: 'linear'
    }
  );
  let timeline = new ScrollTimeline({
    scrollSource: scroller,
    orientation: 'vertical',
    fillMode: 'both',
  });
  let animation = new Animation(effect, timeline);
  
  animation.play();
});