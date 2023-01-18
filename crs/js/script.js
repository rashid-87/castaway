const nav = document.querySelector(".header__nav");
const icon = document.querySelector(".header__icon");

// if (nav && icon) {
//     icon.addEventListener('click' , () => {
//         nav.classList.toggle('header__active');
//         icon.classList.toggle('header__active');
//     });
// }

nav &&
  icon.addEventListener("click", () => {
    nav.classList.toggle("header__active");
    icon.classList.toggle("header__active");
  });

// const btn = document.querySelector(".blok__btn");
// const overlay = document.querySelector(".overlay");
// const close = document.querySelector(".overlay__close");

// btn.addEventListener("click", function () {
//   overlay.style.display = "block";
// });

// close.addEventListener("click", function () {
//   overlay.style.display = "none";
// });

const btn = document.querySelectorAll(".blok__btn");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".overlay__close");

btn.forEach(function (item) {
  item.addEventListener("click", function () {
    overlay.style.display = "block";

    close.addEventListener("click", function () {
      overlay.style.display = "none";
    });
  });
});

const goTop = document.querySelector('.gotop');
goTop.addEventListener('click', goTops);
window.addEventListener('scroll', etScroll);

function goTops() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, - 75)
    setTimeout(goTops, 0)
  }
}

function etScroll () {
  const offset = window.pageYOffset;
  const coorbs = document.documentElement.clientHeight;

  if (offset > coorbs) {
    goTop.classList.add('gotop__show');
  } else {
    goTop.classList.remove('gotop__show');
  }
}