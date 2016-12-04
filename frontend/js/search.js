/**
 * Created by Vit05 on 04.12.2016.
 */
$(document).ready(function () {
    var mob_btn_filter = $('#mob_filter_btn');
    mob_btn_filter.on('click', function () {
        $('.filter-cont').toggleClass('opened');
    });

    var like_heart = $('.p-like i'),
        like_comment = $('.p-comment i');
    addLikes(like_heart);
    addLikes(like_comment);






    //SELECT 2 sEaRCH
    var $select_city_filter = $("#select_city_filter").select2({
        dropdownAutoWidth: false
    });
    var $select_category_filter = $("#select_category_filter").select2({
        dropdownAutoWidth: false
    });
    $select_city_filter;
    $select_category_filter;


    //RANGE
    var keypressSlider = document.getElementById('range_filter');


    noUiSlider.create(keypressSlider, {
        start: [150, 850],
        connect: true,
        // direction: 'rtl',
        tooltips: true,
        step: 10,
        range: {

            'min': [0],
            'max': [1000]
        }
    });


    //DATA PICKER
    $.datetimepicker.setLocale('ru');
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
                    'September', 'Oktober', 'November', 'Dezember',
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
    });




    function addLikes(el) {
        el.each(function (indx) {
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