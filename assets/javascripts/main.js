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

            $("#" + elements[i].id).selectize({
                plugins: ["clear_button"]
            });

        }
        else {

            console.log("with: 100%", elements[i].id);

            let $select = $("#" + elements[i].id).selectize({
                plugins: ["clear_button"]
            });

            if(elements[i].id == 'issue_assigned_to_id') {
                
                var conceptName = $("#" + elements[i].id).find(":selected").text();
                var conceptName = $("#" + elements[i].id).find(":selected").val();

                console.log($("#" + elements[i].id).find(":selected"));

                var selectizeControl = $select[0].selectize
                var test = selectizeControl.getValue();
                console.log(test);

            }
        }

    }

}
