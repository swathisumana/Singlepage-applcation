function fnShowBorderimage() {
    location.hash = "Border-Image";
}
function fnGetBorderimage(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Borderimage/views/border.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowBorderimage();  };



    oXhr.send();
}
