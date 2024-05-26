function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{
        document.getElementById("location").innerHtml="location not supported";
    }

    function showPosition(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.getElementById("location").innerHTML = `Latitude : ${latitude} <br> Longitude : ${longitude}`;
    }

    function showError(error){
        let msg = "";
        switch(error.code){
            case error.PERMISSION_DENIED:
                msg="user denied for location access";
                break;
            case error.POSITION_UNAVAILABLE:
                msg="location is not available";
                break;
            }
            document.getElementById("location").innerHTML = msg;
    }
}