document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});

baguetteBox.run('.tz-gallery');

var video = document.getElementById("myVideo");
video.playbackRate = 3.0