
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
        $('.navbar').addClass('position-fixed');
        $('.navbar').addClass('z-2');
        $('.text-header').add($('.text-header').css("font-size", "30px")).css("padding", "20px 29px 20px");
        // $(".text-header").css("font-size", "30px");
        $('.intro-text-heading').css("padding-top", "282px");
    } else {
        $('.navbar').removeClass('position-fixed');
        $('.navbar').removeClass('z-2');
        $('.text-header').add($('.text-header').css("font-size", "36.5px")).css("padding", "54px 29px 54px");
        // $(".text-header").css("font-size", "36.5px");
        $('.intro-text-heading').css("padding-top", "154.5px")
    }
}


    $(document).ready(function () {
        $('a[href*=#]').bind('click', function (e) {
            e.preventDefault();
            // let srwidth = $('html, body').width();
            // console.log(width);
            $(".navbar-collapse").removeClass('show');
            const target = $(this).attr("href");

            // console.log($(target).offset().top);
            $('html, body').stop().animate({
                // if(srwidth > 768) {

                // }
                scrollTop: $(target).offset().top - 76
            }, 500);
            return false;
        });
    });

    $(window).scroll(function () {
        cur = $('.tag').map(function () {
            if ($(this).offset().top - 77 < $(window).scrollTop()) {
                return this.id;
            }
        });
        // console.log(cur);
        cur = cur[cur.length - 1];

        console.log(cur);
        $('a.action').removeClass('action');
        $(`.${cur}`).addClass('action');
    });

// filter
$(".chars").click(function (){
    $(".chars").addClass('acti');
    $(".conceptual-item").addClass('d-none');
    $(".concep").removeClass('acti');
    $(".character-item").removeClass('d-none');
});

$(".concep").click(function (){
    $(".concep").addClass('acti');
    $(".character-item").addClass('d-none');
    $(".chars").removeClass('acti');
    $(".conceptual-item").removeClass('d-none');
});

$(".filter").click(function (){
    $(".character-item").removeClass('d-none');
    $(".conceptual-item").removeClass('d-none');
    $(".concep").removeClass('acti');
    $(".chars").removeClass('acti');
});


