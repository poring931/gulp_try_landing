import * as Funtions from "./modules/functions.js";
import * as imputPlag from "inputmask";
import Swiper, {
  Navigation
} from 'swiper';



Funtions.isWebp(); //проверка на поддержку вебпи. но навреное лучше это выпилить


//Для форм
Inputmask({
  "mask": "+7 (999) 999-9999"
}).mask(document.querySelectorAll('input[type="tel"]'));



//выбор формы снизу страницы
let chooseTitleItem = document.querySelectorAll('.choose_title_item');
chooseTitleItem.forEach((currentItem, index) => {
  currentItem.addEventListener('click', function (e) {
    if (!this.classList.contains("active")) {
      document.querySelector('.form_bottom span').innerText = this.innerText;
      document.querySelector('input[name="form_name"]').value = this.innerText;
      document.querySelector('.choose_title_item.active').classList.remove("active");
      document.querySelector('.form_bottom .form-1').dataset.formtype = this.dataset.formtype

      this.classList.add('active')
      if (index == 0) {
        document.querySelector('.form_bottom .question_input').style.display = 'block'
        // Funtions.toggleStyle(document.querySelector('.form_bottom .question_input'),'display', 'none', 'block')
      } else {
        document.querySelector('.form_bottom .question_input').style.display = 'none'
      }


    }
  })
});


//слайдер отзывов
Swiper.use([Navigation]);

let swiper = new Swiper(".reviews_block", {
  direction: 'horizontal',
  slidesPerView: 6,
  freeMode: true,
  grabCursor: true,
  watchOverflow: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },
  breakpoints: {
    // when window width is >= 480px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
       effect: "coverflow",
        grabCursor: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        },
    },
    560: {
      slidesPerView: 3,
      spaceBetween: 30,
       effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        },
    },
    // when window width is >= 480px
    900: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    1340: {
      slidesPerView: 6,
      spaceBetween: 50
    },
    // when window width is >= 640px
   1640: {
      slidesPerView: 6,
      spaceBetween: 60
    }
  }
});




