function fnShowOrderdlist() {
    location.hash = "Ordered-list";
}
function fnGetOrderdlist(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Orderdlist/views/list.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowOrderdlist();  };



    oXhr.send();
}
