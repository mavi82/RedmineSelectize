/*
 Select To Select2 Plugin Main.
 */

(function ($) {

    // Page Load
    initSelect2();

    // Ajax
    $(document).ajaxComplete(function (event) {
        initSelect2();
    });

    // For GET,POST Request
    // For jQuery Version >= 3.X Redmine Version 5.0.2 4.2.7 3.4.13 OK
    $(window).on('load', function () {
        initSelect2();
    });
    // for all elements
    $(document).change(function (event) {
        initSelect2();
    });


}(jQuery));

const excludeItems = ['available_c', 'selected_c'];

function initSelect2() {

    var elements = document.getElementsByTagName("select");

    for (i = 0; i < elements.length; i++) {

        if (excludeItems.includes(elements[i].id)) {
            continue;
        }

        if (elements[i].id == 'year'
            || elements[i].id == 'month'
            || elements[i].id == 'columns'
            || elements[i].id == 'settings_issuequery_query_id'
            || elements[i].id == 'block-select') {

                console.log("with: 200px", elements[i].id);
            
            $("#" + elements[i].id).select2({
                width: "200px",
                placeholder: "",
                allowClear: true
            });
        }
        else {

            console.log("with: 100%", elements[i].id);

            $("#" + elements[i].id).select2({
                width: "90%",
                placeholder: " ",
                //allowClear : true,
                debug: true
            });
        }

    }

}
