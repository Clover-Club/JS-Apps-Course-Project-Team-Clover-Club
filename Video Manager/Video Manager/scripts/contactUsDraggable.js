/**
 * Created by ������ on 31.8.2015 �..
 */
$(function () {
    $("#sortable").sortable({
        revert: true
    });
    $("#draggable").draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });
    $("ul, li").disableSelection();

    $("#accordion").accordion();
});