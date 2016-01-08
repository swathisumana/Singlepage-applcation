function fnShowcolumns() {
    location.hash = "Columns with text";
}
function fnGetcolumns(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/columns/Views/column.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowcolumns();  };



    oXhr.send();
}
