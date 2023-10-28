window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollButton = document.querySelector(".scroll-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
