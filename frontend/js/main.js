/**
 * Created by Vit05 on 04.12.2016.
 */
$('#search_city').select2({
    placeholder: 'Введите название услугфи'
});
$('#search_street').select2({
    placeholder: 'Выберите район / ст. метро'
});
function initTab(content, nav) {
    $(content + '>div').hide();
    $(content + '>div:first').show();
    $(nav + ' li').click(function () {
        $(nav + ' li').removeClass("active");
        $(this).addClass("active");
        $(content + '>div').hide();
        var indexer = $(this).index();
        $(content + '>div:eq(' + indexer + ')').fadeIn();
    });

}