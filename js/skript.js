$(document).ready(function(){
    $('.burger').click(function(){
        $('.burger,.burger-menu').toggleClass('active')
        $('.drop-down').addClass('disp-none');
    })
    
    $('a.open-menu').click(function(){
        $('.drop-down').toggleClass('disp-none');
        $('.menu2').toggleClass('disp-none');
        return false;
    })
    $('.search-button-close').click(function () {
        $('.drop-down').toggleClass('disp-none');
        $('.menu2').toggleClass('disp-none');
        return false;
    });

    $('#form-callback-phone').mask("+7 (999) 999-99-99");
    $('#popup-callback-phone').mask("+7 (999) 999-99-99");
        
    

    $('.popup-open').click(function(){
        let $this=$(this);
        let idPopup=$this.attr('href');
        $(idPopup).addClass('active') //addClass добавляет класс
        return false;
    })
    $('.search-menu').on('click', function(){
        let idBlock = $(this).data('block');
        $('.search-block').removeClass('active');
        $(idBlock).addClass('active');
        return false;
    });
    // сделали закрытие 
    $('body').on('click',function(e){ //при нажатии на документ
      let container=$('.popup-content');// создали переменную в которой хранится наш блок
      if (container.has(e.target).length === 0){// если клик вне нашего контейнера 
        $('.popup-block').removeClass('active');//то убирается класс эктив
      }
    })
    $('.close-popup').click(function () {
        $('.popup-block').removeClass('active');
    });

});

function mobileSubMenu () {
    if (document.documentElement.clientWidth < 768) {
        $(' #drop-down-menu').appendTo('.burger-menu .burger-list .submenu');
        $('.burger-menu .burger-list').css('height', $(window).height() - 100);
    } else {
        $('.burger-menu .burger-list .submenu #drop-down-menu').appendTo('.one');
        $('.burger-menu .burger-list').removeAttr("style");
    }
}

function getOwl (className,items,navElementClass,items1024,items991,items768,item585,items0,stagePadding1920,stagePadding1800,stagePadding1700,stagePadding1600,stagePadding1500,stagePadding1400,stagePadding1300,stagePadding1200) {
    $(className).owlCarousel({
        loop:true,
        margin:30,
        navContainer: navElementClass,
        navElement: 'button',
        navText: ["",""],
        // stagePadding: stagePadding,
        items: items,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:items0,
                nav:true
            },
            585:{
                items:item585,
                nav:false,
                // stagePadding:stagePadding585
            },
            768:{
                items:items768,
                nav:false,
                // stagePadding:stagePadding768
            },
            991:{
                items:items991,
                nav:true,
                loop:true,
                // stagePadding:stagePadding991
            },
            1024:{
                items:items1024,
                nav:true,
                loop:true,
                // stagePadding:stagePadding1024
            },
            1200:{
                nav:true,
                loop:true,
                stagePadding:stagePadding1200
            },
            1300:{
                stagePadding:stagePadding1300
            },
            1400:{
                stagePadding:stagePadding1400
            },
            1500:{
                stagePadding:stagePadding1500
            },
            1600:{
                stagePadding:stagePadding1600
            },
            1700:{
                stagePadding:stagePadding1700
            },
            1800:{
                stagePadding:stagePadding1800
            },
            1920:{
                stagePadding:stagePadding1920
            },
        }
    });
}
$(document).ready(function () {
    getOwl('.slider-new-collection', 4, '.nav-container-events', 4, 3, 3, 2, 1, 10, 10, 10, 10, 10, 10, 10, 10);
    getOwl('.slider-textures-materials', 4, '.nav-container-events-two', 4, 3, 3, 2, 1, 10, 10, 10, 10, 10, 10, 10, 10);
    getOwl('.slider-news-slider', 3, '.nav-container-events-three', 3, 2, 2, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10);
    getOwl('.slider-сompleted-projects', 1, '.nav-container-events-four',1, 1, 1, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10);
    getOwl('.slider-catalog', 3, '.nav-container-events-catalog',3, 2, 2, 2, 1, 10, 10, 10, 10, 10, 10, 10, 10);
    getOwl('.slider-this-project', 1, '.nav-container-project2',1, 1, 1, 1, 1, 400, 400, 300, 200, 200, 150, 100, 50);
    getOwl('.slider-this-product', 1, '.nav-container-product',1, 1, 1, 1, 1, 400, 400, 300, 200, 200, 150, 100, 50);
    getOwl('.slider-video-slider', 3, '.nav-container-video',3, 2, 2, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10);
    mobileSubMenu();
});
$(window).resize(function () {
    mobileSubMenu();
});



mybutton = document.getElementById("myBtn");

// Когда пользователь прокручивает вниз 1000px от верхней части документа, покажите кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
// function topFunction() {
//   document.body.scrollTop = 0; // Для Safari
//   document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
// }
$("#myBtn").click(function() {
    var body = $("html, body");
    body.stop().animate({
        scrollTop:0
    }, 1000, 'swing');
});




