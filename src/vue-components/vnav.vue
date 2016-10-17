<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class='vnav-children-wrapper'>
        <div v-for="menuItem in menu" class='vnav-item-wrapper'>
            <div :class="{ 'vnav-item': true, selected: menuItem.selected, here: menuItem.here }" :data-val-displayNameFull='menuItem.displayNameFull'>
                <i v-show="menuItem.icon" :class="'vnav-icon fa fa-' + menuItem.icon"></i>
                <span class="vnav-item-text with-icon">
                    <a :href="menuItem.url" class="vnav-link" >{{ menuItem.displayName }}</a>
                </span>
                <span v-if="menuItem.menu && menuItem.menu.length" class="plus-wrapper" @click="toggle(menuItem)">
                    <i class="vnav-icon fa" :class="menuItem.collapsed ? 'fa-caret-right' : 'fa-caret-down'" ></i>
                </span>
                <span v-show="menuItem.url" class="star-wrapper" @click="star(menuItem)">
                    <i class="vnav-icon fa" :class="menuItem.starred ? 'fa-star' : 'fa-star-o'" ></i>
                </span>
            </div>
            <vnav v-if="!menuItem.collapsed" :menu="menuItem.menu" @toggle="handleToggle" @star="handleStar" ></vnav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vnav',
    props: {
        menu: Array
    },
    methods: {
        toggle: function(menuItem) {            
            this.$emit('toggle', menuItem);
        },
        handleToggle: function(menuItem) {
            this.$emit('toggle', menuItem);
        },
        star: function(menuItem) {
            this.$emit('star', menuItem);
        },
        handleStar: function(menuItem) {
            this.$emit('star', menuItem);
        }
    }
  }
</script>