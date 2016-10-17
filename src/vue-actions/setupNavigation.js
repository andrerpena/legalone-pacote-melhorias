import $ from "jquery";
import Vue from "vue";
import Sidebar from '../vue-components/sidebar.vue';
import _ from 'underscore';

export default function () {

    $(".main-bar").before('<div id="vnav-wrapper"><sidebar :fav="fav" @favchanged="handleFavChanged" ></sidebar></div>');

    chrome.storage.sync.get(['favorites'], function (store) {

        var favorites = store && store.favorites && _.isArray(store.favorites) ? store.favorites : [];
        var favStore = favorites && favorites.length ? favorites.map(f => f.url) : [];

        var sidebar = new Vue({
            el: '#vnav-wrapper',
            data: function () {
                return {
                    fav: favorites,
                    color: 'blue'
                };
            },
            components: {
                sidebar: Sidebar
            },
            methods: {
                handleFavChanged: function (data) {
                    favStore.splice(0, favStore.length);
                    data.forEach(f => favStore.push(f.url));
                }
            }
        });

        $(document).on('keydown', function (e) {
            if (e.altKey) {
                var number = -1;
                if (e.keyCode >= 48 && e.keyCode <= 57) {
                    number = e.keyCode - 48;
                }
                else if (e.keyCode >= 96 && e.keyCode <= 105) {
                    number = e.keyCode - 96;
                }
                if (number >= 0 && number < 9 && favStore.length >= number) {
                    window.location.href = favStore[number - 1];
                }
            }
        });

    });


}