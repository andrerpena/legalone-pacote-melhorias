import clone from 'clone';
import searchUtils from './searchUtils';
import _ from 'underscore';

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
                menu[0].menu = favorites;
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
        else {
            // if there's no favorite, let's just remove the menu, if it exists
            if (menu[0].id == 'fav') {
                menu[0].menu = [];
                menu.splice(0, 1);
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

    removeFavorite: function (menu, favorites, url) {
        let indexToRemove = -1;
        for (var i = 0; i < favorites.length; i++) {
            if (favorites[i].url == url) {
                indexToRemove = i;
                break;
            }
        }
        if (indexToRemove == -1) return;

        // remove from the favorites collection
        favorites.splice(indexToRemove, 1);

        // remove from the menu
        this.mergeFavorites(menu, favorites);
    },

    processMenuItem: function (menuItem, favorites, prefix) {
        menuItem.displayNameFull = prefix ? prefix + " " + menuItem.displayName : menuItem.displayName;
        menuItem.collapsed = true;
        menuItem.selected = false;
        menuItem.starred = _.find(favorites, f => f.url == menuItem.url);

        if (menuItem.menu)
            this.processMenu(menuItem.menu, favorites, menuItem.displayNameFull);
    },

    processMenu: function (menu, favorites, prefix) {
        for (var i = 0; i < menu.length; i++) {
            this.processMenuItem(menu[i], favorites, prefix)
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
    },

    uncheckStarred: function (menu, url) {
        if (!menu || !menu.length) return;
        for (var i = 0; i < menu.length; i++) {
            if (menu[i].url == url)
                menu[i].starred = false;
            this.uncheckStarred(menu[i].menu, url);
        }
    },

    shallowCloneMenuItem: function (menuItem) {
        return {
            displayName: menuItem.displayName,
            url: menuItem.url,
            icon: menuItem.icon,
        }
    },

    expandToMenu(menu, url) {

        var compareUrls = function (url1, url2) {
            if (!url1 || !url2) return false;
            return url1.toLowerCase() == url2.toLowerCase();
        }

        if (!menu || !menu.length) return false;
        for (var i = 0; i < menu.length; i++) {
            if (compareUrls(menu[i].url, url)) {
                menu[i].collapsed = false;
                menu[i].here = true;
                return true;
            }
            else {
                var isChildTheRightUrl = this.expandToMenu(menu[i].menu, url);
                if (isChildTheRightUrl) {
                    menu[i].collapsed = false;
                    return true;
                }
            }
        }
        return false;
    }
};