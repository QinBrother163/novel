/**
 * Created by NameX on 2018/3/23.
 */
let return_page = document.getElementById("return_page");
let search_menu = document.getElementById("search_menu");
let tabEffect = document.getElementById("tabEffect");

return_page.onclick = function () {
    window.location.href='../test.html';
};


search_menu.onclick = function () {
    let tab = search_menu.className == ' search_menu';
    search_menu.className = tab?' '+'showSearch_menu':' '+'search_menu';

    let show = tabCon_wrap.className == 'tabCon_wrap';
    tabCon_wrap.className = show?'tabCon_wrap_show':'tabCon_wrap';

};

tabEffect.onclick = function () {
    let tab = search_menu.className == ' search_menu';
    search_menu.className = tab?' '+'showSearch_menu':' '+'search_menu';

    let show = tabCon_wrap.className == 'tabCon_wrap';
    tabCon_wrap.className = show?'tabCon_wrap_show':'tabCon_wrap';

};
$(document).ready(function(){
    $("#back-to-top").hide();
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>600){
                $("#back-to-top").fadeIn(500);
            }else{
                $("#back-to-top").fadeOut(500);
            }
        });
        $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0},500);
            return false;
        });
    });
});