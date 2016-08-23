$(".main-bar")
    .before(`<div class='side-bar side-bar-left'>
                <div id='vnav-container'>
                    <div>
                        <div class='search-wrapper'>
                            <input type="text" v-model="searchTerm" v-on:keyup="search" class="vnav-input" placeholder="Pesquisa no menu"/>
                        </div>
                        <vnav :menu="menu"/>
                    </div>
                </div>
            </div>`);

Vue.component('vnav', {
    template: `<div class='vnav-children-wrapper'>
                <div v-for="menuItem in menu" class='vnav-item-wrapper'>
                    <div class='vnav-item'>
                        <i v-show="menuItem.menu && menuItem.menu.length" class="vnav-icon fa fa-folder-o" ></i>
                        <i v-show="menuItem.icon" class="vnav-icon fa fa-{{menuItem.icon}}" ></i>
                        <span class="vnav-item-text with-icon" >
                            <a v-bind:href="menuItem.url" class="vnav-link" >{{ menuItem.displayName }}</a>
                        </span>
                        <span v-if="menuItem.menu && menuItem.menu.length" class="plus-wrapper" v-on:click="toggle" >
                            <i class="vnav-icon fa fa-minus"  >{{menuItem.collapsed}}</i>
                        </span>
                    </div>
                    <vnav v-if="!collapsed" :menu="menuItem.menu"/>
                </div>
            </div>`,
    props: {
        menu: Array
    }
});

new Vue({
    el: '#vnav-container',
    data: {
        searchTerm: '',
        menu: window._clone(window._menu)
    },
    methods: {
        filterMenuItems: function (menuItems, term) {
            var result = [];
            for (var i = 0; i < menuItems.length; i++) {
                var filteredMenuItem = this.filterMenuItem(menuItems[i], term);
                if (filteredMenuItem)
                    result.push(filteredMenuItem);
            }
            return result;
        },
        filterMenuItem: function (menuItem, term) {
            if (menuItem.displayName.match(new RegExp(term, 'i'))) {
                return menuItem;
            }
            else if (menuItem.menu) {
                var filteredChildren = this.filterMenuItems(menuItem.menu, term);
                if (filteredChildren.length) {
                    menuItem.menu = filteredChildren;
                    return menuItem;
                }
            }
            return null;
        },
        search: function () {
            this.menu = this.filterMenuItems(window._clone(window._menu), this.searchTerm)
        }
    }
});
