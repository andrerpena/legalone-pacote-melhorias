import $ from "jquery";
import Vue from "vue";
import Sidebar from '../vue-components/sidebar.vue';

export default function () {

    $(".main-bar").before('<div id="vnav-wrapper"><sidebar :favorites="favorites" ></sidebar></div>');

    chrome.storage.sync.get(['favorites'], function (favorites) {

        var sidebar = new Vue({
            el: '#vnav-wrapper',
            data: {
                favorites: favorites
            },
            components: {
                sidebar: Sidebar
            }
        });

    });
}