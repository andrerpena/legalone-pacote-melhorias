<template>
    <div class='vnav-children-wrapper'>
        <div v-for="menuItem in menu" class='vnav-item-wrapper'>
            <div class='vnav-item' data-val-displayNameFull='{{menuItem.displayNameFull}}'>
                <i v-show="menuItem.icon" class="vnav-icon fa fa-{{menuItem.icon}}"></i>
                <span class="vnav-item-text with-icon">
                        <a v-bind:href="menuItem.url" class="vnav-link" >{{ menuItem.displayName }}</a>
                    </span>
                <span v-if="menuItem.menu && menuItem.menu.length" class="plus-wrapper" v-on:click="toggle(menuItem)">
                        <i class="vnav-icon fa" v-bind:class="menuItem.collapsed ? 'fa-plus' : 'fa-minus'" ></i>
                    </span>
            </div>
            <vnav v-if="!menuItem.collapsed" :menu="menuItem.menu" ></vnav>
        </div>
    </div>
</template>

<script>
export default {
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