// abre menu header
$('.btn-toggle-menu').click(() => {
    $('.menu').fadeIn();
    $('.btn-close-menu').focus();
})

// fecha menu header
$('.btn-close-menu').click(() => {
    $('.menu').fadeOut();
})

// fecha modal e pausa video
$('.btn-close-modal').click(() => {
    let videos = document.querySelectorAll('iframe, video');
    Array.prototype.forEach.call(videos, function (video) {
        if (video.tagName.toLowerCase() === 'video') {
            video.pause();
        } else {
            let src = video.src;
            video.src = src;
        }
    });
})

if ($('button[data-bs-slide-to=0]').hasClass('active')) {
    $('.carousel-control-prev').hide();
} else {
    $('.carousel-control-prev').show();
}



// teste de carousel
let myCarouselS = document.getElementById('carouselSobre');
let myCarousel1 = document.getElementById('carouselModulo1');
let myCarousel2 = document.getElementById('carouselModulo2');
let myCarousel3 = document.getElementById('carouselModulo3');
let myCarousel4 = document.getElementById('carouselModulo4');
let myCarousel5 = document.getElementById('carouselModulo5');

if (myCarouselS) {
    myCarouselS.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0);
        let slideAnteriorS = $('#valor-carS.active').data('title');
        $("#msg").html(slideAnteriorS);

        let proxSlideS = $('#valor-carS.active').data('title2');
        $("#msg1").html(proxSlideS);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });

    myCarouselS.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm2 = $('#valor-carS.active').data('numeroslide');
        $("#msgdns").html(slideAnteriorm2);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });
};

if (myCarousel1) {
    $(document).ready(function () {
        myCarousel1.addEventListener('slide.bs.carousel', function () {
            $(window).scrollTop(0)
            let slideAnteriorm1 = $('#valor-car.active').data('title');
            $("#msg").html(slideAnteriorm1);

            let proxSlidem1 = $('#valor-car.active').data('title2');
            $("#msg1").html(proxSlidem1);

            if ($('.indices button:first-of-type').hasClass('active')) {
                $('.carousel-control-prev').hide();
            } else {
                $('.carousel-control-prev').show();
            }

            if ($('.indices button:last-of-type').hasClass('active')) {
                $('.carousel-control-next').hide();
            } else {
                $('.carousel-control-next').show();
            }

        })
    });

    myCarousel1.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm2 = $('#valor-car.active').data('numeroslide');
        $("#msgdns").html(slideAnteriorm2);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });
};

if (myCarousel2) {
    myCarousel2.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm2 = $('#valor-car.active').data('title');
        $("#msg").html(slideAnteriorm2);

        let proxSlidem2 = $('#valor-car.active').data('title2');
        $("#msg1").html(proxSlidem2);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });

    myCarousel2.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm2 = $('#valor-car.active').data('numeroslide');
        $("#msgdns").html(slideAnteriorm2);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });
};

if (myCarousel3) {
    myCarousel3.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm3 = $('#valor-car.active').data('title');
        $("#msg").html(slideAnteriorm3);

        let proxSlidem3 = $('#valor-car.active').data('title2');
        $("#msg1").html(proxSlidem3);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });

    myCarousel3.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm2 = $('#valor-car.active').data('numeroslide');
        $("#msgdns").html(slideAnteriorm2);

               if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });
};

if (myCarousel4) {
    myCarousel4.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm4 = $('#valor-car.active').data('title');
        $("#msg").html(slideAnteriorm4);


        let proxSlidem4 = $('#valor-car.active').data('title2');
        $("#msg1").html(proxSlidem4);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }

    });

    myCarousel4.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm2 = $('#valor-car.active').data('numeroslide');
        $("#msgdns").html(slideAnteriorm2);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });
};

if (myCarousel5) {
    myCarousel5.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm5 = $('#valor-car.active').data('title');
        $("#msg").html(slideAnteriorm5);
        console.log(slideAnteriorm5)

        let proxSlidem5 = $('#valor-car.active').data('title2');
        $("#msg1").html(proxSlidem5);
        console.log(proxSlidem5)

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }

    });

    myCarousel5.addEventListener('slide.bs.carousel', function () {
        $(window).scrollTop(0)
        let slideAnteriorm2 = $('#valor-car.active').data('numeroslide');
        $("#msgdns").html(slideAnteriorm2);

        let proxSlidem2 = $('#valor-car.active').data('title2');
        $("#msg1").html(proxSlidem2);

        if ($('.indices button:first-of-type').hasClass('active')) {
            $('.carousel-control-prev').hide();
        } else {
            $('.carousel-control-prev').show();
        }

        if ($('.indices button:last-of-type').hasClass('active')) {
            $('.carousel-control-next').hide();
        } else {
            $('.carousel-control-next').show();
        }
    });
};