document.addEventListener("DOMContentLoaded", function (event) {

  Funtions.asyncCSS('/files/swiper.css');


  setTimeout(() => {
    //фансибокс для отзывов
    Funtions.asyncJs("/files/fslightbox.js");
  }, 3500);

  function addScriptScroll(url) {//скрипт для анимации при скроле
    return new Promise((resolve, reject) => {

      Funtions.asyncCSS('/files/t-scroll.min.css');

      let script = document.createElement("script")
      script.type = "text/javascript";
      script.async = true;
      script.onload = function () {

        Tu.tScroll({
          't-element': '.slideDown',
        })
        Tu.tScroll({
          't-element': '.zoomOut',
          't-duration': 1

        })
        Tu.tScroll({
          't-element': '.zoomOut',
        })
        Tu.tScroll({
          't-element': '.flipX',
          't-duration': 1
        })
        Tu.tScroll({
          't-element': '.slideUp',
          't-duration': 1
        })

        Tu.tScroll({
          't-element': '.slideDown',
          't-duration': 1
        })
        Tu.tScroll({
          't-element': '.zoomOutRight',
          't-duration': 1
        })
        Tu.tScroll({
          't-element': '.fadeIn',
          't-duration': 1
        })
      };

      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    });
  }
  addScriptScroll("/files/t-scroll.min.js")


  if(window.innerWidth > 600){//масорни сетка для отзывов
  Funtions.asyncJs("/files/imagesloaded.pkgd.min.js");

    setTimeout(() => {
      function addScriptMasonry(url) {
        return new Promise((resolve, reject) => {


          let script = document.createElement("script")
          script.type = "text/javascript";
          script.async = true;
          script.onload = function () {
            var grid = document.querySelector('.grid');
            var msnry;
            imagesLoaded(grid, function () {
              msnry = new Masonry(grid, {
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: false
              });
            });
          };

          script.src = url;
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
      addScriptMasonry("/files/masonry.pkgd.min.js")
    }, 1500);
  } else {
    document.querySelectorAll('.grid-item').forEach(item =>(item.classList.add('swiper-slide')))
    // будет слайдер
      let swiper2 = new Swiper(".our_works_block_masonry", {
        direction: 'horizontal',
        freeMode: true,
        grabCursor: true,
        autoHeight: true,
        effect:'cards',
        watchOverflow: true,
        loop: true,
         slidesPerView: 1,
            spaceBetween: 40,
        
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".our_works_next",
          prevEl: ".our_works_prev",
        },
        
      });

  }

  

  if (window.innerWidth < 800){
    document.querySelector('.banner_about_title').insertAdjacentElement('afterend',document.querySelector('.banner_pict'))
  }



});



//для последних работ фильтр
let chooseProductCat = document.querySelectorAll('.our_last_works_tabs_list__item');
let our_works = document.querySelector('.our_last_works');
chooseProductCat.forEach((currentItem, index) => {
  currentItem.addEventListener('click', function (e) {
    if (!this.classList.contains("active")) {
      document.querySelector('.our_last_works_tabs_list__item.active').classList.remove("active");
      this.classList.add('active')
      if (our_works.getBoundingClientRect().top < -401) {
        document.querySelector('.our_last_works').scrollIntoView()
      }

    }
  })
});

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {

  filter.addEventListener('click', function () {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.our_last_works_products .our_last_works_products_item:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.our_last_works_products [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.our_last_works_products [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show');
    });

  });
});




//работа с товарами
let products = document.querySelectorAll('.our_last_works_products_item');
products.forEach((product, index) => {
  product.addEventListener('click', function (e) {

    let product_name = this.querySelector('.our_last_works_products_item_name').innerText,
      product_cat = this.querySelectorAll('.our_last_works_products_item_cat div')[0].innerText,
      product_year = this.querySelectorAll('.our_last_works_products_item_cat div')[1].innerText,
      product_price = this.querySelector('.our_last_works_products_item_price').innerText,
      product_img = this.querySelector('.our_last_works_products_item_img img').src;
    Funtions.productAttrToModal(product_name, product_price, product_cat, product_year, product_img)

    Funtions.openModal('product')
  })
});






//работа с формами

let close_form = document.querySelectorAll('.close_modal, .overlay_');
close_form.forEach((closeForm, index) => {
  closeForm.addEventListener('click', function (e) {
    Funtions.closeModal()
  })
});
Funtions.openSelectorModalByClick('get_measure_own_size')
Funtions.openSelectorModalByClick('question_modal')
Funtions.openSelectorModalByClick('get_measure')
Funtions.openSelectorModalByClick('modal_consultation')



let message = {
  loading: 'Отправляется...',
  failure: 'что-то пошло не так'
}
let form_list = document.querySelectorAll('.form'),
  statusMessage = document.createElement('div');

statusMessage.classList.add('status');
form_list.forEach((form, index) => {

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let phone_number = event.target.querySelector('[name="phone"]');

    if (phone_number.value.length != 17 || phone_number.value.indexOf('_') > -1 || phone_number.value.length =='') {
      phone_number.focus()
      

      phone_number.style.color = 'red';
      phone_number.style.borderColor = 'red';
      setTimeout(() => {
        phone_number.style.color = '#000';
        phone_number.style.borderColor = '#ccc';

      }, 2500);
    } else {
      let inputs = form.querySelectorAll('input, textarea');
      form.appendChild(statusMessage);
      let formtype = this.dataset.formtype;
      let request = new XMLHttpRequest();

      request.open('POST', `https://loftdc.ru/mail.php?op=${formtype}`);
      let formData = new FormData(event.target);
      request.send(formData);



      request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
          Funtions.closeModal()
          statusMessage.style.display = 'none';
          for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
          }
          Funtions.showThanksMessageconst('Спасибо за Вашу заявку, <br> в ближайшее время с Вами свяжутся')
        } else {
          statusMessage.innerHTML = message.failure;
          setTimeout(() => {
            statusMessage.style.display = 'none';
          }, 4000);
        }
      });
    }
  });
});