export default {
    /**
     * Fills "items" with all nodes in order
     * @param menu
     * @param items
     */
    fillItemsInOrder: function (menu, items) {
        if(!items) items = [];
        for(var i = 0; i < menu.length; i++) {
            items.push(menu[i]);
            if(menu[i].menu) this.fillItemsInOrder(menu[i].menu, items);
        }
    },
    /**
     * Double links the given list of nodes
     * @param items
     */
    doubleLinkItems: function(items) {
        for(var i = 0; i < items.length; i++) {
            items[i].next = i + 1 < items.length ? items[i + 1] : undefined;
            items[i].previous = i > 0 ? items[i - 1] : undefined;
        }
    }
};