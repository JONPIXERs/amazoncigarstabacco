(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    

})(jQuery);

// Bottum like
const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }

});

// Bottum like (2)
const likeBtn2 = document.querySelector(".like__btn2");
let likeIcon2 = document.querySelector("#icon2"),
  count2 = document.querySelector("#count2");

let clicked2 = false;


likeBtn2.addEventListener("click", () => {
  if (!clicked2) {
    clicked2 = true;
    likeIcon2.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count2.textContent++;
  } else {
    clicked2 = false;
    likeIcon2.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count2.textContent--;
  }

});

// Bottum like (3)
const likeBtn3 = document.querySelector(".like__btn3");
let likeIcon3 = document.querySelector("#icon3"),
  count3 = document.querySelector("#count3");

let clicked3 = false;


likeBtn3.addEventListener("click", () => {
  if (!clicked3) {
    clicked3 = true;
    likeIcon3.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count3.textContent++;
  } else {
    clicked3 = false;
    likeIcon3.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count3.textContent--;
  }

});

// Bottum like (4)
const likeBtn4 = document.querySelector(".like__btn4");
let likeIcon4 = document.querySelector("#icon4"),
  count4 = document.querySelector("#count4");

let clicked4 = false;


likeBtn4.addEventListener("click", () => {
  if (!clicked4) {
    clicked4 = true;
    likeIcon4.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count4.textContent++;
  } else {
    clicked4 = false;
    likeIcon4.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count4.textContent--;
  }

});
// Bottum like (5)
const likeBtn5 = document.querySelector(".like__btn5");
let likeIcon5 = document.querySelector("#icon5"),
  count5 = document.querySelector("#count5");

let clicked5 = false;


likeBtn5.addEventListener("click", () => {
  if (!clicked5) {
    clicked5 = true;
    likeIcon5.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count5.textContent++;
  } else {
    clicked5 = false;
    likeIcon5.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count5.textContent--;
  }

});

// Bottum like (6)
const likeBtn6 = document.querySelector(".like__btn6");
let likeIcon6 = document.querySelector("#icon6"),
  count6 = document.querySelector("#count6");

let clicked6 = false;


likeBtn6.addEventListener("click", () => {
  if (!clicked6) {
    clicked6 = true;
    likeIcon6.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count6.textContent++;
  } else {
    clicked6 = false;
    likeIcon6.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count6.textContent--;
  }

});











