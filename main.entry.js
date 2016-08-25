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
                    <div class='vnav-item' data-val-displayNameFull='{{menuItem.displayNameFull}}'>
                        <i v-show="menuItem.icon" class="vnav-icon fa fa-{{menuItem.icon}}" ></i>
                        <span class="vnav-item-text with-icon" >
                            <a v-bind:href="menuItem.url" class="vnav-link" >{{ menuItem.displayName }}</a>
                        </span>
                        <span v-if="menuItem.menu && menuItem.menu.length" class="plus-wrapper" v-on:click="toggle(menuItem)" >
                            <i class="vnav-icon fa" v-bind:class="menuItem.collapsed ? 'fa-plus' : 'fa-minus'" ></i>
                        </span>
                    </div>
                    <vnav v-if="!menuItem.collapsed" :menu="menuItem.menu"/>
                </div>
            </div>`,
    props: {
        menu: Array
    },
    methods: {
        toggle: function(menuItem) {            
            menuItem.collapsed = !menuItem.collapsed;
        }
    }
});

new Vue({
    el: '#vnav-container',
    data: function() {
        var menuItems = window._clone(window._menu);
        this.updateCollapsedState(menuItems, true);

        return {
            searchTerm: '',
            menu: menuItems
        }
    },
    methods: {
        // recursively set every menu item to expanded state (collapsed = false)
        updateCollapsedState: function(menuItem, collapsedState) {
            if(!menuItem)
                return;
            
            if(Array.isArray(menuItem)) {
                for(var i = 0; i < menuItem.length; i++)
                    this.updateCollapsedState(menuItem[i], collapsedState);
            }
            else {
                menuItem.collapsed = collapsedState;
                this.updateCollapsedState(menuItem.menu, collapsedState);
            }
        },
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
            if(window._isContainedIn(term, menuItem.displayNameFull))
                return menuItem;
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
            var menuItems = window._clone(window._menu);
            this.updateCollapsedState(menuItems, !this.searchTerm);

            this.menu = this.filterMenuItems(menuItems, this.searchTerm)
        }
    }
});
