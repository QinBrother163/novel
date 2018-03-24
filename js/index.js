/**
 * Created by NameX on 2018/3/22.
 */
let headerBtn0 = document.getElementById('header_btn0');
let headerBtn1 = document.getElementById('header_btn1');
let search = document.getElementById('search');
let go_personal_page = document.getElementById('go_personal_page');
let go_bookcase_page = document.getElementById('go_bookcase_page');
let Go_ranking_page = document.getElementById('Go_ranking_page');
let bookWarehouse = document.getElementById('bookWarehouse');
let con_title_border = document.getElementsByClassName('con_txt_title');
let con_title_span = document.getElementsByClassName('con_title_span');
let ranking_btn_nav_title = document.getElementsByClassName('ranking_btn_nav_title');

let tabEffect1 = 'floatL ranking_btn_nav_R ranking_btn_nav_title selectedRanking_btn_navR';
let tabEffect2 = 'floatL ranking_btn_nav_R ranking_btn_nav_title';

search.onclick = function () {
    window.location.href='page/search.html';
};
bookWarehouse.onclick = function () {
    window.location.href='page/bookWarehouse.html';
};
Go_ranking_page.onclick = function () {
    window.location.href='page/ranking.html';
};
go_bookcase_page.onclick = function () {
    window.location.href='page/bookcase.html';
};
go_personal_page.onclick = function () {
    window.location.href='page/personal.html';
};
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


if (headerBtn0) {


    headerBtn0.onclick = function () {
        headerBtn0.className = ' ' + 'boy btnSelected floatL';
        headerBtn1.className = ' ' + 'boy btnNoSelected floatL';
        for (let i = 0; i < con_title_border.length; i++) {
            con_title_border[i].style.borderLeft = '0.3rem solid #0000FF'
        }
        for (let i = 0; i < con_title_span.length; i++) {
            con_title_span[i].style.color = '#0066CC';
        }
        let tabEffect1 = 'floatL ranking_btn_nav_R ranking_btn_nav_title selectedRanking_btn_navR';
        let tabEffect2 = 'floatL ranking_btn_nav_R ranking_btn_nav_title';
        tabEffect(ranking_btn_nav_title, tabEffect1, tabEffect2);
    }
}

if (headerBtn1) {


    headerBtn1.onclick = function () {
        headerBtn0.className = ' ' + 'boy btnNoSelected floatL';
        headerBtn1.className = ' ' + 'boy btnSelectedGirl floatL';

        for (let i = 0; i < con_title_border.length; i++) {
            con_title_border[i].style.borderLeft = '0.3rem solid #FF99CC'
        }

        for (let i = 0; i < con_title_span.length; i++) {
            con_title_span[i].style.color = '#FF99CC';
        }
        let tabEffect1 = 'floatL ranking_btn_nav_L ranking_btn_nav_title selectedRanking_btn_navN';
        let tabEffect2 = 'floatL ranking_btn_nav_L ranking_btn_nav_title';
        tabEffect(ranking_btn_nav_title, tabEffect1, tabEffect2);
    }
}

tabEffect(ranking_btn_nav_title, tabEffect1, tabEffect2);
$(window).load(function () {
    $('#full_feature').swipeslider();
});
