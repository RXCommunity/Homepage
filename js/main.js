$(document).ready(function() {
  $(document).scroll(function() {
    /* On scroll check if scrolled beyond 100% */
    var header = document.getElementById("pgHeader");
    if (window.pageYOffset >= $(window).height()) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});