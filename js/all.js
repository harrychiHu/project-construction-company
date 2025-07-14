//nav

const hamburBtn = document.querySelector("#hamburger");
const openMenu = document.querySelector(".nav__mobileVersion");
const overlay = document.querySelector(".overlay");

hamburBtn.addEventListener("click",function(){
  openMenu.classList.toggle('active')
  overlay.classList.toggle("active");
})

overlay.addEventListener("click", function () {
  openMenu.classList.remove("active");
  overlay.classList.remove("active");
});
//project
document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});
