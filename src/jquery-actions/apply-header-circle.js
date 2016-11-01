import $ from 'jquery';

export default function applyHeaderCircle() {

    var classes = [];
    classes.push("color-default-blue");
    classes.push("color-light-blue");
    classes.push("color-gray");
    classes.push("color-light-green");
    classes.push("color-black");
    classes.push("color-orange");
    classes.push("color-brown");
    classes.push("color-red");
    classes.push("color-dark-green");
    classes.push("color-purple");
    classes.push("color-yellow");

    for (var i = 0; i < classes.length; i++) {
        var colorClass = "div.cardview-responsive." + classes[i];
        if ($(colorClass).length) {
            $(".document-header h3").addClass("header-circle-" + classes[i]);
        }
    }
}