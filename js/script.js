
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
        $('.navbar').addClass('position-fixed').addClass('z-2');
        $('.text-header').add($('.text-header').css("font-size", "30px")).css("padding", "20px 29px 20px");
        $('.intro-text-heading').css("padding-top", "282px");
    } else {
        $('.navbar').removeClass('position-fixed').removeClass('z-2');
        $('.text-header').add($('.text-header').css("font-size", "36.5px")).css("padding", "54px 29px 54px");
        $('.intro-text-heading').css("padding-top", "154.5px")
    }
}

//     if (width > 1200) {
//         if(heightSrc < 660) {
//             $(".text-menu").removeClass('action');
//             $(".home-item").addClass('action'); 
//         } else if(heightSrc >= 660 && heightSrc < 2000) {
//             $(".text-menu").removeClass('action'); 
//             $(".series-item").addClass('action'); 
//             // alert(heightSrc);
//         } else if(heightSrc >= 2000 && heightSrc < 2750) {
//             $(".text-menu").removeClass('action');
//             $(".crew-item").addClass('action'); 
//         } else if(heightSrc >= 2750 && heightSrc < 3300) {
//             $(".text-menu").removeClass('action'); 
//             $(".info-item").addClass('action'); 
//         } else if(heightSrc >= 3300 && heightSrc < 4630) {
//             $(".text-menu").removeClass('action');
//             $(".about-item").addClass('action');
//         } else if(heightSrc >= 4630) {
//             $(".text-menu").removeClass('action');
//             $(".bazzar-item").addClass('action'); 
//         }
//     } else if(width <= 576) {
//         if(heightSrc < 350) {
//             $(".text-menu").removeClass('action'); 
//             $(".home-item").addClass('action'); 
//         } else if(heightSrc >= 200 && heightSrc < 1600) {
//             $(".text-menu").removeClass('action'); 
//             $(".series-item").addClass('action'); 
//         } else if(heightSrc >= 1600 && heightSrc < 2450) {
//             $(".text-menu").removeClass('action'); 
//             $(".crew-item").addClass('action'); 
//         } else if(heightSrc >= 2450 && heightSrc < 2900) {
//             $(".text-menu").removeClass('action'); 
//             $(".info-item").addClass('action'); 
//         } else if(heightSrc >= 2900 && heightSrc < 4350) {
//             $(".text-menu").removeClass('action'); 
//             $(".about-item").addClass('action');
//         } else if(heightSrc >= 4350) {
//             $(".text-menu").removeClass('action'); 
//             $(".bazzar-item").addClass('action'); 
//         }
//     } else if(width <= 768) {
//         if(heightSrc < 350) {
//             $(".text-menu").removeClass('action'); 
//             $(".home-item").addClass('action'); 
//         } else if(heightSrc >= 200 && heightSrc < 1600) {
//             $(".text-menu").removeClass('action'); 
//             $(".series-item").addClass('action'); 
//         } else if(heightSrc >= 1600 && heightSrc < 2450) {
//             $(".text-menu").removeClass('action'); 
//             $(".crew-item").addClass('action'); 
//         } else if(heightSrc >= 2450 && heightSrc < 2900) {
//             $(".text-menu").removeClass('action'); 
//             $(".info-item").addClass('action'); 
//         } else if(heightSrc >= 2900 && heightSrc < 4350) {
//             $(".text-menu").removeClass('action'); 
//             $(".about-item").addClass('action');
//         } else if(heightSrc >= 4350) {
//             $(".text-menu").removeClass('action'); 
//             $(".bazzar-item").addClass('action'); 
//         }
//     } else if(width >= 1024) {
//         if(heightSrc < 618) {
//             $(".text-menu").removeClass('action'); 
//             $(".home-item").addClass('action'); 
//         } else if(heightSrc >= 618 && heightSrc < 2600) {
//             $(".text-menu").removeClass('action'); 
//             $(".series-item").addClass('action'); 
//         } else if(heightSrc >= 2600 && heightSrc < 3407) {
//             $(".text-menu").removeClass('action'); 
//             $(".crew-item").addClass('action'); 
//             console.log(heightSrc);
//         } else if(heightSrc >= 3407 && heightSrc < 3924) {
//             $(".text-menu").removeClass('action'); 
//             $(".info-item").addClass('action'); 
//         } else if(heightSrc >= 3924 && heightSrc < 5060) {
//             $(".text-menu").removeClass('action'); 
//             $(".about-item").addClass('action');
//         } else if(heightSrc >= 5060) {
//             $(".text-menu").removeClass('action'); 
//             $(".bazzar-item").addClass('action'); 
//             console.log(heightSrc);
//         }
//     }
// }


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
        // cur = cur[cur.slice(-1)];

        console.log(cur);
        $('a.action').removeClass('action');
        $(`.${cur}`).addClass('action');
    });
    



// var width = screen.width;
// $("#home").click(function (){
//     window.scrollTo(0, 0)
// });
// if (width > 1200) {
//     // $(".btn-down").click(function (){
//     //     window.scrollTo(0, 790)
//     // });

//     $("#series").click(function (){
//         window.scrollTo(0, 660)
//     });
//     $("#crew").click(function (){
//         window.scrollTo(0, 2000)
//     }); 
//     $("#info").click(function (){
//         window.scrollTo(0, 2750)
//     });
//     $("#about").click(function (){
//         window.scrollTo(0, 3300)
//     });
//     $("#bazaar").click(function (){
//         window.scrollTo(0, 4630)
//     });
       
// } else if(width <= 576) {
//     // $(".btn-down").click(function (){
//     //     window.scrollTo(0, 350)
//     // });

//     $("#series").click(function (){
//         window.scrollTo(0, 350)
//     });
//     $("#info").click(function (){
//         window.scrollTo(0, 2450)
//     });
//     $("#about").click(function (){
//         window.scrollTo(0, 2950)
//     });
//     $("#bazaar").click(function (){
//         window.scrollTo(0, 4350)
//     });
//     $("#crew").click(function (){
//         window.scrollTo(0, 1600)
//     });
// }

// scroll action

// $(window).scroll(function () {
//     var scrollDistance = $(window).scrollTop();
//     const id = $(this).attr('id');
//     console.log(id);
//     $('.page').each(function (i) {
//       if ($(this).position().top <= scrollDistance) {
//         const id = $(this).attr('id');
//         $(`.menu-${id}.action`).removeClass('action');
//         $(`.menu-${id}`).addClass('action');
//       }
//     });
//  }).scroll();


// $(function(){
//     $('div').click(function() {
//         $('div').add('p',this).addClass('test');
//     });
// });


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


