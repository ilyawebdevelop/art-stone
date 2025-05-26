import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import { Fancybox } from "./modules/fancybox.esm.js";
import './modules/accordion-anim.js';
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: true,
  showClass: "f-scaleOut",
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introSlider
document.querySelectorAll('.introSlider').forEach(n => {
  const mySwiperIntro = new Swiper(n, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 600,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: n.closest('.introSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 'auto',
      },
    },
  });
});


// Инициализация слайдера createSlider
document.querySelectorAll('.createSlider').forEach(n => {
  const mySwiperCreate = new Swiper(n, {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 600,
    autoplay: true,
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });
});

// Инициализация слайдера stoneSlider
document.querySelectorAll('.stoneSlider').forEach(n => {
  const mySwiperStone = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 600,
    autoplay: true,
    navigation: {
      prevEl: n.closest('.stoneSliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.stoneSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера reviewsSlider
document.querySelectorAll('.reviewsSlider').forEach(n => {
  const mySwiperReviews = new Swiper(n, {
    slidesPerView: 2,
    spaceBetween: 25,
    speed: 600,
    autoplay: true,
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
});

// Инициализация слайдера partnersSlider
const partnersSlider = document.querySelector('.partnersSlider');
var mySwiperPartners = new Swiper(partnersSlider, {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: false,
  autoplay: {
    delay: 5000,
  },
  speed: 600,
  autoplay: {
    delay: 4000,
  },
  allowTouchMove: true,
  breakpoints: {
    0: {      
      spaceBetween: 10,
    },
    576: {
      spaceBetween: 24,     
    }, 
  },
  navigation: {
    nextEl: '.partnersSlider .navArrowNext',
    prevEl: '.partnersSlider .navArrowPrev',
  },
});


// Инициализация слайдера certSlider
document.querySelectorAll('.certSlider').forEach(n => {
  const mySwiperCert = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 600,
    autoplay: true,
    navigation: {
      prevEl: n.closest('.certSliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.certSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');
const mobMenuOverlay = document.querySelector('.mob-menu-overlay');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const overlayToggle = function () {
  mobMenuOverlay.classList.toggle('active');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
  overlayToggle();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  overlayToggle();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_nav = target == menu || menu.contains(target);
  let overlay_is_active = mobMenuOverlay.classList.contains('active');

  if (!its_nav && overlay_is_active) {
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    overlayToggle();
  }
});

