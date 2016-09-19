var $ = require("jquery");
var Vue = require("vue");

// CSS
require("../css/styles.less");

var Sidebar = require('./components/sidebar.vue');

$(".main-bar").before('<sidebar></sidebar>');

new Vue({
    el: 'div.main',
    components: {
        sidebar: Sidebar
    }
});
