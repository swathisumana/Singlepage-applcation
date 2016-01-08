function fnShowFirstpara() {
    location.hash = "Format-para";
}
function fnGetFirstpara(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Firstpara/views/first.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowFirstpara();  };



    oXhr.send();
}
