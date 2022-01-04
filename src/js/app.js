import * as Funtions from "./modules/functions.js";
import * as imputPlag from "inputmask";
// import Swiper  from 'swiper';//пример подключения слайдера
  import Swiper, { Navigation } from 'swiper';


Funtions.isWebp();//проверка на поддержку вебпи. но навреное лучше это выпилить


//Для форм
Inputmask({"mask": "+7 (999) 999-9999"}).mask(document.querySelectorAll('input[type="tel"]'));



//выбор формы снизу страницы
let chooseTitleItem = document.querySelectorAll('.choose_title_item');
chooseTitleItem.forEach((currentItem,index) => {
    currentItem.addEventListener('click',function (e) {
        if (!this.classList.contains("active")) {
            document.querySelector('.form_bottom span').innerText = this.innerText;
            document.querySelector('input[name="form_name"]').value = this.innerText;
            document.querySelector('.choose_title_item.active').classList.remove("active");
            document.querySelector('.form_bottom .form-1').dataset.formtype = this.dataset.formtype

            this.classList.add('active')
            if(index == 0){
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

var swiper = new Swiper(".reviews_block", {
    direction: 'horizontal',
    slidesPerView: 6,
    freeMode: true,
    grabCursor:true,
    watchOverflow:true,
    loop: true,
       autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
      spaceBetween: 60
    }
  }
});




document.addEventListener("DOMContentLoaded", function(event) {

    Funtions.asyncCSS('/files/swiper.css');

    setTimeout(() => {
        //фансибокс для отзывов
        Funtions.asyncJs("/files/fslightbox.js");
    }, 500);

});


//для последних работ фильтр
let chooseProductCat = document.querySelectorAll('.our_last_works_tabs_list__item');
let our_works = document.querySelector('.our_last_works');
chooseProductCat.forEach((currentItem,index) => {
    currentItem.addEventListener('click',function (e) {
        if (!this.classList.contains("active")) {
            document.querySelector('.our_last_works_tabs_list__item.active').classList.remove("active");
            this.classList.add('active')
            if (our_works.getBoundingClientRect().top < -401){
              document.querySelector('.our_last_works').scrollIntoView()
            }

        }
    })
});

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

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



//работа с формами

let close_form = document.querySelectorAll('.close_modal, .overlay_');
close_form.forEach((currentItem,index) => {
      currentItem.addEventListener('click',function (e) {
          Funtions.closeModal()
    })
});

document.querySelector('.modal_consultation').addEventListener('click',function (e) {
      Funtions.openModal('modal_consultation')
})
document.querySelector('.call_measurment').addEventListener('click',function (e) {
      Funtions.openModal('measurment')
})



//работа с товарами


let products = document.querySelectorAll('.our_last_works_products_item');
products.forEach((product,index) => {
    product.addEventListener('click',function (e) {
      
      let product_name = this.querySelector('.our_last_works_products_item_name').innerText,
          product_cat = this.querySelectorAll('.our_last_works_products_item_cat div')[0].innerText,
          product_year = this.querySelectorAll('.our_last_works_products_item_cat div')[1].innerText,
          product_price = this.querySelector('.our_last_works_products_item_price').innerText,
          product_img = this.querySelector('.our_last_works_products_item_img img').src;
      Funtions.productAttrToModal(product_name, product_price, product_cat, product_year, product_img)

      Funtions.openModal('product')
    })
});






let message = {
    loading: 'Отправляется...',
    failure: 'что-то пошло не так'
}
let form_list = document.querySelectorAll('.form'),
    statusMessage = document.createElement('div');

statusMessage.classList.add('status');

form_list.forEach((form,index) => {
  
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let phone_number = this.querySelector('[name="phone"]');

        if (phone_number.value.length == 17 && phone_number.value.indexOf('_')>-1){
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
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            let formData = new FormData(event.target);

            let obj = {};
            formData.forEach(function (value,key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            console.log(JSON.stringify(obj));
            console.log(obj);
            request.send(json);
            // request.send(formData);

            
            request.addEventListener('readystatechange',function () {
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