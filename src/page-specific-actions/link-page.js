import $ from "jquery";
import searchUtils from '../lib/searchUtils';

export default function setupPage() {
    var pageSearchWrapper = $("<div class='page-search-wrapper'>");
    var searchInput = $("<input id=\"vnav_input\" type=\"text\" placeholder=\"Pesquisar nas opções\" class=\"vnav-input\">");

    searchInput.appendTo(pageSearchWrapper);
    pageSearchWrapper.prependTo($(".document-body"));

    // let's create an index of all the items
    var map = [];
    let lis = $(".list-menu li");
    for(var i = 0; i < lis.length; i++) {
        var li = lis[i];
        map.push({
            li: li,
            text: $("a", li).text()
        })
    }

    function toggleVisibility(val) {
        for(var i = 0; i < map.length; i++) {
            if(searchUtils.isContainedIn(val, map[i].text)) {
                $(map[i].li).removeClass("search-hidden");
            }
            else {
                $(map[i].li).addClass("search-hidden");
            }
        }
    }

    searchInput.keyup(function() {
        toggleVisibility(searchInput.val());
    });

    searchInput.focus();
    
}