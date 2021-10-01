// $(window).scroll(function(){
//     $(".main").toggleClass("bg-main", $(this).scrollTop()> 90);
// })



// Create a media condition that targets viewports at least 768px wide
const mediaQuerylg = window.matchMedia('(min-width: 992px)')
// Check if the media query is true
if (mediaQuerylg.matches) {
  // Then trigger an alert
  $(window).on("scroll", function() {
    if($(window).scrollTop()> 50) {
        $('nav').addClass('bg-main');
    }

    else {
        $('nav').removeClass('bg-main');
    }
})

$(window).on("scroll", function() {
    if($(window).scrollTop()> 550) {
        $('nav').addClass('bg-main-2');
    }

    else {
        $('nav').removeClass('bg-main-2');
    }
})

$(window).on("scroll", function() {
    if($(window).scrollTop()> 550) {
        $('.nav-link').addClass('nav-link-2');
    }

    else {
        $('.nav-link').removeClass('nav-link-2');
    }
})
}

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 500px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  $(window).on("scroll", function() {
    if($(window).scrollTop()> 50) {
        $('nav').addClass('bg-main');
    }

    else {
        $('nav').removeClass('bg-main');
    }
})

$(window).on("scroll", function() {
    if($(window).scrollTop()> 1000) {
        $('nav').addClass('bg-main-2');
    }

    else {
        $('nav').removeClass('bg-main-2');
    }
})

$(window).on("scroll", function() {
    if($(window).scrollTop()> 1000) {
        $('.nav-link').addClass('nav-link-2');
    }

    else {
        $('.nav-link').removeClass('nav-link-2');
    }
})
}

$('a').click(function (e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 1000);
});