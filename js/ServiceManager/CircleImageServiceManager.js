function fnShowCircleImage() {
    location.hash = "Circle-Image";
}
function fnGetCircleImage(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/CircleImage/Views/image.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnShowCircleImage();  };



    oXhr.send();
}
