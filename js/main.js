jQuery(function ($) {
    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(400).fadeOut('slow');
    }());

});



// --------------------------------------------------------------------
// Sticky menu
// --------------------------------------------------------------------


$(window).scroll(function () {
    if ($(document).scrollTop() > 60) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});


// --------------------------------------------------------------------
// Anomation menu to sections
// --------------------------------------------------------------------
$(".navbar ul li a[href^='#'], .main-info-buttons a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 500, function () {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});
// --------------------------------------------------------------------
// Back to top
// --------------------------------------------------------------------

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px

        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// --------------------------------------------------------------------
// Anomation
// --------------------------------------------------------------------


AOS.init({
    duration: 1000
});


// --------------------------------------------------------------------
// Initialize Swiper
// --------------------------------------------------------------------
var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2500,
    },
});

// --------------------------------------------------------------------
// Initialize GoogleMap
// --------------------------------------------------------------------

function initMap() {
    var uluru = {
        lat: 49.840299,
        lng: 24.022278
    };
    var labels = 'Oksana Drul Resume';
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {
            lat: 49.840299,
            lng: 24.022278
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f6f4f1"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#cfc2a9"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e4ddd1"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c1b49a"
                }, {
                    "lightness": 18
                }, {
                    "weight": "0.66"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c1b49a"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c1b49a"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#c1b49a"
                }, {
                    "lightness": 29
                }, {
                    "weight": "0.50"
                }]
            }, {
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dcedf9"
            }, {
                "lightness": 17
            }]
        }]
    });
    var image = "img/google-marker.png";
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        labelClass: "labels",
        icon: {
            url: image,
            labelOrigin: new google.maps.Point(120, 20)
        },
        label: {
            text: labels,
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333"
        },
    });
}