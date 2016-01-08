function fnShowBlurtxt() {
    location.hash = "Blurred-Text";
}
function fnGetBlurtxt(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Blurtxt/views/Blurred.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowBlurtxt();  };



    oXhr.send();
}
