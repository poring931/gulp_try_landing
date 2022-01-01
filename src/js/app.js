import * as flsFunction from "./modules/functions.js";
import * as imputPlag from "inputmask";
// import Swiper  from 'swiper';//пример подключения слайдера
  import Swiper, { Navigation } from 'swiper';


flsFunction.isWebp();//проверка на поддержку вебпи. но навреное лучше это выпилить


//Для форм
Inputmask({"mask": "+7 (999) 999-9999"}).mask(document.querySelectorAll('input[type="tel"]'));



//выбор формы снизу страницы
let chooseTitleItem = document.querySelectorAll('.choose_title_item');
chooseTitleItem.forEach((currentItem,index) => {
    currentItem.addEventListener('click',function (e) {
        if (!this.classList.contains("active")) {
            document.querySelector('.form_bottom span').innerText = this.innerText;
            document.querySelector('.choose_title_item.active').classList.remove("active");
            this.classList.add('active')
            flsFunction.toggleStyle(document.querySelector('.form_bottom .question_input'),'display', 'none', 'block')
        }
    })
});


//слайдер отзывов
Swiper.use([Navigation]);

var swiper = new Swiper(".reviews_block", {
    direction: 'horizontal',
    slidesPerView: 6,
    spaceBetween: 55,
    freeMode: true,
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
      
      spaceBetween: 55
    }
  }
});


//фансибокс для отзывов
let fslightbox = false;
document.querySelectorAll('.reviews_item').forEach((currentItem,index) => {
    currentItem.addEventListener('click',function (e) {
       e.preventDefault();
        if (fslightbox == false){
            flsFunction.asyncJs("/files/fslightbox.js");
            fslightbox = true;
        }
    })
});



document.addEventListener("DOMContentLoaded", function(event) {
    flsFunction.asyncCSS('/files/swiper.css');
    setTimeout(() => {
        flsFunction.asyncJs("/files/fslightbox.js");
        fslightbox = true;
    }, 4500);
});






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