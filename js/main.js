const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

//transfer
const voiceContent = document.querySelector('.header__container');
const voiceContainer = document.querySelector('.menu__body');
const transferItem = document.querySelector('.header__button');

const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener('resize', defineWidth);
function defineWidth() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (width <= 991) {
    voiceContainer.appendChild(transferItem);
    transferItem.classList.add('active');
    console.log('small');
  } else {
    if (transferItem.classList.contains('active')) {
      voiceContent.appendChild(transferItem);
      transferItem.classList.remove('active');
    }
  }
}
defineWidth();

// slider
new Swiper('.bg-slider__body', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInterection: false,
  },
  speed: 800,
  effect: 'fade',
});
new Swiper('.specialists__block', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow-right',
    prevEl: '.arrow-left',
  },
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   stopOnLastSlide: false,
  //   disableOnInterection: false,
  // },
  // speed: 800,
  // effect: 'fade',
});

////

const animItems = document.querySelectorAll('._anim');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}

// close
// const close = document.querySelectorAll('.modal-service__close');
// const modalItems = document.querySelectorAll('.service__modal');
// const serviseItems = document.querySelectorAll('.service__item');
// close.forEach((e) => {
//   e.addEventListener('click', (e) => {
//     console.log('click');
//     modalItems.forEach((el) => {
//       el.style.display = 'none';
//     });
//   });
// });
// serviseItems.forEach((el, i) => {
//   el.addEventListener('click', (e) => {
//     modalItems[i].style.display = 'block';
//   });
// });

function gallery() {
  const container = document.querySelectorAll('.gallery-block__wrapper');
  const popup = document.querySelector('.gallery__popup');

  if (popup) {
    container.forEach((img) => {
      img.onclick = () => {
        popup.classList.add('active');
        document.querySelector('.gallery__popup img').src = img.childNodes[1].getAttribute('src');
      };
    });

    document.querySelector('.gallery__popup').onclick = (e) => {
      if (e.target.tagName !== 'IMG') {
        popup.classList.remove('active');
      }
    };
  }
}
gallery();
