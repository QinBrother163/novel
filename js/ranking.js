
let return_page = document.getElementById("return_page");
let search_menu = document.getElementById("search_menu");
let tabEffect_ = document.getElementById("tabEffect1");
let ranking_btn_nav_title = document.getElementsByClassName('ranking_btn_nav_title');



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


let tabEffect1 = 'floatL ranking_btn_nav_R ranking_btn_nav_title selectedRanking_btn_navR';
let tabEffect2 = 'floatL ranking_btn_nav_R ranking_btn_nav_title';

function tabEffect(ranking_btn_nav_title, tabEffect1, tabEffect2) {
    for (let i = 0; i < ranking_btn_nav_title.length; i++) {
        ranking_btn_nav_title[0].className = ' ' + tabEffect1;
        ranking_btn_nav_title[1].className = ' ' + tabEffect2;
        ranking_btn_nav_title[2].className = ' ' + tabEffect2;
    }
    for (let i = 0; i < ranking_btn_nav_title.length; i++) {
        ranking_btn_nav_title[i].onclick = function () {
            for (let i = 0; i < ranking_btn_nav_title.length; i++) {
                ranking_btn_nav_title[i].className = ' ' + tabEffect2;
            }
            this.className = '' + tabEffect1;
        }
    }
}
tabEffect(ranking_btn_nav_title, tabEffect1, tabEffect2);