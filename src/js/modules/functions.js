export function isWebp() {
    //функция проверки на поддержку webp браузерами
    function testWebp(callback){
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
         webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    
    testWebp(function(support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className)
    });
};


//toggle style css
export function toggleStyle(el, prop, style1, style2) {
  el.style[prop] = el.style[prop] === style1 ? style2 : style1;
}


//async load css
export function asyncCSS(href) {
    var css = document.createElement('link');
    css.rel = "stylesheet";
    css.href = href;
    document.head.appendChild(css);
}

//async load js
export function asyncJs(src) {
   var js = document.createElement("script");
    js.type = "text/javascript";
    js.async = true;
    js.src = src;
    document.head.appendChild(js);
}


export function openModal(name = ''){
    if (name){
        document.querySelector(`.modal_wrapper .${name}`).classList.add('active')
    }
    document.querySelector('.overlay_').style.cssText = "opacity:1; z-index:2; pointer-events:inherit;"
    document.querySelector('body').classList.add('no_overlay')
    document.querySelector('.modal_wrapper').classList.add('active')

  
}
export function closeModal(){

    if (document.querySelector('.modal_wrapper .form_block.active')){
        document.querySelector('.modal_wrapper .form_block.active').classList.remove('active')
    }
    document.querySelector('.overlay_').style.cssText = "opacity:0; z-index:-1; pointer-events:none;"
    document.querySelector('body').classList.remove('no_overlay')
    document.querySelector('.modal_wrapper').classList.remove('active')

}

export const showThanksMessageconst = (text=`Спасибо за заявку, <br> с Вами скоро свяжутся`) => {
    let thanks = document.querySelector('.thanks_')
    thanks.innerHTML = text;
    thanks.style.opacity = '1';
    setTimeout(() => {
        thanks.style.opacity = '0';
    }, 5400);
}
export const productAttrToModal = (title, price='', cat, year, src='') => {
    document.querySelector('.form_product_title').innerText = title;
    document.querySelector('.form_product_price').innerText = price;
    document.querySelector('.form_product_cat').innerText = cat;
    document.querySelector('.form_product_year').innerText = year;
     document.querySelector('[name="prod_name"]').value = title;
    let img_original = src.replace('-sm','').replace('-md','').replace('-lg',''),
        img_medium = src;
     document.querySelector('[name="prod_img"]').value = img_original;

    document.querySelector('.form_product_img img').src = img_original.replace('.webp','-sm.webp');
    document.querySelector('.form_product_img').href = img_original;
    refreshFsLightbox();
    
}