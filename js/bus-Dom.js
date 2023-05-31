const numberOfPoints = document.querySelector(".numPoints");
const userLocation = document.querySelector(".location");
const userTimes = document.querySelector(".timeType");
const calculateBtn = document.querySelector(".btn");


const singleTrip = document.querySelector(".tripNum");
const priceSingle = document.querySelector(".priceTrip");

const myUser = busTravel();

calculateBtn.addEventListener("click", function () { 
    var checkedLocation = document.querySelector(
      "input[name='location']:checked"
    );
    let selectedLocation = checkedLocation.value
    
    var checkedTime = document.querySelector("input[name='timetype']:checked");
    let selectedTime = checkedTime.value;
    
    myUser.calculate(selectedLocation, selectedTime);
    if (selectedTime === "Peak") {
        
        singleTrip.innerHTML = myUser.getPeakTrips();
        priceSingle.innerHTML = myUser.getPeakPrice();
    }
    else if (selectedTime === "offPeak") {
        singleTrip.innerHTML = myUser.getOffPeakTrips;
        priceSingle.innerHTML = myUser.getOffPeakTrips;
        
    }
        

});