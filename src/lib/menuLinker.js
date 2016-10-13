export default {
    linkMenu: function (menu, parentItem) {
        if (!menu || !menu.length) return parentItem;

        let last = menu[0];

        if (parentItem) parentItem.next = last;
        last.previous = parentItem;

        for (var i = 1; i < menu.length; i++) {
            var next = this.linkMenu(menu[i].menu);
            last.next = next;
            next.previous = last;

            last = next;
        }

        return last;
    }
}