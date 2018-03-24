/**
 * Created by NameX on 2018/3/23.
 */

let return_page = document.getElementById("return_page");
let search_menu = document.getElementById("search_menu");
let tabEffect_ = document.getElementById("tabEffect1");



return_page.onclick = function () {
    window.location.href='../test.html';
};


search_menu.onclick = function () {
    let tab = search_menu.className == ' search_menu';
    search_menu.className = tab?' '+'showSearch_menu':' '+'search_menu';

    let show = tabCon_wrap.className == 'tabCon_wrap';
    tabCon_wrap.className = show?'tabCon_wrap_show':'tabCon_wrap';

};

tabEffect_.onclick = function () {
    let tab = search_menu.className == ' search_menu';
    search_menu.className = tab?' '+'showSearch_menu':' '+'search_menu';

    let show = tabCon_wrap.className == 'tabCon_wrap';
    tabCon_wrap.className = show?'tabCon_wrap_show':'tabCon_wrap';

};
