
// // swiper slide animation
var swiper = new Swiper(".swiper-pages", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 44,
        },
    },
});

var swiperNovellas = new Swiper(".swiper-pages-novellas", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination-novellas",
        clickable: true,
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 35,
        },
    },
});



// //scroll screen
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    let heightSrc = document.documentElement.scrollTop;
    let width = screen.width;

    if (heightSrc > 50) {
        jQuery('.navbar').addClass('position-fixed');
        jQuery('.navbar').addClass('z-2');
        jQuery('.text-header').add(jQuery('.text-header').css("font-size", "30px")).css("padding", "20px 29px 20px");
        // jQuery(".text-header").css("font-size", "30px");
        jQuery('.intro-text-heading').css("padding-top", "282px");
    } else {
        jQuery('.navbar').removeClass('position-fixed');
        jQuery('.navbar').removeClass('z-2');
        jQuery('.text-header').add(jQuery('.text-header').css("font-size", "36.5px")).css("padding", "54px 29px 54px");
        // jQuery(".text-header").css("font-size", "36.5px");
        jQuery('.intro-text-heading').css("padding-top", "154.5px")
    }
}

    jQuery(document).ready(function () {
        jQuery('a[href*=#]').bind('click', function (e) {
            e.preventDefault();
            // let srwidth = jQuery('html, body').width();
            // console.log(width);
            jQuery(".navbar-collapse").removeClass('show');
            const target = jQuery(this).attr("href");

            // console.log(jQuery(target).offset().top);
            jQuery('html, body').stop().animate({
                // if(srwidth > 768) {

                // }
                scrollTop: jQuery(target).offset().top - 76
            }, 500);
            return false;
        });
    });

    jQuery(window).scroll(function () {
        cur = jQuery('.tag').map(function () {
            if (jQuery(this).offset().top - 77 < jQuery(window).scrollTop()) {
                return this.id;
            }
        });
        // console.log(cur);
        cur = cur[cur.length - 1];

        console.log(cur);
        jQuery('a.action').removeClass('action');
        jQuery(`.jQuery{cur}`).addClass('action');
    });

// filter
jQuery(".chars").click(function (){
    jQuery(".chars").addClass('acti');
    jQuery(".conceptual-item").addClass('d-none');
    jQuery(".concep").removeClass('acti');
    jQuery(".character-item").removeClass('d-none');
});

jQuery(".concep").click(function (){
    jQuery(".concep").addClass('acti');
    jQuery(".character-item").addClass('d-none');
    jQuery(".chars").removeClass('acti');
    jQuery(".conceptual-item").removeClass('d-none');
});

jQuery(".filter").click(function (){
    jQuery(".character-item").removeClass('d-none');
    jQuery(".conceptual-item").removeClass('d-none');
    jQuery(".concep").removeClass('acti');
    jQuery(".chars").removeClass('acti');
});


