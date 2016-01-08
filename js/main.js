window.onhashchange = fnHasChange;

function fnHasChange(oEv) {
    var sNewToken = location.hash

    switch (sNewToken) {
        case '#Menu':
            fnGetmenu();
            break;
        case '#Blurred-Text':
            fnGetBlurtxt();
            break;
        case '#Border-Image':
            fnGetBorderimage();
            break;
        case '#Button-shadow':
            fnGetButton();
            break;
        case '#Circle-Image':
            fnGetCircleImage();
            break;
        case '#Columns with text':
            fnGetcolumns();
            break;
        case '#Non Empty Element':
            fnGetEmpty();
            break;
        case '#Format-para':
            fnGetFirstpara();
            break;
        case '#Formatfirst-para':
            fnGetFormatfirstlast();
            break;
        case '#Hover-box':
            fnGetHoverbox();
            break;
        case '#Image-Mouseover':
            fnGetImagehover();
            break;
        case '#Ordered-list':
            fnGetOrderdlist();
            break;
        case '#Ribbon-text':
            fnGetRibbon();
            break;
        case '#Maintain-HW':
            fnGetThreeboxes();
            break;
        case '#Human-face':
            fnGetHumanface();
            break;
        default:

            break;
    }

}


function fnDoload() {
    alert('page loaded');
    fnShowMenu();
    fnHasChange();
}

function fnShowMenu() {
    location.hash = "Menu";
}
