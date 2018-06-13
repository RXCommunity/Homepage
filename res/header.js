window.onscroll = function() {checkheader()};

// Get the header
var header = document.getElementById("pgHeader");
var banner = document.getElementById("text");

// Get the offset position of the navbar
var sticky = banner.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function checkheader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}