//burger
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".header__burger"),
    overflowHidden = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
      overflowHidden.classList.toggle("overflow-hidden-y");
    });
  });
});
const anchors1 = document.querySelectorAll('.header__list a[href*="#"]');
for (let anchor of anchors1) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//////////////////////////////////////////////////////////////////////////////////

const btn = document.querySelectorAll(".mobile__BTNtext");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    btn[i].classList.add("black");
    btn2[i].classList.remove("black");
  });
}

const btn2 = document.querySelectorAll(".two");
for (let i = 0; i < btn.length; i++) {
  btn2[i].addEventListener("click", function () {
    btn2[i].classList.add("black");
    btn[i].classList.remove("black");
  });
}

const form1 = document.querySelector(".request__form-mobile");
const form2 = document.querySelector(".request__form-mobile.two");
const formBtn = document.querySelector(".mobile__BTNtext");
const formBtn2 = document.querySelector(".mobile__BTNtext.two");

formBtn.addEventListener("click", function (e) {
  form2.classList.remove("active");
  form1.classList.add("active");
});
formBtn2.addEventListener("click", function (e) {
  form2.classList.add("active");
  form1.classList.remove("active");
});

const anchors = document.querySelectorAll('.header__list a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

$(document).ready(function () {
  var header = $(".header"),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
      header.addClass("out");
    } else {
      header.removeClass("out");
    }
    scrollPrev = scrolled;
  });

  //accordion
  $(".toggle-accordion").on("click", function () {
    var accordionId = $(this).attr("accordion-id"),
      numPanelOpen = $(accordionId + " .collapse.in").length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }
  });

  $('[data-fancybox="preview"]').fancybox({
    thumbs: {
      autoStart: true,
    },
  });

  $(".main-btn_gallery").on("click", function (e) {
    e.preventDefault();
    $.fancybox.open($("[data-fancybox='preview'"));
    $(".fancybox-button--thumbs").trigger("click");
  });

  $(".popup-close").on("click", function (e) {
    e.preventDefault();
    $.fancybox.close();
  });
});

$('input[name="phone"]').mask("+7(999) 999-9999");

const selectBtn = document.querySelectorAll(".radio__btn");
let selectValue = "";
for (let i = 0; i < selectBtn.length; i++) {
  selectBtn[i].addEventListener("click", function (e) {
    const selectInput = document.querySelectorAll('input[name="order"]');
    const selectBtn = document.querySelector(".radio__next a");
    selectValue = selectInput[i].value;
    selectBtn.href = "#main-popup-create-" + selectValue;
  });
}

new Swiper(".files-swiper__slider", {
  slidesPerView: "auto",
  spaceBetween: 38,
  on: {},
});

