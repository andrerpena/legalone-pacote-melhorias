<template>
	<div class='side-bar side-bar-left'>
		<div id='vnav-container'>
			<div>
				<div class='search-wrapper'>
					<input id="vnav_input" type="text" v-model="searchTerm" @keyup="handleKeyUp" @keydown="handleKeyDown" class="vnav-input"
						placeholder="Pesquisa no menu" />
				</div>
				<vnav :menu="menu" :fav="fav" @toggle="handleToggle" @star="handleStar"></vnav>
			</div>
		</div>
	</div>
</template>

<script>
    import menuRaw from '../menu/menu';
    import clone from '../lib/clone.js';
    import Vnav from './vnav.vue';
    import searchUtils from '../lib/searchUtils';
    import menuHelper from '../lib/menuHelper';
    import _ from 'underscore';

    var sidebar = {
        name: 'sidebar',
        props: ['fav', 'color'],
        components: {
            'vnav': Vnav
        },
        data: function () {

            var favorites = this.fav;
            var color = this.color;

            var menuItems = clone(menuRaw);

            menuHelper.mergeFavorites(menuItems, favorites);
            menuHelper.processMenu(menuItems, favorites, "");
            console.log( window.location.pathname);
            menuHelper.expandToMenu(menuItems, window.location.pathname);
            
            return {
                searchTerm: '',
                menu: menuItems,
                selectedNode: undefined,
                favorites: favorites
            }
        },
        computed: {
            favoritesComputed: function() {

            },
        },
        methods: {

            handleStar: function(menuItem) {

                if(!menuItem.starred) {
                    var menuName = prompt("Nome do item em 'favoritos'", menuItem.displayName);
                    if (menuName != null) {

                        menuItem.starred = true;

                        let newFavorite = menuHelper.shallowCloneMenuItem(menuItem);
                        newFavorite.starred = true;
                        newFavorite.favoriteItem = true; // this is to mark it's a favorite menu so it will be removed when it's unchecked
                        newFavorite.displayName = menuName;

                        // add to the favorites collection
                        this.favorites.push(newFavorite);

                        chrome.storage.sync.set({'favorites': this.favorites}, function() {
                            console.log('saved successfully');
                        });

                        // update the menu
                        menuHelper.appendFavorite(this.menu, newFavorite);
                        menuHelper.link(this.menu);
                    }
                }
                else {
                        // if it's not an item from inside the favorites menu
                        menuItem.starred = false;
                        menuHelper.removeFavorite(this.menu, this.favorites, menuItem.url);
                        menuHelper.uncheckStarred(this.menu, menuItem.url);

                        chrome.storage.sync.set({'favorites': this.favorites}, function() {
                            console.log('saved successfully');
                        });
                }

                this.$emit('favchanged', this.favorites);
            },

            handleToggle: function(menuItem) {
                console.log('toggle');
                menuItem.collapsed = !menuItem.collapsed;
            },

            focusVNavInput: function() {
                setTimeout(function () {
                    var vnav_input = document.getElementById("vnav_input");
                    vnav_input.setSelectionRange(0, vnav_input.value.length);
                },0);
            },

            handleKeyUp: function (e) {
                if(e.keyCode == 13 && this.selectedNode) {
                    window.location.href = this.selectedNode.url;
                }
                else if(e.keyCode != 37 && e.keyCode != 39 && e.keyCode != 38 && e.keyCode != 40) {
                    this.selectedNode = null;

                    var menuItems = clone(menuRaw);
                    menuHelper.mergeFavorites(menuItems, this.favorites);
                    menuHelper.processMenu(menuItems, this.favorites, "");
                    menuHelper.updateCollapsedState(menuItems, !this.searchTerm);
                    menuItems = menuHelper.filterMenuItems(menuItems, this.searchTerm);
                    menuHelper.link(menuItems);

                    this.menu = menuItems;
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

                menuHelper.link(this.menu);
            }
        }
    }
    export default sidebar;
</script>