import React from "react";
import anime from "animejs/lib/anime.es.js";
import styles from "animejs/lib/anime.min.js";

function Intro() {
  return (
    anime({
  targets: '.function-based-values-demo .el',
  translateX: function(el) {
    return el.getAttribute('data-x');
  },
  translateY: function(el, i) {
    return 50 + (-50 * i);
  },
  scale: function(el, i, l) {
    return (l - i) + .25;
  },
  rotate: function() { return anime.random(-360, 360); },
  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: true
})
  );
}

export default Intro;
