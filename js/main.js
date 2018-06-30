$(document).ready(function() {
  /* Load Google Analytics */
  $.getScript("https://www.googletagmanager.com/gtag/js?id=UA-120536610-1");
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-120536610-1');
});

$(document).scroll(function() {
  /* On scroll check if scrolled beyond 100% */
  var header = document.getElementById("pgHeader");
  if (window.pageYOffset >= $(window).height()) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});