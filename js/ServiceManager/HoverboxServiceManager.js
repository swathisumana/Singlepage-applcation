function fnShowHoverbox() {
    location.hash = "Hover-box";
}
function fnGetHoverbox(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Hoverbox/views/pop.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowHoverbox();  };



    oXhr.send();
}
