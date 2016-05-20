// Author : VLTHemes
// Version : 1.0 (Release)

jQuery.noConflict()(function ($) {

    'use strict';

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iPhone: function() {
            return navigator.userAgent.match(/iPhone/i);
        },
        iPad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        iPod: function() {
            return navigator.userAgent.match(/iPod/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };




    /************************/
    // Toggle Menu
    /************************/ 
    function vlMenu(){

        $('.open-menu').on('click', function(e){

            e.preventDefault();

            $(this).toggleClass('isActive');
            $('.mobile-menu-wrap').slideToggle();

        });

    }



    /************************/
    // Button go to Top
    /************************/ 
    function toTop(){

        var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.toTop');

        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if( $(this).scrollTop() > offset_opacity ) { 
                $back_to_top.addClass('cd-fade-out');
            }
        });

        $back_to_top.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });

    }


    /************************/
    // OWL Carousel
    /************************/ 
    function carousel(){



        // slider home
        var sliderHome = $(".owl-title-slider");

        if($('.owl-title-slider .owl-item').length>1){

           sliderHome.owlCarousel({
            items: 1,
            loop: true,
            dots: false
         }); 

        } else{

            $('.owl-title-nav').hide();

        }



        $(".owl-title-nav .lnr-arrow-left").on('click', function () {

            sliderHome.trigger('prev.owl.carousel');
        });

        $(".owl-title-nav .lnr-arrow-right").on('click', function () {

            sliderHome.trigger('next.owl.carousel');
        });



        // Work Single Work Slider
        var singleWork = $('.single-work-slider');
        singleWork.owlCarousel({
            items: 1,
            loop: true,
            dots: true
        }); 


        // Related Works Slider
        var relatedWorks = $('.owl-related-works');
        relatedWorks.owlCarousel({
            loop: false,
            dots: false,
            margin: 30,
            responsive : {
                320 : {
                    items: 1
                },
                480 : {
                    items: 2
                },
                768 : {
                    items: 2
                },
                920: {
                    items: 3
                }
            }
        }); 


        // Blog Slider
        var blogSlider = $('.blog-slider');
        blogSlider.owlCarousel({
            items: 1,
            loop: true,
            dots: true
        }); 
        

        // Testimonial Slider 
        var testimonial = $(".owl-testimonial-slider")

        testimonial.owlCarousel({
            items: 1,
            loop: true,
            dots: false
         });


        $(".testimonial-nav .lnr-arrow-left").on('click', function () {

            testimonial.trigger('prev.owl.carousel');
        });

        $(".testimonial-nav .lnr-arrow-right").on('click', function () {

            testimonial.trigger('next.owl.carousel');
        });



        // Services Slider
        var services = $(".owl-services");
        services.owlCarousel({
            items: 1,
            loop: true,
            dots: false
        });


        $(".services-nav .lnr-arrow-left").on('click', function () {

            services.trigger('prev.owl.carousel');
        });

        $(".services-nav .lnr-arrow-right").on('click', function () {

            services.trigger('next.owl.carousel');
        });


        // About Slider
        var about = $(".owl-about-slider");
        about.owlCarousel({
            items: 1,
            loop: false,
            dots: true
        });

    }



    $(document).ready(function() {


    /************************/
    // Call Function
    /************************/ 


        toTop();
        vlMenu();
        carousel();










    /************************/
    // Parallax Section
    /************************/

        $('.jarallax').jarallax({
            speed: 0.2,
            noAndroid: true
        });




    /************************/
    // Scroll Animation
    /************************/
        
    var reveal = true;

    if(reveal==true && !isMobile.any()){

        window.sr = new scrollReveal({
            reset: true,
            mobile: false,
            enter: 'bottom',
            over: '0.4s',
            wait: '0s',
            easing: 'ease-in-out',
            delay: 'onload'
        });

    }



    /************************/
    // Masonry Blog
    /************************/

    $('.blog-masonry').imagesLoaded(function(){
        $(window).trigger('resize');

        $('.blog-masonry').isotope({
            itemSelector: '.isotope-item'
        });

    });

    /************************/
    // Portfolio Single Isotope
    /************************/

    $('.vl-portfolio-list').imagesLoaded(function(){
        $(window).trigger('resize');

        $('.vl-portfolio-list').isotope({
            itemSelector: '.vl-portfolio-item'
        });

    });

    /************************/
    // Magnific Popup
    /************************/

    $('.btn-play').magnificPopup({

        type: 'iframe',
        mainClass: 'mfp-fade',
        closeOnContentClick: true,
        closeBtnInside: false

    });



    /************************/
    // Progress Bar
    /************************/

    $('.progress-bar li').each(function(){ 

        $(this).appear(function(){          
            var percent = $(this).find('span').attr('data-width');
            var $endNum = parseInt($(this).find('p i').text());
            var $that = $(this);            
            $(this).find('span').animate({
                'width' : percent + '%'
            },1600, function(){
            });         
                 
            $(this).find('p i').countTo({
                from: 0,
                to: $endNum,
                speed: 1200,
                refreshInterval: 30,
                onComplete: function(){}
            });  
            
        });
    }); 



    /************************/
    // Counter
    /************************/

    $('.counter-item').each(function(){     
        
        $(this).appear(function(){  
            var $endNum = parseInt($(this).find('h6').text());
            var $that = $(this);            
                  
            $(this).find('h6').countTo({
                from: 0,
                to: $endNum,
                speed: 1200,
                refreshInterval: 30,
                onComplete: function(){}
            });  
        });

     }); 



    /************************/
    // Animsition
    /************************/

     function tlt(){

        $('.tlt').css({'visibility':'visible'}).textillate({
            autoStart: true,
            in: { 
                 effect: 'fadeInDown'
            }
        });


        $(".typed").typed({
            strings: [
                "      ",
                "design",
                "      ",
                "develop",
                "       ",
                "strategy",
                "        ",
                "content",
                "       ",
                "innovate",
                "        ",
                "om digital"
            ],
            typeSpeed: 70,
            backSpeed: 50,
            loop: false,
            backDelay: 4500,
            showCursor: true
        });

        $(".typed-two").typed({
            strings: [
                "creative",
                "hard-working",
                "useful",
                "responsible"
            ],
            typeSpeed: 50,
            backSpeed: 20,
            loop: true,
            backDelay: 2500,
            showCursor: false
        });




    }

    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1000,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'body',
        loadingClass: 'animsition-loading',
        loadingInner: '<div class="crazy-loading"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [
            'animation-duration', 
            '-webkit-animation-duration', 
            '-o-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) {
            window.location.href = url;
        }
    });

    $(".animsition").on('animsition.inEnd', function() {
        tlt();
    });



    /************************/
    // Contact Form
    /************************/ 

    $('#contact-form').on('submit', function(e) {
         return form_to_ajax_request($(this), ['email', 'name', 'message'], ['email', 'name', 'message']);
    });


    function form_to_ajax_request(form_el, all_fields, required_fields) {
            var fields_values = [];
            var error = false;

            //get values from fields
            $.each(all_fields, function(index, value) {
                fields_values[value] = form_el.find('*[name=' + value + ']').val();
            });

            //check if required fields are set
            $.each(required_fields, function(index, value) {
                if (!isSet(fields_values[value])) {
                    var message = form_el.data(value + '-not-set-msg');
                    if (!isSet(message))
                        message = form_el.data('all-fields-required-msg');
                    setReturnMessage(form_el, message);
                    showReturnMessage(form_el);
                    error = true;
                    return;
                }
            });
            if (error)
                return false;

            //form data query object for ajax request
            var data_query = {};
            $.each(all_fields, function(index, value) {
                data_query[value] = fields_values[value];
            });
            data_query['ajax'] = true;

            //show ajax loader
            showLoader(form_el);

            //send the request
            $.ajax({
                type: form_el.attr('method'),
                url: form_el.attr('action'),
                data: data_query,
                cache: false,
                dataType: "text"
            })
                .fail(function() { //request failed
                    setReturnMessage(form_el, form_el.data('ajax-fail-msg'));
                    showReturnMessage(form_el);
                })
                .done(function(message) { //request succeeded
                    if (!isSet(message)) {
                        clearForm(form_el);
                        setReturnMessage(form_el, form_el.data('success-msg'));
                        showReturnMessage(form_el);
                    } else {
                        setReturnMessage(form_el, message);
                        showReturnMessage(form_el);
                    }
                });

            //hide ajax loader
            hideLoader(form_el);

            return false;
    }

    function isSet(variable) {
            if (variable == "" || typeof(variable) == 'undefined')
                return false;
            return true;
    }

    function clearForm(form_el) {
            form_el.find('input[type=text]').val('');
            form_el.find('input[type=checkbox]').prop('checked', false);
            form_el.find('textarea').val('');
    }

    function showLoader(form_el) {
        form_el.find('.ajax-loader').fadeIn('fast');
    }

    function hideLoader(form_el) {
        form_el.find('.ajax-loader').fadeOut('fast');
    }

    function setReturnMessage(form_el, content) {
        if (!isSet(content))
            content = "Unspecified message.";
        form_el.find('.return-msg').html(content);
    }

    function showReturnMessage(form_el) {
        form_el.find('.return-msg').addClass('show-return-msg');
    }

    $('.return-msg').on('click', function(e) {
        $(this).removeClass('show-return-msg').html('&nbsp;');
    });



    /************************/
    // Google Map
    /************************/ 

    function initialize_map() {

        $('#map').each(function() {
            var $t = $(this),
                mapZoom = 15,
                mapLat = $t.attr("data-lat"),
                mapLng = $t.attr("data-lng");
            if ($t.attr("data-zoom") !== undefined) {
                mapZoom = parseInt($t.attr("data-zoom"), 10);
            }
            // Create an array of styles.
            var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
            // Create a new StyledMapType object, passing it the array of styles,
            // as well as the name to be displayed on the map type control.
            var styledMap = new google.maps.StyledMapType(styles, {
                name: "Styled Map"
            });
            var myLatLng = new google.maps.LatLng(mapLat, mapLng);
            var mapOptions = {
                zoom: mapZoom,
                center: myLatLng,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
            };
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                tittle: 'The - Crazy',
                icon: 'img/marker.png',
                animation: google.maps.Animation.DROP
            });
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');
        });

    }

    if ($('#map').length) {
        var map;
        google.maps.event.addDomListener(window, 'load', initialize_map);
    }






    });


    $(window).resize(function() {

    /************************/
    // Call Function
    /************************/ 
    carousel();

    });


    $(window).load(function() {


    });



});