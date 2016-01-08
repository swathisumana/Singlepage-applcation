function fnShowFormatfirstlast() {
    location.hash = "Formatfirst-para";
}
function fnGetFormatfirstlast(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Formatfirstlast/views/Firstlast.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowFormatfirstlast();  };



    oXhr.send();
}
