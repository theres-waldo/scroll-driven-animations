document.addEventListener("DOMContentLoaded", ()=>{
  let scroller = document.getElementById("scroller");
  
  let bar = document.getElementsByClassName("bar")[0];
  let barEffect = new KeyframeEffect(
    bar,
    [
      {
        opacity: '0'
      },
      {
        opacity: '1'
      }
    ],
    {
      duration: 1000,
      fill: 'both',
      easing: 'linear'
    }
  );
  let barTimeline = new ScrollTimeline({
    scrollSource: scroller,
    orientation: 'vertical',
    fillMode: 'both',
    startScrollOffset: '0px',
    endScrollOffset: '144px'
  });
  let barAnimation = new Animation(barEffect, barTimeline);
  
  let avatar = document.getElementsByClassName("avatar")[0];
  let avatarEffect = new KeyframeEffect(
    avatar,
    [
      {
        transform: 'scale(1)'
       
      },
      {
        transform: 'translate(0px, -130px) scale(0.4)'
      }
    ],
    {
      duration: 1000,
      fill: 'both',
      easing: 'linear'
    }
  );
  let avatarTimeline = new ScrollTimeline({
    scrollSource: scroller,
    orientation: 'vertical',
    fillMode: 'both',
    startScrollOffset: '0px',
    endScrollOffset: '144px'
  });
  let avatarAnimation = new Animation(avatarEffect, avatarTimeline);
  
  barAnimation.play();
  avatarAnimation.play();
});