document.addEventListener('scroll', function() {
  scrollFunction();
});

function scrollFunction() {
  var scrollButton = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

document.getElementById("scrollBtn").addEventListener('click', function() {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
