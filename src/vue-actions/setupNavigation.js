import $ from "jquery";
import Vue from "vue";
import Sidebar from '../vue-components/sidebar.vue';

export default function () {

    $(".main-bar").before('<div id="vnav-wrapper"><sidebar></sidebar></div>');

    new Vue({
        el: '#vnav-wrapper',
        components: {
            sidebar: Sidebar
        }
    });
}