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
            this.classList.add('active')
            if(index !=2){
                Funtions.toggleStyle(document.querySelector('.form_bottom .question_input'),'display', 'none', 'block')
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





//  Funtions.showThanksMessageconst('sadsad')

//  $(document).on("submit", ".feedback_bottom", function(e) {
//         var isModal = false;
//         if ($(this).parent().parent().attr('class') == 'popup_feedback popup'){
//             isModal = true;
//         };
//         e.preventDefault();
//         // $(this).attr('action','/wp-content/themes/citymobile/mail.php')
//         $(this).attr('action','/wp-content/themes/citymobile/phpmailer/mail.php')
//     let m_method = $(this).attr('method');
//     let m_action = $(this).attr('action');
//     let m_data = $(this).serialize();
//     $.ajax({
//         type: m_method,
//         url: m_action,
//         data: m_data,
//         dataType: 'JSON',
//         resetForm: 'true',
//         beforeSend: function( xhr ) {
//             $('.form_input button').text('отправляем...')
//         },
//         success: function(response) {
//             // console.log(response)
//             // Для метрики отслеживание отправки формы из футера или из модалки
//             if(isModal==false){ym(85906957,'reachGoal','order-form-submit');
//             }else if(isModal==true){ym(85906957,'reachGoal','callback-form-submit');};
            
//             $('.form_input button').text('Отправить заявку')
//             $('.thank_for_callback').css('display', 'flex');
//             modalClose()
//             setTimeout(function() {
//                 $('.thank_for_callback').fadeOut('slow');
//                 $(".feedback_bottom").trigger("reset");
//                 $('.feedback_bottom input:not([type="checkbox"])').val('')
//             }, 4000);
//         },
//         error: function (jqXHR, exception) {
//             console.log(jqXHR);
//             console.log(exception);
//         if (jqXHR.status === 0) {
//             alert('Произошла ошибка: Not connect. Verify Network.');
//         } else if (jqXHR.status == 404) {
//             alert('Произошла ошибка: Requested page not found (404).');
//         } else if (jqXHR.status == 500) {
//             alert('Произошла ошибка: Internal Server Error (500).');
//         } else if (exception === 'parsererror') {
//             alert('Произошла ошибка: Requested JSON parse failed.');
//         } else if (exception === 'timeout') {
//             alert('Произошла ошибка: Time out error.');
//         } else if (exception === 'abort') {
//             alert('Произошла ошибка: Ajax request aborted.');
//         } else {
//             alert('Произошла ошибка: Uncaught Error. ' + jqXHR.responseText);
//         }
//         }
//     });
//     });