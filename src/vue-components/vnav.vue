<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class='vnav-children-wrapper'>
        <div v-for="menuItem in menu" class='vnav-item-wrapper'>
            <div :class="{ 'vnav-item': true, selected: menuItem.selected }" :data-val-displayNameFull='menuItem.displayNameFull'>
                <i v-show="menuItem.icon" :class="'vnav-icon fa fa-' + menuItem.icon"></i>
                <span class="vnav-item-text with-icon">
                    <a :href="menuItem.url" class="vnav-link" >{{ menuItem.displayName }}</a>
                </span>
                <span v-if="menuItem.menu && menuItem.menu.length" class="plus-wrapper" @click="toggle(menuItem)">
                    <i class="vnav-icon fa" :class="menuItem.collapsed ? 'fa-plus' : 'fa-minus'" ></i>
                </span>
            </div>
            <vnav v-if="!menuItem.collapsed" :menu="menuItem.menu" ></vnav>
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
            menuItem.collapsed = !menuItem.collapsed;
        }
    }
  }
</script>