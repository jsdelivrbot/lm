/**
 * Created by Vit05 on 04.12.2016.
 */
$(document).ready(function () {

    $('#select_date_filter').pickadate({
        weekdaysShort: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        showMonthsShort: true
    });
    $('#select_time_from').pickatime();
    $('#select_time_to').pickatime();


    var mob_btn_filter = $('#mob_filter_btn'),
        next_sub_btn = $('.next-sub'),
        select_city = $('.select-region'),
        back_sub_btn = $('.m-filter-sub-box .go-back-f'),
        back_city = $('.go-back-city'),
        back_location_btn = $('.m-filter-sub-box .go-back-location'),
        category_btn = $('.m-category-list li'),
        height_filter = $(window).height;

    mob_btn_filter.on('click', function () {
        $('body').toggleClass('no-scroll');
        $('.mobile-filter-cont').toggleClass('slide-down-cl');

    });


    next_sub_btn.on('click', function () {
        var th = $(this);
        th.next('.m-filter-sub-box').addClass('slide-left');

    });

    //Select city
    select_city.on("click", function () {
        var th = $(this);
        th.find('.m-city-location-list').addClass('slide-left');

    });

    back_city.on('click', function () {
        var th = $(this),
            cont = $('.m-city-location-list');

        if (cont.hasClass('slide-left')) {
            console.log(1);
            cont.removeClass('slide-left');

        } else {
            console.log(2);
            th.closest('.m-filter-sub-box').removeClass('slide-left');

        }
    });
    //END



    //PRICE FILTER FOR MOBILE
    $('.mob-price-filter label').on('click', function () {
        var th = $(this),
        price_value = th.text();
        th.closest('.half-cont').find('input:text').val(price_value);
    });

    //END


    back_sub_btn.on('click', function () {
        var th = $(this);
        th.closest('.m-filter-sub-box').removeClass('slide-left');
    });


    /*$('.m-sub-category-list').hide();
     $('.m-sub-category-list:first').show();
     $('.m-category-list li').click(function () {
     $('.m-category-list li').removeClass("active");
     $(this).addClass("active");
     $('.m-sub-category-list').hide();
     var indexer = $(this).index();
     $('.m-sub-category-list:eq(' + indexer + ')').fadeIn();
     });*/

    category_btn.on('click', function () {

        $('.m-category-list li').removeClass('active');
        $('.m-sub-category-list').removeClass('opened');
        $(this).addClass('active');
        $(this).children('.m-sub-category-list').addClass('opened')
    });


    var like_heart = $('.p-like i'),
        like_comment = $('.p-comment i');
    addLikes(like_heart);
    addLikes(like_comment);

    // console.log(window_height);

    $(window).resize(function () {
        initSearchResultScroll();
    });
    initSearchResultScroll();

    function initSearchResultScroll() {
        var window_height_inner = $(window).height() - $(".search-header").height()+50;
        console.log($(".search-header").height());

        if ($(window).width() > 768) {
            // $(".main-mob-filter").mCustomScrollbar("destroy");
            $("body").css({"height": $(window).height(), "overflow": "hidden"});
            $(".search-map-cont, .search-map-cont").css({
                "height": window_height_inner,
                // "outline": "1px solid red"

            });
            $(".search-result-cont").mCustomScrollbar({
                setHeight: window_height_inner - 50
            });
        } else {
            $("body").css({"height": "auto", "overflow": "auto"});
            $(".search-result-cont").mCustomScrollbar("destroy");
            // $(".main-mob-filter").mCustomScrollbar();
        }


    }


    //SELECT 2 sEaRCH
    var $select_city_filter = $("#select_city_filter").select2({
        dropdownAutoWidth: false
    });
    var $select_city_filter_mob = $("#select_city_filter_mob").select2({
        dropdownAutoWidth: false
    });
    var $select_category_filter = $("#select_category_filter").select2({
        dropdownAutoWidth: false
    });
    /*
     FOR MOBILE LOCATION SELECT 2


     location_sub_btn.on('click', function () {
     var th = $(this);
     th.closest('.m-filter-box').next('.m-filter-sub-box').addClass('slide-left');

     $select_city_filter_mob.select2("open");
     $('.select2-container--open, .select2-container').css({"left":0});
     $('').css({"left":0});

     });
     back_location_btn.on('click', function () {
     var th = $(this);
     th.closest('.m-filter-sub-box').removeClass('slide-left');
     $select_city_filter_mob.select2("close");
     });*/

    //RANGE
    var keypressSlider = document.getElementById('range_filter');
    noUiSlider.create(keypressSlider, {
        start: [150, 850],
        connect: true,
        tooltips: true,
        step: 10,
        range: {

            'min': [0],
            'max': [1000]
        }
    });


    //DATA PICKER
    /* $.datetimepicker.setLocale('ru');
     $('#time_picker_start').datetimepicker({
     datepicker: false,
     format: 'H:i',
     step: 15
     });
     $('#time_picker_end').datetimepicker({
     datepicker: false,
     format: 'H:i',
     step: 15
     });
     $('#date_picker_filter').datetimepicker({
     i18n: {
     de: {
     months: [
     'Januar', 'Februar', 'März', 'April',
     'Mai', 'Juni', 'Juli', 'August',
     'September', 'Oktober', 'November', 'Dezember'
     ],
     dayOfWeek: [
     "Mo.", "Di", "Mi",
     "Do", "Fr", "Sa.",
     "So"
     ]
     }
     },
     timepicker: false,
     format: 'd.m.Y'
     });*/


    function addLikes(el) {
        el.each(function () {
            $(this).on('click', function () {
                if ($(this).hasClass('selected')) {
                    $(this).unbind();
                } else {
                    $(this).addClass('selected');
                }
                return false;
            })
        });
    }
});