/*
 Theme Name: Dgita
 Theme URI: https://themeforest.net/user/themewar/portfolio
 Author: themewar
 Author URI: 
 Description: Dgita - Creative Digital Agency Responsive HTML5 Template
 Version: 1.0
 License:
 License URI:
*/
 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Obj
 2. All Carousel
 3. Skills
 4. Stretch Column
 5. Fun Fact Count
 6. Back To Top
 7. All PopUP
 8. Sticky Header
 9. Mobile Menu
 10. Preloader
 11. Contact Form Submission
 12. Price Slider
 13. Qty
*/

(function ($) {
    'use strict';
    /*--------------------------------------------------------
    / 1. Init Obj
    /---------------------------------------------------------*/
    var funfact                 = $('.funfact'),
        testimonialSlider01     = $('.testimonialSlider01'),
        testimonialSlider02     = $('.testimonialSlider02'),
        testimonialSlider03     = $('.testimonialSlider03'),
        popup_video             = $('.popup_video'),
        slider_range            = $("#slider-range"),
        popup_img               = $('.popup_img');
    
    /*--------------------------------------------------------
    / 2. All Carousel
    /---------------------------------------------------------*/
    /*--- Rev Slider ---*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        visibilityLevels: [1200, 1140, 778, 480],
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 1199,
                hide_onleave: true,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                style: 'uranus',
                tmp: '<span class="tp-bullet-inner"></span>',
                h_align: "center",
                v_align: "bottom",
                hide_onleave: false,
                v_offset: 40,
                space: 15,
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    var revapi = jQuery('#rev_slider_2').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        visibilityLevels: [1200, 1140, 778, 480],
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 1199,
                hide_onleave: true,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                style: 'uranus',
                tmp: '<span class="tp-bullet-inner"></span>',
                h_align: "center",
                v_align: "bottom",
                hide_onleave: false,
                v_offset: 40,
                space: 15,
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    var revapi = jQuery('#rev_slider_3').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        visibilityLevels: [1200, 1140, 778, 480],
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 1199,
                hide_onleave: true,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                style: 'uranus',
                tmp: '<span class="tp-bullet-inner"></span>',
                h_align: "center",
                v_align: "bottom",
                hide_onleave: false,
                v_offset: 40,
                space: 15,
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });

    if (testimonialSlider01.length > 0) {
        var testimonialSlider01_obj = testimonialSlider01.owlCarousel({
            margin: 0,
            autoplay: true,
            loop: true,
            nav: true,
            smartSpeed: 400,
            navText: ['<i class="dgita-right-arrow"></i>', '<i class="dgita-right-arrow"></i>'],
            dots: false,
            items: 1
        });
    }
    if (testimonialSlider02.length > 0) {
        var testimonialSlider02_obj = testimonialSlider02.owlCarousel({
            margin: 0,
            autoplay: true,
            loop: true,
            nav: true,
            smartSpeed: 400,
            navText: ['<i class="dgita-right-arrow"></i>', '<i class="dgita-right-arrow"></i>'],
            dots: false,
            items: 1
        });
    }
    if (testimonialSlider03.length > 0) {
        var testimonialSlider03_obj = testimonialSlider03.owlCarousel({
            margin: 0,
            autoplay: true,
            loop: true,
            nav: true,
            smartSpeed: 400,
            navText: ['<i class="dgita-right-arrow"></i>', '<i class="dgita-right-arrow"></i>'],
            dots: false,
            items: 1
        });
    }
    $('.folioSlider').slick({
        autoplay: true,
        centerMode: true,
        dots: false,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="dgita-right-arrow"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="dgita-right-arrow"></i></button>',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerPadding: '0',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '160px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    if ($('.product_gallery').length > 0) {
        var gallery_sliders = $(".gallery_sliders")
        gallery_sliders.lightSlider({
            gallery:true,
            item:1,
            thumbItem:4,
            slideMargin: 0,
            speed:700,
            pause: 5000,
            auto:true,
            loop:true,
            galleryMargin: 0,
            thumbMargin: 9,
            currentPagerPosition: 'left',
            onSliderLoad: function() {
                gallery_sliders.removeClass('cS-hidden');
            }  
        });
    }
    
    /*--------------------------------------------------------
    / 3. Skills
    /----------------------------------------------------------*/
    if ($(".single_skill").length > 0){
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills(){
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            $(".ss_parent span", this).animate({'left': datacount + '%'}, 2000);
            if (coun){
                $(this).find('.ss_parent span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }
    
    /*--------------------------------------------------------
    / 4. Stretch Column
    /---------------------------------------------------------*/
    tw_stretch();
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                    row = $this.closest(".row"),
                    cols = $this.closest('[class^="col-"]'),
                    colsheight = $this.closest('[class^="col-"]').height(),
                    rect = this.getBoundingClientRect(),
                    l = row[0].getBoundingClientRect(),
                    s = cols[0].getBoundingClientRect(),
                    r = rect.left,
                    d = i - rect.right,
                    c = l.left + (parseFloat(row.css("padding-left")) || 0),
                    u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                    p = s.left,
                    f = i - s.right,
                    styles = {
                        "margin-left": 0,
                        "margin-right": 0
                    };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    
    /*--------------------------------------------------------
    / 5. Fun Fact Count
    /---------------------------------------------------------*/
    var skl = true;
    funfact.appear();
    funfact.on('appear', function() {
        if (skl)
        {
            funfact.each(function() {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-count')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        $('.counter', $this).html(num);
                    }
                });
            });
            skl = false;
        }
    });
    
    /*--------------------------------------------------------
    / 6. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({bottom: '30px', opacity: '1', visibility: 'visible'});
        } else {
            back.css({bottom: '-30px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });
    
    /*--------------------------------------------------------
    / 7. All PopUP
    /--------------------------------------------------------*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    popup_img.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    if ($("#shaff_grid").length > 0){
        var $grid = $('#shaff_grid');
        var shaff_inst = $grid.shuffle({
            itemSelector: '.shaff_item'
        });
        $('.shaff_filter li').on('click', function() {
            $('.shaff_filter li').removeClass('active');
            $(this).addClass('active');
            var groupName = $(this).attr('data-group');
            shaff_inst = $grid.shuffle('shuffle', groupName);
        });
    }
    
    /*--------------------------------------------------------
    / 8. Sticky Header
    /---------------------------------------------------------*/
    if ($(".isSticky").length > 0) {
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            } else {
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }
    
    /*--------------------------------------------------------
    / 9. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });
    
    /*--------------------------------------------------------
    / 10. Preloader
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
    / 11. Contact Form Submission
    /---------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);
        $('button[type="submit"]', this).attr('disabled', 'disabled').val('Processing...');
        var form_data = $this.serialize();
        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === ''){
                $(this).addClass('reqError');
                required += 1;
            } else{
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'mail/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled').val('Message');

                    $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your query successfully sent to site admin.').removeClass('alert-warning').addClass('alert-success');
                    setTimeout(function () {
                        $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled').val('Message');
            $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Error found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
            setTimeout(function () {
                $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
            }, 5000);
        }
    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });

    /*--------------------------------------------------------
    / 12. Price Slider
    /--------------------------------------------------------*/
    if (slider_range.length > 0) {
        slider_range.slider({
            range: true,
            min: 1,
            max: 100,
            values: [2, 90],
            slide: function (event, ui) {
                $("#amount").html("£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ]);
            }
        });
        $("#amount").html("£" + $("#slider-range").slider("values", 0) + " - £" + $("#slider-range").slider("values", 1));
    }

    /*--------------------------------------------------------
    / 13. Qty
    /--------------------------------------------------------*/
    if ($(".pdq_main").length > 0){
        $(".pdq_main .minus").on('click', function () {
            var vals = ($(this).next(".carqty").val() != '' ? parseInt($(this).next(".carqty").val(), 10) : 0);

            if (vals > 1) {
                vals -= 1;
                $(this).next(".carqty").val(vals);
            } else {
                $(this).next(".carqty").val(vals);
            }
            return false;
        });
        $(".pdq_main .plus").on('click', function () {
            var vals = ($(this).prev(".carqty").val() != '' ? parseInt($(this).prev(".carqty").val(), 10) : 0);
            vals += 1;
            $(this).prev(".carqty").val(vals);
            return false;
        });
    }

})(jQuery);