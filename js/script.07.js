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

// Dropdown Menu
var dropdown = document.querySelectorAll(".dropdown");
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function (el) {
  var button = el.querySelector('a[data-toggle="dropdown"]'),
    menu = el.querySelector(".dropdown-menu"),
    arrow = button.querySelector("i.drop-arrow");

  button.onclick = function (event) {
    if (!menu.hasClass("show")) {
      menu.classList.add("show");
      menu.classList.remove("hide");
      arrow.classList.add("open");
      arrow.classList.remove("close");
      event.preventDefault();
    } else {
      menu.classList.remove("show");
      menu.classList.add("hide");
      arrow.classList.remove("open");
      arrow.classList.add("close");
      event.preventDefault();
    }
  };

  window.addEventListener("scroll", function () {
    menu.classList.remove("show");
    menu.classList.add("hide");
    arrow.classList.remove("open");
    arrow.classList.add("close");
    event.preventDefault();
  });
});

Element.prototype.hasClass = function (className) {
  return (
    this.className &&
    new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
  );
};

//tabs
class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs =
      typeof target === "string" ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll(".tabs__btn");
    this._elPanes = this._elTabs.querySelectorAll(".tabs__pane");
    this._eventShow = new Event("tab.itc.change");
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute("role", "tablist");
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute("role", "tab");
      this._elPanes[index].setAttribute("role", "tabpanel");
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector(".tabs__btn_active");
    const elPaneShow = this._elTabs.querySelector(".tabs__pane_show");
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove("tabs__btn_active") : null;
    elPaneShow ? elPaneShow.classList.remove("tabs__pane_show") : null;
    elLinkTarget.classList.add("tabs__btn_active");
    elPaneTarget.classList.add("tabs__pane_show");
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  }
  _events() {
    this._elTabs.addEventListener("click", (e) => {
      const target = e.target.closest(".tabs__btn");
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}
new ItcTabs(".tabs");
// больше одних табов на странице
// const tabs = document.querySelectorAll('.tabs');
// for (let i = 0, length = tabs.length; i < length; i++) {
//   new ItcTabs(tabs[i]);
// }

//partners open
let partnersOpenBtn = document.querySelector(
  ".partners__btn-wrapper .main-btn"
);
partnersOpenBtn.addEventListener("click", () => {
  document
    .querySelector(".partners-grid")
    .classList.toggle("partners-grid_active");

  const partnersitems = document.querySelectorAll(
    ".partners-grid__item_hidden"
  );
  partnersitems.forEach((item) => {
    item.classList.toggle("partners-grid__item_hidden-active");
  });
});

//tools open
let toolsOpenBtn = document.querySelector(".main-btn_tools");
toolsOpenBtn.addEventListener("click", () => {
  document.querySelector(".tools-list").classList.toggle("tools-list_active");
  const toolsItems = document.querySelectorAll(".tools-list__item_hidden");
  toolsItems.forEach((item) => {
    item.classList.toggle("tools-list__item_hidden-active");
  });
});

//sliders
const swiper = new Swiper(".swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$('input[name="phone"]').mask("+7(999) 999-9999");

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

let map_container = document.getElementById("map");
let options_map = {
  once: true, //запуск один раз, и удаление наблюдателя сразу
  passive: true,
  capture: true,
};
map_container.addEventListener("click", start_lazy_map, options_map);
map_container.addEventListener("mouseover", start_lazy_map, options_map);
map_container.addEventListener("touchstart", start_lazy_map, options_map);
map_container.addEventListener("touchmove", start_lazy_map, options_map);

let map_loaded = false;
function start_lazy_map() {
  if (!map_loaded) {
    let map_block = document.getElementById("ymap_lazy");
    map_block.setAttribute("src", map_block.getAttribute("data-src"));
    map_block.removeAttribute("data_src");

    map_block.onload = () => {
      //map
      ymaps.ready(init);

      function init() {
        var myMap = new ymaps.Map("map", {
          // Центр карты, указываем коордианты
          center: [55.673296, 37.733123],
          // Масштаб, тут все просто
          zoom: 13,
          // Отключаем все элементы управления
          controls: [],
        });

        var myGeoObjects = [];

        // Наша метка, указываем коордианты
        myGeoObjects = new ymaps.Placemark(
          [55.673296, 37.733123],
          {
            balloonContentBody: "",
          },
          {
            iconLayout: "default#image",
            // Путь до нашей картинки
            iconImageHref: "img/map-tag.svg",
            // Размер по ширине и высоте
            iconImageSize: [70, 70],
          }
        );

        var clusterer = new ymaps.Clusterer({
          clusterDisableClickZoom: false,
          clusterOpenBalloonOnClick: false,
        });

        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
      }
    };
    map_loaded = true;
  }
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

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

