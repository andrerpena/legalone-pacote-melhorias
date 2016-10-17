import clone from 'clone';
import searchUtils from './searchUtils';

export default {
    /**
     * Fills "items" with all nodes in order
     * @param menu
     * @param items
     */
    fillItemsInOrder: function (menu, items) {
        if (!items) items = [];
        for (var i = 0; i < menu.length; i++) {
            items.push(menu[i]);
            if (menu[i].menu && !(menu[i].collapsed)) this.fillItemsInOrder(menu[i].menu, items);
        }
    },
    /**
     * Double links the given list of nodes
     * @param items
     */
    linkItems: function (items) {
        for (var i = 0; i < items.length; i++) {
            items[i].next = i + 1 < items.length ? items[i + 1] : undefined;
            items[i].previous = i > 0 ? items[i - 1] : undefined;
        }
    },

    link: function (menu) {
        var items = [];
        this.fillItemsInOrder(menu, items);
        this.linkItems(items);
    },

    mergeFavorites: function (menu, favorites) {
        if (favorites && favorites.length) {
            if (menu[0].id == 'fav') {
                menu[0].menu = menu[0].concat(favorites);
            }
            else {
                var favoritesMenu = {
                    displayName: 'Favoritos',
                    id: 'fav',
                    icon: 'star',
                    menu: clone(favorites)
                };
                menu.unshift(favoritesMenu);
            }
        }
    },

    appendFavorite: function (menu, favorite) {
        if (menu[0].id == 'fav') {
            menu[0].menu.push(favorite);
        }
        else {
            var favoritesMenu = {
                displayName: 'Favoritos',
                id: 'fav',
                icon: 'star',
                menu: [clone(favorite)]
            };
            menu.unshift(favoritesMenu);
        }
    },

    processMenuItem: function (menuItem, prefix) {
        menuItem.displayNameFull = prefix ? prefix + " " + menuItem.displayName : menuItem.displayName;
        menuItem.collapsed = true;
        menuItem.selected = false;
        menuItem.starred = false;
        if (menuItem.menu)
            this.processMenu(menuItem.menu, menuItem.displayNameFull);
    },

    processMenu: function (menu, prefix) {
        for (var i = 0; i < menu.length; i++) {
            this.processMenuItem(menu[i], prefix)
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
        if (searchUtils.isContainedIn(term, menuItem.displayNameFull))
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

    // recursively set every menu item to expanded state (collapsed = false)
    updateCollapsedState: function (menuItem, collapsedState) {
        if (!menuItem)
            return;

        if (Array.isArray(menuItem)) {
            for (var i = 0; i < menuItem.length; i++)
                this.updateCollapsedState(menuItem[i], collapsedState);
        }
        else {
            menuItem.collapsed = collapsedState;
            this.updateCollapsedState(menuItem.menu, collapsedState);
        }
    }
};