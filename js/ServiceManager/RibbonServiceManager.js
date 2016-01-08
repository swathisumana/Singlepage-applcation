function fnShowRibbon() {
    location.hash = "Ribbon-text";
}
function fnGetRibbon(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Ribbon/views/r1.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowRibbon();  };



    oXhr.send();
}
