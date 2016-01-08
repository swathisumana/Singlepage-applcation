function fnShowThreeboxes() {
    location.hash = "Maintain-HW";
}
function fnGetThreeboxes(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Threeboxes/views/box.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowThreeboxes();  };



    oXhr.send();
}
