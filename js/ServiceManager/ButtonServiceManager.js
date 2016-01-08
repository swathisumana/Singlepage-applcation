function fnShowButton() {
    location.hash = "Button-shadow";
}
function fnGetButton(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Button/views/button.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowButton();  };



    oXhr.send();
}
