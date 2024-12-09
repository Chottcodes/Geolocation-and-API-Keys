//this is a built in API that will allow the user to get there current location upon accepting the prompt


//navigator returns the geolocation object
//getCurrentPosistion() returns the current position of the user

navigator.geolocation.getCurrentPosition(success);
//Think of this as a if/else statement. if the user accepts it is successful in not its a error

//Example of a geolacation object
import { APIKEY } from "./environment";
{
    coords: {
        latitude:37.3333;
        longitude: -122.4194;
    }
}
function success(position){
    console.log(position);
    console.log("Our latitude if:" +position.coords.latitude);
    console.log("Our longitude is:"+position.coords.longitude);
}
success();
function errorFunc(error){
    console.log(error.message);
}
function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}
apiCall();