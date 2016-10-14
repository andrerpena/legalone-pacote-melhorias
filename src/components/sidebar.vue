<template>
    <div class='side-bar side-bar-left'>
        <div id='vnav-container'>
            <div>
                <div class='search-wrapper'>
                    <input id="vnav_input" type="text" v-model="searchTerm" @keyup="handkeKeyUp" @keydown="handleKeyDown"
                           class="vnav-input"
                           placeholder="Pesquisa no menu"/>
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
    import menuLinker from '../lib/menuLinker';

    let menu = menuGetter();

    export default {
        name: 'sidebar',
        components: {
            'vnav': Vnav
        },
        data: function () {
            var menuItems = clone(menu);
            menuLinker.link(menuItems);

            return {
                searchTerm: '',
                menu: menuItems,
                selectedNode: undefined
            }
        },
        methods: {
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
            /**
             * Creates a double-linked list for keyboard navigation
             * @param menu
             * @param parentItem
             */
            linkMenu: function (menu, parentItem) {
                if (!menu || !menu.length) return parentItem;

                let last = menu[0];

                if (parentItem) parentItem.next = last;
                last.previous = parentItem;

                for (var i = 1; i < menu.length; i++) {

                    var next = this.linkMenu(menu[i].menu);
                    last.next = next;
                }

                return last;
            },

            focusVNavInput: function() {
                setTimeout(function () {
                    var vnav_input = document.getElementById("vnav_input");
                    vnav_input.setSelectionRange(0, vnav_input.value.length);
                },0);
            },

            handkeKeyUp: function (e) {
                if(e.keyCode == 13 && this.selectedNode) {
                    window.location.href = this.selectedNode.url;
                }
                else if(e.keyCode != 37 && e.keyCode != 39 && e.keyCode != 38 && e.keyCode != 40) {
                    var menuItems = clone(menu);
                    this.selectedNode = null;
                    this.updateCollapsedState(menuItems, !this.searchTerm);
                    this.menu = this.filterMenuItems(menuItems, this.searchTerm);
                    menuLinker.link(this.menu);
                }
            },

            handleKeyDown: function (e) {
                switch (e.keyCode) {
                    case 37: // left
                        if (this.selectedNode)
                            this.selectedNode.collapsed = true;
                        break;
                    case 39: // right
                        if (this.selectedNode)
                            this.selectedNode.collapsed = false;
                        break;
                    case 38: // up
                        if (!this.selectedNode)
                            return;
                        this.selectedNode.selected = false;
                        let previousNode = this.selectedNode.previous;
                        if (previousNode)
                            previousNode.selected = true;
                        else {
                            this.focusVNavInput();
                        }
                        this.selectedNode = previousNode;
                        break;
                    case 40: // down
                        if (!this.selectedNode) {
                            this.selectedNode = this.menu[0];
                            this.selectedNode.selected = true;
                            this.focusVNavInput();
                        } else {
                            this.selectedNode.selected = false;
                            let nextNode = this.selectedNode.next;
                            if (nextNode)
                                nextNode.selected = true;
                            else {
                                this.focusVNavInput();
                            }
                            this.selectedNode = nextNode;
                        }
                        break;
                    default:
                        return;
                }

                if (this.selectedNode)
                    e.preventDefault();

                menuLinker.link(this.menu);
            }
        }
    }
</script>