function fnShowHumanface() {
    location.hash = "Human-face";
}
function fnGetHumanface(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Humanface/views/human.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowHumanface();  };



    oXhr.send();
}
