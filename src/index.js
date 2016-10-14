var $ = require("jquery");
var Vue = require("vue");

// LESS
require("./styles/styles.less");

// This will focus the
var shiftPressed = false;
$(document).on('keydown', function (e) {
    if (e.keyCode == 16) {
        if (shiftPressed) {
            var vnav_input = document.getElementById("vnav_input");
            if (vnav_input.value)
                vnav_input.setSelectionRange(0, vnav_input.value.length);
            else
                vnav_input.focus();

            vnav_input.style["border-width"] = "2px";
            setTimeout(function() {
                vnav_input.style["border-width"] = "1px";
            }, 100);
        }
        else {
            shiftPressed = true;
            setTimeout(function () {
                shiftPressed = false;
            }, 500)
        }
        ;
    }
});


var Sidebar = require('./components/sidebar.vue');

$(".main-bar").before('<div id="vnav-wrapper"><sidebar></sidebar></div>');

new Vue({
    el: '#vnav-wrapper',
    components: {
        sidebar: Sidebar
    }
});