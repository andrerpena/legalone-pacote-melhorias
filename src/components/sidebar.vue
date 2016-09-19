<template>
    <div class='side-bar side-bar-left'>
        <div id='vnav-container'>
            <div>
                <div class='search-wrapper'>
                    <input type="text" v-model="searchTerm" v-on:keyup="search" class="vnav-input" placeholder="Pesquisa no menu"/>
                </div>
                <vnav :menu="menu"></vnav>
            </div>
        </div>
    </div>
</template>

<script>
import menuGetter from '../menu/menu';
import clone from '../lib/clone.js';
import Vnav from './menu.vue';
import searchUtils from '../lib/searchUtils';

let menu = menuGetter();

export default {
    name: 'sidebar',
    components: {
        'vnav': Vnav
    },
    data: function() {
        var menuItems = clone(menu);
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
            if(searchUtils.isContainedIn(term, menuItem.displayNameFull))
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
            var menuItems = clone(menu);
            this.updateCollapsedState(menuItems, !this.searchTerm);

            this.menu = this.filterMenuItems(menuItems, this.searchTerm)
        }
    }
}
</script>