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


export function openModal(){
    document.querySelector('.overlay').style.cssText = "opacity:1; z-index:2;"
    document.querySelector('body').classList.add('no_overlay')
}
export function closeModal(){
    document.querySelector('.overlay').style.cssText = "opacity:0; z-index:-1;"
    document.querySelector('body').classList.remove('no_overlay')
}