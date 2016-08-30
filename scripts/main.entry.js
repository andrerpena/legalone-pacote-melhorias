var $ = require("jquery");
var Vue = require("vue");

var Sidebar = require('./components/sidebar.vue');

$(".main-bar").before(`<sidebar></sidebar>`);

new Vue({
    el: 'div.main',
    components: {
        sidebar: Sidebar
    }
});
