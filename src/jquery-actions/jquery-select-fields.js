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
}