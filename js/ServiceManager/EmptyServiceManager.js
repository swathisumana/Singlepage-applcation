function fnShowEmpty() {
    location.hash = "Non Empty Element";
}
function fnGetEmpty(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Empty/views/format.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowEmpty();  };



    oXhr.send();
}
