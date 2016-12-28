import $ from 'jquery';

function extractEpResponsiveFields() {
    return $(".edit-panel-responsive-wrapper div[class*='span']").map((i, s) => {
        let $label = $(".header label", $(s));
        return {
            container: s,
            displayName: $label.text(),
            name : $label.attr("for")
        }
    })
}

export default function setupFieldSelection() {
    console.log(extractEpResponsiveFields());
    //window._x = extractEpResponsiveFields;
    var $pencil = $("<i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>").click(() => console.log('fuck'));
    $("<div/>").addClass("edit-panel-edit-button").append($pencil).appendTo(".edit-panel-responsive-wrapper");
}