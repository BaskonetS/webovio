const header__wrap = document.querySelector(".header");

window.addEventListener("scroll", function() {  
  checkScroll();
});
checkScroll();

function checkScroll() {
  let scrollPos = window.scrollY;

  if(scrollPos > 0) {
    header__wrap.classList.add('scroll')
  } else {
    header__wrap.classList.remove('scroll')
  }
}