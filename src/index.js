var $ = require("jquery");
var Vue = require("vue");

// LESS
require("./styles/styles.less");

import setupNavFocus from './jquery-actions/vnav-focus';
import setupMaximize from './jquery-actions/maximize';

setupNavFocus($);
setupMaximize($);

var Sidebar = require('./components/sidebar.vue');

$(".main-bar").before('<div id="vnav-wrapper"><sidebar></sidebar></div>');

new Vue({
    el: '#vnav-wrapper',
    components: {
        sidebar: Sidebar
    }
});