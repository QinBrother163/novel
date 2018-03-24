/**
 * Created by NameX on 2018/3/23.
 */
let tabCon_wrap = document.getElementById("tabCon_wrap");
let search_menu = document.getElementById("search_menu");
let tabEffect = document.getElementById("tabEffect");
let return_page = document.getElementById("return_page");


return_page.onclick = function () {
    window.location.href='../test.html';
};

search_menu.onclick = function () {
    let tab = search_menu.className == ' search_menu floatL';
    search_menu.className = tab?' '+'showSearch_menu floatL':' '+'search_menu floatL';

    let show = tabCon_wrap.className == 'tabCon_wrap';
    tabCon_wrap.className = show?'tabCon_wrap_show':'tabCon_wrap';

};

tabEffect.onclick = function () {
    let tab = search_menu.className == ' search_menu floatL';
    search_menu.className = tab?' '+'showSearch_menu floatL':' '+'search_menu floatL';

    let show = tabCon_wrap.className == 'tabCon_wrap';
    tabCon_wrap.className = show?'tabCon_wrap_show':'tabCon_wrap';

};
