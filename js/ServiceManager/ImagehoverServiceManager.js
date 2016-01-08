function fnShowImagehover() {
    location.hash = "Image-Mouseover";
}
function fnGetImagehover(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Imagehover/views/hover1.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowImagehover();  };



    oXhr.send();
}
